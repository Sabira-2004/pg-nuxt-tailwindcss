<script setup lang="ts">
  definePageMeta({
    // layout: 'default',
    // name: 'index',
    // alias: 'index',
    title: 'Home',
    description:
      'A Nuxt and Tailwind CSS starter template for visually designing Vue apps with Vue Designer.',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
    // ogImage: 'images/ogImage.png', // url or local images inside public folder, for eg, ~/public/images/ogImage.png
  })
</script>

<template>
  <div class="home-page overflow-hidden">
    <HeroSection />
    <AboutTemplate />
    <WalkThrough />
  </div>
</template>
<style scoped></style>
