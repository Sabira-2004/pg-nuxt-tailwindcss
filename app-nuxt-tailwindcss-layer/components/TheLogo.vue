<script setup lang="ts">
  import siteMeta from '@/site'
  const { title } = siteMeta
</script>
<template>
  <NuxtLink data-pg-name="Logo" class="group flex items-center gap-2.5" to="/">
    <img
      src="/vue-designer.png"
      alt=""
      class="h-9 w-9 rounded-xl shadow-sm transition group-hover:scale-105"
    />
    <span class="text-lg font-semibold tracking-[-0.02em] text-white">
      {{ title }}
    </span>
  </NuxtLink>
</template>
<style scoped></style>
