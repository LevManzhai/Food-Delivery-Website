<template>
  <div class="home">
    <!-- Banner -->
    <div class="banner">
      <img :src="bannerImage" alt="Banner" class="fullwidth-img">
    </div>
    
    <!-- Navigation -->
    <div class="nav-menu-wrapper">
      <nav class="nav-menu">
        <button class="nav-link active" @click="scrollToSection('cold-starters')">
          <span class="nav-link-text">COLD STARTERS</span>
          <span class="nav-underline"></span>
        </button>
        <button class="nav-link" @click="scrollToSection('hot-starters')">
          <span class="nav-link-text">HOT STARTERS</span>
          <span class="nav-underline"></span>
        </button>
        <button class="nav-link" @click="scrollToSection('meat-dishes')">
          <span class="nav-link-text">MEAT DISHES</span>
          <span class="nav-underline"></span>
        </button>
      </nav>
    </div>

    <div class="container">
    <h2 id="cold-starters" class="section-title">COLD STARTERS</h2>
  </div>

  <div class="products-container">
    <swiper
      :slides-per-view="1"
      :space-between="15"
      :loop="true"
      :breakpoints="{
        310: { slidesPerView: 1, spaceBetween: 10 },
        520: { slidesPerView: 2, spaceBetween: 12 },
        750: { slidesPerView: 3, spaceBetween: 15 },
        900: { slidesPerView: 4, spaceBetween: 20 }
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

            <!-- Divider line between content and action panel -->
            <div class="card-divider" aria-hidden="true"></div>

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

  <div class="container">
    <h2 id="hot-starters" class="section-title">HOT STARTERS</h2>
  </div>

  <div class="products-container">
    <swiper
      :slides-per-view="1"
      :space-between="15"
      :loop="true"
      :breakpoints="{
        310: { slidesPerView: 1, spaceBetween: 10 },
        520: { slidesPerView: 2, spaceBetween: 12 },
        750: { slidesPerView: 3, spaceBetween: 15 },
        900: { slidesPerView: 4, spaceBetween: 20 }
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

            <!-- Divider line between content and action panel -->
            <div class="card-divider" aria-hidden="true"></div>

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
  <div class="container">
    <h2 id="meat-dishes" class="section-title">MEAT DISHES</h2>
  </div>

  <div class="products-container">
    <swiper
      :slides-per-view="1"
      :space-between="15"
      :loop="true"
      :breakpoints="{
        310: { slidesPerView: 1, spaceBetween: 10 },
        520: { slidesPerView: 2, spaceBetween: 12 },
        750: { slidesPerView: 3, spaceBetween: 15 },
        900: { slidesPerView: 4, spaceBetween: 20 }
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

            <!-- Divider line between content and action panel -->
            <div class="card-divider" aria-hidden="true"></div>

            <div class="bottom-buttons">
              <h3>£{{ food.price }}</h3>
              <button class="add-btn" @click.prevent="addToCart(food)">Add to Cart</button>
            </div>
          </router-link>
        </div>
      </swiper-slide>
    </swiper>
  </div>

  <!-- "OUR CAFE" section (updated, text on left, grid of squares on right) -->
  <div class="cafe-section">
    <div class="cafe-block-left">
      <h1>OUR CAFE</h1>
      <p>
        We are located in one of the most picturesque places in the city — on the river bank, this is your oasis within the city,
        where you can escape from the noisy and dusty metropolis. We are truly unique, because everything is thought out to the smallest detail:
        the project is built from wild logs, a fireplace in the main hall and panoramic windows with a view of the river,
        cozy gazebos and the best viewing terrace.
      </p>
      <button class="primary-ghost add-btn">VIEW MENU</button>
    </div>

    <div class="cafe-block-right">
      <div class="cafe-squares-grid">
        <div class="cafe-square">
          <span class="icon" aria-hidden="true">🧅</span>
          <h3>Fresh Products</h3>
        </div>
        <div class="cafe-square">
          <span class="icon" aria-hidden="true">⚡️</span>
          <h3>Fast Delivery</h3>
        </div>
        <div class="cafe-square">
          <span class="icon" aria-hidden="true">👨‍🍳</span>
          <h3>Best Chefs</h3>
        </div>
        <div class="cafe-square">
          <span class="icon" aria-hidden="true">🥬</span>
          <h3>Fresh Products</h3>
        </div>
      </div>
    </div>
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
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import foods from '../data/foods'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './Home.css'

// Use existing images from /img as placeholders/icons (icons in squares are now emoji)

// Import images to get hashed filenames
import mapImage from '../../public/img/map.png'
import bannerImage from '../../public/img/banner1.png'
const mapUrl = mapImage

// Sort by categories
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

// Smooth scroll to top function for footer button
function scrollToTop() {
  try {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  } catch (e) {
    // fallback
    window.scrollTo(0, 0)
  }
}

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

function getHeaderOffset() {
  const header = document.querySelector('.site-header') || document.querySelector('header')
  return header ? header.offsetHeight : 0
}

function setActiveNav(idx, href) {
  activeNavIndex.value = idx
  // smooth scroll to section considering fixed header height
  const anchor = document.querySelector(href)
  if (anchor) {
    const offset = getHeaderOffset()
    const top = anchor.getBoundingClientRect().top + window.pageYOffset - offset - 12
    window.scrollTo({ top, behavior: 'smooth' })
  }
}





// Function for scrolling to sections from navigation
const scrollToSection = (sectionId) => {
  console.log('Scrolling to section:', sectionId) // For debugging
  
  // Small delay to ensure DOM is loaded
  setTimeout(() => {
    const element = document.getElementById(sectionId)
    
    if (!element) {
      console.error(`Element with id "${sectionId}" not found`)
      return
    }
    
    console.log('Element found:', element) // For debugging
    
    // Simple and reliable scroll method
    element.scrollIntoView({ 
      behavior: 'smooth', 
      block: 'start',
      inline: 'nearest'
    })
  }, 50)
}



// Native fallback listener removed: now using only Vue @click on button,
// to avoid double handler call.

// Scroll to top of page on load
onMounted(() => {
  window.scrollTo(0, 0)
})

import cartStore from '../store/cart.js'

// In <script setup> functions are automatically available in template

function addToCart(food) {
  cartStore.addItem(food);
  // Show notification
  showNotification(food.name);
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
</script>