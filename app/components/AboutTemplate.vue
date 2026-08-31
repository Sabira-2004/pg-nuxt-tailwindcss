<script setup lang="ts">
  import siteMeta from '@/site'

  const { description } = siteMeta
</script>
<template>
  <section
    class="bg-neutral-50 px-6 py-24 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50 sm:px-8 lg:px-12 lg:py-32"
    aria-labelledby="about-template-title"
  >
    <div class="container mx-auto">
      <div
        class="mb-14 grid gap-7 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-16"
      >
        <div>
          <p
            class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300"
          >
            Your workflow, amplified
          </p>
          <h2
            id="about-template-title"
            class="mb-0 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.035em] sm:text-4xl lg:text-5xl"
          >
            Keep your codebase. Add a visual IDE.
          </h2>
        </div>
        <p
          class="max-w-2xl text-base leading-8 text-neutral-600 dark:text-neutral-300 lg:pb-1 lg:text-lg"
        >
          Vue Designer works alongside your existing tooling, opening and saving
          standard Vue components while giving you a faster visual way to shape
          the details.
        </p>
      </div>

      <div class="grid gap-4 md:grid-cols-3">
        <article
          class="group rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-950/5 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-primary-800"
        >
          <div class="mb-10 flex items-center justify-between">
            <span
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200"
            >
              <BaseIcon
                name="i-mdi-lightning-bolt-outline"
                class="h-6 w-6"
                aria-hidden="true"
              />
            </span>
            <span class="text-sm font-semibold text-neutral-400">01</span>
          </div>
          <h3 class="mb-3 text-xl font-semibold tracking-tight">
            Fits your Vite workflow
          </h3>
          <p class="leading-7 text-neutral-600 dark:text-neutral-300">
            Bring visual editing to the project you already have, without
            changing the way your team builds and ships.
          </p>
        </article>
        <article
          class="group rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-tertiary-200 hover:shadow-xl hover:shadow-tertiary-950/5 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-tertiary-800"
        >
          <div class="mb-10 flex items-center justify-between">
            <span
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-tertiary-100 text-tertiary-700 dark:bg-tertiary-900 dark:text-tertiary-200"
            >
              <BaseIcon
                name="i-mdi-layers-triple-outline"
                class="h-6 w-6"
                aria-hidden="true"
              />
            </span>
            <span class="text-sm font-semibold text-neutral-400">02</span>
          </div>
          <h3 class="mb-3 text-xl font-semibold tracking-tight">
            Designed for Nuxt
          </h3>
          <p class="leading-7 text-neutral-600 dark:text-neutral-300">
            Work confidently with Vue meta-frameworks such as Nuxt and keep your
            app structure clear as it grows.
          </p>
        </article>
        <article
          class="group rounded-3xl border border-neutral-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-secondary-300 hover:shadow-xl hover:shadow-secondary-950/5 dark:border-neutral-700 dark:bg-neutral-800 dark:hover:border-secondary-600"
        >
          <div class="mb-10 flex items-center justify-between">
            <span
              class="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-100 text-secondary-700 dark:bg-secondary-800 dark:text-secondary-100"
            >
              <BaseIcon
                name="i-mdi-database-eye-outline"
                class="h-6 w-6"
                aria-hidden="true"
              />
            </span>
            <span class="text-sm font-semibold text-neutral-400">03</span>
          </div>
          <h3 class="mb-3 text-xl font-semibold tracking-tight">
            Design with live data
          </h3>
          <p class="leading-7 text-neutral-600 dark:text-neutral-300">
            Build responsive components with visual controls and preview them
            against the information your application really uses.
          </p>
        </article>
      </div>

      <div
        class="relative mt-16 overflow-hidden rounded-[2rem] bg-secondary-950 p-6 text-neutral-50 shadow-2xl shadow-secondary-950/10 sm:p-10 lg:mt-20 lg:p-12"
      >
        <div
          class="pointer-events-none absolute -right-20 -top-24 h-72 w-72 rounded-full bg-primary-500/15 blur-3xl"
          aria-hidden="true"
        />
        <div
          class="relative grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
        >
          <div>
            <p
              class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-300"
            >
              Template essentials
            </p>
            <h3
              class="mb-4 max-w-md text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl"
            >
              A strong, editable foundation for your next interface.
            </h3>
            <p class="max-w-xl leading-7 text-neutral-300">
              {{ description }} It includes the
              <NuxtLink
                class="font-medium text-primary-200 underline decoration-primary-400 underline-offset-4 hover:text-primary-100"
                target="_blank"
                external
                href="https://www.npmjs.com/package/@pinegrow/nuxt-module"
                >Pinegrow Nuxt Module</NuxtLink
              >
              and
              <NuxtLink
                class="font-medium text-primary-200 underline decoration-primary-400 underline-offset-4 hover:text-primary-100"
                target="_blank"
                external
                href="https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin"
                >Pinegrow Tailwind CSS Plugin</NuxtLink
              >
              so you can visually design your Vue single-file components.
            </p>
            <BaseButton
              label="Read the quick start"
              size="lg"
              to="/quick-start"
              trailing-icon="i-mdi-arrow-right"
              class="mt-7 !text-secondary-950"
            />
          </div>
          <div class="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div
              class="flex items-center justify-between rounded-2xl border border-neutral-50/10 bg-neutral-50/5 px-5 py-4"
            >
              <span class="text-sm text-neutral-300">Meta-framework</span>
              <span class="font-semibold text-white">Nuxt</span>
            </div>
            <div
              class="flex items-center justify-between rounded-2xl border border-neutral-50/10 bg-neutral-50/5 px-5 py-4"
            >
              <span class="text-sm text-neutral-300">Styling</span>
              <span class="font-semibold text-white">Tailwind CSS</span>
            </div>
            <div
              class="flex items-center justify-between rounded-2xl border border-neutral-50/10 bg-neutral-50/5 px-5 py-4"
            >
              <span class="text-sm text-neutral-300">Visual editing</span>
              <span class="font-semibold text-white">Vue Designer</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
