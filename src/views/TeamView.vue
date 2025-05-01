<template>
  <section class="relative py-20 overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
    <!-- Decorative background elements -->
    <div class="absolute inset-0 opacity-30 dark:opacity-20">
      <div class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-dotgang-primary/10"></div>
      <div class="absolute top-1/3 -left-24 w-72 h-72 rounded-full bg-dotgang-accent/10"></div>
      <div class="absolute -bottom-24 right-1/3 w-80 h-80 rounded-full bg-dotgang-primary/10"></div>
    </div>
    
    <div class="container mx-auto px-4 relative z-10">
      <!-- Section heading with decorative elements -->
      <div class="text-center mb-16">
        <span class="inline-block px-4 py-1 rounded-full bg-dotgang-primary/10 text-dotgang-primary dark:bg-dotgang-primary/20 dark:text-dotgang-accent text-sm font-medium mb-4">Our Amazing Team</span>
        <h2 class="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
          <span class="bg-clip-text text-transparent bg-gradient-to-r from-dotgang-primary to-dotgang-accent">Meet The DotGang</span>
        </h2>
        <p class="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          Passionate individuals working together to build a stronger community through knowledge and connection.
        </p>
      </div>
      
      <!-- Staggered team grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 mt-8">
        <div v-for="(member, index) in team" :key="member.id" 
             :class="{'md:translate-y-8': index % 2 === 1, 'lg:translate-y-0': index % 3 === 0, 'lg:translate-y-16': index % 3 === 1, 'lg:translate-y-8': index % 3 === 2}"
             class="transition-all duration-300">
          
          <!-- Team member card with hover effects -->
          <div class="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 overflow-hidden">
            <!-- Decorative top border with gradient -->
            <div class="h-2 w-full bg-gradient-to-r from-dotgang-primary to-dotgang-accent"></div>
            
            <!-- Member image with overlay -->
            <div class="relative overflow-hidden h-64">
              <img :src="member.image || 'https://via.placeholder.com/400x400'" 
                   :alt="member.name" 
                   class="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-110">
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                <!-- Social media icons -->
                <div class="flex space-x-4">
                  <a v-for="social in member.socials" :key="social.platform" :href="social.url" target="_blank" rel="noopener noreferrer"
                     class="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white hover:text-dotgang-primary transition-colors">
                    <i :class="`fa-brands fa-${social.platform}`"></i>
                  </a>
                </div>
              </div>
            </div>
            
            <!-- Member info -->
            <div class="p-6">
              <div class="flex items-center justify-between mb-2">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">{{ member.name }}</h3>
                <span class="px-3 py-1 text-xs font-medium rounded-full bg-dotgang-primary/10 text-dotgang-primary dark:bg-dotgang-primary/20 dark:text-dotgang-accent">
                  {{ member.role }}
                </span>
              </div>
              <p class="text-gray-600 dark:text-gray-300 mb-4">{{ member.bio }}</p>
              
              <!-- Skills/expertise tags -->
              <div class="flex flex-wrap gap-2 mt-4">
                <span v-for="(skill, i) in member.skills" :key="i"
                      class="px-2 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Call to action -->
      <div class="text-center mt-20">
        <a href="#contact" class="inline-flex items-center px-6 py-3 rounded-lg bg-dotgang-primary text-white hover:bg-dotgang-primary-dark transition-colors shadow-lg hover:shadow-xl">
          <span>Join Our Team</span>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useTeamStore } from '@/stores/team'
const { team } = useTeamStore()
</script>