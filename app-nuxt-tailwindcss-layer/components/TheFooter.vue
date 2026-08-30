<script setup lang="ts">
  //...
</script>
<template>
  <footer
    class="border-t border-[#e5e7f0] bg-[#f7f8fc] py-10 text-[#151a2d] dark:border-white/10 dark:bg-[#0b1020] dark:text-white"
  >
    <div
      class="container mx-auto flex flex-col gap-8 px-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between lg:px-12"
    >
      <div class="flex items-center gap-3">
        <img
          src="/vue-designer.svg"
          alt=""
          aria-hidden="true"
          class="h-9 w-9"
        />
        <div>
          <p class="text-sm font-semibold">Vue Designer</p>
          <p class="mt-1 text-xs text-slate-500 dark:text-slate-400">
            Build Vue visually. Keep your code.
          </p>
        </div>
      </div>
      <div
        class="flex flex-wrap items-center gap-5 text-slate-500 dark:text-slate-400"
      >
        <NuxtLink
          href="https://www.facebook.com/vuedesigner"
          aria-label="facebook"
          external
          target="_blank"
        >
          <BaseIcon
            name="i-logos-facebook"
            class="text-xl transition hover:scale-110"
            width="24px"
          />
        </NuxtLink>
        <NuxtLink
          href="https://twitter.com/vuedesigner"
          aria-label="twitter"
          external
          target="_blank"
        >
          <BaseIcon
            name="i-logos-twitter"
            class="text-xl transition hover:scale-110"
            width="24px"
          />
        </NuxtLink>
        <NuxtLink
          href="https://discord.gg/BYp45Nnu5T"
          aria-label="discord"
          external
          target="_blank"
        >
          <BaseIcon
            name="i-logos-discord-icon"
            class="text-xl transition hover:scale-110"
            width="24px"
          />
        </NuxtLink>
        <NuxtLink
          href="https://www.youtube.com/@vuedesigner"
          aria-label="youtube"
          external
          target="_blank"
        >
          <BaseIcon
            name="i-logos-youtube-icon"
            class="text-xl transition hover:scale-110"
            width="24px"
          />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>
<style scoped></style>
