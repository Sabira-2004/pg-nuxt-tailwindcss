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
  <div class="items-center gap-1">
    <div class="flex items-center gap-1">
      <BaseButton
        v-for="(nav, index) in navs"
        :key="index"
        :to="nav.to"
        :label="nav.title"
        size="md"
        :variant="nav.to === currentPath ? 'solid' : 'ghost'"
        class="!rounded-xl px-3.5"
      />
    </div>
    <BaseButton
      class="ml-3 !rounded-xl"
      target="_blank"
      to="https://vuedesigner.com"
      size="lg"
      color="secondary"
    >
      <span>Try Vue Designer</span>
      <template #trailing>
        <BaseIcon name="i-material-symbols-arrow-outward" height="19px" />
      </template>
    </BaseButton>
  </div>
</template>

<style scoped></style>
