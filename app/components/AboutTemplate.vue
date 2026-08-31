<script setup lang="ts">
  import siteMeta from '@/site'

  const { description } = siteMeta
</script>
<template>
  <section
    class="bg-neutral-50 px-4 py-24 text-neutral-900 dark:bg-neutral-900 dark:text-neutral-50"
    aria-labelledby="about-template-title"
  >
    <div class="container mx-auto">
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <p
          class="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300"
        >
          Your workflow, amplified
        </p>
        <h2 id="about-template-title" class="mb-5">
          Keep your codebase. Add a visual IDE.
        </h2>
        <p class="text-base leading-7 text-neutral-600 dark:text-neutral-300">
          Vue Designer works alongside your existing tooling, opening and saving
          standard Vue components while giving you a faster visual way to shape
          the details.
        </p>
      </div>
      <div class="grid gap-5 md:grid-cols-3">
        <article
          class="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
        >
          <span
            class="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary-100 text-primary-700 dark:bg-primary-900 dark:text-primary-200"
          >
            <BaseIcon
              name="i-mdi-lightning-bolt-outline"
              class="h-6 w-6"
              aria-hidden="true"
            />
          </span>
          <h3 class="mb-3 text-xl">Fits your Vite workflow</h3>
          <p class="leading-7 text-neutral-600 dark:text-neutral-300">
            Bring visual editing to the project you already have, without
            changing the way your team builds and ships.
          </p>
        </article>
        <article
          class="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
        >
          <span
            class="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-tertiary-100 text-tertiary-700 dark:bg-tertiary-900 dark:text-tertiary-200"
          >
            <BaseIcon
              name="i-mdi-layers-triple-outline"
              class="h-6 w-6"
              aria-hidden="true"
            />
          </span>
          <h3 class="mb-3 text-xl">Designed for Nuxt</h3>
          <p class="leading-7 text-neutral-600 dark:text-neutral-300">
            Work confidently with Vue meta-frameworks such as Nuxt and keep your
            app structure clear as it grows.
          </p>
        </article>
        <article
          class="rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-700 dark:bg-neutral-800"
        >
          <span
            class="mb-6 flex h-11 w-11 items-center justify-center rounded-2xl bg-secondary-100 text-secondary-700 dark:bg-secondary-800 dark:text-secondary-100"
          >
            <BaseIcon
              name="i-mdi-database-eye-outline"
              class="h-6 w-6"
              aria-hidden="true"
            />
          </span>
          <h3 class="mb-3 text-xl">Design with live data</h3>
          <p class="leading-7 text-neutral-600 dark:text-neutral-300">
            Build responsive components with visual controls and preview them
            against the information your application really uses.
          </p>
        </article>
      </div>
      <div
        class="mt-16 grid items-center gap-10 rounded-3xl border border-primary-100 bg-primary-50 p-6 dark:border-primary-900 dark:bg-primary-950/50 sm:p-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16"
      >
        <div
          class="rounded-3xl bg-secondary-900 p-6 text-neutral-50 shadow-lg sm:p-8"
        >
          <p
            class="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary-300"
          >
            Template essentials
          </p>
          <div class="space-y-4">
            <div
              class="flex items-center justify-between rounded-2xl border border-neutral-50/10 bg-neutral-50/5 px-4 py-3"
            >
              <span class="text-sm text-neutral-300">Meta-framework</span>
              <span class="font-semibold text-white">Nuxt</span>
            </div>
            <div
              class="flex items-center justify-between rounded-2xl border border-neutral-50/10 bg-neutral-50/5 px-4 py-3"
            >
              <span class="text-sm text-neutral-300">Styling</span>
              <span class="font-semibold text-white">Tailwind CSS</span>
            </div>
            <div
              class="flex items-center justify-between rounded-2xl border border-neutral-50/10 bg-neutral-50/5 px-4 py-3"
            >
              <span class="text-sm text-neutral-300">Visual editing</span>
              <span class="font-semibold text-white">Vue Designer</span>
            </div>
          </div>
        </div>
        <div>
          <p
            class="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-700 dark:text-primary-300"
          >
            About this template
          </p>
          <h3 class="mb-5">Start with a strong, editable foundation.</h3>
          <p
            class="mb-6 max-w-2xl leading-7 text-neutral-600 dark:text-neutral-300"
          >
            {{ description }} It includes the
            <NuxtLink
              class="font-medium text-primary-700 underline decoration-primary-300 underline-offset-4 hover:text-primary-800 dark:text-primary-200 dark:hover:text-primary-100"
              target="_blank"
              external
              href="https://www.npmjs.com/package/@pinegrow/nuxt-module"
              >Pinegrow Nuxt Module</NuxtLink
            >
            and
            <NuxtLink
              class="font-medium text-primary-700 underline decoration-primary-300 underline-offset-4 hover:text-primary-800 dark:text-primary-200 dark:hover:text-primary-100"
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
          />
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
