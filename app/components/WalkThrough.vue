<script setup lang="ts">
  import vueDesignerLogo from '@/assets/images/vue-designer.svg'

  const showTitle = ref(true)

  const { optimizeImage } = useOptimizeImage()
  const logo = {
    alt: 'Vue Designer',
    cover: true,
    ...optimizeImage(vueDesignerLogo, {}, false),
  }

  const resources = [
    {
      icon: 'i-mdi-book-open-page-variant-outline',
      title: 'Documentation',
      description: 'Follow the integration guide',
      href: 'https://pinegrow.com/docs/vue/',
    },
    {
      icon: 'i-mdi-play-circle-outline',
      title: 'Video tutorials',
      description: 'Learn by watching the workflow',
      href: 'https://www.youtube.com/@vuedesigner/playlists',
    },
    {
      icon: 'i-mdi-lifebuoy',
      title: 'Support',
      description: 'Get help when you need it',
      href: 'https://pinegrow.com/docs/vue/support/',
    },
    {
      icon: 'i-mdi-account-group-outline',
      title: 'Community forum',
      description: 'Meet other Vue builders',
      href: 'https://discord.gg/BYp45Nnu5T',
    },
  ]
</script>

<template>
  <section id="walkthrough" class="bg-primary-950 text-white">
    <div
      class="container mx-auto max-w-7xl px-5 py-20 sm:px-6 sm:py-28 lg:px-8"
    >
      <div class="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <div class="max-w-2xl">
          <p
            class="text-sm font-bold uppercase tracking-[0.18em] text-tertiary-300"
          >
            See it in action
          </p>
          <h2
            class="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.04em] text-white sm:text-5xl"
          >
            A faster path to your best work.
          </h2>
        </div>
        <p class="max-w-sm text-sm leading-7 text-primary-200/70 md:text-right">
          Get a quick introduction to the visual workflow, then explore the
          resources that help you make Vue Designer part of your day.
        </p>
      </div>

      <div
        class="mt-14 grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20"
      >
        <div
          class="rounded-[1.65rem] border border-white/15 bg-white/10 p-2 shadow-2xl shadow-black/25 sm:p-3"
        >
          <div class="relative overflow-hidden rounded-xl bg-neutral-950">
            <div
              v-if="showTitle"
              class="pointer-events-none absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full border border-white/15 bg-neutral-950/75 px-3 py-2 text-xs font-semibold text-white backdrop-blur"
            >
              <img v-bind="logo" class="h-5 w-5 rounded-full" />
              Vue Designer · Quick Start
            </div>
            <lite-youtube
              ref="youtube"
              videoid="1WDZdu6XwI8"
              title="Vue Designer - Quick Start"
              playlabel="Play Vue Designer Quick Start"
              class="block min-h-[230px] w-full rounded-xl sm:min-h-[360px]"
              @click="showTitle = false"
            />
          </div>
        </div>

        <div>
          <h3 class="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Learn once. Build with confidence.
          </h3>
          <p class="mt-5 text-base leading-8 text-primary-100/75">
            Start with a quick walkthrough, then keep the full Vue ecosystem at
            your fingertips. From your first component to a complete app, Vue
            Designer is designed to work with your existing process.
          </p>

          <div class="mt-8 grid gap-3 sm:grid-cols-2">
            <NuxtLink
              v-for="resource in resources"
              :key="resource.title"
              :href="resource.href"
              external
              target="_blank"
              class="group rounded-2xl border border-white/10 bg-white/[0.06] p-4 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
            >
              <div class="flex items-start gap-3">
                <span
                  class="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-xl bg-white/10 text-tertiary-300"
                >
                  <BaseIcon :name="resource.icon" height="19px" />
                </span>
                <span>
                  <span
                    class="flex items-center gap-1.5 text-sm font-bold text-white"
                  >
                    {{ resource.title }}
                    <BaseIcon
                      name="i-material-symbols-arrow-outward"
                      height="14px"
                      class="opacity-0 transition group-hover:opacity-100"
                    />
                  </span>
                  <span
                    class="mt-1 block text-xs leading-5 text-primary-200/65"
                  >
                    {{ resource.description }}
                  </span>
                </span>
              </div>
            </NuxtLink>
          </div>

          <BaseButton
            class="mt-8 !rounded-xl"
            color="secondary"
            label="Try Vue Designer"
            size="lg"
            to="https://vuedesigner.com"
            target="_blank"
            trailing
            trailing-icon="i-material-symbols-arrow-outward"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
