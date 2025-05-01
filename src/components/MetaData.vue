<script setup>
import { watch } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps({
  title: {
    type: String,
    default: 'DotGang - .NET Developer Community'
  },
  description: {
    type: String,
    default: 'DotGang is a community of passionate .NET developers focused on making future .NET development easier and more accessible for new developers.'
  },
  image: {
    type: String,
    default: '/images/dotgang-social.jpg' // Default social sharing image
  }
});

// Update document title
watch(() => props.title, (newTitle) => {
  document.title = newTitle;
}, { immediate: true });

// Update meta description
watch(() => props.description, (newDescription) => {
  const metaDescription = document.querySelector('meta[name="description"]');
  if (metaDescription) {
    metaDescription.setAttribute('content', newDescription);
  } else {
    const meta = document.createElement('meta');
    meta.name = 'description';
    meta.content = newDescription;
    document.head.appendChild(meta);
  }
}, { immediate: true });

// Set Open Graph and Twitter Card meta tags
const setMetaTags = () => {
  const route = useRoute();
  const url = `https://dotgang.dev${route.path}`;
  
  const metaTags = [
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
    { property: 'og:image', content: props.image },
    { property: 'og:url', content: url },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: props.image }
  ];
  
  metaTags.forEach(tag => {
    const selector = tag.property 
      ? `meta[property="${tag.property}"]` 
      : `meta[name="${tag.name}"]`;
    
    const metaTag = document.querySelector(selector);
    if (metaTag) {
      metaTag.setAttribute('content', tag.content);
    } else {
      const meta = document.createElement('meta');
      if (tag.property) {
        meta.setAttribute('property', tag.property);
      } else {
        meta.setAttribute('name', tag.name);
      }
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    }
  });
};

// Update meta tags when props change
watch([() => props.title, () => props.description, () => props.image], setMetaTags, { immediate: true });
</script>

<template>
  <!-- This is a utility component with no rendering output -->
</template> 