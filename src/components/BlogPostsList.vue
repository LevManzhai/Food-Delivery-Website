<template>
  <div class="blog-posts-list">
    <div
      v-for="(post, index) in posts"
      :key="index"
      class="blog-card"
    >
      <h2 class="blog-title">{{ post.title }}</h2>
      <p class="blog-meta">By {{ post.author }} on {{ formatDate(post.date) }}</p>
      <p class="blog-summary">{{ post.summary }}</p>
    </div>
    <div v-if="!posts || posts.length === 0" class="no-posts">
      No blog posts to show.
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';
import './BlogPostsList.css';

const props = defineProps({
  posts: {
    type: Array,
    required: true,
    default: () => []
  }
});

function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return isNaN(date) ? dateStr : date.toLocaleDateString();
}
</script>

<style scoped>
/* Styles are inherited from BlogPostsList.css */
</style>
