<script setup>
import { ref } from 'vue';

const currentYear = new Date().getFullYear();
const emailInput = ref('');
const isSubmitting = ref(false);
const isSubscribed = ref(false);

const handleSubscribe = (e) => {
  e.preventDefault();
  if (!emailInput.value) return;
  
  isSubmitting.value = true;
  
  // Simulate API call
  setTimeout(() => {
    isSubmitting.value = false;
    isSubscribed.value = true;
    emailInput.value = '';
    
    // Reset success message after 5 seconds
    setTimeout(() => {
      isSubscribed.value = false;
    }, 5000);
  }, 1000);
};

const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/dotgang', icon: 'github' },
  { name: 'Twitter', url: 'https://twitter.com/dotgang', icon: 'twitter' },
  { name: 'LinkedIn', url: 'https://linkedin.com/company/dotgang', icon: 'linkedin' },
  { name: 'Discord', url: 'https://discord.gg/dotgang', icon: 'discord' },
];

const footerLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Team', path: '/team' },
  { name: 'Events', path: '/events' },
  { name: 'Contact', path: '/contact' },
];

const resourceLinks = [
  { name: 'Documentation', url: '#' },
  { name: 'Tutorials', url: '#' },
  { name: 'Blog', url: '#' },
  { name: 'Open Source', url: '#' },
];
</script>

<template>
  <footer class="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-dotgang-dark pt-16 pb-8 relative overflow-hidden">
    <!-- Background decorative elements -->
    <div class="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-dotgang-primary via-dotgang-accent to-dotgang-secondary"></div>
    <div class="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
    
    <!-- Decorative shapes -->
    <div class="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-dotgang-primary/5 dark:bg-dotgang-primary/10 blur-3xl pointer-events-none"></div>
    <div class="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-dotgang-accent/5 dark:bg-dotgang-accent/10 blur-2xl pointer-events-none"></div>
    
    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 md:grid-cols-12 gap-12">
        <!-- Logo & Description -->
        <div class="md:col-span-4 lg:col-span-5">
          <div class="mb-4 transform hover:scale-105 transition-transform inline-block">
            <span class="text-dotgang-primary font-mono text-3xl font-bold">
              &lt;Dot<span class="text-gray-800 dark:text-white">Gang/&gt;</span>
            </span>
          </div>
          <p class="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
            Building the future of .NET, together. A community dedicated to making .NET development more accessible, intuitive, and engaging for all developers.
          </p>
          <!-- Social Links -->
          <div class="flex space-x-4">
            <a 
              v-for="social in socialLinks" 
              :key="social.name"
              :href="social.url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="text-gray-500 hover:text-dotgang-primary dark:text-gray-400 dark:hover:text-dotgang-primary transition-all duration-300 hover:scale-125" 
              :aria-label="`Follow us on ${social.name}`"
            >
              <svg v-if="social.icon === 'github'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              <svg v-else-if="social.icon === 'twitter'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
              </svg>
              <svg v-else-if="social.icon === 'linkedin'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
              <svg v-else-if="social.icon === 'discord'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Menu Links -->
        <div class="md:col-span-2 lg:col-span-2">
          <h3 class="text-gray-900 dark:text-white font-semibold mb-5 relative inline-block">
            Navigation
            <span class="absolute -bottom-1 left-0 w-12 h-0.5 bg-dotgang-primary rounded-full"></span>
          </h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks" :key="link.name" class="transform hover:translate-x-1 transition-transform">
              <router-link :to="link.path" class="text-gray-600 dark:text-gray-400 hover:text-dotgang-primary dark:hover:text-dotgang-primary transition-colors inline-flex items-center">
                <span class="w-1 h-1 rounded-full bg-dotgang-primary mr-2 opacity-0 transition-opacity duration-300" :class="{'opacity-100': $route.path === link.path}"></span>
                {{ link.name }}
              </router-link>
            </li>
          </ul>
        </div>
        
        <!-- Resources Links -->
        <div class="md:col-span-2 lg:col-span-2">
          <h3 class="text-gray-900 dark:text-white font-semibold mb-5 relative inline-block">
            Resources
            <span class="absolute -bottom-1 left-0 w-12 h-0.5 bg-dotgang-secondary rounded-full"></span>
          </h3>
          <ul class="space-y-3">
            <li v-for="link in resourceLinks" :key="link.name" class="transform hover:translate-x-1 transition-transform">
              <a :href="link.url" class="text-gray-600 dark:text-gray-400 hover:text-dotgang-secondary dark:hover:text-dotgang-secondary transition-colors">
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div class="md:col-span-4 lg:col-span-3">
          <h3 class="text-gray-900 dark:text-white font-semibold mb-5 relative inline-block">
            Stay Updated
            <span class="absolute -bottom-1 left-0 w-12 h-0.5 bg-dotgang-accent rounded-full"></span>
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-5">
            Subscribe to our newsletter for updates on events, tutorials, and community news.
          </p>
          <form @submit="handleSubscribe" class="relative">
            <div v-if="!isSubscribed" class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
              <input 
                v-model="emailInput"
                type="email" 
                placeholder="Enter your email" 
                class="flex-grow px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-dotgang-primary focus:border-transparent transition-all"
                required
              />
              <button 
                type="submit" 
                class="btn btn-primary whitespace-nowrap flex items-center justify-center min-w-[120px]"
                :disabled="isSubmitting"
              >
                <svg v-if="isSubmitting" class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span>{{ isSubmitting ? 'Subscribing...' : 'Subscribe' }}</span>
              </button>
            </div>
            <div v-else class="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-400 p-4 rounded-lg animate-fadeSlideUp">
              <div class="flex">
                <svg class="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                </svg>
                <span>Thanks for subscribing!</span>
              </div>
            </div>
          </form>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400">
        <p>© {{ currentYear }} DotGang. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template> 