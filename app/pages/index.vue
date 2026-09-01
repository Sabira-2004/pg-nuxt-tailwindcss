<script setup lang="ts">
  definePageMeta({
    title: 'Home',
    description:
      'Build Vue interfaces visually with Vue Designer, Nuxt and Tailwind CSS.',
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
<style scoped></style>
