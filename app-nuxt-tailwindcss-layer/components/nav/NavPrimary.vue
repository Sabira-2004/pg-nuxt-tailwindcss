<script setup lang="ts">
  defineProps({
    navs: {
      type: Array,
      default() {
        return []
      },
    },
    currentPath: {
      type: String,
      default: '/',
    },
  })
</script>

<template>
  <div class="h-full items-center">
    <div class="flex h-full space-x-2">
      <BaseButton
        v-for="(nav, index) in navs"
        :key="index"
        :to="nav.to"
        :label="nav.title"
        size="lg"
        variant="ghost"
        color="white"
        class="!rounded-full !px-4 !text-slate-300 hover:!bg-white/10 hover:!text-white"
        :class="nav.to === currentPath ? '!bg-white/10 !text-white' : ''"
      />
    </div>
    <BaseButton
      class="ml-3 !rounded-full !bg-[#6d5efc] !px-5 !py-2.5 !text-white shadow-lg shadow-[#6d5efc]/20 hover:!bg-[#5b4de0]"
      target="_blank"
      to="https://vuedesigner.com"
      size="xl"
      color="primary"
      trailing
      trailing-icon="i-material-symbols-arrow-forward-rounded"
    >
      <span>Try Now</span>
    </BaseButton>
  </div>
</template>

<style scoped></style>
