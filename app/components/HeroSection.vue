<script setup lang="ts">
  const heroDescription =
    'Vue Designer is a visual IDE for Vue apps that fits into your existing Vite workflow, with no lock-in.'

  const { optimizeImage } = useOptimizeImage()
  const heroImageOptimized = {
    alt: 'Vue Designer visual editor interface',
    ...optimizeImage('https://pinegrow.com/wp-content/uploads/image-120.png', {
      sizes: 'xs:280px sm:360px md:460px',
    }),
  }
</script>
<template>
  <section
    class="relative isolate overflow-hidden bg-secondary-950 text-neutral-50"
  >
    <div
      class="pointer-events-none absolute -left-28 top-12 h-80 w-80 rounded-full bg-primary-500/20 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -right-24 bottom-0 h-96 w-96 rounded-full bg-tertiary-500/20 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 bg-gradient-to-br from-secondary-800/40 via-secondary-950 to-secondary-950"
      aria-hidden="true"
    />
    <div
      class="container relative mx-auto grid min-h-[620px] items-center gap-12 px-6 py-20 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-12 lg:py-24"
    >
      <div class="max-w-2xl text-center lg:text-left">
        <div
          class="mb-6 inline-flex items-center gap-2 rounded-full border border-primary-300/30 bg-primary-400/10 px-3 py-1.5 text-sm font-medium text-primary-100"
        >
          <span
            class="h-2 w-2 rounded-full bg-primary-400"
            aria-hidden="true"
          />
          Visual IDE for Vue apps
        </div>
        <h1
          class="mb-6 max-w-xl text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Build your Vue app in a more visual way.
        </h1>
        <p
          class="mb-8 max-w-xl text-base leading-8 text-neutral-200 sm:text-lg"
        >
          {{ heroDescription }}
        </p>
        <div
          class="flex flex-col items-center gap-3 sm:flex-row lg:justify-start"
        >
          <BaseButton
            to="https://vuedesigner.com"
            target="_blank"
            size="lg"
            color="primary"
            trailing-icon="i-material-symbols-open-in-new"
            label="Start your free trial"
            class="!text-secondary-950"
          />
          <NuxtLink
            to="/quick-start"
            class="inline-flex items-center gap-2 rounded-3xl px-4 py-3 text-base font-medium text-neutral-50 transition hover:text-primary-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-300"
          >
            Explore the quick start
            <BaseIcon
              name="i-mdi-arrow-right"
              class="h-5 w-5"
              aria-hidden="true"
            />
          </NuxtLink>
        </div>
        <dl
          class="mt-10 grid max-w-lg grid-cols-3 gap-4 border-t border-neutral-50/15 pt-6 text-left"
        >
          <div>
            <dt
              class="text-xs font-medium uppercase tracking-wider text-neutral-300"
            >
              Workflow
            </dt>
            <dd class="mt-1 text-sm font-semibold text-white">Vite-ready</dd>
          </div>
          <div>
            <dt
              class="text-xs font-medium uppercase tracking-wider text-neutral-300"
            >
              Framework
            </dt>
            <dd class="mt-1 text-sm font-semibold text-white">Nuxt-friendly</dd>
          </div>
          <div>
            <dt
              class="text-xs font-medium uppercase tracking-wider text-neutral-300"
            >
              Editing
            </dt>
            <dd class="mt-1 text-sm font-semibold text-white">No lock-in</dd>
          </div>
        </dl>
      </div>
      <div class="relative mx-auto w-full max-w-xl">
        <div
          class="absolute -inset-5 rounded-[2rem] bg-primary-500/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          class="relative overflow-hidden rounded-3xl border border-neutral-50/15 bg-secondary-900/80 p-3 shadow-2xl shadow-secondary-950/40 backdrop-blur sm:p-5"
        >
          <div
            class="flex items-center justify-between border-b border-neutral-50/10 px-2 pb-4"
          >
            <div class="flex gap-1.5" aria-hidden="true">
              <span class="h-2.5 w-2.5 rounded-full bg-error-400" />
              <span class="h-2.5 w-2.5 rounded-full bg-warning-400" />
              <span class="h-2.5 w-2.5 rounded-full bg-primary-400" />
            </div>
            <span
              class="text-xs font-medium uppercase tracking-[0.18em] text-neutral-300"
            >
              Vue Designer
            </span>
          </div>
          <div
            class="grid min-h-[350px] grid-cols-[74px_1fr] pt-4 sm:min-h-[410px] sm:grid-cols-[92px_1fr]"
          >
            <div class="border-r border-neutral-50/10 pr-3">
              <div class="rounded-xl bg-primary-400/20 p-2 text-primary-200">
                <BaseIcon
                  name="i-mdi-view-dashboard-outline"
                  class="h-5 w-5"
                  aria-hidden="true"
                />
              </div>
              <div class="mt-4 space-y-3" aria-hidden="true">
                <span class="block h-2 rounded-full bg-neutral-50/15" />
                <span class="block h-2 rounded-full bg-neutral-50/10" />
                <span class="block h-2 rounded-full bg-neutral-50/10" />
                <span class="block h-2 rounded-full bg-neutral-50/10" />
              </div>
            </div>
            <div
              class="flex flex-col items-center justify-center px-5 text-center sm:px-8"
            >
              <img
                v-bind="heroImageOptimized"
                class="mb-6 h-auto w-full max-w-[260px] rounded-lg object-contain shadow-2xl sm:max-w-[320px]"
              />
              <p class="text-sm font-semibold text-white">
                Edit components with live visual controls.
              </p>
              <p class="mt-2 text-xs leading-5 text-neutral-300">
                Open standard Vue files, shape responsive interfaces, and keep
                working with the tools you already use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
