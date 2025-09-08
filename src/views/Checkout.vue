<template>
  <div class="checkout-page">
    <div class="checkout-container">
      <h1 class="checkout-title">ORDER PLACEMENT</h1>
      
      <!-- 1. Contact Information -->
      <div class="checkout-section">
        <h2 class="section-title">1. Contact Information</h2>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="formData.name" placeholder="Enter your name">
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" v-model="formData.phone" placeholder="+44 (___) ___-__-__">
          </div>
        </div>
      </div>

      <!-- 2. Delivery -->
      <div class="checkout-section delivery-section">
        <h2 class="section-title">2. Delivery</h2>
        
        <div class="delivery-methods">
          <button 
            class="delivery-btn" 
            :class="{ active: formData.deliveryMethod === 'delivery' }"
            @click="formData.deliveryMethod = 'delivery'"
          >
            Delivery
          </button>
          <button 
            class="delivery-btn" 
            :class="{ active: formData.deliveryMethod === 'pickup' }"
            @click="formData.deliveryMethod = 'pickup'"
          >
            Pickup
          </button>
          <div class="delivery-time">
            <span class="clock-icon">🕐</span>
            <span>Will deliver in 1 hour 30 minutes</span>
          </div>
        </div>

        <div v-if="formData.deliveryMethod === 'delivery'" class="address-section">
          <h3>Delivery Address</h3>
          <div class="form-row">
            <div class="form-group full-width">
              <label for="street">Street Name</label>
              <input type="text" id="street" v-model="formData.address.street" placeholder="Enter street name">
            </div>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="house">House</label>
              <input type="text" id="house" v-model="formData.address.house" placeholder="1">
            </div>
            <div class="form-group">
              <label for="apartment">Apt./Office</label>
              <input type="text" id="apartment" v-model="formData.address.apartment" placeholder="1">
            </div>
            <div class="form-group">
              <label for="entrance">Entrance</label>
              <input type="text" id="entrance" v-model="formData.address.entrance" placeholder="1">
            </div>
            <div class="form-group">
              <label for="floor">Floor</label>
              <input type="text" id="floor" v-model="formData.address.floor" placeholder="1">
            </div>
          </div>
          <div class="form-group">
            <label for="comment">Comment</label>
            <textarea id="comment" v-model="formData.comment" placeholder="Additional wishes for the order"></textarea>
          </div>
        </div>
      </div>

      <!-- 3. Payment -->
      <div class="checkout-section">
        <h2 class="section-title">3. Payment</h2>
        <div class="payment-methods">
          <button 
            class="payment-btn" 
            :class="{ active: formData.paymentMethod === 'online' }"
            @click="formData.paymentMethod = 'online'"
          >
            Online Payment
          </button>
          <button 
            class="payment-btn" 
            :class="{ active: formData.paymentMethod === 'card' }"
            @click="formData.paymentMethod = 'card'"
          >
            Card to Courier
          </button>
          <button 
            class="payment-btn" 
            :class="{ active: formData.paymentMethod === 'cash' }"
            @click="formData.paymentMethod = 'cash'"
          >
            Cash
          </button>
        </div>
        <div v-if="formData.paymentMethod === 'cash'" class="form-group">
          <label for="change">Change from</label>
          <input type="text" id="change" v-model="formData.changeFrom" placeholder="Enter amount">
        </div>
      </div>

      <!-- 4. When to deliver -->
      <div class="checkout-section">
        <h2 class="section-title">4. When to deliver</h2>
        <div class="delivery-time-options">
          <button 
            class="time-btn" 
            :class="{ active: formData.deliveryTime === 'asap' }"
            @click="formData.deliveryTime = 'asap'"
          >
            As soon as possible
          </button>
          <button 
            class="time-btn" 
            :class="{ active: formData.deliveryTime === 'scheduled' }"
            @click="formData.deliveryTime = 'scheduled'"
          >
            By time
          </button>
        </div>
        <div v-if="formData.deliveryTime === 'scheduled'" class="form-group">
          <label for="scheduled-time">Specify time</label>
          <input 
            type="datetime-local" 
            id="scheduled-time" 
            v-model="formData.scheduledTime"
            @input="validateDateTime"
            min="2024-01-01T00:00"
            max="2030-12-31T23:59"
          >
        </div>
        
        <div class="persons-counter">
          <label>Number of persons</label>
          <div class="counter">
            <button @click="decreasePersons" class="counter-btn">-</button>
            <span class="counter-value">{{ formData.persons }}</span>
            <button @click="increasePersons" class="counter-btn">+</button>
          </div>
        </div>

        <div class="call-options">
          <label>Do you want us to call?</label>
          <div class="radio-group">
            <label class="radio-label">
              <input type="radio" v-model="formData.callPreference" value="no-call">
              <span>Do not call back</span>
            </label>
            <label class="radio-label">
              <input type="radio" v-model="formData.callPreference" value="call-required">
              <span>Operator call required</span>
            </label>
          </div>
        </div>
      </div>

      <!-- Order Summary -->
      <div class="order-summary">
        <div class="summary-row">
          <span>Order amount:</span>
          <span class="total-price">{{ formatPrice(totalPrice) }}</span>
        </div>
        <div class="summary-row">
          <span>Delivery:</span>
          <span>{{ deliveryPrice === 0 ? 'Free' : formatPrice(deliveryPrice) }}</span>
        </div>
        <div class="summary-row total">
          <span>Total:</span>
          <span class="total-price">{{ formatPrice(totalPrice + deliveryPrice) }}</span>
        </div>
      </div>

      <!-- Agreement and button -->
      <div class="checkout-footer">
        <label class="checkbox-label">
          <input type="checkbox" v-model="formData.agreement">
          <span>I agree to the processing of my personal data in accordance with the <a href="#" class="terms-link">Terms</a></span>
        </label>
        <button 
          class="place-order-btn" 
          @click="placeOrder"
          :disabled="!canPlaceOrder"
        >
          Place Order
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import cartStore from '../store/cart.js'
import './Checkout.css'

