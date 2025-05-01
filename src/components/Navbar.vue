<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { useThemeStore } from '../stores/theme';
import { useRoute } from 'vue-router';

const themeStore = useThemeStore();
const route = useRoute();
const isMenuOpen = ref(false);
const isScrolled = ref(false);
const prevScrollY = ref(0);
const isNavHidden = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
];

// Check if a link is active
const isActive = (path) => {
  return route.path === path;
};

// Handle scroll effects
const handleScroll = () => {
  const currentScrollY = window.scrollY;
  
  // Check if scrolled for background change
  isScrolled.value = currentScrollY > 20;
  
  // Hide navbar when scrolling down, show when scrolling up
  if (currentScrollY > 300) {
    isNavHidden.value = currentScrollY > prevScrollY.value + 20;
  } else {
    isNavHidden.value = false;
  }
  
  prevScrollY.value = currentScrollY;
};

// Dynamic navbar styling
const navbarClasses = computed(() => {
  return {
    'bg-white/90 dark:bg-dotgang-dark/90 backdrop-blur-md shadow-md': isScrolled.value,
    'bg-transparent': !isScrolled.value,
    'transform -translate-y-full': isNavHidden.value,
  };
});

// Setup scroll listener
onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Initial check
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
  <nav :class="[
    'fixed top-0 w-full z-50 transition-all duration-300', 
    navbarClasses
  ]">
    <div class="container-custom flex justify-between items-center py-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2 group">
        <div class="flex items-center">
          <span class="font-mono text-2xl font-bold transition-transform group-hover:scale-105">
            <span class="text-dotgang-primary">&lt;Dot</span><span class="text-gray-800 dark:text-white">Gang</span><span class="text-dotgang-primary">/&gt;</span>
          </span>
        </div>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <div class="flex space-x-8">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="relative py-2 px-1 text-gray-700 dark:text-gray-200 font-medium transition-colors hover:text-dotgang-primary dark:hover:text-dotgang-primary"
            :class="{ 'text-dotgang-primary dark:text-dotgang-primary': isActive(link.path) }"
          >
            {{ link.name }}
            <span 
              class="absolute bottom-0 left-0 w-full h-0.5 bg-dotgang-primary transform scale-x-0 transition-transform origin-left duration-300"
              :class="{ 'scale-x-100': isActive(link.path) }"
            ></span>
          </router-link>
        </div>

        <!-- Dark Mode Toggle with enhanced styling -->
        <button 
          @click="themeStore.toggleDarkMode" 
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-500 hover:scale-110"
          aria-label="Toggle Dark Mode"
        >
          <svg v-if="themeStore.darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center space-x-1">
        <button 
          @click="themeStore.toggleDarkMode" 
          class="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          aria-label="Toggle Dark Mode"
        >
          <svg v-if="themeStore.darkMode" xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        </button>
        
        <button 
          @click="toggleMenu" 
          class="p-2 rounded-md transition-colors"
          aria-label="Toggle Menu"
        >
          <div class="w-6 h-5 flex flex-col justify-between items-center relative">
            <span 
              class="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transform transition-all duration-300"
              :class="{ 'rotate-45 translate-y-2': isMenuOpen }"
            ></span>
            <span 
              class="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transition-all duration-300"
              :class="{ 'opacity-0': isMenuOpen }"
            ></span>
            <span 
              class="w-6 h-0.5 bg-gray-700 dark:bg-gray-300 rounded-full transform transition-all duration-300"
              :class="{ '-rotate-45 -translate-y-2': isMenuOpen }"
            ></span>
          </div>
        </button>
      </div>
    </div>

    <!-- Mobile Menu with enhanced styling -->
    <div 
      class="md:hidden bg-white dark:bg-dotgang-dark shadow-lg overflow-hidden transition-all duration-300 max-h-0"
      :class="{ 'max-h-[500px] border-t border-gray-100 dark:border-gray-800': isMenuOpen }"
    >
      <div class="container-custom py-3">
        <div class="flex flex-col space-y-0">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            @click="isMenuOpen = false"
            class="py-4 px-4 border-b border-gray-100 dark:border-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-dotgang-primary dark:hover:text-dotgang-primary transition-colors flex items-center"
            :class="{ 'text-dotgang-primary bg-gray-50 dark:bg-gray-800 font-medium': isActive(link.path) }"
          >
            <span 
              class="w-1 h-6 rounded-r-full mr-3 transition-all duration-300" 
              :class="isActive(link.path) ? 'bg-dotgang-primary' : 'bg-transparent'"
            ></span>
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>

  <!-- Spacer for fixed navbar -->
  <div class="h-16"></div>
</template> 