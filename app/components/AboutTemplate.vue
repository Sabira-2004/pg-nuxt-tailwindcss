<script setup lang="ts">
  const features = [
    {
      icon: 'i-material-symbols-visibility-outline-rounded',
      title: 'See it as you build',
      description:
        'Design directly on the canvas and get immediate visual feedback as your interface takes shape.',
    },
    {
      icon: 'i-material-symbols-tune-rounded',
      title: 'Stay in control',
      description:
        'Use powerful visual controls for layout, spacing, typography, colors, and responsive behavior.',
    },
    {
      icon: 'i-material-symbols-code-rounded',
      title: 'Keep your workflow',
      description:
        'Work with real Vue single-file components, your existing tools, and clean code you can own.',
    },
  ]
</script>

<template>
  <section
    class="relative bg-[#f5f8f7] text-[#132536] dark:bg-[#0d1927] dark:text-white"
  >
    <div class="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div class="max-w-3xl">
        <p
          class="text-sm font-bold uppercase tracking-[0.2em] text-[#27885d] dark:text-[#69dda7]"
        >
          A better way to build
        </p>
        <h2
          class="mt-4 max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.035em] text-[#132536] dark:text-white sm:text-5xl"
        >
          Move from blank canvas to polished Vue UI, faster.
        </h2>
        <p
          class="mt-6 max-w-2xl text-lg leading-8 text-[#60717d] dark:text-[#a9b9c6]"
        >
          Vue Designer brings visual clarity to the parts of frontend work that
          are hard to hold in your head. Design, refine, and keep shipping in
          the Vue workflow you already trust.
        </p>
      </div>

      <div class="mt-14 grid gap-5 md:grid-cols-3">
        <article
          v-for="feature in features"
          :key="feature.title"
          class="rounded-2xl border border-[#dce7e2] bg-white p-7 shadow-[0_12px_35px_rgba(33,54,70,.05)] dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none"
        >
          <div
            class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#daf7e8] text-[#25875b] dark:bg-[#5ee1a4]/10 dark:text-[#78e9b1]"
          >
            <BaseIcon :name="feature.icon" height="22" />
          </div>
          <h3
            class="mt-6 text-xl font-semibold tracking-[-0.02em] text-[#132536] dark:text-white"
          >
            {{ feature.title }}
          </h3>
          <p
            class="mt-3 text-[15px] leading-7 text-[#687985] dark:text-[#a9b9c6]"
          >
            {{ feature.description }}
          </p>
        </article>
      </div>

      <div
        class="mt-20 grid overflow-hidden rounded-[1.75rem] bg-[#e8f3ee] dark:bg-[#142536] lg:grid-cols-[1fr_1.1fr]"
      >
        <div
          class="relative flex min-h-[19rem] items-center justify-center overflow-hidden bg-[#10273a] p-8 text-white sm:p-12"
        >
          <div
            class="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#5ee1a4]/20 blur-3xl"
            aria-hidden="true"
          />
          <div
            class="relative w-full max-w-sm rounded-2xl border border-white/15 bg-white/[0.07] p-5 shadow-2xl backdrop-blur-sm"
          >
            <div
              class="flex items-center justify-between border-b border-white/10 pb-4"
            >
              <span
                class="text-xs font-semibold uppercase tracking-[0.16em] text-[#aebdca]"
                >Your stack</span
              >
              <span class="text-xs text-[#5ee1a4]">Ready to design</span>
            </div>
            <div class="mt-5 grid grid-cols-3 gap-3">
              <div
                class="rounded-xl border border-white/10 bg-white/[0.06] p-3 text-center"
              >
                <div
                  class="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#42b883] text-sm font-bold text-white"
                >
                  V
                </div>
                <p class="mt-2 text-[11px] font-medium text-[#cbd7e2]">Vue</p>
              </div>
              <div
                class="rounded-xl border border-white/10 bg-white/[0.06] p-3 text-center"
              >
                <div
                  class="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#00a98f] text-sm font-bold text-white"
                >
                  N
                </div>
                <p class="mt-2 text-[11px] font-medium text-[#cbd7e2]">Nuxt</p>
              </div>
              <div
                class="rounded-xl border border-white/10 bg-white/[0.06] p-3 text-center"
              >
                <div
                  class="mx-auto flex h-9 w-9 items-center justify-center rounded-lg bg-[#38bdf8] text-sm font-bold text-white"
                >
                  T
                </div>
                <p class="mt-2 text-[11px] font-medium text-[#cbd7e2]">
                  Tailwind
                </p>
              </div>
            </div>
            <div
              class="mt-5 flex items-center gap-3 rounded-xl bg-[#5ee1a4]/10 px-4 py-3 text-xs text-[#8cefc0]"
            >
              <BaseIcon
                name="i-material-symbols-check-circle-outline-rounded"
                height="18"
              />
              Visual controls included
            </div>
          </div>
        </div>

        <div class="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
          <p
            class="text-sm font-bold uppercase tracking-[0.2em] text-[#27885d] dark:text-[#69dda7]"
          >
            Made for your workflow
          </p>
          <h3
            class="mt-4 text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#132536] dark:text-white"
          >
            A starter template that is ready to become your next product.
          </h3>
          <p class="mt-5 leading-7 text-[#60717d] dark:text-[#a9b9c6]">
            This template includes the
            <NuxtLink
              class="font-medium text-[#218458] underline decoration-[#8bdab2] underline-offset-4 dark:text-[#78e9b1]"
              target="_blank"
              external
              href="https://www.npmjs.com/package/@pinegrow/nuxt-module"
              >Pinegrow Nuxt Module</NuxtLink
            >
            and
            <NuxtLink
              class="font-medium text-[#218458] underline decoration-[#8bdab2] underline-offset-4 dark:text-[#78e9b1]"
              target="_blank"
              external
              href="https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin"
              >Pinegrow Tailwind CSS Plugin</NuxtLink
            >
            so you can visually design real Vue single-file components in Vue
            Designer.
          </p>
          <div class="mt-8 flex flex-wrap items-center gap-4">
            <BaseButton
              label="Explore the quick start"
              size="lg"
              to="/quick-start"
              class="!rounded-full !bg-[#5ee1a4] !px-5 !font-semibold !text-[#08141f] hover:!bg-[#8cefc0]"
              trailing-icon="i-material-symbols-arrow-forward-rounded"
            />
            <span class="text-sm text-[#788a95] dark:text-[#91a5b3]"
              >Nuxt + Tailwind CSS included</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
