<script setup lang="ts">
  import { isDark, toggleDark } from '@/composables/dark'
</script>
<template>
  <div class="mx-2 sm:mx-3">
    <BaseButton
      variant="ghost"
      color="white"
      class="!rounded-lg !text-white hover:!bg-white/10"
      aria-label="Toggle theme"
      @click="toggleDark()"
    >
      <ClientOnly>
        <transition name="slide" mode="out-in">
          <BaseIcon
            v-if="isDark"
            name="i-material-symbols-dark-mode-outline"
            class="text-2xl"
          />
          <BaseIcon
            v-else
            name="i-material-symbols-light-mode-outline"
            class="text-2xl"
          />
        </transition>
        <template #fallback>
          <BaseIcon
            name="i-material-symbols-light-mode-outline"
            class="text-2xl"
          />
        </template>
      </ClientOnly>
    </BaseButton>
  </div>
</template>
<style lang="postcss">
  .slide-enter-active,
  .slide-leave-active {
    transition: transform 0.15s ease;
  }

  .slide-enter-from {
    transform: translateY(-100%);
  }

  .slide-enter-to,
  .slide-leave-from {
    transform: translateY(0);
  }

  .slide-leave-to {
    transform: translateY(100%);
  }
</style>
