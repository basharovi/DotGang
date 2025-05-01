<script setup>
import { onMounted, ref, reactive, onBeforeUnmount } from 'vue';
import MetaData from '../components/MetaData.vue';

// Typing animation for the tagline
const tagline = ref("Building the future of .NET, together — DotGang.");
const animatedText = ref("");
const cursorVisible = ref(true);
const isTypingComplete = ref(false);

// Parallax effect data
const parallaxElements = reactive({
  banner: { translateY: 0 },
  title: { translateX: 0 },
  buttons: { opacity: 0 }
});

// Mouse movement for hero section
const handleMouseMove = (e) => {
  const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
  const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
  
  parallaxElements.title.translateX = moveX;
  parallaxElements.banner.translateY = moveY;
};

onMounted(() => {
  let index = 0;
  
  // Type animation
  const typeInterval = setInterval(() => {
    if (index < tagline.value.length) {
      animatedText.value += tagline.value.charAt(index);
      index++;
    } else {
      clearInterval(typeInterval);
      isTypingComplete.value = true;
      
      // Begin button fade-in animation after typing
      setTimeout(() => {
        parallaxElements.buttons.opacity = 1;
      }, 300);
    }
  }, 70);
  
  // Cursor blink animation
  setInterval(() => {
    cursorVisible.value = !cursorVisible.value;
  }, 500);
  
  // Add event listeners for parallax
  window.addEventListener('mousemove', handleMouseMove);
  
  // Activate animation for sections as they come into view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fadeSlideUp');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  
  // Observe all sections
  document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
  });
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove);
});
</script>

<template>
  <div>
    <MetaData 
      title="DotGang - Building the future of .NET, together"
      description="DotGang is a developer-driven community formed by ex-colleagues passionate about .NET and software engineering. Our mission is to make future .NET development easier and more accessible."
    />
    
    <!-- Hero Section -->
    <section class="relative overflow-hidden min-h-[85vh] flex items-center bg-gradient-to-br from-dotgang-dark via-dotgang-surface to-black">
      <!-- Animated particles -->
      <div class="absolute top-0 left-0 w-full h-full opacity-20">
        <div v-for="i in 50" :key="i" 
            class="absolute rounded-full bg-dotgang-primary" 
            :style="{
              width: `${Math.random() * 8 + 2}px`, 
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`, 
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.7 + 0.3,
              animation: `float ${Math.random() * 10 + 10}s infinite linear`
            }">
        </div>
      </div>
      
      <!-- Network grid effect (optional) -->
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      <div class="container-custom relative z-10 text-center">
        <div class="space-y-8">
          <!-- Main heading with parallax effect -->
          <div class="transform transition-transform duration-300 ease-out"
               :style="`transform: translateX(${parallaxElements.title.translateX}px)`">
            <h1 class="text-5xl md:text-7xl lg:text-8xl font-bold mb-2">
              <span class="text-gradient">Dot</span>
              <span class="text-white">Gang</span>
            </h1>
            <div class="w-24 h-1 bg-dotgang-primary mx-auto rounded-full"></div>
          </div>
          
          <!-- Animated tagline -->
          <div class="h-16 md:h-20">
            <p class="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto font-mono">
              {{ animatedText }}<span class="text-dotgang-primary" :class="{ 'opacity-0': !cursorVisible }">|</span>
            </p>
          </div>
          
          <!-- Buttons with fade-in effect -->
          <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 transition-opacity duration-700"
               :style="`opacity: ${parallaxElements.buttons.opacity}`">
            <router-link to="/team" class="btn btn-primary group">
              <span class="relative z-10">Meet Our Team</span>
              <span class="absolute bottom-0 left-0 w-full h-0 bg-white/10 group-hover:h-full transition-all duration-300 z-0"></span>
            </router-link>
            
            <router-link to="/events" class="btn btn-outline">
              Upcoming Events
            </router-link>
          </div>
        </div>
      </div>
      
      <!-- Decorative code blocks in background -->
      <div class="absolute bottom-5 left-5 max-w-xs p-4 rounded-lg glass-effect opacity-30 hidden md:block transform rotate-2">
        <pre class="text-xs text-dotgang-primary font-mono">
<span class="text-dotgang-highlight">using</span> DotGang.Community;

<span class="text-dotgang-accent">var</span> developer = <span class="text-dotgang-accent">new</span> Developer();
developer.JoinCommunity(DotGang);
        </pre>
      </div>
      
      <div class="absolute top-20 right-10 max-w-xs p-4 rounded-lg glass-effect opacity-30 hidden md:block transform -rotate-3">
        <pre class="text-xs text-dotgang-secondary font-mono">
<span class="text-dotgang-highlight">// .NET is our passion</span>
DotGang.CreateAwesome();
        </pre>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-bold mb-4">
            <span class="text-gradient">What We Do</span>
          </h2>
          <div class="w-16 h-1 bg-dotgang-primary mx-auto rounded-full mb-6"></div>
          <p class="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Empowering .NET developers through community, education, and innovation
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 staggered-fade-in">
          <!-- Feature 1 -->
          <div class="card card-hover p-8 border-t-4 border-dotgang-primary group">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-dotgang-primary/10 mb-6 
                        group-hover:bg-dotgang-primary/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-dotgang-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">.NET Workshops</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Regular hands-on workshops to help developers master .NET technologies and best practices.
            </p>
          </div>
          
          <!-- Feature 2 -->
          <div class="card card-hover p-8 border-t-4 border-dotgang-secondary group">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-dotgang-secondary/10 mb-6
                        group-hover:bg-dotgang-secondary/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-dotgang-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Community Support</h3>
            <p class="text-gray-600 dark:text-gray-400">
              A welcoming community for developers of all skill levels to share knowledge and grow together.
            </p>
          </div>
          
          <!-- Feature 3 -->
          <div class="card card-hover p-8 border-t-4 border-dotgang-accent group">
            <div class="flex items-center justify-center w-16 h-16 rounded-full bg-dotgang-accent/10 mb-6
                        group-hover:bg-dotgang-accent/20 transition-colors duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-dotgang-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <h3 class="text-xl font-semibold mb-3">Open Source Projects</h3>
            <p class="text-gray-600 dark:text-gray-400">
              Creating and contributing to open source .NET projects that solve real-world problems.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-r from-dotgang-primary/5 to-dotgang-accent/5"></div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto bg-white dark:bg-dotgang-surface rounded-2xl p-10 shadow-xl border border-gray-100 dark:border-gray-800">
          <div class="text-center">
            <h2 class="text-3xl font-bold mb-6">Ready to Join the Gang?</h2>
            <p class="text-lg mb-8 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Whether you're a .NET expert or just getting started, there's a place for you in our community.
            </p>
            <router-link to="/contact" class="btn btn-primary inline-flex items-center group">
              <span>Get in Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) translateX(15px) rotate(5deg);
  }
  50% {
    transform: translateY(0) translateX(25px) rotate(0deg);
  }
  75% {
    transform: translateY(15px) translateX(15px) rotate(-5deg);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg);
  }
}

.animate-fadeSlideUp {
  animation: fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

@keyframes fadeSlideUp {
  0% {
    opacity: 0;
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style> 