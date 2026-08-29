<script setup lang="ts">
  const { isMobileMenuOpen, openMobileMenu } = useMobileMenu()
</script>
<template>
  <BaseButton
    size="xl"
    color="white"
    :icon="
      isMobileMenuOpen ? 'i-material-symbols-close' : 'i-material-symbols-menu'
    "
    class="!rounded-lg !text-white hover:!bg-white/10 leading-none"
    @click="openMobileMenu"
  >
    <span class="sr-only">Open main menu</span>
  </BaseButton>
</template>
<style scoped></style>
