<template>
  <section class="relative py-16 bg-gradient-to-br from-dotgang-primary/10 via-white dark:via-gray-900 to-dotgang-accent/10 overflow-hidden">
    <!-- Decorative SVG Wave Divider (top) -->
    <div class="absolute top-0 left-0 w-full pointer-events-none" style="z-index:1;">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-16">
        <path fill="currentColor" class="text-dotgang-primary/10 dark:text-dotgang-primary/20" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,117.3C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
      </svg>
    </div>
    <div class="container mx-auto px-4 relative z-10">
      <h2 class="text-4xl md:text-5xl font-extrabold mb-10 text-center text-dotgang-primary dark:text-dotgang-accent drop-shadow-lg tracking-tight">
        <span class="bg-clip-text text-transparent bg-gradient-to-r from-dotgang-primary to-dotgang-accent">Upcoming Events</span>
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <EventCard v-for="event in events" :key="event.id" :event="event" />
      </div>
    </div>
    <!-- Decorative SVG Wave Divider (bottom) -->
    <div class="absolute bottom-0 left-0 w-full pointer-events-none" style="z-index:1;">
      <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-16 rotate-180">
        <path fill="currentColor" class="text-dotgang-accent/10 dark:text-dotgang-accent/20" d="M0,32L48,53.3C96,75,192,117,288,117.3C384,117,480,75,576,74.7C672,75,768,117,864,117.3C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"/>
      </svg>
    </div>
  </section>
</template>
<script setup>
import EventCard from '@/components/EventCard.vue'
import { useEventsStore } from '@/stores/events'
const { events } = useEventsStore()
</script>