const router = useRouter()

const formData = ref({
  name: '',
  phone: '',
  deliveryMethod: 'delivery',
  address: {
    street: '',
    house: '',
    apartment: '',
    entrance: '',
    floor: ''
  },
  comment: '',
  paymentMethod: 'cash',
  changeFrom: '',
  deliveryTime: 'scheduled',
  scheduledTime: '',
  persons: 1,
  callPreference: 'no-call',
  agreement: true
})

const cartItems = ref([])

const totalPrice = computed(() => {
  return cartItems.value.reduce((total, item) => total + (item.price * item.quantity), 0)
})

const deliveryPrice = computed(() => {
  return totalPrice.value >= 20 ? 0 : 5
})

const canPlaceOrder = computed(() => {
  return formData.value.name && 
         formData.value.phone && 
         formData.value.agreement &&
         (formData.value.deliveryMethod === 'pickup' || formData.value.address.street)
})

const formatPrice = (price) => {
  return `£${price}`
}

const increasePersons = () => {
  formData.value.persons++
}

const decreasePersons = () => {
  if (formData.value.persons > 1) {
    formData.value.persons--
  }
}

const validateDateTime = (event) => {
  const value = event.target.value
  if (value) {
    const date = new Date(value)
    const year = date.getFullYear()
    
    // Check if year is in valid range
    if (year < 2024 || year > 2030) {
      // If year is invalid, reset value
      formData.value.scheduledTime = ''
      alert('Please select a date between 2024 and 2030')
    }
  }
}

const placeOrder = () => {
  if (!canPlaceOrder.value) return
  
  // Here you can add order submission logic
  alert('Order successfully placed!')
  
  // Clear cart and redirect to home
  cartStore.clearCart()
  router.push('/')
}

onMounted(() => {
  // Load items from cart
  cartItems.value = cartStore.getItems()
  
  // If cart is empty, redirect to home
  if (cartItems.value.length === 0) {
    router.push('/')
  }
})
</script>
