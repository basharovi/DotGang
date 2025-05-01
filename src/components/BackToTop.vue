<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const isVisible = ref(false);
const scrollThreshold = 300; // Show button after scrolling this many pixels

const checkScroll = () => {
  isVisible.value = window.scrollY > scrollThreshold;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};

onMounted(() => {
  window.addEventListener('scroll', checkScroll);
  checkScroll(); // Check initial scroll position
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll);
});
</script>

<template>
  <transition name="fade">
    <button 
      v-if="isVisible" 
      @click="scrollToTop"
      class="fixed bottom-6 right-6 p-3 rounded-full bg-dotgang-primary text-white shadow-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dotgang-primary z-50 transition-all hover:scale-110"
      aria-label="Back to top"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18" />
      </svg>
    </button>
  </transition>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
</style> 