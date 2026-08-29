<script setup lang="ts">
  import vueDesignerLogo from '@/assets/images/vue-designer.svg'

  const showTitle = ref(true)

  const { optimizeImage } = useOptimizeImage()
  const logo = {
    alt: 'vue-designer',
    cover: true,
    ...optimizeImage(vueDesignerLogo),
  }
</script>
<template>
  <section class="bg-secondary-900 px-4 py-24 text-neutral-50">
    <div class="container mx-auto">
      <div
        class="mb-12 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between"
      >
        <div class="max-w-2xl">
          <p
            class="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-300"
          >
            See the workflow
          </p>
          <h2 class="mb-4 text-white">
            From first component to polished interface.
          </h2>
          <p class="max-w-xl text-base leading-7 text-neutral-300">
            Open your Vue project, follow the Config Panel setup, and work
            visually with responsive components while keeping your usual
            development workflow.
          </p>
        </div>
        <BaseButton
          to="https://vuedesigner.com"
          target="_blank"
          color="primary"
          size="lg"
          trailing-icon="i-material-symbols-open-in-new"
          label="Explore Vue Designer"
          class="!text-secondary-950"
        />
      </div>
      <div class="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div
          class="rounded-3xl border border-neutral-50/10 bg-secondary-950/35 p-3 shadow-2xl sm:p-5"
        >
          <div class="mb-4 flex items-center justify-between px-2">
            <h3 class="mb-0 text-xl text-white">Feature walkthrough</h3>
            <span
              class="rounded-full bg-primary-400/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-200"
            >
              Quick start
            </span>
          </div>
          <div class="relative overflow-hidden rounded-2xl bg-secondary-950">
            <div
              v-if="showTitle"
              class="absolute left-4 top-4 z-10 flex items-center rounded-full bg-secondary-950/85 px-3 py-2 backdrop-blur-sm"
            >
              <div class="h-7 w-7">
                <img v-bind="logo" />
              </div>
              <span class="ml-2 text-sm font-medium text-white">
                Vue Designer - Quick Start
              </span>
            </div>
            <lite-youtube
              ref="youtube"
              videoid="1WDZdu6XwI8"
              title="Vue Designer - Quick Start"
              playlabel="Vue Designer - Quick Start"
              class="min-h-[280px] w-full rounded-2xl px-4 py-12 sm:min-h-[360px]"
              @click="showTitle = false"
            />
          </div>
        </div>
        <div>
          <p
            class="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-primary-300"
          >
            Keep learning
          </p>
          <div class="grid gap-3 sm:grid-cols-2">
            <BaseButton
              to="https://pinegrow.com/docs/vue/"
              external
              target="_blank"
              variant="outline"
              color="primary"
              block
              class="!justify-start !rounded-2xl !px-4 !py-4 !text-left !text-primary-100"
            >
              <BaseIcon
                name="i-mdi-book-open-page-variant-outline"
                class="h-5 w-5"
                aria-hidden="true"
              />
              <span>Documentation</span>
            </BaseButton>
            <BaseButton
              to="https://www.youtube.com/@vuedesigner/playlists"
              external
              target="_blank"
              variant="outline"
              color="primary"
              block
              class="!justify-start !rounded-2xl !px-4 !py-4 !text-left !text-primary-100"
            >
              <BaseIcon
                name="i-mdi-play-circle-outline"
                class="h-5 w-5"
                aria-hidden="true"
              />
              <span>Video tutorials</span>
            </BaseButton>
            <BaseButton
              to="https://pinegrow.com/docs/vue/support/"
              external
              target="_blank"
              variant="outline"
              color="primary"
              block
              class="!justify-start !rounded-2xl !px-4 !py-4 !text-left !text-primary-100"
            >
              <BaseIcon
                name="i-mdi-lifebuoy"
                class="h-5 w-5"
                aria-hidden="true"
              />
              <span>Support</span>
            </BaseButton>
            <BaseButton
              to="https://vuedesigner.com/#buy"
              external
              target="_blank"
              variant="outline"
              color="primary"
              block
              class="!justify-start !rounded-2xl !px-4 !py-4 !text-left !text-primary-100"
            >
              <BaseIcon
                name="i-mdi-rocket-launch-outline"
                class="h-5 w-5"
                aria-hidden="true"
              />
              <span>Trial and purchase</span>
            </BaseButton>
            <BaseButton
              to="https://discord.gg/BYp45Nnu5T"
              external
              target="_blank"
              variant="outline"
              color="primary"
              block
              class="!justify-start !rounded-2xl !px-4 !py-4 !text-left !text-primary-100 sm:col-span-2"
            >
              <BaseIcon
                name="i-mdi-forum-outline"
                class="h-5 w-5"
                aria-hidden="true"
              />
              <span>Join the community forum</span>
            </BaseButton>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
