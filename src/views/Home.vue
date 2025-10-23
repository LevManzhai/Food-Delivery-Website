<template>
  <div class="home">
    <!-- Banner -->
    <div class="banner">
      <img :src="bannerImage" alt="Banner" class="fullwidth-img">
    </div>
    
    <!-- Navigation -->
    <div class="nav-menu-wrapper">
      <nav class="nav-menu">
        <button @click="scrollToSection('cold-starters')" class="nav-link">COLD STARTERS</button>
        <button @click="scrollToSection('hot-starters')" class="nav-link">HOT STARTERS</button>
        <button @click="scrollToSection('meat-dishes')" class="nav-link">MEAT DISHES</button>
      </nav>
    </div>

    <!-- COLD STARTERS SECTION -->
    <section class="products">
      <div class="container">
       
        <h2 id="cold-starters" class="section-title">COLD STARTERS</h2>
      </div>

     
      <div class="products-container">
        <swiper
          key="cold-starters"
          :slides-per-view="1"
          :space-between="15"
          :loop="true"
          :breakpoints="{
            310: { slidesPerView: 1, spaceBetween: 10 },
            520: { slidesPerView: 2, spaceBetween: 12 },
            750: { slidesPerView: 3, spaceBetween: 15 },
            900: { slidesPerView: 4, spaceBetween: 20 },
            1600: { slidesPerView: 5, spaceBetween: 10 }
          }"
          pagination
          style="padding-bottom: 32px;"
          @swiper="(swiper) => swiperRefs[0] = swiper"
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
                  <button class="add-btn" @click.prevent="addToCart(food)">Add to Cart</button>
                </div>
              </router-link>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      
      
      <div class="products-separator"></div>
    </section>

    <!-- HOT STARTERS SECTION -->
    <section class="products">
      <div class="container">
        
        <h2 id="hot-starters" class="section-title">HOT STARTERS</h2>
      </div>

    
      <div class="products-container">
        <swiper
          key="hot-starters"
          :slides-per-view="1"
          :space-between="15"
          :loop="true"
          :breakpoints="{
            310: { slidesPerView: 1, spaceBetween: 10 },
            520: { slidesPerView: 2, spaceBetween: 12 },
            750: { slidesPerView: 3, spaceBetween: 15 },
            900: { slidesPerView: 4, spaceBetween: 20 },
            1600: { slidesPerView: 5, spaceBetween: 10 }
          }"
          pagination
          style="padding-bottom: 32px;"
          @swiper="(swiper) => swiperRefs[1] = swiper"
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
                  <button class="add-btn" @click.prevent="addToCart(food)">Add to Cart</button>
                </div>
              </router-link>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      
      
      <div class="products-separator"></div>
    </section>

    <!-- MEAT DISHES SECTION -->
    <section class="products">
      <div class="container">
       
        <h2 id="meat-dishes" class="section-title">MEAT DISHES</h2>
      </div>

     
      <div class="products-container">
        <swiper
          key="meat-dishes"
          :slides-per-view="1"
          :space-between="15"
          :loop="true"
          :breakpoints="{
            310: { slidesPerView: 1, spaceBetween: 10 },
            520: { slidesPerView: 2, spaceBetween: 12 },
            750: { slidesPerView: 3, spaceBetween: 15 },
            900: { slidesPerView: 4, spaceBetween: 20 },
            1600: { slidesPerView: 5, spaceBetween: 10 }
          }"
          pagination
          style="padding-bottom: 32px;"
          @swiper="(swiper) => swiperRefs[2] = swiper"
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
                  <button class="add-btn" @click.prevent="addToCart(food)">Add to Cart</button>
                </div>
              </router-link>
            </div>
          </swiper-slide>
        </swiper>
      </div>
      
      
      <div class="products-separator"></div>
    </section>

    <!-- "OUR CAFE" section (updated, text on left, grid of squares on right) -->
    <div class="cafe-section">
      <div class="cafe-block-left">
        <h2 class="cafe-title">OUR CAFE</h2>
        <p class="cafe-description">
          We are located in the heart of the city, where every corner tells a story. 
          Our cafe is not just a place to eat, but a space where flavors meet culture, 
          and every dish is crafted with passion and attention to detail.
        </p>
        <p class="cafe-description">
          From the moment you step through our doors, you'll experience the perfect 
          blend of traditional recipes and modern culinary innovation.
        </p>
      </div>

      <div class="cafe-block-right">
        <div class="cafe-squares-grid">
          <div class="cafe-square">
            <span class="icon" aria-hidden="true">🧅</span>
            <span class="label">Fresh Ingredients</span>
          </div>
          <div class="cafe-square">
            <span class="icon" aria-hidden="true">👨‍🍳</span>
            <span class="label">Expert Chefs</span>
          </div>
          <div class="cafe-square">
            <span class="icon" aria-hidden="true">🌟</span>
            <span class="label">Quality Service</span>
          </div>
          <div class="cafe-square">
            <span class="icon" aria-hidden="true">❤️</span>
            <span class="label">Made with Love</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Updated map section with contact card overlay -->
    <div class="map-section">
      <div class="map" :style="{ backgroundImage: `url(${mapUrl})` }">
        <!-- Contact card overlay on map -->
        <div class="contact-card">
          <div class="contact-title">
            <h3>Contact Us</h3>
          </div>
          
          <div class="contact-row">
            <div class="contact-info">
              <div class="contact-item">
                <span class="contact-label">Address:</span>
                <span class="contact-value">123 Food Street, City Center</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">Phone:</span>
                <span class="contact-value">+44 (78) 93103042</span>
              </div>
              <div class="contact-item">
                <span class="contact-label">Email:</span>
                <span class="contact-value">info@fooddelivery.com</span>
              </div>
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
            <span class="social-label">Follow us:</span>
            <div class="social-icons">
              <span class="social-icon">📘</span>
              <span class="social-icon">📷</span>
              <span class="social-icon">🐦</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination } from 'swiper/modules'
