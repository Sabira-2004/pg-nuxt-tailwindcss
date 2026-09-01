<script setup lang="ts">
  definePageMeta({
    title: 'Home',
    description:
      'A visual IDE for Vue applications with a Nuxt and Tailwind CSS starter.',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
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
