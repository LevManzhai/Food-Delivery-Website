<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="logo">LOGOS</div>
        <div class="search-input">
          <span class="search-icon">🔍</span>
          <input type="text" placeholder="Enter delivery address">
        </div>
        <div class="phone">+44 50 50-50-50-50</div>
        <router-link to="/cart" class="cart">Cart <span>4</span></router-link>
      </div>
    </header>
    <div class="banner">
      <img src=".././img/banner1.png" alt="" class="fullwidth-img">
    </div>

    <router-view />
  </div>
</template>

<script setup>
</script>
