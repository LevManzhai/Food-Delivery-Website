<template>
  <div id="app">
    <header class="site-header">
      <div class="container header-inner">
            <router-link to="/" class="logo">FOODGB</router-link>
        <div class="search-input">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="Enter delivery address">
        </div>
        <div class="phone">Contacts: +44 (78) 93103042</div>
        <router-link to="/cart" class="cart">
          Cart 🛒
          <span v-if="cartItemCount > 0">{{ cartItemCount }}</span>
        </router-link>
        
        <!-- Mobile cart and burger menu -->
        <div class="mobile-header-right">
          <router-link to="/cart" class="mobile-cart" v-if="cartItemCount > 0">
            🛒
            <span class="cart-count">{{ cartItemCount }}</span>
          </router-link>
          <div class="burger-menu" :class="{ active: isMobileMenuOpen }" @click="toggleMobileMenu">
            <div class="burger-line"></div>
            <div class="burger-line"></div>
            <div class="burger-line"></div>
          </div>
        </div>
      </div>
      
      <!-- Mobile menu -->
      <div class="mobile-menu-overlay" :class="{ active: isMobileMenuOpen }" @click="closeMobileMenu"></div>
      <div class="mobile-menu" :class="{ active: isMobileMenuOpen }">
        <div class="mobile-menu-content">
          <div class="mobile-search">
            <input type="text" placeholder="Enter delivery address" />
          </div>
          
          <div class="mobile-phone">
            <div class="mobile-phone-icon">📞</div>
            <div class="mobile-phone-content">
              <span class="mobile-phone-label">Contacts:</span>
              <span class="mobile-phone-number">+44 (78) 93103042</span>
            </div>
          </div>
          
          <router-link to="/" class="mobile-menu-item" @click="closeMobileMenu">Home</router-link>
          <router-link to="/cart" class="mobile-menu-item" @click="closeMobileMenu">
            Cart 🛒
            <span v-if="cartItemCount > 0">({{ cartItemCount }})</span>
          </router-link>
        </div>
      </div>
    </header>



    <router-view :key="$route.fullPath" />

    <!-- Bottom footer -->
    <footer class="site-footer">
      <div class="footer-inner container">
                 <button type="button" class="scroll-top" aria-label="To top" title="To top" @click="scrollToTopSmooth">▲</button>

        <div class="footer-left">
          <div class="footer-logo">LOGOS</div>
                     <div class="footer-copy">
             © LLC «CAFE»<br>
             All rights reserved, 2010–2020
             Terms of Service<br>
             Sitemap
             Privacy Policy
           </div>
        </div>

                 <nav class="footer-nav" aria-label="Footer navigation">
           <a href="#">About Restaurant</a>
           <a href="#">Delivery Terms</a>
           <a href="#">Return Policy</a>
           <a href="#">Promotions</a>
         </nav>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import cartStore from './store/cart.js'
import './App.css'

const route = useRoute()
const cartItemCount = ref(0)
const isMobileMenuOpen = ref(false)
let unsubscribe = null

// Show banner only if not on FoodDetail page (reactive)
const showBanner = computed(() => route.name !== 'FoodDetail')

// Update cart items count
const updateCartCount = () => {
  cartItemCount.value = cartStore.getItemCount()
}

// Functions for burger menu management
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
  // Block page scroll when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = ''
  }
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  document.body.style.overflow = ''
}

onMounted(() => {
  updateCartCount()
  unsubscribe = cartStore.subscribe(updateCartCount)
})

// Watch route changes and scroll to top
watch(() => route.path, () => {
  // Multiple scroll attempts with different delays
  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0)
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      document.body.scrollLeft = 0
      document.documentElement.scrollLeft = 0
    }
  }
  
  // Immediate scroll
  scrollToTop()
  
  // Scroll with delays
  setTimeout(scrollToTop, 50)
  setTimeout(scrollToTop, 100)
  setTimeout(scrollToTop, 200)
  setTimeout(scrollToTop, 500)
})

onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe()
  }
  // Restore scroll on component unmount
  document.body.style.overflow = ''
})

// Smooth scroll to top function for footer button
function scrollToTopSmooth() {
  const startY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0
  const target = 0
  if (startY <= target) return

  const duration = 600
  const startTime = performance.now()
  const ease = t => 1 - Math.pow(1 - t, 3)

  function step(now) {
    const elapsed = now - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = ease(progress)
    const current = Math.round(startY + (target - startY) * eased)

    try {
      document.documentElement.scrollTop = current
      document.body.scrollTop = current
      window.scrollTo(0, current)
    } catch (e) {}

    if (progress < 1) {
      requestAnimationFrame(step)
    } else {
      try {
        document.documentElement.scrollTop = target
        document.body.scrollTop = target
        window.scrollTo(0, target)
      } catch (e) {}
    }
  }

  requestAnimationFrame(step)
}
</script>

<style>
/* Styles are inherited from App.css and style.css */
</style>
