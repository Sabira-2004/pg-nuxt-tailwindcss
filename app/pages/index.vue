<script setup lang="ts">
  definePageMeta({
    title: 'Home',
    description:
      'Vue Designer is a desktop drag-and-drop editor for visually designing Vue apps.',
    navOrder: 1,
    type: 'primary',
    icon: 'i-mdi-home',
  })
</script>

<template>
  <div class="overflow-hidden">
    <HeroSection />
    <AboutTemplate />
    <WalkThrough />
  </div>
</template>
