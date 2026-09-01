<script setup lang="ts">
  import siteMeta from '@/site'
  const { title } = siteMeta
</script>
<template>
  <NuxtLink data-pg-name="Logo" class="group flex items-center gap-3" to="/">
    <span
      class="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl bg-neutral-900 p-1.5 shadow-sm ring-1 ring-neutral-900/10 transition-transform group-hover:-rotate-3 dark:bg-white/10"
    >
      <img
        src="/vue-designer.svg"
        :alt="`${title} logo`"
        class="h-full w-full"
      />
    </span>
    <span class="flex flex-col">
      <span
        class="font-sans text-base font-extrabold tracking-tight text-primary-800 dark:text-primary-100 sm:text-lg"
      >
        {{ title }}
      </span>
      <span
        class="hidden text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500 dark:text-neutral-400 sm:block"
      >
        Visual IDE for Vue
      </span>
    </span>
  </NuxtLink>
</template>
<style scoped></style>
