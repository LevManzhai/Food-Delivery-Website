<template>
  <div class="container" v-if="food">
    <div style="display:flex; align-items:flex-start; gap:32px; margin-top:40px;">
      <img :src="food.img || food.image" :alt="food.name" style="width:340px; height:340px; object-fit:cover; border-radius:22px; background:#222;">
      <div>
        <h1 style="font-size:2rem;">{{ food.name }}</h1>
        <p style="font-size:1.1rem; color:#A9A9A9;">{{ food.description }}</p>
        <div class="card-weight" style="margin:18px 0;">Weight: {{ food.weight }}</div>
        <h2 style="color:#A9C12E;font-size:1.5rem;">£{{ food.price }}</h2>
        <button style="margin-top:25px;" @click="addToCart(food)">Add to Cart</button>
      </div>
    </div>
    <router-link to="/" style="display:inline-block;margin-top:25px;">← Back to menu</router-link>
  </div>
  <div v-else class="container">
    <h2>Товар не найден :(</h2>
    <router-link to="/">← Back to menu</router-link>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import foods from '../data/foods'
import { computed } from 'vue'

const route = useRoute()
const food = computed(() => foods.find(f => String(f.id) === String(route.params.id)))

function addToCart(food) {
  alert(`Added ${food.name} to cart!`)
}
</script>

<style scoped>
.food-detail {
  max-width: 600px;
  margin: 32px auto;
  background: #fff;
  box-shadow: 0 6px 32px rgba(0,0,0,0.15);
  border-radius: 18px;
  padding: 40px 32px 32px 32px;
  text-align: center;
}
.food-detail-image {
  width: 90%;
  max-width: 420px;
  height: 300px;
  object-fit: cover;
  border-radius: 18px;
  margin-bottom: 25px;
}
.back-link {
  display: inline-block;
  margin-top: 30px;
  color: #40a9ff;
  text-decoration: none;
  font-size: 1.1rem;
}
.back-link:hover {
  text-decoration: underline;
}
</style>