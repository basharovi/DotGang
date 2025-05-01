<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import BackToTop from './components/BackToTop.vue';
import { useThemeStore } from './stores/theme';

const themeStore = useThemeStore();
const cursorPosition = ref({ x: 0, y: 0 });
const showCursor = ref(false);

const updateCursorPosition = (e) => {
  cursorPosition.value = { x: e.clientX, y: e.clientY };
  showCursor.value = true;
};

const hideCursor = () => {
  showCursor.value = false;
};

onMounted(() => {
  themeStore.initializeTheme();
  window.addEventListener('mousemove', updateCursorPosition);
  window.addEventListener('mouseleave', hideCursor);
  window.addEventListener('mouseenter', (e) => updateCursorPosition(e));
  
  // Add smooth scroll behavior
  document.documentElement.style.scrollBehavior = 'smooth';
});

onUnmounted(() => {
  window.removeEventListener('mousemove', updateCursorPosition);
  window.removeEventListener('mouseleave', hideCursor);
  window.removeEventListener('mouseenter', updateCursorPosition);
});
</script>

<template>
  <div class="relative min-h-screen flex flex-col bg-white dark:bg-dotgang-dark overflow-hidden">
    <!-- Background decorative elements -->
    <div class="fixed inset-0 opacity-10 bg-dot-pattern pointer-events-none dark:opacity-5 z-0"></div>
    
    <!-- Custom cursor (visible on larger screens) -->
    <div 
      v-if="showCursor" 
      class="fixed w-8 h-8 rounded-full border-2 border-dotgang-primary hidden lg:block pointer-events-none z-[100]" 
      :style="{
        left: `${cursorPosition.x}px`,
        top: `${cursorPosition.y}px`,
        transform: 'translate(-50%, -50%)',
        transition: 'transform 0.1s ease-out, opacity 0.2s ease',
        mixBlendMode: 'difference',
      }"
    ></div>
    
    <Navbar />
    
    <main class="flex-grow relative z-10">
      <router-view v-slot="{ Component, route }">
        <transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
    
    <Footer />
    <BackToTop />
  </div>
</template>

<style>
/* Enhanced page transitions */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease, transform 0.4s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Legacy fade transition for compatibility */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Global styles */
::selection {
  @apply bg-dotgang-primary/30 text-white;
}

html {
  scrollbar-width: thin;
  scrollbar-color: theme('colors.dotgang.primary') theme('colors.gray.100');
}

body {
  @apply font-sans antialiased text-gray-900 dark:text-gray-100;
}
</style>
