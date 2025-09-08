import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '../style.css'
import './styles/mobile.css'

const app = createApp(App)

// Global Vue runtime error handler - shows error in console and on page
app.config.errorHandler = (err, vm, info) => {
  // log to console
  console.error('Vue errorHandler:', err, info)

  // create or update overlay with error message
  const id = 'vue-runtime-error-overlay'
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('div')
    el.id = id
    Object.assign(el.style, {
      position: 'fixed',
      left: '8px',
      top: '8px',
      right: '8px',
      maxHeight: '90vh',
      overflow: 'auto',
      background: '#fff5f5',
      color: '#900',
      padding: '12px',
      border: '1px solid #f5c6cb',
      zIndex: 999999,
      fontFamily: 'monospace',
      whiteSpace: 'pre-wrap',
      boxShadow: '0 4px 18px rgba(0,0,0,0.12)'
    })
    document.body.appendChild(el)
  }
  const message = err && err.message ? err.message : String(err)
  const stack = err && err.stack ? '\n\n' + err.stack : ''
  el.textContent = `Vue runtime error: ${message}\n\nInfo: ${info || ''}${stack}`
}

// Also catch Vue warnings
app.config.warnHandler = (msg, vm, trace) => {
  console.warn('Vue warn:', msg, trace)
}

// Try to safely mount app and show error if mount failed
try {
  app.use(router)
  app.mount('#app')
  console.log('Vue app mounted')
} catch (err) {
  console.error('Mount error:', err)
  const pre = document.createElement('pre')
  Object.assign(pre.style, {
    position: 'fixed',
    left: '8px',
    top: '8px',
    right: '8px',
    bottom: '8px',
    overflow: 'auto',
    background: '#fff',
    color: '#900',
    padding: '12px',
    zIndex: 999999,
    fontFamily: 'monospace',
    whiteSpace: 'pre-wrap',
    boxShadow: '0 4px 18px rgba(0,0,0,0.12)'
  })
  pre.textContent = `Mount error:\n${err && (err.stack || err.message) ? (err.stack || err.message) : String(err)}`
  document.body.appendChild(pre)
}
