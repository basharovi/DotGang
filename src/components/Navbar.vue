<script setup>
import { ref } from 'vue';
import { useThemeStore } from '../stores/theme';

const themeStore = useThemeStore();
const isMenuOpen = ref(false);

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
</script>

<template>
  <nav class="bg-white dark:bg-dotgang-dark shadow-md sticky top-0 z-50">
    <div class="container-custom flex justify-between items-center py-4">
      <!-- Logo -->
      <router-link to="/" class="flex items-center space-x-2">
        <span class="text-dotgang-primary font-mono text-2xl font-bold">DotGang</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center space-x-8">
        <div class="flex space-x-6">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            class="text-gray-700 dark:text-gray-200 hover:text-dotgang-primary dark:hover:text-dotgang-primary font-medium transition-colors"
          >
            {{ link.name }}
          </router-link>
        </div>

        <!-- Dark Mode Toggle -->
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
      </div>

      <!-- Mobile Menu Button -->
      <div class="md:hidden flex items-center">
        <button 
          @click="themeStore.toggleDarkMode" 
          class="p-2 mr-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
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
          class="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dotgang-primary"
          aria-label="Toggle Menu"
        >
          <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-700 dark:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div v-if="isMenuOpen" class="md:hidden bg-white dark:bg-dotgang-dark shadow-md">
      <div class="container-custom py-3">
        <div class="flex flex-col space-y-3">
          <router-link
            v-for="link in navLinks"
            :key="link.name"
            :to="link.path"
            @click="isMenuOpen = false"
            class="text-gray-700 dark:text-gray-200 py-2 hover:text-dotgang-primary dark:hover:text-dotgang-primary transition-colors"
          >
            {{ link.name }}
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template> 