import foods from '../data/foods.js'
import cartStore from '../store/cart.js'
import 'swiper/css'
import 'swiper/css/pagination'
import './Home.css'

// Use existing images from /img as placeholders/icons (icons in squares are now emoji)

// Import images to get hashed filenames
import bannerImage from '../../public/img/banner1.png'
const mapUrl = './img/map.png'

// Sort by categories
const coldStarters = foods.filter(
  food => food.category && (
    food.category.toLowerCase() === 'cold' ||
    food.category.toLowerCase() === 'cold starters'
  )
)

const hotStarters = foods.filter(
  food => food.category && (
    food.category.toLowerCase() === 'hot' ||
    food.category.toLowerCase() === 'hot starters'
  )
)

const meatDishes = foods.filter(
  food => food.category && (
    food.category.toLowerCase() === 'meat' ||
    food.category.toLowerCase() === 'meat dishes'
  )
)

// Add to cart function
function addToCart(food) {
  cartStore.addItem(food)
}

// Scroll to section function
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }
}

// Force Swiper to recalculate breakpoints
const swiperRefs = ref([])

onMounted(() => {
  nextTick(() => {
    // Trigger window resize to force Swiper to recalculate
    window.dispatchEvent(new Event('resize'))
  })
})

// Watch for window resize and force Swiper update
watch(() => window.innerWidth, () => {
  nextTick(() => {
    swiperRefs.value.forEach(swiper => {
      if (swiper && swiper.update) {
        swiper.update()
      }
    })
  })
})

// Add resize event listener
onMounted(() => {
  const handleResize = () => {
    nextTick(() => {
      swiperRefs.value.forEach(swiper => {
        if (swiper && swiper.update) {
          swiper.update()
        }
      })
    })
  }
  
  window.addEventListener('resize', handleResize)
  
  // Cleanup
  return () => {
    window.removeEventListener('resize', handleResize)
  }
})

// Swiper modules
const modules = [Pagination]
</script>