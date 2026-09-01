<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroDescription =
    'A desktop visual editor for Mac, Windows and Linux that lets you design Vue applications with the speed of your ideas.'
</script>

<template>
  <section
    id="hero"
    class="relative isolate overflow-hidden bg-primary-950 text-white"
  >
    <div
      aria-hidden="true"
      class="absolute -left-40 -top-48 h-[34rem] w-[34rem] rounded-full bg-secondary-500/20 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="absolute -bottom-56 right-0 h-[32rem] w-[32rem] rounded-full bg-tertiary-400/20 blur-3xl"
    />
    <div
      aria-hidden="true"
      class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_32%)]"
    />

    <div
      class="container relative mx-auto max-w-7xl px-5 pb-14 pt-14 sm:px-6 sm:pb-20 sm:pt-20 lg:px-8 lg:pb-16 lg:pt-24"
    >
      <div class="flex flex-col gap-14 lg:flex-row lg:items-center lg:gap-12">
        <div class="max-w-2xl lg:w-[46%] lg:max-w-none">
          <div
            class="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-100 backdrop-blur"
          >
            <span
              class="h-2 w-2 rounded-full bg-tertiary-300 shadow-[0_0_0_4px_rgba(93,199,243,0.16)]"
            />
            Visual IDE for Vue
          </div>
          <h1
            class="max-w-2xl text-4xl font-extrabold leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl"
          >
            Design Vue apps
            <span class="text-tertiary-300">visually.</span>
          </h1>
          <p
            class="mt-7 max-w-xl text-base leading-8 text-primary-100/80 sm:text-lg"
          >
            {{ heroDescription }} Build with your existing Vite workflow, keep
            your code clean, and turn ideas into polished interfaces faster.
          </p>
          <div class="mt-9 flex flex-wrap items-center gap-4">
            <BaseButton
              class="!rounded-xl !bg-white !px-5 !py-3.5 !font-bold !text-primary-900 shadow-xl shadow-black/10 hover:!bg-primary-50"
              to="https://vuedesigner.com"
              target="_blank"
              trailing
              trailing-icon="i-material-symbols-arrow-outward"
              size="lg"
              label="Start free trial"
            />
            <a
              href="#walkthrough"
              class="group inline-flex items-center gap-2 rounded-xl px-2 py-3 text-sm font-semibold text-white/85 transition hover:text-white"
            >
              See how it works
              <BaseIcon
                name="i-material-symbols-arrow-forward"
                height="18px"
                class="transition-transform group-hover:translate-x-1"
              />
            </a>
          </div>
          <div class="mt-11 flex flex-wrap gap-x-8 gap-y-5 text-sm">
            <div>
              <p class="font-semibold text-white">Mac · Windows · Linux</p>
              <p class="mt-1 text-primary-200/65">One app, every platform</p>
            </div>
            <div>
              <p class="font-semibold text-white">No lock-in</p>
              <p class="mt-1 text-primary-200/65">Standard .vue files</p>
            </div>
          </div>
        </div>

        <div class="relative lg:w-[54%]">
          <div
            aria-hidden="true"
            class="absolute -inset-5 rounded-[2.25rem] bg-gradient-to-br from-secondary-500/35 via-transparent to-tertiary-400/25 blur-2xl"
          />
          <div
            class="relative rounded-[1.65rem] border border-white/20 bg-white/10 p-2 shadow-2xl shadow-black/30 backdrop-blur-sm sm:p-3"
          >
            <div
              class="flex items-center justify-between rounded-t-xl bg-primary-900/90 px-4 py-3 text-[11px] font-semibold tracking-wide text-primary-100/70"
            >
              <div class="flex items-center gap-1.5" aria-hidden="true">
                <span class="h-2.5 w-2.5 rounded-full bg-secondary-300" />
                <span class="h-2.5 w-2.5 rounded-full bg-tertiary-300" />
                <span class="h-2.5 w-2.5 rounded-full bg-white/40" />
              </div>
              <span>Vue Designer · HeroSection.vue</span>
              <span class="hidden text-tertiary-300 sm:inline"
                >LIVE PREVIEW</span
              >
            </div>
            <img
              :src="heroImageUrl"
              alt="Vue Designer editor showing a Vue component being designed visually"
              class="block aspect-[16/9] w-full rounded-b-xl object-cover object-top"
            />
          </div>
          <div
            class="absolute -bottom-5 left-3 rounded-2xl border border-white/30 bg-white px-4 py-3 text-primary-950 shadow-xl shadow-black/20 sm:-left-7 sm:px-5 sm:py-4"
          >
            <div class="flex items-center gap-3">
              <span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-tertiary-100 text-tertiary-700"
              >
                <BaseIcon name="i-material-symbols-bolt" height="20px" />
              </span>
              <span>
                <span
                  class="block text-xs font-semibold uppercase tracking-wider text-primary-500"
                  >Build in flow</span
                >
                <span class="mt-0.5 block text-sm font-bold"
                  >Live visual editing</span
                >
              </span>
            </div>
          </div>
          <div
            class="absolute -right-2 -top-5 hidden rounded-2xl border border-white/20 bg-primary-900/90 px-4 py-3 text-white shadow-xl shadow-black/20 backdrop-blur sm:block"
          >
            <div class="flex items-center gap-2 text-xs font-semibold">
              <BaseIcon
                name="i-material-symbols-check-circle"
                height="18px"
                class="text-tertiary-300"
              />
              Works with Vite
            </div>
          </div>
        </div>
      </div>

      <div
        class="mt-20 flex flex-col gap-4 border-t border-white/15 pt-6 text-sm sm:flex-row sm:items-center sm:justify-between"
      >
        <p class="font-semibold text-primary-100/70">
          Fits your existing workflow
        </p>
        <div class="flex flex-wrap gap-x-6 gap-y-2 text-primary-100/90">
          <span>Vite</span>
          <span>Nuxt</span>
          <span>Tailwind CSS</span>
          <span>Vuetify</span>
          <span>Iles</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
