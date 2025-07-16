import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FoodDetail from '../views/FoodDetail.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
