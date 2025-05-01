<script setup>
import { onMounted, ref } from 'vue';
import MetaData from '../components/MetaData.vue';

// Animation logic for the tagline
const tagline = ref("Building the future of .NET, together — DotGang.");
const animatedText = ref("");
const cursorVisible = ref(true);

onMounted(() => {
  let index = 0;
  
  // Type animation
  const typeInterval = setInterval(() => {
    if (index < tagline.value.length) {
      animatedText.value += tagline.value.charAt(index);
      index++;
    } else {
      clearInterval(typeInterval);
    }
  }, 70);
  
  // Cursor blink animation
  setInterval(() => {
    cursorVisible.value = !cursorVisible.value;
  }, 500);
});
</script>

<template>
  <div>
    <MetaData 
      title="DotGang - Building the future of .NET, together"
      description="DotGang is a developer-driven community formed by ex-colleagues passionate about .NET and software engineering. Our mission is to make future .NET development easier and more accessible."
    />
    
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-dotgang-dark via-gray-900 to-black py-20 md:py-32 overflow-hidden">
      <!-- Animated dots background (optional) -->
      <div class="absolute top-0 left-0 w-full h-full opacity-10">
        <div v-for="i in 50" :key="i" 
             class="absolute rounded-full bg-dotgang-primary" 
             :style="{
               width: `${Math.random() * 6 + 2}px`, 
               height: `${Math.random() * 6 + 2}px`,
               left: `${Math.random() * 100}%`, 
               top: `${Math.random() * 100}%`,
               opacity: Math.random() * 0.7 + 0.3,
               animation: `float ${Math.random() * 10 + 10}s infinite linear`
             }">
        </div>
      </div>
      
      <div class="container-custom relative z-10 text-center">
        <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
          <span class="text-dotgang-primary">Dot</span>Gang
        </h1>
        
        <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8 h-16 font-mono">
          {{ animatedText }}<span class="text-dotgang-primary" :class="{ 'opacity-0': !cursorVisible }">|</span>
        </p>
        
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <router-link to="/team" class="btn btn-primary">
            Meet Our Team
          </router-link>
          
          <router-link to="/events" class="btn btn-secondary">
            Upcoming Events
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section bg-white dark:bg-gray-900">
      <div class="container-custom">
        <h2 class="text-3xl font-bold text-center mb-12">What We Do</h2>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Feature 1 -->
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div class="bg-dotgang-primary bg-opacity-10 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-dotgang-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">.NET Workshops</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Regular hands-on workshops to help developers master .NET technologies and best practices.
            </p>
          </div>
          
          <!-- Feature 2 -->
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div class="bg-dotgang-secondary bg-opacity-10 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-dotgang-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Community Support</h3>
            <p class="text-gray-600 dark:text-gray-400">
              A welcoming community for developers of all skill levels to share knowledge and grow together.
            </p>
          </div>
          
          <!-- Feature 3 -->
          <div class="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div class="bg-dotgang-accent bg-opacity-10 p-3 rounded-full inline-block mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-dotgang-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-2">Open Source Projects</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Creating and contributing to open source .NET projects that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section bg-dotgang-primary bg-opacity-10 dark:bg-opacity-5">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-6">Ready to Join the Gang?</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          Whether you're a .NET expert or just getting started, there's a place for you in our community.
        </p>
        <router-link to="/contact" class="btn btn-primary inline-block">
          Get in Touch
        </router-link>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  25% {
    transform: translateY(-10px) translateX(10px);
  }
  50% {
    transform: translateY(0) translateX(20px);
  }
  75% {
    transform: translateY(10px) translateX(10px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}
</style> 