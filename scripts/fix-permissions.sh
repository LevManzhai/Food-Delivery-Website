#!/usr/bin/env bash
# Скрипт безопасно проверяет и исправляет типичные проблемы с правами,
# которые приводят к "node_modules/.bin/vue-cli-service: Permission denied".
# Использование: в корне проекта: bash scripts/fix-permissions.sh
set -e

echo "1) Текущая директория: $(pwd)"
echo "2) Проверка node и npm версий..."
node -v || true
npm -v || true

TARGET_BIN="node_modules/.bin/vue-cli-service"

echo
echo "=== Проверка прав на $TARGET_BIN ==="
if [ -e "$TARGET_BIN" ]; then
  ls -l "$TARGET_BIN"
else
  echo "Файл $TARGET_BIN не найден (возможно, зависимости ещё не установлены)."
fi

echo
read -p "Хотите попытаться исправить права и переустановить зависимости? (y/N) " CONFIRM
CONFIRM=${CONFIRM:-N}
if [[ "$CONFIRM" != "y" && "$CONFIRM" != "Y" ]]; then
  echo "Отмена. Выполните команды вручную по инструкции."
  exit 0
fi

echo
echo "=== Исправляем владельца проекта на текущего пользователя ==="
# Исправляем владельца каталога проекта (требует sudo, даём пользователю возможность ввести пароль)
sudo chown -R "$(whoami)" "$(pwd)"
echo "Владелец проекта изменён на $(whoami)."

echo
echo "=== Исправляем права в кэше npm (~/.npm) ==="
if [ -d "$HOME/.npm" ]; then
  sudo chown -R "$(whoami)" "$HOME/.npm" || true
  echo "Права кэша npm исправлены."
else
  echo "Кэш npm (~/.npm) не найден — пропускаем."
fi

echo
echo "=== Делаем vue-cli-service исполняемым (если существует) ==="
if [ -e "$TARGET_BIN" ]; then
  chmod +x "$TARGET_BIN" || true
  ls -l "$TARGET_BIN"
  echo "chmod выполнен."
else
  echo "$TARGET_BIN отсутствует — далее переустановим зависимости."
fi

echo
echo "=== Удаляем node_modules и lock-файл и переустанавливаем зависимости ==="
rm -rf node_modules package-lock.json
npm install

echo
echo "=== Готово ==="
echo "Попробуйте запустить dev-сервер:"
echo "  npm run dev"
echo "или (альтернатива через npx):"
echo "  npx vue-cli-service serve --port 3000 --host 0.0.0.0"

exit 0
