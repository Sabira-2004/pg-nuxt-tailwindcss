<script setup lang="ts">
  import siteMeta from '@/site'

  const { description } = siteMeta

  const features = [
    {
      icon: 'i-material-symbols-auto-awesome',
      title: 'Design in real time',
      description:
        'See your Vue components as you build them with live previews and visual controls that keep you in the creative flow.',
    },
    {
      icon: 'i-mdi-file-tree-outline',
      title: 'Navigate your app',
      description:
        'Move through your components with a clear app tree, so even complex Vue projects stay easy to understand.',
    },
    {
      icon: 'i-mdi-cube-outline',
      title: 'Use your library',
      description:
        'Work with Nuxt UI, Vuetify, Naive UI, or your own web-types-powered component library.',
    },
    {
      icon: 'i-mdi-code-tags',
      title: 'Keep clean code',
      description:
        'Vue Designer opens and saves standard .vue files, so your code and workflow stay yours from day one.',
    },
  ]
</script>

<template>
  <section id="features" class="bg-neutral-50 dark:bg-neutral-950">
    <div
      class="container mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div class="max-w-3xl">
        <p
          class="text-sm font-bold uppercase tracking-[0.18em] text-secondary-600 dark:text-secondary-300"
        >
          A better way to build
        </p>
        <h2
          class="mt-4 max-w-2xl text-3xl font-extrabold leading-tight tracking-[-0.04em] text-primary-950 dark:text-white sm:text-5xl"
        >
          From first idea to finished interface.
        </h2>
        <p
          class="mt-6 max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300 sm:text-lg"
        >
          Vue Designer brings visual editing into the Vue workflow you already
          know. Make thoughtful design decisions quickly, then keep building
          with the tools and codebase you trust.
        </p>
      </div>

      <div class="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="group rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-950/5 dark:border-neutral-800 dark:bg-neutral-900/70 dark:hover:border-primary-700"
        >
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-50 text-primary-700 transition-colors group-hover:bg-primary-600 group-hover:text-white dark:bg-primary-950 dark:text-primary-200"
          >
            <BaseIcon :name="feature.icon" height="22px" />
          </div>
          <h3
            class="mt-6 text-lg font-bold tracking-tight text-primary-950 dark:text-white"
          >
            {{ feature.title }}
          </h3>
          <p
            class="mt-3 text-sm leading-7 text-neutral-600 dark:text-neutral-300"
          >
            {{ feature.description }}
          </p>
        </article>
      </div>

      <div
        class="mt-16 grid overflow-hidden rounded-[2rem] border border-primary-100 bg-white shadow-sm dark:border-primary-900/60 dark:bg-neutral-900 md:grid-cols-[0.95fr_1.05fr]"
      >
        <div class="p-7 sm:p-10 lg:p-12">
          <div class="flex items-center gap-3">
            <span class="h-px w-8 bg-secondary-500" />
            <p
              class="text-xs font-bold uppercase tracking-[0.18em] text-secondary-600 dark:text-secondary-300"
            >
              Built for Vue teams
            </p>
          </div>
          <h3
            class="mt-6 text-2xl font-extrabold tracking-[-0.03em] text-primary-950 dark:text-white sm:text-3xl"
          >
            A clean Nuxt + Tailwind foundation to start from.
          </h3>
          <p
            class="mt-5 text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base"
          >
            {{ description }} This starter includes the Pinegrow Nuxt Module and
            Tailwind CSS Plugin so you can visually design Vue single-file
            components right away.
          </p>
          <BaseButton
            class="mt-8 !rounded-xl"
            label="Open the quick start"
            size="lg"
            to="/quick-start"
            trailing
            trailing-icon="i-material-symbols-arrow-forward"
          />
        </div>

        <div
          class="relative overflow-hidden bg-primary-950 p-7 text-white sm:p-10 lg:p-12"
        >
          <div
            aria-hidden="true"
            class="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-secondary-500/20 blur-3xl"
          />
          <div
            aria-hidden="true"
            class="absolute -bottom-32 -left-16 h-64 w-64 rounded-full bg-tertiary-400/15 blur-3xl"
          />
          <div class="relative">
            <p class="text-sm font-semibold text-primary-200">
              Works with your stack
            </p>
            <div class="mt-6 flex flex-wrap gap-2.5">
              <span
                class="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold"
                >Nuxt</span
              >
              <span
                class="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold"
                >Tailwind CSS</span
              >
              <span
                class="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold"
                >Vite</span
              >
              <span
                class="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold"
                >Vuetify</span
              >
              <span
                class="rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-sm font-semibold"
                >Iles</span
              >
            </div>
            <div
              class="mt-12 flex items-start gap-3 border-t border-white/15 pt-6"
            >
              <BaseIcon
                name="i-material-symbols-check-circle"
                height="21px"
                class="mt-0.5 flex-shrink-0 text-tertiary-300"
              />
              <p class="text-sm leading-7 text-primary-100/75">
                Integrate into your existing Vite-based build process, work
                alongside VS Code, and keep using Git as usual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
