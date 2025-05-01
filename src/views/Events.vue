<script setup>
import { ref, computed } from 'vue';

// Sample events data - In a real app, this would come from an API
const events = ref([
  {
    id: 1,
    title: "Tech Adda: Modern .NET Development",
    date: "2023-06-15T18:00:00",
    location: "Virtual (Zoom)",
    description: "Join us for our monthly Tech Adda where we'll discuss modern .NET development practices, tools, and frameworks. This session will focus on .NET 7 features and performance optimizations.",
    image: "/images/events/modern-dotnet.jpg",
    type: "workshop",
    isUpcoming: true
  },
  {
    id: 2,
    title: "DotCast: Blazor WebAssembly Deep Dive",
    date: "2023-06-28T14:00:00",
    location: "YouTube Live",
    description: "Our DotCast series continues with an in-depth exploration of Blazor WebAssembly. Learn how to build interactive web UIs using C# instead of JavaScript with our expert panel.",
    image: "/images/events/blazor-webassembly.jpg",
    type: "podcast",
    isUpcoming: true
  },
  {
    id: 3,
    title: "Hands-on Workshop: Building Microservices with .NET",
    date: "2023-07-10T10:00:00",
    location: "Microsoft Office, New York",
    description: "A full-day hands-on workshop where we'll build a complete microservices architecture using .NET, Docker, and Kubernetes. Limited spots available!",
    image: "/images/events/microservices-workshop.jpg",
    type: "workshop",
    isUpcoming: true
  },
  {
    id: 4,
    title: "DotGang Community Meetup",
    date: "2023-05-20T17:30:00",
    location: "Tech Hub, San Francisco",
    description: "Our monthly in-person community meetup! Come network with fellow .NET developers, share your projects, and enjoy some food and drinks on us.",
    image: "/images/events/community-meetup.jpg",
    type: "meetup",
    isUpcoming: false
  },
  {
    id: 5,
    title: "Contributing to Open Source .NET Projects",
    date: "2023-05-05T19:00:00",
    location: "Virtual (Discord)",
    description: "Learn how to find and contribute to open source .NET projects. We'll cover everything from finding beginner-friendly issues to submitting your first pull request.",
    image: "/images/events/open-source.jpg",
    type: "workshop",
    isUpcoming: false
  }
]);

// Filter events
const filter = ref('all');
const upcomingOnly = ref(true);

const filteredEvents = computed(() => {
  return events.value.filter(event => {
    const typeMatch = filter.value === 'all' || event.type === filter.value;
    const timeMatch = !upcomingOnly.value || event.isUpcoming;
    return typeMatch && timeMatch;
  });
});

// Format date
const formatDate = (dateString) => {
  const options = { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  };
  return new Date(dateString).toLocaleDateString('en-US', options);
};
</script>

