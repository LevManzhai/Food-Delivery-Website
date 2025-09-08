import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FoodDetail from '../views/FoodDetail.vue'
import Cart from '../views/Cart.vue'
import Checkout from '../views/Checkout.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/food/:id',
    name: 'FoodDetail',
    component: FoodDetail,
    props: true
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/checkout',
    name: 'Checkout',
    component: Checkout
  }
]

const router = createRouter({
  history: createWebHashHistory(), 
  routes
})

// Global handler for scrolling to top on each transition
router.beforeEach((to, from, next) => {
  // Force scroll to top of page
  if (typeof window !== 'undefined') {
    // Multiple scroll methods for maximum compatibility
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
    document.body.scrollLeft = 0
    document.documentElement.scrollLeft = 0
  }
  next()
})

// Additional handler after transition
router.afterEach((to, from) => {
  // If there's an anchor in URL, scroll to it
  if (to.hash) {
    setTimeout(() => {
      const element = document.querySelector(to.hash)
      if (element) {
        const headerOffset = 72 // fixed header height
        const elementPosition = element.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }
    }, 100)
  } else {
    // If no anchor, scroll to top
    setTimeout(() => {
      if (typeof window !== 'undefined') {
        window.scrollTo(0, 0)
        document.documentElement.scrollTop = 0
        document.body.scrollTop = 0
      }
    }, 50)
  }
})

export default router
