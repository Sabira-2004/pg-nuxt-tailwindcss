<script setup lang="ts">
  import siteMeta from '@/site'
  const { description } = siteMeta

  const stackCards = [
    {
      icon: 'i-logos-nuxt-icon',
      eyebrow: 'Meta-framework',
      title: 'Nuxt',
      description:
        'Build full-featured Vue applications with a production-ready foundation.',
    },
    {
      icon: 'i-logos-tailwindcss-icon',
      eyebrow: 'UI framework',
      title: 'Tailwind CSS',
      description:
        'Shape responsive interfaces with a themeable utility-first design system.',
    },
    {
      icon: 'i-material-symbols-extension-outline',
      eyebrow: 'Visual workflow',
      title: 'Pinegrow + Vue Designer',
      description:
        'Design standard Vue single-file components without leaving your codebase.',
    },
  ]
</script>
<template>
  <section
    id="about"
    aria-labelledby="about-title"
    class="border-y border-neutral-200 bg-white dark:border-neutral-800 dark:bg-neutral-900"
  >
    <div class="container mx-auto px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div
        class="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20"
      >
        <div>
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-primary-600 dark:text-primary-300"
          >
            Built for Vue teams
          </p>
          <h2
            id="about-title"
            class="mt-4 max-w-lg text-secondary-950 dark:text-white"
          >
            A smoother way to turn ideas into interfaces.
          </h2>
          <p
            class="mt-5 max-w-xl text-lg leading-8 text-neutral-600 dark:text-neutral-300"
          >
            {{ description }} Keep the flexibility of your existing toolchain,
            with a visual layer that helps you move from a blank component to a
            polished responsive layout faster.
          </p>
          <p
            class="mt-5 max-w-xl leading-7 text-neutral-600 dark:text-neutral-300"
          >
            This starter includes the
            <NuxtLink
              class="font-semibold text-primary-700 underline decoration-primary-300 underline-offset-4 hover:text-primary-600 dark:text-primary-300 dark:decoration-primary-700"
              target="_blank"
              external
              href="https://www.npmjs.com/package/@pinegrow/nuxt-module"
              >Pinegrow Nuxt Module</NuxtLink
            >
            and
            <NuxtLink
              class="font-semibold text-primary-700 underline decoration-primary-300 underline-offset-4 hover:text-primary-600 dark:text-primary-300 dark:decoration-primary-700"
              target="_blank"
              external
              href="https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin"
              >Pinegrow Tailwind CSS Plugin</NuxtLink
            >
            so you can visually design standard Vue single-file components.
          </p>
          <div class="mt-8">
            <BaseButton
              label="Read the quick start"
              size="lg"
              to="/quick-start"
              trailing-icon="i-material-symbols-arrow-forward"
            />
          </div>
        </div>

        <div class="grid gap-4 sm:grid-cols-2">
          <article
            v-for="(card, index) in stackCards"
            :key="card.title"
            :class="[
              'rounded-2xl border border-neutral-200 bg-neutral-50 p-6 dark:border-neutral-800 dark:bg-neutral-950',
              index === 2 ? 'sm:col-span-2' : '',
            ]"
          >
            <div class="flex items-start justify-between gap-4">
              <span
                class="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200"
              >
                <BaseIcon
                  :name="card.icon"
                  class="h-6 w-6"
                  aria-hidden="true"
                />
              </span>
              <span
                class="text-xs font-bold uppercase tracking-wider text-neutral-400"
              >
                0{{ index + 1 }}
              </span>
            </div>
            <p
              class="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-primary-600 dark:text-primary-300"
            >
              {{ card.eyebrow }}
            </p>
            <h3 class="mt-2 !text-2xl text-secondary-950 dark:text-white">
              {{ card.title }}
            </h3>
            <p class="mt-3 leading-7 text-neutral-600 dark:text-neutral-300">
              {{ card.description }}
            </p>
          </article>
        </div>
      </div>

      <div
        class="mt-16 overflow-hidden rounded-3xl bg-secondary-950 p-6 text-white dark:bg-secondary-950 sm:p-8 lg:p-10"
      >
        <div class="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p
              class="text-sm font-bold uppercase tracking-[0.2em] text-primary-300"
            >
              Pre-packed and ready to explore
            </p>
            <h3 class="mt-3 !text-3xl !leading-tight text-white sm:!text-4xl">
              Nuxt + Tailwind CSS, with a visual workflow built in.
            </h3>
            <p class="mt-4 max-w-2xl leading-7 text-secondary-100">
              Start with a carefully connected project and spend your time on
              the experience you want to create.
            </p>
          </div>
          <div class="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            <div class="rounded-2xl bg-white/10 p-4">
              <p
                class="text-xs font-semibold uppercase tracking-wider text-secondary-200"
              >
                Meta-framework
              </p>
              <p class="mt-1 text-lg font-bold">Nuxt</p>
            </div>
            <div class="rounded-2xl bg-white/10 p-4">
              <p
                class="text-xs font-semibold uppercase tracking-wider text-secondary-200"
              >
                UI framework
              </p>
              <p class="mt-1 text-lg font-bold">Tailwind</p>
            </div>
            <div class="rounded-2xl bg-white/10 p-4">
              <p
                class="text-xs font-semibold uppercase tracking-wider text-secondary-200"
              >
                Editor
              </p>
              <p class="mt-1 text-lg font-bold">Vue Designer</p>
            </div>
            <div class="rounded-2xl bg-primary-500 p-4 text-secondary-950">
              <p
                class="text-xs font-semibold uppercase tracking-wider text-secondary-950/70"
              >
                Files
              </p>
              <p class="mt-1 text-lg font-bold">.vue</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
