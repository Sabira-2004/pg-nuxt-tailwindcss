<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroDescription =
    'A desktop drag-and-drop editor for Mac, Windows and Linux that lets you visually design your Vue apps.'
</script>

<template>
  <section
    id="top"
    class="relative isolate overflow-hidden bg-[#0b1020] text-white"
  >
    <div
      class="hero-grid pointer-events-none absolute inset-0 opacity-50"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -left-32 top-16 h-80 w-80 rounded-full bg-[#6d5efc]/20 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-24 top-48 h-96 w-96 rounded-full bg-[#20b396]/10 blur-3xl"
      aria-hidden="true"
    />

    <div
      class="container relative mx-auto px-6 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-24 lg:pt-24"
    >
      <div
        class="grid items-center gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:gap-12"
      >
        <div class="max-w-2xl">
          <div
            class="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#b9b2ff]"
          >
            <span
              class="h-1.5 w-1.5 rounded-full bg-[#20b396] shadow-[0_0_0_4px_rgba(32,179,150,0.12)]"
            />
            The visual IDE for Vue
          </div>

          <h1
            class="max-w-xl text-5xl font-semibold leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl"
          >
            Design Vue apps at the speed of thought.
          </h1>
          <p
            class="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg"
          >
            {{ heroDescription }} Build with live previews, real components and
            your existing workflow — no lock-in, no handoff.
          </p>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <BaseButton
              to="https://vuedesigner.com"
              target="_blank"
              trailing
              trailing-icon="i-material-symbols-arrow-forward-rounded"
              size="xl"
              label="Try Vue Designer"
              class="!rounded-full !bg-[#20b396] !px-6 !py-3.5 !font-semibold !text-[#08131b] shadow-[0_12px_30px_rgba(32,179,150,0.22)] transition hover:!-translate-y-0.5 hover:!bg-[#42d3b5]"
            />
            <BaseButton
              to="/quick-start"
              trailing
              trailing-icon="i-material-symbols-arrow-outward-rounded"
              size="xl"
              label="Explore the quick start"
              color="white"
              variant="ghost"
              class="!rounded-full !border !border-white/15 !px-6 !py-3.5 !text-slate-200 hover:!bg-white/10 hover:!text-white"
            />
          </div>

          <div
            class="mt-11 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs font-medium text-slate-400"
          >
            <span class="inline-flex items-center gap-2">
              <BaseIcon
                name="i-material-symbols-check-circle-rounded"
                class="text-[#20b396]"
              />
              Nuxt-ready
            </span>
            <span class="inline-flex items-center gap-2">
              <BaseIcon
                name="i-material-symbols-check-circle-rounded"
                class="text-[#20b396]"
              />
              Standard .vue files
            </span>
            <span class="inline-flex items-center gap-2">
              <BaseIcon
                name="i-material-symbols-check-circle-rounded"
                class="text-[#20b396]"
              />
              Free trial included
            </span>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-3xl lg:ml-auto">
          <div
            class="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[#6d5efc]/20 via-transparent to-[#20b396]/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            class="relative rounded-[1.5rem] border border-white/15 bg-white/[0.08] p-2 shadow-[0_30px_90px_rgba(0,0,0,0.38)] backdrop-blur-sm sm:p-3"
          >
            <div class="flex items-center justify-between px-3 py-2 sm:px-4">
              <div class="flex items-center gap-1.5" aria-hidden="true">
                <span class="h-2.5 w-2.5 rounded-full bg-[#ff6b78]" />
                <span class="h-2.5 w-2.5 rounded-full bg-[#ffc857]" />
                <span class="h-2.5 w-2.5 rounded-full bg-[#20b396]" />
              </div>
              <span
                class="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400"
              >
                live visual editing
              </span>
              <BaseIcon
                name="i-material-symbols-more-horiz"
                class="text-slate-400"
              />
            </div>
            <div
              class="overflow-hidden rounded-xl border border-white/10 bg-[#13192b]"
            >
              <img
                :src="heroImageUrl"
                alt="Vue Designer visual editor showing a live Vue app preview"
                class="block aspect-[2878/1608] h-auto w-full object-cover object-top"
                loading="eager"
              />
            </div>
            <div
              class="flex items-center justify-between gap-4 px-2 pb-1 pt-3 sm:px-3"
            >
              <div class="flex min-w-0 items-center gap-2">
                <span
                  class="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#6d5efc]/20 text-[#b9b2ff]"
                >
                  <BaseIcon name="i-material-symbols-code-rounded" />
                </span>
                <span class="truncate text-xs font-medium text-slate-300"
                  >HeroSection.vue</span
                >
              </div>
              <span
                class="inline-flex shrink-0 items-center gap-1.5 text-[11px] font-semibold text-[#57d8be]"
              >
                <span class="h-1.5 w-1.5 rounded-full bg-[#20b396]" />
                Preview synced
              </span>
            </div>
          </div>

          <div
            class="absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-white/15 bg-[#171d31]/95 px-4 py-3 shadow-xl backdrop-blur-md sm:flex lg:-left-12"
          >
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#20b396]/15 text-[#57d8be]"
            >
              <BaseIcon name="i-material-symbols-auto-awesome-rounded" />
            </span>
            <div>
              <p class="text-[10px] uppercase tracking-[0.14em] text-slate-500">
                Your workflow
              </p>
              <p class="mt-0.5 text-xs font-semibold text-white">
                Visual first. Code always.
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        class="mt-20 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400 transition hover:text-white"
      >
        <span
          class="flex h-9 w-9 items-center justify-center rounded-full border border-white/15"
        >
          <BaseIcon name="i-material-symbols-arrow-downward-rounded" />
        </span>
        See how it fits
      </a>
    </div>
  </section>
</template>

<style scoped>
  .hero-grid {
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.045) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.045) 1px, transparent 1px);
    background-size: 72px 72px;
    mask-image: linear-gradient(to bottom, black 20%, transparent 88%);
  }
</style>