<template>
  <div>
    <!-- Events Header -->
    <section class="bg-dotgang-dark py-16 md:py-24">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold text-white text-center mb-6">Events & Meetups</h1>
        <p class="text-gray-300 text-center text-xl max-w-3xl mx-auto">
          Join us at our upcoming events, workshops, and community gatherings to learn, connect, and grow with fellow .NET enthusiasts.
        </p>
      </div>
    </section>

    <!-- Events Listing -->
    <section class="section bg-white dark:bg-gray-900">
      <div class="container-custom">
        <!-- Filters -->
        <div class="mb-10 flex flex-col md:flex-row justify-between items-start md:items-center">
          <div class="flex space-x-4 mb-4 md:mb-0">
            <button 
              @click="filter = 'all'" 
              class="px-4 py-2 rounded-md transition-colors"
              :class="filter === 'all' ? 'bg-dotgang-primary text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'"
            >
              All Events
            </button>
            <button 
              @click="filter = 'workshop'" 
              class="px-4 py-2 rounded-md transition-colors"
              :class="filter === 'workshop' ? 'bg-dotgang-primary text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'"
            >
              Workshops
            </button>
            <button 
              @click="filter = 'podcast'" 
              class="px-4 py-2 rounded-md transition-colors"
              :class="filter === 'podcast' ? 'bg-dotgang-primary text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'"
            >
              DotCast
            </button>
            <button 
              @click="filter = 'meetup'" 
              class="px-4 py-2 rounded-md transition-colors"
              :class="filter === 'meetup' ? 'bg-dotgang-primary text-white' : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'"
            >
              Meetups
            </button>
          </div>
          
          <div class="flex items-center">
            <label class="flex items-center cursor-pointer">
              <input type="checkbox" v-model="upcomingOnly" class="sr-only peer">
              <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-dotgang-primary rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-dotgang-primary"></div>
              <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Upcoming events only</span>
            </label>
          </div>
        </div>
        
        <!-- Events Grid -->
        <div v-if="filteredEvents.length > 0" class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div 
            v-for="event in filteredEvents" 
            :key="event.id" 
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl"
          >
            <div class="aspect-video overflow-hidden bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <!-- In a real app, this would be event.image -->
              <div class="p-6 font-mono text-lg font-semibold text-dotgang-primary">
                {{ event.type === 'workshop' ? '👨‍💻 Workshop' : 
                   event.type === 'podcast' ? '🎙️ DotCast' : '🤝 Meetup' }}
              </div>
            </div>
            
            <div class="p-6">
              <div class="flex justify-between items-start mb-3">
                <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                  {{ event.title }}
                </h3>
                <span 
                  class="text-xs font-medium px-2.5 py-0.5 rounded-full"
                  :class="event.isUpcoming ? 
                    'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300' : 
                    'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300'"
                >
                  {{ event.isUpcoming ? 'Upcoming' : 'Past' }}
                </span>
              </div>
              
              <div class="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span>{{ formatDate(event.date) }}</span>
              </div>
              
              <div class="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>{{ event.location }}</span>
              </div>
              
              <p class="text-gray-600 dark:text-gray-400 mb-6">
                {{ event.description }}
              </p>
              
              <button 
                v-if="event.isUpcoming"
                class="btn btn-primary w-full"
              >
                Register Now
              </button>
              <button 
                v-else
                class="btn bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 w-full cursor-not-allowed"
                disabled
              >
                Event has ended
              </button>
            </div>
          </div>
        </div>
        
        <!-- No Events -->
        <div v-else class="text-center py-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 class="text-xl font-semibold mb-2">No events found</h3>
          <p class="text-gray-600 dark:text-gray-400">
            No events match your current filters. Try changing your filter settings or check back later.
          </p>
        </div>
      </div>
    </section>

    <!-- Host an Event -->
    <section class="section bg-dotgang-primary bg-opacity-10 dark:bg-opacity-5">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Host a DotGang Event</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Do you have expertise in a .NET-related technology and want to share it with our community? 
              We're always looking for speakers, workshop leaders, and content creators.
            </p>
            <p class="text-gray-700 dark:text-gray-300 mb-6">
              Whether it's a technical talk, hands-on workshop, or panel discussion, 
              we'd love to help you organize and promote your event to our community.
            </p>
            <router-link to="/contact" class="btn btn-primary">
              Submit Your Proposal
            </router-link>
          </div>
          
          <div class="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
            <h3 class="text-xl font-semibold mb-4">Event Types</h3>
            <ul class="space-y-4">
              <li class="flex">
                <div class="bg-dotgang-primary bg-opacity-10 p-2 rounded-full mr-3 h-min">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-dotgang-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold">Tech Adda (Tech Talk)</h4>
                  <p class="text-gray-600 dark:text-gray-400">45-60 minute technical presentations on .NET technologies, followed by Q&A.</p>
                </div>
              </li>
              <li class="flex">
                <div class="bg-dotgang-secondary bg-opacity-10 p-2 rounded-full mr-3 h-min">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-dotgang-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold">DotCast (Podcast/Video)</h4>
                  <p class="text-gray-600 dark:text-gray-400">Our podcast/video series featuring interviews, panel discussions, and deep dives.</p>
                </div>
              </li>
              <li class="flex">
                <div class="bg-dotgang-accent bg-opacity-10 p-2 rounded-full mr-3 h-min">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-dotgang-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold">Workshops</h4>
                  <p class="text-gray-600 dark:text-gray-400">Hands-on, interactive sessions ranging from 2-8 hours, covering specific technologies in depth.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </div>
</template> 