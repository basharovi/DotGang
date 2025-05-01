<script setup>
import { ref, onMounted } from 'vue';
import StoryTypingAnimation from '../components/StoryTypingAnimation.vue';
import MetaData from '../components/MetaData.vue';

// Story paragraphs for typing animation - original order
const storyParagraphs = [
  "DotGang started as a casual meetup group among ex-colleagues who shared a passion for .NET technologies. What began as weekly coffee sessions discussing coding challenges and best practices quickly evolved into a structured community with a clear purpose.",
  "Our founders recognized a gap in the developer community - while .NET is a powerful and versatile framework, many newcomers found it challenging to navigate. We decided to combine our expertise and create a supportive environment where developers of all levels could learn, share, and grow together.",
  "Today, DotGang has grown into a vibrant community of professionals, enthusiasts, and learners, all united by our love for .NET development and our commitment to making it more accessible to everyone."
];

const activeParagraph = ref(0);
const isParagraphComplete = ref(false);

// Vision and values with animation
const visionItems = [
  {
    id: 'vision',
    title: 'Our Vision',
    content: 'We envision a future where .NET development is more accessible, inclusive, and enjoyable for developers at all stages of their journey. We believe in breaking down barriers to entry and building bridges between experts and beginners.',
    icon: 'eye',
    color: 'primary'
  },
  {
    id: 'mission',
    title: 'Our Mission',
    content: 'Our mission is to empower the next generation of .NET developers through knowledge sharing, mentorship, and community support. We create resources, organize events, and foster connections that help developers build skills and confidence.',
    icon: 'building',
    color: 'secondary'
  },
  {
    id: 'values',
    title: 'Our Values',
    content: 'We value inclusivity, collaboration, innovation, and open knowledge sharing. Our community is built on the principles of respect, continuous learning, and helping others succeed.',
    icon: 'shield',
    color: 'accent'
  }
];

// Values list for the Values section
const valuesList = [
  { title: 'Inclusivity', description: 'We welcome developers of all backgrounds, experience levels, and abilities.' },
  { title: 'Collaboration', description: 'We believe in the power of working together to solve problems.' },
  { title: 'Innovation', description: 'We encourage creative thinking and embracing new technologies.' },
  { title: 'Open Knowledge', description: 'We promote sharing expertise freely and openly.' }
];

// For animating vision items on scroll
const visibleSections = ref(new Set());

// Check if element is in viewport
const observeElements = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        visibleSections.value.add(entry.target.id);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });
  
  // Observe vision items
  visionItems.forEach(item => {
    const element = document.getElementById(item.id);
    if (element) observer.observe(element);
  });
};

// Advance to next paragraph
const advanceParagraph = () => {
  if (activeParagraph.value < storyParagraphs.length - 1) {
    activeParagraph.value++;
    isParagraphComplete.value = false;
  }
};

onMounted(() => {
  // Set up intersection observer for animations
  setTimeout(observeElements, 500);
});
</script>

