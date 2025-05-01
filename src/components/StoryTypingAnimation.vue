<template>
  <div class="typing-animation">
    <span class="typed-text">{{ typedText }}</span>
    <span class="cursor" :class="{ 'typing': isTyping }">|</span>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  typingSpeed: {
    type: Number,
    default: 50
  },
  startDelay: {
    type: Number,
    default: 1000
  }
})

const typedText = ref('')
const isTyping = ref(true)
const currentIndex = ref(0)
let typingInterval = null
let cursorInterval = null

const typeText = () => {
  if (currentIndex.value < props.text.length) {
    typedText.value += props.text.charAt(currentIndex.value)
    currentIndex.value++
  } else {
    clearInterval(typingInterval)
    isTyping.value = false
  }
}

onMounted(() => {
  // Start typing after delay
  setTimeout(() => {
    typingInterval = setInterval(typeText, props.typingSpeed)
  }, props.startDelay)
  
  // Blink cursor
  cursorInterval = setInterval(() => {
    isTyping.value = !isTyping.value
  }, 400)
})

onUnmounted(() => {
  clearInterval(typingInterval)
  clearInterval(cursorInterval)
})
</script>

<style scoped>
.typing-animation {
  display: inline-block;
}

.typed-text {
  font-weight: inherit;
  color: inherit;
}

.cursor {
  display: inline-block;
  width: 3px;
  margin-left: 2px;
  opacity: 1;
  animation: blink 0.7s infinite;
  color: currentColor;
}

.cursor.typing {
  animation: none;
  opacity: 1;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
</style>