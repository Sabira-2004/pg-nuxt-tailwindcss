<script setup lang="ts">
  const heroDescription =
    'A visual IDE for Vue apps that works with your existing Vite workflow, so you can design faster while keeping your code and tools.'

  const { optimizeImage } = useOptimizeImage()
  const heroImageOptimized = {
    alt: 'Vue Designer visual editor interface showing a Vue application',
    ...optimizeImage('https://pinegrow.com/wp-content/uploads/image-120.png', {
      sizes: 'xs:100vw sm:640px lg:760px',
    }),
  }

  const workflowHighlights = [
    { label: 'Works with', value: 'Any Vite project' },
    { label: 'Supports', value: 'Nuxt & Iles' },
    { label: 'Keeps', value: 'Your standard .vue files' },
  ]
</script>

<template>
  <section
    class="relative isolate overflow-hidden bg-secondary-950 text-neutral-50"
  >
    <div
      class="pointer-events-none absolute -left-40 top-24 h-[28rem] w-[28rem] rounded-full bg-primary-500/20 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-32 top-0 h-[30rem] w-[30rem] rounded-full bg-tertiary-500/20 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary-800/50 via-secondary-950/95 to-secondary-950"
      aria-hidden="true"
    />

    <div
      class="container relative mx-auto px-6 pb-14 pt-14 sm:px-8 lg:px-12 lg:pb-20 lg:pt-20"
    >
      <div
        class="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
      >
        <div class="max-w-2xl text-center lg:text-left">
          <div
            class="mb-7 inline-flex items-center gap-2 rounded-full border border-primary-300/30 bg-primary-400/10 px-3.5 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-primary-100"
          >
            <span
              class="h-2 w-2 rounded-full bg-primary-300 ring-4 ring-primary-300/10"
              aria-hidden="true"
            />
            The visual IDE for Vue
          </div>
          <h1
            class="mb-7 max-w-2xl text-4xl font-semibold leading-[1.08] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            Design your Vue UI
            <span class="text-primary-300">at the speed of thought.</span>
          </h1>
          <p
            class="mx-auto mb-9 max-w-xl text-base leading-8 text-neutral-200 sm:text-lg lg:mx-0"
          >
            {{ heroDescription }}
          </p>
          <div
            class="flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
          >
            <BaseButton
              to="https://vuedesigner.com"
              target="_blank"
              size="xl"
              color="primary"
              trailing-icon="i-material-symbols-arrow-outward-rounded"
              label="Start your free trial"
              class="!text-secondary-950"
            />
            <NuxtLink
              to="/quick-start"
              class="group inline-flex items-center gap-2 rounded-3xl px-4 py-3 text-base font-medium text-neutral-50 transition hover:text-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
            >
              See how it works
              <BaseIcon
                name="i-mdi-arrow-right"
                class="h-5 w-5 transition-transform duration-200 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </NuxtLink>
          </div>
          <p
            class="mt-6 text-xs font-medium uppercase tracking-[0.12em] text-neutral-400"
          >
            Free trial included · No lock-in · Build locally
          </p>
        </div>

        <div class="relative mx-auto w-full max-w-3xl lg:pt-4">
          <div
            class="absolute -inset-6 rounded-[2.5rem] bg-primary-500/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            class="absolute -right-3 -top-5 z-10 hidden items-center gap-2 rounded-2xl border border-neutral-50/15 bg-secondary-900/90 px-4 py-3 text-xs font-semibold text-neutral-100 shadow-xl backdrop-blur sm:flex"
          >
            <span
              class="flex h-7 w-7 items-center justify-center rounded-lg bg-primary-400/20 text-primary-200"
            >
              <BaseIcon
                name="i-mdi-cursor-default-click-outline"
                class="h-4 w-4"
                aria-hidden="true"
              />
            </span>
            Live visual controls
          </div>
          <div
            class="relative overflow-hidden rounded-[1.75rem] border border-neutral-50/15 bg-secondary-900/80 p-2 shadow-2xl shadow-secondary-950/50 backdrop-blur sm:p-3"
          >
            <div
              class="flex items-center justify-between border-b border-neutral-50/10 px-3 pb-3 pt-1 sm:px-4"
            >
              <div class="flex gap-1.5" aria-hidden="true">
                <span class="h-2.5 w-2.5 rounded-full bg-error-400" />
                <span class="h-2.5 w-2.5 rounded-full bg-warning-400" />
                <span class="h-2.5 w-2.5 rounded-full bg-primary-400" />
              </div>
              <span
                class="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-neutral-400"
              >
                Vue Designer
              </span>
            </div>
            <div class="p-2 sm:p-3">
              <img
                v-bind="heroImageOptimized"
                class="block h-auto w-full rounded-[1rem] object-contain shadow-2xl"
                fetchpriority="high"
              />
            </div>
          </div>
          <div
            class="absolute -bottom-5 left-5 z-10 flex items-center gap-3 rounded-2xl border border-neutral-50/15 bg-secondary-900/95 px-4 py-3 shadow-xl backdrop-blur sm:left-8"
          >
            <span
              class="flex h-9 w-9 items-center justify-center rounded-xl bg-tertiary-400/15 text-tertiary-200"
            >
              <BaseIcon
                name="i-mdi-code-tags-check"
                class="h-5 w-5"
                aria-hidden="true"
              />
            </span>
            <span>
              <span class="block text-xs font-medium text-neutral-400"
                >Your workflow, preserved</span
              >
              <span class="mt-0.5 block text-sm font-semibold text-white"
                >Standard Vue components</span
              >
            </span>
          </div>
        </div>
      </div>

      <dl
        class="mt-20 grid gap-px overflow-hidden rounded-2xl border border-neutral-50/10 bg-neutral-50/10 sm:grid-cols-3"
      >
        <div
          v-for="highlight in workflowHighlights"
          :key="highlight.label"
          class="bg-secondary-900/70 px-5 py-5 text-center sm:px-6 sm:text-left"
        >
          <dt
            class="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-primary-300"
          >
            {{ highlight.label }}
          </dt>
          <dd class="mt-2 text-sm font-medium text-neutral-100">
            {{ highlight.value }}
          </dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped></style>
