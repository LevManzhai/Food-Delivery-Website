<template>
  <div class="product-card" @click="goToDetail">
    <img :src="food.img" :alt="food.name">
    <div class="card-content">
      <div class="card-text">
        <h3>{{ food.name }}</h3>
        <p>{{ food.desc }}</p>
      </div>
      <div class="card-weight">weight: {{ food.weight }}</div>
    </div>
    <div class="bottom-buttons">
      <h3>£{{ food.price }}</h3>
      <button class="add-btn" @click.stop="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import cartStore from '../store/cart.js'

export default {
  name: "FoodCard",
  props: {
    food: {
      type: Object,
      required: true
    }
  },
  methods: {
    goToDetail() {
      this.$router.push('/food/' + this.food.id);
    },
    addToCart(event) {
      event.stopPropagation();
      cartStore.addItem(this.food);
      // Show notification
      this.showNotification();
    },
    showNotification() {
      // Create temporary notification
      const notification = document.createElement('div');
      notification.textContent = `Added to cart: ${this.food.name}`;
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
  }
};
</script>

<style scoped>
/* Styles are inherited from style.css */
</style>
