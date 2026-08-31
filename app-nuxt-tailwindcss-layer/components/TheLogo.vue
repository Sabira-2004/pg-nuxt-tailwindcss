<script setup lang="ts">
  import siteMeta from '@/site'

  const { title } = siteMeta
</script>
<template>
  <NuxtLink
    data-pg-name="Logo"
    class="flex items-center gap-2 sm:flex-row"
    to="/"
  >
    <NuxtImg
      src="/vue-designer.png"
      alt=""
      width="36"
      height="36"
      class="h-9 w-9"
    />
    <span
      class="font-serif text-xl font-extrabold text-secondary-700 dark:text-primary-200 sm:text-2xl"
    >
      {{ title }}
    </span>
  </NuxtLink>
</template>
<style scoped></style>
