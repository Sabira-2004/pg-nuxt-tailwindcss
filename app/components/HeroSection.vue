<script setup lang="ts">
  import { heroImageUrl } from '@/utils/hero'

  const heroBenefits = [
    'Works with your existing Vue workflow',
    'Supports Nuxt and every Vite-based project',
    'No lock-in — keep shipping standard .vue files',
  ]
</script>
<template>
  <section
    aria-labelledby="hero-title"
    class="relative isolate overflow-hidden bg-neutral-50 dark:bg-neutral-950"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-primary-200/60 blur-3xl dark:bg-primary-900/30"
    />
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -bottom-40 -left-24 h-96 w-96 rounded-full bg-secondary-100/70 blur-3xl dark:bg-secondary-900/30"
    />

    <div
      class="container relative mx-auto px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div class="max-w-2xl">
          <div
            class="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-primary-50 px-3 py-1.5 text-sm font-semibold text-primary-700 dark:border-primary-800 dark:bg-primary-950 dark:text-primary-200"
          >
            <span class="h-2 w-2 rounded-full bg-primary-500" />
            Vue Designer for Nuxt
          </div>
          <h1
            id="hero-title"
            class="mt-7 max-w-xl !text-5xl !leading-[1.08] tracking-tight text-secondary-950 dark:text-white sm:!text-6xl"
          >
            Design your Vue apps at the speed of thought.
          </h1>
          <p
            class="mt-6 max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-300 sm:text-xl"
          >
            Vue Designer is a visual IDE for Vue applications. Design components
            with drag-and-drop controls, live data and a workflow that stays
            close to your code.
          </p>

          <div class="mt-8 flex flex-col gap-3 sm:flex-row">
            <BaseButton
              to="https://vuedesigner.com"
              external
              target="_blank"
              trailing-icon="i-material-symbols-arrow-outward"
              size="xl"
              label="Start free trial"
            />
            <BaseButton
              to="/quick-start"
              color="secondary"
              variant="outline"
              size="xl"
              label="Explore the quick start"
            />
          </div>

          <ul
            class="mt-8 grid gap-3 text-sm text-neutral-600 dark:text-neutral-300 sm:grid-cols-3 lg:grid-cols-1"
          >
            <li
              v-for="benefit in heroBenefits"
              :key="benefit"
              class="flex items-start gap-2"
            >
              <BaseIcon
                name="i-material-symbols-check-circle-outline"
                class="mt-0.5 h-5 w-5 flex-none text-primary-500"
                aria-hidden="true"
              />
              <span>{{ benefit }}</span>
            </li>
          </ul>
        </div>

        <div class="relative mx-auto w-full max-w-2xl lg:pl-4">
          <div
            aria-hidden="true"
            class="absolute -inset-4 rounded-[2rem] border border-primary-200/70 dark:border-primary-800/60"
          />
          <div
            class="relative overflow-hidden rounded-3xl border border-secondary-200 bg-white p-2 shadow-2xl shadow-secondary-900/10 dark:border-secondary-800 dark:bg-secondary-950"
          >
            <div
              class="flex items-center justify-between rounded-t-2xl border-b border-neutral-200 bg-neutral-50 px-4 py-3 dark:border-secondary-800 dark:bg-secondary-900"
            >
              <div class="flex items-center gap-2">
                <span class="h-2.5 w-2.5 rounded-full bg-error-400" />
                <span class="h-2.5 w-2.5 rounded-full bg-warning-400" />
                <span class="h-2.5 w-2.5 rounded-full bg-success-400" />
              </div>
              <span
                class="text-xs font-semibold tracking-wide text-neutral-500 dark:text-neutral-300"
              >
                Visual editor preview
              </span>
              <BaseIcon
                name="i-material-symbols-more-horiz"
                class="h-5 w-5 text-neutral-400"
                aria-hidden="true"
              />
            </div>
            <div class="bg-neutral-100 p-2 dark:bg-neutral-900">
              <NuxtImg
                :src="heroImageUrl"
                alt="Vue Designer visual editor showing a Vue application layout"
                width="1799"
                height="1005"
                sizes="sm:100vw md:80vw lg:55vw"
                loading="eager"
                class="h-auto w-full rounded-2xl object-cover"
              />
            </div>
          </div>
          <div
            class="absolute -bottom-6 -left-4 hidden items-center gap-3 rounded-2xl border border-neutral-200 bg-white px-4 py-3 shadow-xl dark:border-secondary-800 dark:bg-secondary-900 sm:flex"
          >
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200"
            >
              <BaseIcon
                name="i-material-symbols-auto-awesome"
                class="h-5 w-5"
                aria-hidden="true"
              />
            </span>
            <span>
              <span
                class="block text-xs font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400"
              >
                Built for Vue
              </span>
              <span
                class="block text-sm font-bold text-secondary-950 dark:text-white"
              >
                Visual. Flexible. Yours.
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
