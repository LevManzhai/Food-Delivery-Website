<template>
  <div class="cart-page">



    <!-- Main Content -->
    <div class="container">
      <!-- Cart Section -->
      <section class="cart-section">
        <h1 class="section-title">CART</h1>
        <p class="cart-subtitle">({{ cartItems.length }} items in cart)</p>
        
        <!-- Cart Items -->
        <div class="cart-items" v-if="cartItems.length > 0">
          <div class="cart-item" v-for="item in cartItems" :key="String(item.id)">
            <router-link :to="`/food/${item.id}`" class="item-link">
              <img :src="item.img" :alt="item.name" class="item-image">
              <div class="item-details">
                <h3 class="item-name">{{ item.name }}</h3>
                <p class="item-description">{{ item.description || item.desc }}</p>
              </div>
            </router-link>
            <div class="item-quantity">
              <button class="quantity-btn minus" @click="decreaseQuantity(item.id)">-</button>
              <span class="quantity">{{ item.quantity }}</span>
              <button class="quantity-btn plus" @click="increaseQuantity(item.id)">+</button>
            </div>
            <div class="item-price">{{ formatPrice(item.price * item.quantity) }}</div>
            <button class="remove-btn" @click="removeFromCart(item.id)">✕</button>
          </div>
        </div>
        
        <!-- Empty Cart -->
        <div class="empty-cart" v-else>
          <p>Cart is empty</p>
          <router-link to="/" class="continue-shopping">Continue shopping</router-link>
        </div>
      </section>

      <!-- Add to Order Section -->
      <section class="add-to-order" v-if="cartItems.length > 0">
        <h2 class="section-title">ADD TO ORDER</h2>
        <div class="recommended-items">
          <div class="recommended-item" v-for="item in recommendedItems" :key="item.id">
            <router-link :to="`/food/${item.id}`" class="item-link">
              <img :src="item.img" :alt="item.name" class="item-image">
              <h3 class="item-name">{{ item.name }}</h3>
            </router-link>
            <div class="item-actions">
              <button class="add-btn" @click="addToCart(item)">
                <span>+</span>
                <span>Add</span>
              </button>
              <div class="item-price">{{ formatPrice(item.price) }}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Order Summary -->
      <section class="order-summary" v-if="cartItems.length > 0">
        <div class="summary-card">
          <div class="total">
            <span>Total: {{ formatPrice(totalPrice) }}</span>
          </div>
          <div class="delivery-info">
            <p v-if="totalPrice < 20">
              Missing for free delivery: {{ formatPrice(20 - totalPrice) }}
            </p>
            <p class="min-order">Minimum order amount {{ formatPrice(20) }}</p>
          </div>
          <button class="checkout-btn" @click="checkout" :disabled="totalPrice < 20">
            Checkout
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { foods } from '../data/foods.js'
import cartStore from '../store/cart.js'
import { ref, computed, onMounted, onUnmounted } from 'vue'
import './Cart.css'
import { useRouter } from 'vue-router'

export default {
  name: 'Cart',
  setup() {
    const router = useRouter()
    const cartItems = ref([])
    const recommendedItems = ref([])

    const totalPrice = computed(() => {
      return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
    })

    const formatPrice = (price) => {
      return `£${price}`
    }

    const loadCartItems = () => {
      const items = cartStore.getItems()
      // Create new array to ensure reactivity
      cartItems.value = [...items]
    }

    const loadRecommendedItems = () => {
      // Recommended products
      recommendedItems.value = [
        {
          id: 101,
          name: 'PINEAPPLE KVASS',
          price: 13,
          img: '/img/food1-cold.png'
        },
        {
          id: 102,
          name: 'GRISSINI',
          price: 16,
          img: '/img/food2-cold.png'
        },
        {
          id: 103,
          name: 'PEPPERONI PIZZA',
          price: 18,
          img: '/img/food1-hot.png'
        },
        {
          id: 104,
          name: 'MEAT DISH',
          price: 22,
          img: '/img/food1-meat.png'
        }
      ]
    }

    const increaseQuantity = (itemId) => {
      cartStore.increaseQuantity(itemId)
      loadCartItems()
    }

    const decreaseQuantity = (itemId) => {
      cartStore.decreaseQuantity(itemId)
      loadCartItems()
    }

    const removeFromCart = (itemId) => {
      cartStore.removeItem(itemId)
      loadCartItems()
    }

    const addToCart = (item) => {
      cartStore.addItem(item)
      loadCartItems()
    }

    const checkout = () => {
      if (totalPrice.value >= 20) {
        router.push('/checkout')
      } else {
        alert('Minimum order amount £20.00')
      }
    }





    let unsubscribe = null

    onMounted(() => {
      // Force scroll to top of page
      const scrollToTop = () => {
        if (typeof window !== 'undefined') {
          window.scrollTo(0, 0)
          document.documentElement.scrollTop = 0
          document.body.scrollTop = 0
          document.body.scrollLeft = 0
          document.documentElement.scrollLeft = 0
        }
      }
      
      // Multiple scroll attempts
      scrollToTop()
      setTimeout(scrollToTop, 10)
      setTimeout(scrollToTop, 50)
      setTimeout(scrollToTop, 100)
      
      loadCartItems()
      loadRecommendedItems()
      
      // Subscribe to cart changes
      unsubscribe = cartStore.subscribe(() => {
        loadCartItems()
      })
    })

    onUnmounted(() => {
      if (unsubscribe) {
        unsubscribe()
      }
    })

    return {
      cartItems,
      recommendedItems,
      totalPrice,
      formatPrice,
      increaseQuantity,
      decreaseQuantity,
      removeFromCart,
      addToCart,
      checkout
    }
  }
}
</script>

<style scoped>
/* Styles are inherited from Cart.css */
</style>

