<script setup>
import { onMounted } from 'vue';
import Navbar from './components/Navbar.vue';
import Footer from './components/Footer.vue';
import BackToTop from './components/BackToTop.vue';
import { useThemeStore } from './stores/theme';

const themeStore = useThemeStore();

onMounted(() => {
  themeStore.initializeTheme();
});
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <Navbar />
    
    <main class="flex-grow">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    
    <Footer />
    <BackToTop />
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
