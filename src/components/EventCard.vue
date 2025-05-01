<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col items-start">
    <img :src="event.image" alt="" class="w-full h-40 object-cover rounded-md mb-4" v-if="event.image" />
    <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{{ event.title }}</h3>
    <p class="text-gray-600 dark:text-gray-300 mb-4">{{ event.description }}</p>
    <span class="text-sm text-gray-500">{{ event.date }}</span>
    <button class="mt-4 px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition">Learn More</button>
  </div>
</template>
<script setup>
defineProps({ event: Object })
</script>