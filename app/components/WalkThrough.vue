<script setup lang="ts">
  import vueDesignerLogo from '@/assets/images/vue-designer.svg'

  const showTitle = ref(true)

  const productFeatures = [
    {
      icon: 'i-material-symbols-data-object-outline',
      title: 'Live data',
      description:
        'Design responsive components with real, dynamic content in view.',
    },
    {
      icon: 'i-material-symbols-account-tree-outline',
      title: 'Component tree',
      description: 'Navigate and shape your app visually as it grows.',
    },
    {
      icon: 'i-material-symbols-auto-awesome-motion',
      title: 'Tailwind-ready',
      description:
        'Use the Tailwind CSS add-on and keep your theme in your hands.',
    },
  ]

  const { optimizeImage } = useOptimizeImage()
  const logo = {
    alt: 'vue-designer',
    cover: true,
    ...optimizeImage(
      vueDesignerLogo,
      /* options */
      {
        // placeholder: false, // placeholder image before the actual image is fully loaded.
      },
    ),
  }
</script>
<template>
  <section
    id="walkthrough"
    aria-labelledby="walkthrough-title"
    class="relative overflow-hidden bg-secondary-950 px-4 py-20 text-white dark:bg-neutral-950 sm:px-6 lg:px-8 lg:py-24"
  >
    <div
      aria-hidden="true"
      class="pointer-events-none absolute -right-40 top-0 h-96 w-96 rounded-full bg-primary-700/20 blur-3xl"
    />
    <div class="container relative mx-auto">
      <div
        class="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20"
      >
        <div>
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-primary-300"
          >
            See it in action
          </p>
          <h2 id="walkthrough-title" class="mt-4 max-w-xl text-white">
            Build faster with a visual feedback loop.
          </h2>
          <p class="mt-5 max-w-xl text-lg leading-8 text-secondary-100">
            Explore the quick-start walkthrough, then keep learning with the Vue
            Designer documentation and community resources.
          </p>
          <div
            class="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row"
          >
            <BaseButton
              to="https://pinegrow.com/docs/vue/"
              external
              target="_blank"
              color="primary"
              size="lg"
              label="Read documentation"
              trailing-icon="i-material-symbols-arrow-outward"
            />
            <BaseButton
              to="https://vuedesigner.com"
              external
              target="_blank"
              color="white"
              variant="outline"
              size="lg"
              label="Try Vue Designer"
            />
          </div>
        </div>

        <div
          class="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-2xl sm:p-4"
        >
          <div class="relative overflow-hidden rounded-2xl bg-neutral-900">
            <div
              v-if="showTitle"
              class="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-secondary-950/80 px-3 py-2 backdrop-blur"
            >
              <div class="h-6 w-6">
                <img v-bind="logo" alt="Vue Designer" />
              </div>
              <span class="text-sm font-semibold text-white"
                >Vue Designer — Quick Start</span
              >
            </div>
            <lite-youtube
              ref="youtube"
              videoid="1WDZdu6XwI8"
              title="Vue Designer - Quick Start"
              playlabel="Vue Designer - Quick Start"
              class="min-h-72 w-full rounded-2xl sm:min-h-96"
              @click="showTitle = false"
            />
          </div>
        </div>
      </div>

      <div class="mt-16 grid gap-4 md:grid-cols-3">
        <article
          v-for="feature in productFeatures"
          :key="feature.title"
          class="rounded-2xl border border-white/10 bg-white/5 p-6"
        >
          <BaseIcon
            :name="feature.icon"
            class="h-7 w-7 text-primary-300"
            aria-hidden="true"
          />
          <h3 class="mt-5 !text-2xl text-white">{{ feature.title }}</h3>
          <p class="mt-3 leading-7 text-secondary-200">
            {{ feature.description }}
          </p>
        </article>
      </div>

      <div
        class="mt-10 flex flex-wrap gap-x-6 gap-y-3 border-t border-white/10 pt-8 text-sm"
      >
        <BaseButton
          to="https://www.youtube.com/@vuedesigner/playlists"
          external
          target="_blank"
          variant="link"
          color="white"
          label="Video tutorials"
        />
        <BaseButton
          to="https://pinegrow.com/docs/vue/support/"
          external
          target="_blank"
          variant="link"
          color="white"
          label="Support"
        />
        <BaseButton
          to="https://vuedesigner.com/#buy"
          external
          target="_blank"
          variant="link"
          color="white"
          label="Purchase"
        />
        <BaseButton
          to="https://discord.gg/BYp45Nnu5T"
          external
          target="_blank"
          variant="link"
          color="white"
          label="Community forum"
        />
      </div>
    </div>
  </section>
</template>
<style scoped></style>
