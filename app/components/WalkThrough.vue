<script setup lang="ts">
  const resourceLinks = [
    {
      label: 'Documentation',
      description: 'Set up the integration and learn the core workflow.',
      href: 'https://pinegrow.com/docs/vue/',
      icon: 'i-material-symbols-menu-book-rounded',
      iconBg: 'bg-[#6d5efc]/15',
      iconColor: 'text-[#b9b2ff]',
    },
    {
      label: 'Video tutorials',
      description: 'See the visual editor in action, step by step.',
      href: 'https://www.youtube.com/@vuedesigner/playlists',
      icon: 'i-material-symbols-play-circle-rounded',
      iconBg: 'bg-[#20b396]/15',
      iconColor: 'text-[#57d8be]',
    },
    {
      label: 'Community forum',
      description: 'Get help and connect with other Vue builders.',
      href: 'https://discord.gg/BYp45Nnu5T',
      icon: 'i-material-symbols-forum-rounded',
      iconBg: 'bg-[#e07c5c]/15',
      iconColor: 'text-[#ffae94]',
    },
  ]
</script>

<template>
  <section
    id="walkthrough"
    class="relative overflow-hidden bg-[#0f172b] px-6 py-24 text-white sm:px-8 sm:py-28 lg:px-12"
  >
    <div
      class="walkthrough-grid pointer-events-none absolute inset-0 opacity-40"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -bottom-48 -right-32 h-[34rem] w-[34rem] rounded-full bg-[#6d5efc]/15 blur-3xl"
      aria-hidden="true"
    />
    <div class="container relative mx-auto">
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="text-xs font-semibold uppercase tracking-[0.2em] text-[#57d8be]"
        >
          See the workflow in motion
        </p>
        <h2
          class="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl"
        >
          A visual canvas for production Vue.
        </h2>
        <p class="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-300">
          Start with the visual editor, refine with the tools you already trust,
          and keep moving with a live preview beside your code.
        </p>
      </div>

      <div
        class="mt-14 grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20"
      >
        <div>
          <div
            class="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-3 shadow-[0_25px_80px_rgba(0,0,0,0.28)] sm:p-5"
          >
            <div class="flex items-center justify-between px-2 pb-4">
              <div class="flex items-center gap-2">
                <span
                  class="flex h-8 w-8 items-center justify-center rounded-lg bg-[#6d5efc]/20 text-[#b9b2ff]"
                >
                  <BaseIcon name="i-material-symbols-play-circle-rounded" />
                </span>
                <div>
                  <p class="text-xs font-semibold">
                    Vue Designer — Quick Start
                  </p>
                  <p class="mt-0.5 text-[11px] text-slate-400">
                    A short guided tour
                  </p>
                </div>
              </div>
              <span
                class="rounded-full border border-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400"
                >03:42</span
              >
            </div>
            <div class="overflow-hidden rounded-xl bg-[#080d1a]">
              <lite-youtube
                videoid="1WDZdu6XwI8"
                title="Vue Designer - Quick Start"
                playlabel="Vue Designer - Quick Start"
                class="aspect-video w-full"
              />
            </div>
          </div>
        </div>

        <div>
          <p
            class="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400"
          >
            Keep exploring
          </p>
          <h3
            class="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em]"
          >
            Everything you need to keep shipping.
          </h3>
          <div class="mt-8 space-y-3">
            <a
              v-for="item in resourceLinks"
              :key="item.label"
              :href="item.href"
              target="_blank"
              rel="noopener noreferrer"
              class="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.08]"
            >
              <span
                class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                :class="item.iconBg"
              >
                <BaseIcon :name="item.icon" :class="item.iconColor" />
              </span>
              <span class="min-w-0">
                <span class="block text-sm font-semibold text-white">{{
                  item.label
                }}</span>
                <span class="mt-1 block text-xs leading-5 text-slate-400">{{
                  item.description
                }}</span>
              </span>
              <BaseIcon
                name="i-material-symbols-arrow-outward-rounded"
                class="ml-auto shrink-0 text-slate-500 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
              />
            </a>
          </div>
          <div class="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-sm">
            <a
              href="https://vuedesigner.com"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-[#57d8be] transition hover:text-white"
              >Start the free trial <span aria-hidden="true">↗</span></a
            >
            <a
              href="https://vuedesigner.com/#buy"
              target="_blank"
              rel="noopener noreferrer"
              class="font-semibold text-slate-300 transition hover:text-white"
              >View purchase options <span aria-hidden="true">↗</span></a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
  .walkthrough-grid {
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.045) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: linear-gradient(to bottom, black 10%, transparent 90%);
  }
</style>
