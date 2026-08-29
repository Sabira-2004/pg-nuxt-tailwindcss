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
      label: 'Documentation',
      description: 'Learn the fundamentals and go deeper.',
      to: 'https://pinegrow.com/docs/vue/',
    },
    {
      label: 'Video tutorials',
      description: 'Follow along with practical build sessions.',
      to: 'https://www.youtube.com/@vuedesigner/playlists',
    },
    {
      label: 'Support & community',
      description: 'Get help and connect with other Vue builders.',
      to: 'https://pinegrow.com/docs/vue/support/',
    },
  ]
</script>

<template>
  <section
    id="walkthrough"
    class="relative overflow-hidden bg-[#102131] text-white"
  >
    <div
      class="absolute -left-40 top-20 h-80 w-80 rounded-full bg-[#5d80f5]/10 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="relative mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div class="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div class="max-w-2xl">
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#69dda7]"
          >
            See it in action
          </p>
          <h2
            class="mt-4 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl"
          >
            Design, preview, and refine in one flow.
          </h2>
          <p class="mt-6 text-lg leading-8 text-[#aebdca]">
            Get a feel for the workflow, then start shaping your own Vue
            components with a faster visual feedback loop.
          </p>
        </div>
        <div class="flex items-center gap-3 text-sm text-[#9fb0bd]">
          <span
            class="flex h-9 w-9 items-center justify-center rounded-full bg-[#5ee1a4]/10 text-[#69dda7]"
            ><BaseIcon name="i-material-symbols-play-arrow-rounded" height="20"
          /></span>
          Quick Start walkthrough
        </div>
      </div>

      <div
        class="mt-14 grid gap-7 lg:grid-cols-[1.18fr_0.82fr] lg:items-stretch"
      >
        <div
          class="overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#172b3d] p-3 shadow-[0_24px_65px_rgba(0,0,0,.22)] sm:p-5"
        >
          <div class="mb-4 flex items-center justify-between px-1 sm:px-2">
            <div class="flex items-center gap-2">
              <span class="h-2.5 w-2.5 rounded-full bg-[#ef767a]" />
              <span class="h-2.5 w-2.5 rounded-full bg-[#f2c66d]" />
              <span class="h-2.5 w-2.5 rounded-full bg-[#5ee1a4]" />
            </div>
            <span
              class="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#7890a2]"
              >Vue Designer / Quick Start</span
            >
          </div>
          <div class="relative overflow-hidden rounded-xl bg-black/20">
            <div
              v-if="showTitle"
              class="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-lg bg-[#102131]/85 px-3 py-2 text-sm font-medium text-white backdrop-blur-sm"
            >
              <img v-bind="logo" class="h-6 w-6 rounded" />
              <span>Vue Designer - Quick Start</span>
            </div>
            <lite-youtube
              ref="youtube"
              videoid="1WDZdu6XwI8"
              title="Vue Designer - Quick Start"
              playlabel="Vue Designer - Quick Start"
              class="min-h-[17rem] !w-full rounded-lg sm:min-h-[22rem]"
              @click="showTitle = false"
            />
          </div>
        </div>

        <div
          class="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-7 sm:p-9"
        >
          <p
            class="text-sm font-semibold uppercase tracking-[0.16em] text-[#7890a2]"
          >
            Keep exploring
          </p>
          <div class="mt-6 divide-y divide-white/10">
            <NuxtLink
              v-for="resource in resources"
              :key="resource.label"
              :to="resource.to"
              external
              target="_blank"
              class="group flex items-start justify-between gap-5 py-5 first:pt-0 last:pb-0"
            >
              <span>
                <span
                  class="block font-semibold text-white transition group-hover:text-[#78e9b1]"
                  >{{ resource.label }}</span
                >
                <span class="mt-1 block text-sm leading-6 text-[#95a9b8]">{{
                  resource.description
                }}</span>
              </span>
              <BaseIcon
                name="i-material-symbols-arrow-outward-rounded"
                height="18"
                class="mt-1 shrink-0 text-[#69dda7] transition group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </NuxtLink>
          </div>

          <div class="mt-8 rounded-xl bg-[#5ee1a4]/10 p-5">
            <p class="text-sm font-semibold text-[#8cefc0]">
              Ready to make the canvas yours?
            </p>
            <p class="mt-1 text-sm leading-6 text-[#aebdca]">
              Start with a free trial and see what your next Vue interface feels
              like.
            </p>
            <BaseButton
              to="https://vuedesigner.com"
              target="_blank"
              size="md"
              label="Try Vue Designer"
              class="mt-4 !rounded-full !bg-[#5ee1a4] !font-semibold !text-[#08141f] hover:!bg-[#8cefc0]"
              trailing-icon="i-material-symbols-arrow-outward-rounded"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
