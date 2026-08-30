<script setup lang="ts">
  import siteMeta from '@/site'
  const { title } = siteMeta
</script>
<template>
  <NuxtLink
    data-pg-name="Logo"
    class="group flex items-center gap-3"
    to="/"
    aria-label="Vue Designer home"
  >
    <img
      src="/vue-designer.svg"
      alt=""
      aria-hidden="true"
      class="h-9 w-9 transition group-hover:scale-105"
    />
    <h6
      class="!mb-0 !text-lg font-semibold tracking-[-0.03em] text-white sm:!text-xl"
    >
      {{ title }}
    </h6>
  </NuxtLink>
</template>
<style scoped></style>
