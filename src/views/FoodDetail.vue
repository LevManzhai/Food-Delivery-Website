<template>
  <div class="food-detail product-page container">
    

    
    <div class="back-row">
      <router-link to="/" class="back-link">← Go back</router-link>
    </div>

    <section class="product-hero">
      <div class="hero-left">
        <div class="hero-image-wrap">
          <img :src="food?.img || food?.image || '/img/food1-hot.png'" :alt="food?.name || 'Food item'" class="hero-image" />
        </div>
      </div>

      <div class="hero-right">
        <h1 class="product-title">{{ food?.name || 'Unknown Food' }}</h1>
        <p class="product-desc">{{ food?.description || food?.desc || 'No description available' }}</p>

        <div class="meta-row">
          <div class="meta-item"><span class="muted">Weight:</span> {{ food?.weight || 'N/A' }} g</div>
        </div>

        <div class="buy-row">
          <button class="add-btn" @click="addToCart(food)" :disabled="!food">Add to Cart</button>
          <div class="price">£{{ food?.price || 0 }}</div>
        </div>

        <div class="nutri">
          <div class="nutri-item"><strong>Protein</strong><span>17.23</span></div>
          <div class="nutri-item"><strong>Fat</strong><span>7.63</span></div>
          <div class="nutri-item"><strong>Carbs</strong><span>22.35</span></div>
          <div class="nutri-item"><strong>Cal</strong><span>234</span></div>
        </div>
      </div>
    </section>

    <!-- Frequently bought together -->
    <section class="also-section">
      <h2 class="section-heading">Frequently bought together</h2>
      <div class="products-container">
        <div class="cards-row">
          <div 
            v-for="food in related.slice(0, 4)" 
            :key="food?.id || Math.random()"
            class="product-card"
            v-if="food && food.img && food.name"
          >
            <router-link :to="`/food/${food.id}`" style="text-decoration:none;color:inherit;">
              <img :src="food.img" :alt="food.name || 'Food item'" />
              <div class="card-content">
                <div class="card-text">
                  <h3>{{ food.name || 'Unknown' }}</h3>
                  <p>{{ food.description || food.desc || 'No description' }}</p>
                </div>
                <div class="card-weight">weight: {{ food.weight || 'N/A' }}</div>
              </div>

              <!-- Divider line between content and action panel -->
              <div class="card-divider" aria-hidden="true"></div>

              <div class="bottom-buttons">
                <h3>£{{ food.price || 0 }}</h3>
                <button class="add-btn" @click.prevent="addToCart(food)" :disabled="!food">Add to Cart</button>
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>

  <!-- Updated map section with contact card overlay -->
  <div class="map-section">
    <div class="map" :style="{ backgroundImage: `url(${mapUrl})` }">
      <!-- Contact card overlay on map -->
      <div class="contact-card">
        <h3 class="contact-title">CONTACTS</h3>

        <div class="contact-row">
          <div class="contact-icon">📍</div>
          <div class="contact-text">
            <strong>Our address:</strong>
            <div>21 Wellington St, London WC2E 7DN</div>
          </div>
        </div>

        <div class="contact-row">
          <div class="contact-icon">✉️</div>
          <div class="contact-text">
            <strong>Our email:</strong>
            <div><a href="mailto:auto.wash@gmail.com">auto.wash@gmail.com</a></div>
          </div>
        </div>

        <div class="contact-actions">
          <button class="reserve-btn">BOOK A TABLE</button>
          <div class="phone-block">
            <div class="phone-number">+44 (78) 93103042</div>
            <div class="phone-note">Call or leave a request</div>
          </div>
        </div>

        <div class="contact-socials">
          <span>Follow us on social media:</span>
          <div class="socials">
            <a href="#" aria-label="fb">FB</a>
            <a href="#" aria-label="ig">IG</a>
            <a href="#" aria-label="vk">VK</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import foods from '../data/foods'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
/* Import page styles (scoped to .food-detail) */
import './fooddetail.css'

const route = useRoute()
const router = useRouter()
const food = computed(() => foods.find(f => String(f.id) === String(route.params.id)) || null)

// Sort by categories like on main page
const coldStarters = computed(() => foods.filter(
  food => food.category && (
    food.category.toLowerCase() === 'cold' ||
    food.category.toLowerCase() === 'cold starters'
  )
))

const hotStarters = computed(() => foods.filter(
  food => food.category && food.category.toLowerCase() === 'hot starters'
))

const meatDishes = computed(() => foods.filter(
  food => food.category && food.category.toLowerCase() === 'meat dishes'
))

// related: same category or first 6
const related = computed(() => {
  if (!food.value) return []
  
  // Filter only valid elements with img, id and name
  const validFoods = foods.filter(f => f && f.img && f.id && f.name)
  
  // Get current product category
  const currentCategory = food.value.category
  
  // Filter products of the same category
  let filtered = validFoods.filter(f => {
    if (f.id === food.value.id) return false // Exclude current product
    
    // Check different category variants
    if (currentCategory && f.category) {
      const currentCat = String(currentCategory).toLowerCase()
      const itemCat = String(f.category).toLowerCase()
      
      // Check exact match or inclusion
      return currentCat === itemCat || 
             currentCat.includes(itemCat) || 
             itemCat.includes(currentCat)
    }
    
    return false
  })
  
  // If no products of the same category, take any
  if (filtered.length === 0) {
    filtered = validFoods.filter(f => f.id !== food.value.id).slice(0, 8)
  }
  
  return filtered.slice(0, 8)
})

// map
const mapUrl = '/img/map.png'

import cartStore from '../store/cart.js'

function addToCart(item) {
  if (!item || !item.id) {
    console.warn('Cannot add invalid item to cart:', item);
    return;
  }
  
  cartStore.addItem(item);
  // Show notification
  showNotification(item.name || 'Item');
}

function showNotification(itemName) {
  // Create notification with CSS class
  const notification = document.createElement('div');
  notification.textContent = `Added to cart: ${itemName}`;
  notification.className = 'notification';
  
  document.body.appendChild(notification);
  
  // Remove notification after 3 seconds
  setTimeout(() => {
    notification.classList.add('slide-out');
    setTimeout(() => {
      if (document.body.contains(notification)) {
        document.body.removeChild(notification);
      }
    }, 300);
  }, 3000);
}

// Scroll to top of page on load
onMounted(() => {
  window.scrollTo(0, 0)
})


</script>

<style scoped>
/* Styles are inherited from fooddetail.css */
</style>