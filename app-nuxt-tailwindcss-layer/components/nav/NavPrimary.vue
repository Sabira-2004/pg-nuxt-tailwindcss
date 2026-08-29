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
  <div class="flex h-full items-center">
    <div class="flex h-full items-center space-x-1">
      <BaseButton
        v-for="(nav, index) in navs"
        :key="index"
        :to="nav.to"
        :label="nav.title"
        size="lg"
        color="white"
        :variant="nav.to === currentPath ? 'solid' : 'ghost'"
        class="!rounded-lg !text-sm"
      />
    </div>
    <BaseButton
      class="ml-4 !rounded-full !bg-[#5ee1a4] !font-semibold !text-[#08141f] hover:!bg-[#8cefc0]"
      target="_blank"
      to="https://vuedesigner.com"
      size="xl"
      color="white"
    >
      <span>Try Now</span>
      <template #trailing>
        <BaseIcon
          name="i-material-symbols-arrow-outward-rounded"
          height="18px"
        />
      </template>
    </BaseButton>
  </div>
</template>

<style scoped></style>
