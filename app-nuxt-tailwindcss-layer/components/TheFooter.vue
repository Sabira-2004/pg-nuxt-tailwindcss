<script setup lang="ts">
  import siteMeta from '@/site'

  const { title } = siteMeta
</script>

<template>
  <footer class="bg-neutral-950 text-neutral-300">
    <div class="container mx-auto max-w-7xl px-5 py-12 sm:px-6 lg:px-8">
      <div class="flex flex-col justify-between gap-10 md:flex-row">
        <div class="max-w-sm">
          <NuxtLink href="/" class="flex items-center gap-3 text-white">
            <span
              class="flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-white/10 p-1.5"
            >
              <img
                src="/vue-designer.svg"
                :alt="`${title} logo`"
                class="h-full w-full"
              />
            </span>
            <span class="font-bold tracking-tight">{{ title }}</span>
          </NuxtLink>
          <p class="mt-4 text-sm leading-7 text-neutral-400">
            A visual IDE for building Vue applications with more clarity, speed,
            and creative momentum.
          </p>
        </div>

        <div class="grid grid-cols-2 gap-x-12 gap-y-8 text-sm sm:grid-cols-3">
          <div>
            <p class="font-semibold text-white">Product</p>
            <div class="mt-4 space-y-3">
              <a
                href="https://vuedesigner.com"
                target="_blank"
                rel="noopener"
                class="block transition hover:text-white"
                >Vue Designer</a
              >
              <a
                href="https://pinegrow.com/docs/vue/"
                target="_blank"
                rel="noopener"
                class="block transition hover:text-white"
                >Documentation</a
              >
            </div>
          </div>
          <div>
            <p class="font-semibold text-white">Explore</p>
            <div class="mt-4 space-y-3">
              <NuxtLink
                href="/quick-start"
                class="block transition hover:text-white"
                >Quick start</NuxtLink
              >
              <a
                href="https://www.youtube.com/@vuedesigner/playlists"
                target="_blank"
                rel="noopener"
                class="block transition hover:text-white"
                >Tutorials</a
              >
            </div>
          </div>
          <div>
            <p class="font-semibold text-white">Community</p>
            <div class="mt-4 space-y-3">
              <a
                href="https://discord.gg/BYp45Nnu5T"
                target="_blank"
                rel="noopener"
                class="block transition hover:text-white"
                >Discord</a
              >
              <a
                href="https://pinegrow.com/docs/vue/support/"
                target="_blank"
                rel="noopener"
                class="block transition hover:text-white"
                >Support</a
              >
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-12 flex flex-col-reverse gap-5 border-t border-white/10 pt-6 text-xs text-neutral-500 sm:flex-row sm:items-center sm:justify-between"
      >
        <p>
          © {{ new Date().getFullYear() }} {{ title }}. Built for Vue builders.
        </p>
        <div class="flex items-center gap-4">
          <a
            href="https://www.facebook.com/vuedesigner"
            aria-label="Facebook"
            target="_blank"
            rel="noopener"
            class="transition hover:text-white"
          >
            <BaseIcon name="i-logos-facebook" height="18px" />
          </a>
          <a
            href="https://twitter.com/vuedesigner"
            aria-label="X / Twitter"
            target="_blank"
            rel="noopener"
            class="transition hover:text-white"
          >
            <BaseIcon name="i-logos-twitter" height="18px" />
          </a>
          <a
            href="https://discord.gg/BYp45Nnu5T"
            aria-label="Discord"
            target="_blank"
            rel="noopener"
            class="transition hover:text-white"
          >
            <BaseIcon name="i-logos-discord-icon" height="19px" />
          </a>
          <a
            href="https://www.youtube.com/@vuedesigner"
            aria-label="YouTube"
            target="_blank"
            rel="noopener"
            class="transition hover:text-white"
          >
            <BaseIcon name="i-logos-youtube-icon" height="19px" />
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
