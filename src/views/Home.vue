<template>
  <div class="container">
    <div class="nav-menu-wrapper">
    <div class="nav-menu">
      <a
        v-for="(item, idx) in navItems"
        :key="item.href"
        :href="item.href"
        :class="{ active: activeNavIndex === idx }"
        @click.prevent="setActiveNav(idx, item.href)"
      >
        <span class="nav-link-text">{{ item.text }}</span>
        <span class="nav-underline"></span>
      </a>
    </div>
    </div>
    <h2 class="section-title">COLD STARTERS</h2>
  </div>

    <div class="products-container">
      <swiper
        :slides-per-view="5"
        :space-between="15"
        :loop="true"
        :breakpoints="{
          1200: { slidesPerView: 5, spaceBetween: 24 },
          900: { slidesPerView: 4, spaceBetween: 16 },
          600: { slidesPerView: 2, spaceBetween: 8 }
        }"
        pagination
        style="padding-bottom: 32px;"
      >
        <swiper-slide
          v-for="food in coldStarters"
          :key="food.id"
          style="display:flex;justify-content:center;"
        >
          <div
            class="product-card"

          >
            <router-link :to="`/food/${food.id}`" style="text-decoration:none;color:inherit;">
              <img :src="food.img" :alt="food.name" />
              <div class="card-content">
                <div class="card-text">
                  <h3>{{ food.name }}</h3>
                  <p>{{ food.description || food.desc }}</p>
                </div>
                <div class="card-weight">weight: {{ food.weight }}</div>
              </div>
              <div class="bottom-buttons">
                <h3>£{{ food.price }}</h3>
                <button @click.prevent="addToCart(food)">Add to Cart</button>
              </div>
            </router-link>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <div class="products-separator"></div>


  <div class="container">

    <h2 class="section-title">HOT STARTERS</h2>
  </div>

  <div class="products-container">
    <swiper
        :slides-per-view="5"
        :space-between="15"
        :loop="true"
        :breakpoints="{
          1200: { slidesPerView: 5, spaceBetween: 24 },
          900: { slidesPerView: 4, spaceBetween: 16 },
          600: { slidesPerView: 2, spaceBetween: 8 }
        }"
        pagination
        style="padding-bottom: 32px;"
    >
      <swiper-slide
          v-for="food in hotStarters"
          :key="food.id"
          style="display:flex;justify-content:center;"
      >
        <div
            class="product-card"

        >
          <router-link :to="`/food/${food.id}`" style="text-decoration:none;color:inherit;">
            <img :src="food.img" :alt="food.name" />
            <div class="card-content">
              <div class="card-text">
                <h3>{{ food.name }}</h3>
                <p>{{ food.description || food.desc }}</p>
              </div>
              <div class="card-weight">weight: {{ food.weight }}</div>
            </div>
            <div class="bottom-buttons">
              <h3>£{{ food.price }}</h3>
              <button @click.prevent="addToCart(food)">Add to Cart</button>
            </div>
          </router-link>
        </div>
      </swiper-slide>
    </swiper>
  </div>


  <div class="container">

    <h2 class="section-title">MEAT DISHES</h2>
  </div>

  <div class="products-container">
    <swiper
        :slides-per-view="5"
        :space-between="15"
        :loop="true"
        :breakpoints="{
          1200: { slidesPerView: 5, spaceBetween: 24 },
          900: { slidesPerView: 4, spaceBetween: 16 },
          600: { slidesPerView: 2, spaceBetween: 8 }
        }"
        pagination
        style="padding-bottom: 32px;"
    >
      <swiper-slide
          v-for="food in meatDishes"
          :key="food.id"
          style="display:flex;justify-content:center;"
      >
        <div
            class="product-card"

        >
          <router-link :to="`/food/${food.id}`" style="text-decoration:none;color:inherit;">
            <img :src="food.img" :alt="food.name" />
            <div class="card-content">
              <div class="card-text">
                <h3>{{ food.name }}</h3>
                <p>{{ food.description || food.desc }}</p>
              </div>
              <div class="card-weight">weight: {{ food.weight }}</div>
            </div>
            <div class="bottom-buttons">
              <h3>£{{ food.price }}</h3>
              <button @click.prevent="addToCart(food)">Add to Cart</button>
            </div>
          </router-link>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import foods from '../data/foods'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Home.css'

// Сортируем по категориям
const coldStarters = foods.filter(
  food => food.category && (
    food.category.toLowerCase() === 'cold' ||
    food.category.toLowerCase() === 'cold starters'
  )
)
const hotStarters = foods.filter(
  food => food.category && food.category.toLowerCase() === 'hot starters'
)
const meatDishes = foods.filter(
  food => food.category && food.category.toLowerCase() === 'meat dishes'
)

const navItems = [
  { href: '#cold-starters', text: 'Cold Starters' },
  { href: '#hot-starters', text: 'Hot Starters' },
  { href: '#meat-dishes', text: 'Meat Dishes' },
  { href: '#soups', text: 'Soups' },
  { href: '#fish-dishes', text: 'Fish Dishes' },
  { href: '#chicken-dishes', text: 'Chicken Dishes' },
  { href: '#hot-dishes', text: 'Hot Dishes' }
]
const activeNavIndex = ref(0)

function setActiveNav(idx, href) {
  activeNavIndex.value = idx
  // Optionally scroll to section:
  const anchor = document.querySelector(href)
  if (anchor) anchor.scrollIntoView({ behavior: 'smooth' })
}

function addToCart(food) {
  alert(`Added ${food.name} to cart!`)
}
</script>