<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  isLoading: {
    type: Boolean,
    default: true
  },
  lines: {
    type: Number,
    default: 3
  },
  aspectRatio: {
    type: String,
    default: 'aspect-video' // other options: aspect-square, etc.
  }
});

const isVisible = ref(true);

onMounted(() => {
  // If not explicitly loading, auto-hide after 1.5 seconds
  if (!props.isLoading) {
    setTimeout(() => {
      isVisible.value = false;
    }, 1500);
  }
});

const linesArray = Array(props.lines).fill(null);
</script>

<template>
  <div v-if="isVisible || isLoading">
    <div v-if="aspectRatio" class="animate-pulse mb-4">
      <div :class="[aspectRatio, 'bg-gray-200 dark:bg-gray-700 rounded-lg']"></div>
    </div>
    
    <div class="animate-pulse space-y-3">
      <div v-for="(_, index) in linesArray" :key="index" 
           class="h-4 bg-gray-200 dark:bg-gray-700 rounded-lg"
           :class="{'w-3/4': index === lines - 1}">
      </div>
    </div>
  </div>
  
  <div v-else>
    <slot></slot>
  </div>
</template> 