<template>
  <div>
    <MetaData 
      title="About DotGang - Our Story and Mission"
      description="Learn about DotGang, a community of passionate .NET developers on a mission to make the ecosystem more accessible."
    />
    
    <!-- About Header -->
    <section class="relative bg-gradient-to-br from-dotgang-dark to-black py-20 md:py-28 overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 bg-dot-pattern opacity-10 dark:opacity-20"></div>
      
      <!-- Decorative shapes -->
      <div class="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-dotgang-primary/10 blur-3xl"></div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            About <span class="text-gradient font-mono">DotGang</span>
          </h1>
          <div class="w-24 h-1 bg-dotgang-primary mx-auto rounded-full mb-8"></div>
          <p class="text-gray-300 text-xl max-w-3xl mx-auto">
            We're a community of passionate .NET developers on a mission to make the ecosystem more accessible.
          </p>
        </div>
      </div>
    </section>

    <!-- Our Story with Typing Animation -->
    <section class="section bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="mb-6">
              <h2 class="text-3xl font-bold mb-4">Our Story</h2>
              <div class="w-16 h-1 bg-dotgang-primary rounded-full"></div>
            </div>
            
            <div class="space-y-6 min-h-[300px]">
              <!-- First paragraph - always at the top -->
              <div class="text-gray-700 dark:text-gray-300">
                <!-- Show typing animation only when it's active -->
                <StoryTypingAnimation 
                  v-if="activeParagraph === 0"
                  :text="storyParagraphs[0]"
                  :typingSpeed="30"
                  :autoAdvance="true"
                  @advance="activeParagraph = 1"
                />
                <!-- Show static text when animation has moved to next paragraph -->
                <p v-else>{{ storyParagraphs[0] }}</p>
              </div>
              
              <!-- Second paragraph - always in middle (if visible) -->
              <div v-if="activeParagraph >= 1" class="text-gray-700 dark:text-gray-300">
                <!-- Show typing animation only when it's active -->
                <StoryTypingAnimation 
                  v-if="activeParagraph === 1"
                  :text="storyParagraphs[1]"
                  :typingSpeed="30"
                  :autoAdvance="true"
                  @advance="activeParagraph = 2"
                />
                <!-- Show static text when animation has moved to next paragraph -->
                <p v-else>{{ storyParagraphs[1] }}</p>
              </div>
              
              <!-- Third paragraph - always at bottom (if visible) -->
              <div v-if="activeParagraph >= 2" class="text-gray-700 dark:text-gray-300">
                <StoryTypingAnimation 
                  :text="storyParagraphs[2]"
                  :typingSpeed="30"
                />
              </div>
            </div>
          </div>
          
          <!-- Image/Illustration with enhanced professional look -->
          <div class="relative">
            <div class="absolute inset-0 bg-gradient-to-br from-dotgang-primary/10 to-dotgang-accent/10 rounded-xl"></div>
            <div class="relative bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
              <!-- Code block illustration with enhanced styling -->
              <pre class="text-sm text-dotgang-primary font-mono overflow-x-auto shadow-inner bg-gray-50/50 dark:bg-gray-900/50 p-4 rounded-lg">
<span class="text-dotgang-accent">namespace</span> DotGang.Community;

