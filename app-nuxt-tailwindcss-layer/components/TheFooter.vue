<script setup lang="ts">
  const year = new Date().getFullYear()
</script>

<template>
  <footer
    class="border-t border-[#dce7e2] bg-[#f5f8f7] py-12 text-[#60717d] dark:border-white/10 dark:bg-[#0d1927] dark:text-[#a9b9c6]"
  >
    <div class="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
      <div
        class="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
      >
        <div>
          <div class="flex items-center gap-2.5">
            <img src="/vue-designer.png" alt="" class="h-8 w-8 rounded-lg" />
            <span class="font-semibold text-[#132536] dark:text-white"
              >Vue Designer</span
            >
          </div>
          <p class="mt-3 max-w-sm text-sm leading-6">
            Design Vue interfaces visually, then keep building with the code and
            workflow you own.
          </p>
        </div>
        <div class="flex items-center gap-5">
          <NuxtLink
            href="https://www.facebook.com/vuedesigner"
            aria-label="Facebook"
            external
            target="_blank"
            class="transition hover:text-[#27885d]"
          >
            <BaseIcon name="i-logos-facebook" width="22px" />
          </NuxtLink>
          <NuxtLink
            href="https://twitter.com/vuedesigner"
            aria-label="Twitter"
            external
            target="_blank"
            class="transition hover:text-[#27885d]"
          >
            <BaseIcon name="i-logos-twitter" width="22px" />
          </NuxtLink>
          <NuxtLink
            href="https://discord.gg/BYp45Nnu5T"
            aria-label="Discord"
            external
            target="_blank"
            class="transition hover:text-[#27885d]"
          >
            <BaseIcon name="i-logos-discord-icon" width="22px" />
          </NuxtLink>
          <NuxtLink
            href="https://www.youtube.com/@vuedesigner"
            aria-label="YouTube"
            external
            target="_blank"
            class="transition hover:text-[#27885d]"
          >
            <BaseIcon name="i-logos-youtube-icon" width="22px" />
          </NuxtLink>
        </div>
      </div>
      <div
        class="mt-10 border-t border-[#dce7e2] pt-5 text-xs text-[#8a9aa3] dark:border-white/10 dark:text-[#718696]"
      >
        © {{ year }} Vue Designer. Built for Vue developers.
      </div>
    </div>
  </footer>
</template>
