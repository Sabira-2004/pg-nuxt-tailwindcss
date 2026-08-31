<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: 'Home',
    description:
      'A visual IDE for Vue apps that integrates with your Vite workflow and supports Nuxt.',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>

<template>
  <div>
    <HeroSection />
    <AboutTemplate />
    <WalkThrough />
  </div>
</template>
<style scoped></style>