<span class="text-dotgang-accent">public</span> <span class="text-dotgang-accent">class</span> <span class="text-dotgang-highlight">Story</span>
{
    <span class="text-dotgang-accent">private</span> <span class="text-dotgang-accent">readonly</span> <span class="text-dotgang-secondary">List&lt;Developer&gt;</span> _founders;
    <span class="text-dotgang-accent">private</span> <span class="text-dotgang-accent">readonly</span> <span class="text-dotgang-secondary">Vision</span> _vision;
    
    <span class="text-dotgang-accent">public</span> Story()
    {
        _founders = <span class="text-dotgang-accent">new</span>();
        _vision = <span class="text-dotgang-accent">new</span>(<span class="text-dotgang-highlight">"Make .NET accessible"</span>);
    }
    
    <span class="text-dotgang-accent">public</span> <span class="text-dotgang-accent">void</span> GrowCommunity()
    {
        <span class="text-dotgang-highlight">// The story continues with your contribution</span>
        Community.Welcome(<span class="text-dotgang-accent">new</span> Developer(<span class="text-dotgang-highlight">you</span>));
    }
}</pre>

              <!-- Decorative dots -->
              <div class="absolute top-4 left-4 flex space-x-1.5">
                <div class="w-3 h-3 rounded-full bg-red-400"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div class="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
            </div>
            
            <!-- Decorative elements -->
            <div class="absolute -bottom-4 -right-4 w-32 h-32 bg-dotgang-primary/10 rounded-xl -z-10"></div>
            <div class="absolute -top-4 -left-4 w-24 h-24 bg-dotgang-accent/10 rounded-xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision, Mission, and Values (Horizontal) -->
    <section class="section bg-gray-50 dark:bg-gray-900 overflow-hidden">
      <div class="container-custom">
        <div class="text-center mb-12">
          <h2 class="text-3xl font-bold mb-4">Our Foundation</h2>
          <p class="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            The core principles that drive our community forward.
          </p>
        </div>
        
        <!-- Enhance the horizontal scrollable cards -->
        <div class="relative -mx-4 px-4 pb-8 overflow-x-auto hide-scrollbar">
          <div class="flex flex-nowrap lg:grid lg:grid-cols-3 gap-8 min-w-max lg:min-w-0">
            <div 
              v-for="(item, index) in visionItems" 
              :key="item.id"
              :id="item.id"
              class="w-80 lg:w-full bg-white dark:bg-dotgang-surface p-8 rounded-xl shadow-md transition-all duration-500 border border-gray-100 dark:border-gray-800 hover:shadow-lg"
              :class="[
                visibleSections.has(item.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10',
                {'delay-100': index === 0, 'delay-300': index === 1, 'delay-500': index === 2}
              ]"
            >
              <div class="mb-6">
                <div :class="`bg-dotgang-${item.color} bg-opacity-10 p-4 rounded-full inline-block`">
                  <!-- Vision icon -->
                  <svg v-if="item.icon === 'eye'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" :class="`text-dotgang-${item.color}`" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  
                  <!-- Mission icon -->
                  <svg v-if="item.icon === 'building'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" :class="`text-dotgang-${item.color}`" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  
                  <!-- Values icon -->
                  <svg v-if="item.icon === 'shield'" xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" :class="`text-dotgang-${item.color}`" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
              </div>
              
              <h3 class="text-2xl font-semibold mb-4">{{ item.title }}</h3>
              
              <div v-if="item.id !== 'values'">
                <p class="text-gray-600 dark:text-gray-400">{{ item.content }}</p>
              </div>
              
              <!-- Values list for the Values card with better styling -->
              <ul v-else class="space-y-3 text-gray-600 dark:text-gray-400">
                <li v-for="value in valuesList" :key="value.title" class="flex items-start p-2 rounded-md hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                  <span :class="`text-dotgang-${item.color} mr-2 font-bold`">•</span>
                  <div>
                    <span class="font-medium">{{ value.title }}:</span>
                    <span class="ml-1">{{ value.description }}</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Improved scroll indicator for mobile -->
        <div class="mt-4 lg:hidden text-center text-gray-500 dark:text-gray-400 text-sm">
          <span>Swipe to see more</span>
          <div class="flex justify-center mt-1">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Enhanced Join Us CTA -->
    <section class="section bg-gradient-to-br from-dotgang-primary/5 to-dotgang-accent/5 dark:from-gray-800 dark:to-dotgang-surface relative overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div class="absolute top-0 right-0 w-64 h-64 rounded-full bg-dotgang-primary/10 blur-3xl"></div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto bg-white/80 dark:bg-gray-900/80 p-12 rounded-2xl backdrop-blur shadow-xl border border-white/20 dark:border-gray-800/20">
          <div class="text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6">Be Part of Our Story</h2>
            <p class="text-lg mb-10 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              DotGang is always looking for passionate developers who want to learn, share, and contribute to our community.
            </p>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <router-link to="/team" class="btn btn-primary group">
                <span>Meet Our Team</span>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clip-rule="evenodd" />
                </svg>
              </router-link>
              <router-link to="/contact" class="btn btn-outline">
                Get Involved
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Hide scrollbar but allow scrolling */
.hide-scrollbar {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

.hide-scrollbar::-webkit-scrollbar {
  display: none;  /* Chrome, Safari, Opera */
}

/* Animation delays */
.delay-100 {
  transition-delay: 100ms;
}

.delay-300 {
  transition-delay: 300ms;
}

.delay-500 {
  transition-delay: 500ms;
}
</style> 