<template>
  <div class="food-detail" v-if="food">
    <button class="back" @click="$router.back()">← Назад</button>
    <div class="detail-card">
      <img :src="food.img" :alt="food.name" class="detail-img" />
      <div class="detail-info">
        <h1>{{ food.name }}</h1>
        <p class="food-desc">{{ food.desc }}</p>
        <p class="food-weight">Вес: {{ food.weight }}</p>
        <h2 class="food-price">£{{ food.price }}</h2>
        <button @click="addToCart" class="to-cart-btn">Добавить в корзину</button>
      </div>
    </div>
  </div>
  <div v-else>
    <h2>Блюдо не найдено!</h2>
  </div>
</template>

<script>
import foods from "@/data/foods";

export default {
  name: "FoodDetail",
  data() {
    return {
      food: null
    }
  },
  mounted() {
    const id = this.$route.params.id;
    this.food = foods.find(f => f.id === id);
  },
  methods: {
    addToCart() {
      alert(`Добавлено в корзину: ${this.food.name}`);
    }
  }
}
</script>

<style scoped>
.food-detail {
  max-width: 900px;
  margin: 40px auto;
  padding: 12px;
}
.back {
  background: none;
  border: 0;
  color: #00337a;
  font-size: 20px;
  margin-bottom: 30px;
  cursor: pointer;
}
.detail-card {
  display: flex;
  gap: 32px;
  align-items: flex-start;
  background: #fff;
  border-radius: 24px;
  box-shadow: 0 10px 28px rgba(55, 67, 59, .12);
  padding: 20px 28px;
}
.detail-img {
  width: 320px;
  border-radius: 20px;
}
.detail-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.food-desc {
  font-size: 17px;
  color: #555;
}
.food-weight {
  color: #888;
}
.food-price {
  font-size: 36px;
  color: #2d2d2c;
  font-weight: 700;
  margin: 24px 0 12px;
}
.to-cart-btn {
  padding: 8px 32px;
  font-size: 16px;
  background: #f4be4f;
  border: 0;
  border-radius: 12px;
  font-weight: 700;
  cursor: pointer;
  color: #222;
  transition: background .15s;
}
.to-cart-btn:hover {
  background: #ffda89;
}
</style>
