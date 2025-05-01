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
      
      <!-- Team grid with 4 members per row -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-6 md:gap-6">
        <div v-for="member in team" :key="member.id">
          <TeamCard :member="member" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import TeamCard from '@/components/TeamCard.vue'
import { useTeamStore } from '@/stores/team'

const { team } = useTeamStore()
</script>