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
      <button @click.stop="addToCart">Add to Cart</button>
    </div>
  </div>
</template>

<script>
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
    addToCart() {
      // Имитация добавления в корзину
      alert(`Добавлено в корзину: ${this.food.name}`);
    }
  }
};
</script>

<style scoped>
.product-card {
  width: 250px;
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(55, 67, 59, .09);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  transition: box-shadow .2s;
}
.product-card:hover {
  box-shadow: 0 10px 28px rgba(55, 67, 59, .17);
}
.product-card img {
  width: 100%;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}
.card-content {
  flex: 1;
  padding: 10px 16px;
  display: flex;
  flex-direction: column;
}
.card-text h3 {
  font-size: 18px;
  margin-bottom: 4px;
}
.card-text p {
  font-size: 14px;
  color: #555;
}
.card-weight {
  margin-top: 8px;
  color: #999;
  font-size: 12px;
}
.bottom-buttons {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px 14px 16px;
}
.bottom-buttons h3 {
  margin: 0;
  font-size: 20px;
  color: #2d2d2c;
  font-weight: 700;
}
.bottom-buttons button {
  background: #f4be4f;
  border: 0;
  border-radius: 8px;
  padding: 5px 14px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  color: #222;
  transition: background .15s;
}
.bottom-buttons button:hover {
  background: #ffda89;
}
</style>
