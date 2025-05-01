<script setup>
import { useTeamStore } from '../stores/team';
import TeamCard from '../components/TeamCard.vue';
import SocialShare from '../components/SocialShare.vue';
import MetaData from '../components/MetaData.vue';

const teamStore = useTeamStore();
const members = teamStore.getAllMembers;
</script>

<template>
  <div>
    <MetaData 
      title="DotGang Team - Meet Our .NET Community Leaders"
      description="Meet the passionate developers behind DotGang, each bringing unique experience and expertise to our .NET community."
    />
    
    <!-- Team Header -->
    <section class="bg-dotgang-dark py-16 md:py-24">
      <div class="container-custom">
        <h1 class="text-4xl md:text-5xl font-bold text-white text-center mb-6">Our Executive Team</h1>
        <p class="text-gray-300 text-center text-xl max-w-3xl mx-auto">
          Meet the passionate developers behind DotGang, each bringing unique experience and expertise to our community.
        </p>
      </div>
    </section>

    <!-- Team Members -->
    <section class="section bg-white dark:bg-gray-900">
      <div class="container-custom">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TeamCard 
            v-for="member in members" 
            :key="member.id" 
            :member="member" 
          />
        </div>
        
        <div class="mt-12 border-t border-gray-200 dark:border-gray-700 pt-8">
          <SocialShare 
            title="Meet the DotGang team of .NET community leaders"
            description="Check out the awesome developers behind DotGang, a community dedicated to making .NET development more accessible."
            hashtags="dotgang,dotnet,developers,community"
          />
        </div>
      </div>
    </section>

    <!-- Join Our Team -->
    <section class="section bg-gray-100 dark:bg-gray-800">
      <div class="container-custom text-center">
        <h2 class="text-3xl font-bold mb-6">Join Our Team</h2>
        <p class="text-lg mb-8 max-w-2xl mx-auto">
          Are you passionate about .NET development and want to contribute to our community? 
          We're always looking for enthusiastic developers to join our team.
        </p>
        <router-link to="/contact" class="btn btn-primary">
          Get in Touch
        </router-link>
      </div>
    </section>
  </div>
</template> 