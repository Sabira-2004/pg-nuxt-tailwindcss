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
  <section
    id="workflow"
    class="bg-secondary-900 px-6 py-24 text-neutral-50 sm:px-8 lg:px-12 lg:py-32"
  >
    <div class="container mx-auto">
      <div class="mx-auto mb-14 max-w-3xl text-center">
        <p
          class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-300"
        >
          See the workflow
        </p>
        <h2
          class="mb-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-4xl lg:text-5xl"
        >
          From first component to polished interface.
        </h2>
        <p class="mx-auto max-w-2xl text-base leading-8 text-neutral-300">
          Open your Vue project, follow the Config Panel setup, and work
          visually with responsive components while keeping your usual
          development workflow.
        </p>
      </div>

      <div class="grid gap-5 lg:grid-cols-[1.2fr_0.8fr] lg:items-stretch">
        <div
          class="rounded-[2rem] border border-neutral-50/10 bg-secondary-950/50 p-3 shadow-2xl sm:p-5"
        >
          <div class="mb-4 flex items-center justify-between px-2">
            <div>
              <p
                class="text-xs font-semibold uppercase tracking-[0.16em] text-primary-300"
              >
                Quick start
              </p>
              <h3 class="mb-0 mt-1 text-xl font-semibold text-white">
                Feature walkthrough
              </h3>
            </div>
            <BaseIcon
              name="i-mdi-play-circle-outline"
              class="h-8 w-8 text-primary-300"
              aria-hidden="true"
            />
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
              class="min-h-[280px] w-full rounded-2xl px-4 py-12 sm:min-h-[390px]"
              @click="showTitle = false"
            />
          </div>
        </div>

        <div
          class="rounded-[2rem] border border-primary-400/20 bg-primary-400/10 p-7 sm:p-9"
        >
          <p
            class="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-primary-300"
          >
            Built for real projects
          </p>
          <h3
            class="mb-8 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.03em] text-white"
          >
            Powerful controls without leaving your workflow.
          </h3>
          <div class="space-y-6">
            <div class="flex gap-4">
              <span
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-400/20 text-primary-200"
              >
                <BaseIcon
                  name="i-mdi-database-eye-outline"
                  class="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
              <div>
                <h4 class="mb-1 text-base font-semibold text-white">
                  Live data, live previews
                </h4>
                <p class="text-sm leading-6 text-neutral-300">
                  Shape responsive components with the information your app
                  really uses.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <span
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-tertiary-400/20 text-tertiary-200"
              >
                <BaseIcon
                  name="i-mdi-file-tree-outline"
                  class="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
              <div>
                <h4 class="mb-1 text-base font-semibold text-white">
                  Navigate your app tree
                </h4>
                <p class="text-sm leading-6 text-neutral-300">
                  Move through components as naturally as assembling building
                  blocks.
                </p>
              </div>
            </div>
            <div class="flex gap-4">
              <span
                class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-neutral-50/10 text-neutral-100"
              >
                <BaseIcon
                  name="i-mdi-puzzle-outline"
                  class="h-5 w-5"
                  aria-hidden="true"
                />
              </span>
              <div>
                <h4 class="mb-1 text-base font-semibold text-white">
                  Bring your component library
                </h4>
                <p class="text-sm leading-6 text-neutral-300">
                  Use your own components or connect popular Vue libraries with
                  web-types.
                </p>
              </div>
            </div>
          </div>
          <BaseButton
            to="https://vuedesigner.com"
            target="_blank"
            color="primary"
            size="lg"
            trailing-icon="i-material-symbols-arrow-outward-rounded"
            label="Explore Vue Designer"
            class="mt-9 !text-secondary-950"
          />
        </div>
      </div>

      <div class="mt-14 border-t border-neutral-50/10 pt-10">
        <div
          class="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
        >
          <p
            class="text-xs font-semibold uppercase tracking-[0.18em] text-primary-300"
          >
            Keep learning
          </p>
          <p class="text-sm text-neutral-400">
            Everything you need to get from idea to interface.
          </p>
        </div>
        <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
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
            class="!justify-start !rounded-2xl !px-4 !py-4 !text-left !text-primary-100"
          >
            <BaseIcon
              name="i-mdi-forum-outline"
              class="h-5 w-5"
              aria-hidden="true"
            />
            <span>Community forum</span>
          </BaseButton>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped></style>
