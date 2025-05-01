<template>
  <div class="typing-animation font-mono">
    <span>{{ displayedText }}</span>
    <span class="typing-cursor" :class="{ 'opacity-0': !cursorVisible }">|</span>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'

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
    default: 300
  },
  autoAdvance: {
    type: Boolean,
    default: false
  },
  pauseBeforeAdvance: {
    type: Number,
    default: 1500
  }
})

const emit = defineEmits(['complete', 'advance'])

const displayedText = ref('')
const cursorVisible = ref(true)
const isTyping = ref(false)
const intervalId = ref(null)

const startTyping = () => {
  if (isTyping.value) return
  
  isTyping.value = true
  let charIndex = 0
  
  // Clear current text
  displayedText.value = ''
  
  // Start typing after delay
  setTimeout(() => {
    intervalId.value = setInterval(() => {
      if (charIndex < props.text.length) {
        displayedText.value += props.text.charAt(charIndex)
        charIndex++
      } else {
        clearInterval(intervalId.value)
        isTyping.value = false
        // Emit complete event when typing is finished
        emit('complete')
        
        // Auto advance after pause if enabled
        if (props.autoAdvance) {
          setTimeout(() => {
            emit('advance')
          }, props.pauseBeforeAdvance)
        }
      }
    }, props.typingSpeed)
  }, props.startDelay)
}

// Start cursor blinking
onMounted(() => {
  startTyping()
  
  // Cursor blinking
  setInterval(() => {
    cursorVisible.value = !cursorVisible.value
  }, 500)
})

// Watch for text changes to restart typing
watch(() => props.text, () => {
  if (intervalId.value) {
    clearInterval(intervalId.value)
  }
  startTyping()
})
</script>

<style scoped>
.typing-animation {
  display: inline-block;
  min-height: 1.5em;
  position: relative;
}

.typing-cursor {
  display: inline-block;
  width: 2px;
  height: 1em;
  background-color: currentColor;
  margin-left: 2px;
  animation: blink 1s step-end infinite;
  vertical-align: middle;
}

@keyframes blink {
  from, to { opacity: 1; }
  50% { opacity: 0; }
}

/* Add a subtle glow effect to the cursor */
.typing-animation::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: 0;
  width: 8px;
  height: 8px;
  background-color: currentColor;
  opacity: 0.2;
  border-radius: 50%;
  filter: blur(4px);
  animation: glow 2s infinite alternate;
}

@keyframes glow {
  from { opacity: 0.1; transform: scale(1); }
  to { opacity: 0.3; transform: scale(1.5); }
}
</style>