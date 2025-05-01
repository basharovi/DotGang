<script setup>
import { ref } from 'vue';
import { useTeamStore } from '../stores/team';
import TeamCard from '../components/TeamCard.vue';
import SocialShare from '../components/SocialShare.vue';
import MetaData from '../components/MetaData.vue';

const teamStore = useTeamStore();
const allMembers = teamStore.getAllMembers;

// All members are now considered leadership
const teamMembers = allMembers;
</script>

<template>
  <div>
    <MetaData 
      title="DotGang Team - Meet Our .NET Community Leaders"
      description="Meet the passionate developers behind DotGang, each bringing unique experience and expertise to our .NET community."
    />
    
    <!-- Team Header -->
    <section class="relative bg-gradient-to-br from-dotgang-dark to-black py-20 md:py-28 overflow-hidden">
      <!-- Background decorative elements -->
      <div class="absolute inset-0 bg-dot-pattern opacity-10 dark:opacity-20"></div>
      
      <!-- C# code pattern background -->
      <div class="absolute inset-0 opacity-10 overflow-hidden">
        <!-- C# decorative code snippets -->
        <div class="absolute top-10 left-10 text-2xl text-white font-mono opacity-20 select-none">
          using System;
        </div>
        <div class="absolute top-20 left-20 text-xl text-white font-mono opacity-20 select-none">
          namespace DotGang;
        </div>
        <div class="absolute bottom-20 right-20 text-xl text-white font-mono opacity-20 select-none">
          public class Team {}
        </div>
        <div class="absolute top-30 right-30 text-xl text-white font-mono opacity-20 select-none">
          var developers = new List&lt;Developer&gt;();
        </div>
      </div>
      
      <!-- .NET logo elements -->
      <div class="absolute top-1/4 left-1/4 w-16 h-16 border-4 border-dotgang-primary/30 rounded-full"></div>
      <div class="absolute bottom-1/4 right-1/4 w-12 h-12 border-4 border-dotgang-accent/30 rounded-full"></div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our <span class="text-gradient font-mono">Team</span>
          </h1>
          <div class="w-24 h-1 bg-dotgang-primary mx-auto rounded-full mb-8"></div>
          <p class="text-gray-300 text-xl">
            Passionate developers dedicated to making .NET development more accessible, 
            innovative, and enjoyable for everyone.
          </p>
        </div>
      </div>
    </section>

    <!-- Team Members -->
    <section class="section bg-white dark:bg-gray-900 pb-20">
      <div class="container-custom">
        <!-- Leadership Team -->
        <div class="mb-16">
          <div class="text-center mb-12">
            <h2 class="text-3xl font-bold mb-4">Leadership Team</h2>
            <p class="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Meet the core team driving DotGang's vision and community initiatives.
            </p>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
            <TeamCard 
              v-for="member in teamMembers" 
              :key="member.id" 
              :member="member"
              class="transform hover:scale-105 transition-all duration-500"
            />
          </div>
        </div>
        
        <!-- Social Share -->
        <div class="mt-20 pt-8 border-t border-gray-200 dark:border-gray-700">
          <SocialShare 
            title="Meet the DotGang team of .NET community leaders"
            description="Check out the awesome developers behind DotGang, a community dedicated to making .NET development more accessible."
            hashtags="dotgang,dotnet,developers,community"
          />
        </div>
      </div>
    </section>

    <!-- Join Our Team -->
    <section class="section bg-gradient-to-br from-gray-50 to-gray-100 dark:from-dotgang-surface dark:to-gray-900 relative overflow-hidden">
      <!-- Background decorative patterns -->
      <div class="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <!-- .NET themed decorative elements -->
      <div class="absolute top-0 right-0 w-32 h-32 opacity-20">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="text-dotgang-primary">
          <path fill="currentColor" d="M24 8.77h-2.468v7.565h-1.425V8.77h-2.462V7.53H24zM11.995 15.31c.652 0 1.198-.088 1.636-.263a3.325 3.325 0 0 0 1.176-.734 2.23 2.23 0 0 0 .693-1.1c.013-.063.026-.17.036-.318V7.53h1.426v8.806h-1.426v-1.298a3.349 3.349 0 0 1-1.278 1.055 4.2 4.2 0 0 1-1.836.386c-.651 0-1.238-.113-1.761-.338a3.886 3.886 0 0 1-1.32-.935 4.143 4.143 0 0 1-.827-1.399 5.207 5.207 0 0 1-.294-1.777c0-.636.098-1.24.294-1.81a4.454 4.454 0 0 1 .846-1.466c.368-.414.818-.74 1.347-.984a4.243 4.243 0 0 1 1.77-.366c.652 0 1.249.129 1.79.384.542.258.99.647 1.341 1.17V7.53h1.426v5.365c-.01.148-.023.256-.036.318a2.323 2.323 0 0 1-.693 1.099 3.126 3.126 0 0 1-1.176.734c-.44.176-.984.263-1.637.263v.001zm.01-7.636c-.468 0-.894.086-1.28.26-.386.174-.719.411-.996.712a3.262 3.262 0 0 0-.655 1.075 3.873 3.873 0 0 0-.237 1.368c0 .49.08.946.237 1.368.158.422.376.788.655 1.1.277.315.61.559.996.732.386.174.812.26 1.28.26.476 0 .904-.086 1.288-.26.384-.173.715-.417.994-.731a3.39 3.39 0 0 0 .91-2.468c0-.49-.08-.95-.239-1.368a3.267 3.267 0 0 0-.651-1.075 2.95 2.95 0 0 0-1.006-.713 3.213 3.213 0 0 0-1.286-.26zm-6.667.856v6.709H3.912V8.53h1.426zm0-2.04V7.53H3.912V6.49h1.426z"/>
        </svg>
      </div>
      <div class="absolute bottom-10 left-10 text-8xl font-mono opacity-10 text-dotgang-primary">{...}</div>
      
      <div class="container-custom relative z-10">
        <div class="max-w-3xl mx-auto text-center">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">Join Our Team</h2>
          <p class="text-lg mb-10 text-gray-700 dark:text-gray-300">
            Are you passionate about .NET development and want to contribute to our community? 
            We're always looking for enthusiastic developers to join our team and help build 
            the future of .NET together.
          </p>
          <router-link to="/contact" class="btn btn-primary inline-flex items-center group">
            <span>Get in Touch</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template> 