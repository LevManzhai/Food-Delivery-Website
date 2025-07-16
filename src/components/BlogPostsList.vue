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
.blog-posts-list {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  justify-content: flex-start;
}
.blog-card {
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.07);
  padding: 1.5rem;
  margin: 0.5rem 0;
  width: 100%;
  max-width: 340px;
  transition: box-shadow 0.2s;
}
.blog-card:hover {
  box-shadow: 0 4px 24px rgba(0,0,0,0.16);
}
.blog-title {
  font-size: 1.4rem;
  margin: 0 0 0.6rem 0;
  color: #222;
}
.blog-meta {
  font-size: 0.92rem;
  color: #888;
  margin-bottom: 0.8rem;
}
.blog-summary {
  font-size: 1rem;
  color: #3a3e42;
}
.no-posts {
  color: #888;
  font-size: 1.1rem;
}
</style>
