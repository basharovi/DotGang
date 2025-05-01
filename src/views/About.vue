<script setup>
// Any additional logic for the about page could go here
</script>

<template>
  <div>
    <!-- About Header -->
    <section class="bg-dotgang-dark py-16 md:py-24">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold text-white text-center mb-6">About DotGang</h1>
        <p class="text-gray-300 text-center text-xl max-w-3xl mx-auto">
          We're a community of passionate .NET developers on a mission to make the ecosystem more accessible.
        </p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="section bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl font-bold mb-6">Our Story</h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              DotGang started as a casual meetup group among ex-colleagues who shared a passion for .NET technologies. 
              What began as weekly coffee sessions discussing coding challenges and best practices quickly evolved 
              into a structured community with a clear purpose.
            </p>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Our founders recognized a gap in the developer community - while .NET is a powerful and versatile 
              framework, many newcomers found it challenging to navigate. We decided to combine our expertise and 
              create a supportive environment where developers of all levels could learn, share, and grow together.
            </p>
            <p class="text-gray-700 dark:text-gray-300">
              Today, DotGang has grown into a vibrant community of professionals, enthusiasts, and learners, 
              all united by our love for .NET development and our commitment to making it more accessible to everyone.
            </p>
          </div>
          
          <div class="bg-dotgang-primary bg-opacity-5 dark:bg-opacity-10 p-8 rounded-xl">
            <div class="space-y-8">
              <!-- Vision -->
              <div>
                <h3 class="text-2xl font-semibold mb-3 flex items-center">
                  <span class="bg-dotgang-primary bg-opacity-10 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-dotgang-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </span>
                  Our Vision
                </h3>
                <p class="text-gray-700 dark:text-gray-300">
                  We envision a future where .NET development is more accessible, inclusive, and enjoyable for developers at all stages of their journey. 
                  We believe in breaking down barriers to entry and building bridges between experts and beginners.
                </p>
              </div>
              
              <!-- Mission -->
              <div>
                <h3 class="text-2xl font-semibold mb-3 flex items-center">
                  <span class="bg-dotgang-secondary bg-opacity-10 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-dotgang-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </span>
                  Our Mission
                </h3>
                <p class="text-gray-700 dark:text-gray-300">
                  Our mission is to empower the next generation of .NET developers through knowledge sharing, 
                  mentorship, and community support. We create resources, organize events, and foster connections 
                  that help developers build skills and confidence.
                </p>
              </div>
              
              <!-- Values -->
              <div>
                <h3 class="text-2xl font-semibold mb-3 flex items-center">
                  <span class="bg-dotgang-accent bg-opacity-10 p-2 rounded-full mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-dotgang-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </span>
                  Our Values
                </h3>
                <ul class="text-gray-700 dark:text-gray-300 space-y-2">
                  <li class="flex items-start">
                    <span class="text-dotgang-primary mr-2">•</span>
                    <span><strong>Inclusivity:</strong> We welcome developers of all backgrounds, experience levels, and abilities.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-dotgang-primary mr-2">•</span>
                    <span><strong>Collaboration:</strong> We believe in the power of working together to solve problems.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-dotgang-primary mr-2">•</span>
                    <span><strong>Innovation:</strong> We encourage creative thinking and embracing new technologies.</span>
                  </li>
                  <li class="flex items-start">
                    <span class="text-dotgang-primary mr-2">•</span>
                    <span><strong>Open Knowledge:</strong> We promote sharing expertise freely and openly.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Us CTA -->
    <section class="section bg-dotgang-primary bg-opacity-10 dark:bg-gray-800">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-6">Be Part of Our Story</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          DotGang is always looking for passionate developers who want to learn, share, and contribute to our community.
        </p>
        <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <router-link to="/team" class="btn btn-primary">
            Meet Our Team
          </router-link>
          <router-link to="/contact" class="btn bg-white text-dotgang-primary hover:bg-gray-100 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600">
            Get Involved
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template> 