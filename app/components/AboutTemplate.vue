<script setup lang="ts">
  import siteMeta from '@/site'

  const { description } = siteMeta
</script>

<template>
  <section
    id="about"
    class="bg-[#f7f8fc] py-24 text-[#151a2d] dark:bg-[#10172a] dark:text-white sm:py-28"
  >
    <div class="container mx-auto px-6 sm:px-8 lg:px-12">
      <div class="mx-auto max-w-3xl text-center">
        <p
          class="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d5efc] dark:text-[#b9b2ff]"
        >
          A better starting point
        </p>
        <h2
          class="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-5xl"
        >
          From first idea to finished component, without leaving your workflow.
        </h2>
        <p
          class="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300"
        >
          {{ description }} Use the template as a practical base for building
          and visually designing Vue single-file components.
        </p>
      </div>

      <div
        class="mt-16 grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20"
      >
        <div class="relative">
          <div
            class="absolute -inset-4 rounded-[2rem] bg-[#6d5efc]/10 blur-2xl"
            aria-hidden="true"
          />
          <div
            class="relative rounded-[1.5rem] border border-[#dfe2ef] bg-white p-5 shadow-[0_20px_60px_rgba(31,38,73,0.08)] dark:border-white/10 dark:bg-[#171f35] dark:shadow-none sm:p-7"
          >
            <div
              class="flex items-center justify-between border-b border-[#e8eaf2] pb-5 dark:border-white/10"
            >
              <div>
                <p
                  class="text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-400"
                >
                  Your stack, visually
                </p>
                <p class="mt-1 text-lg font-semibold">A familiar foundation</p>
              </div>
              <span
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-[#6d5efc]/10 text-[#6d5efc] dark:bg-[#6d5efc]/20 dark:text-[#b9b2ff]"
              >
                <BaseIcon name="i-material-symbols-layers-rounded" />
              </span>
            </div>
            <div class="mt-5 space-y-3">
              <div
                class="flex items-center gap-4 rounded-2xl border border-[#e8eaf2] bg-[#fafbfe] p-4 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <span
                  class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#40cba3]/15 text-sm font-bold text-[#148f76] dark:text-[#57d8be]"
                  >N</span
                >
                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400"
                  >
                    Meta-framework
                  </p>
                  <p class="mt-1 font-semibold">Nuxt</p>
                </div>
                <BaseIcon
                  name="i-material-symbols-check-rounded"
                  class="ml-auto text-[#20b396]"
                />
              </div>
              <div class="flex justify-center" aria-hidden="true">
                <span
                  class="h-5 border-l border-dashed border-[#cfd3e2] dark:border-white/20"
                />
              </div>
              <div
                class="flex items-center gap-4 rounded-2xl border border-[#e8eaf2] bg-[#fafbfe] p-4 dark:border-white/10 dark:bg-white/[0.04]"
              >
                <span
                  class="flex h-11 w-11 items-center justify-center rounded-xl bg-[#6d5efc]/12 text-sm font-bold text-[#6d5efc] dark:text-[#b9b2ff]"
                  >TW</span
                >
                <div>
                  <p
                    class="text-xs font-semibold uppercase tracking-[0.14em] text-slate-400"
                  >
                    UI framework
                  </p>
                  <p class="mt-1 font-semibold">Tailwind CSS</p>
                </div>
                <BaseIcon
                  name="i-material-symbols-check-rounded"
                  class="ml-auto text-[#20b396]"
                />
              </div>
            </div>
            <div
              class="mt-6 flex items-center gap-2 rounded-xl bg-[#f1f8f6] px-4 py-3 text-xs font-medium text-[#167b69] dark:bg-[#20b396]/10 dark:text-[#75e5cc]"
            >
              <BaseIcon name="i-material-symbols-code-rounded" />
              Designed visually. Saved as standard Vue code.
            </div>
          </div>
        </div>

        <div class="max-w-xl">
          <p
            class="text-xs font-semibold uppercase tracking-[0.2em] text-[#6d5efc] dark:text-[#b9b2ff]"
          >
            About this template
          </p>
          <h3
            class="mt-4 text-3xl font-semibold leading-tight tracking-[-0.04em] sm:text-4xl"
          >
            A clean Nuxt base for your next visual build.
          </h3>
          <p
            class="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300"
          >
            This starter template pre-includes the
            <NuxtLink
              class="font-semibold text-[#5b4de0] underline decoration-[#b9b2ff] underline-offset-4 dark:text-[#b9b2ff]"
              target="_blank"
              external
              href="https://www.npmjs.com/package/@pinegrow/nuxt-module"
              >Pinegrow Nuxt Module</NuxtLink
            >
            and
            <NuxtLink
              class="font-semibold text-[#5b4de0] underline decoration-[#b9b2ff] underline-offset-4 dark:text-[#b9b2ff]"
              target="_blank"
              external
              href="https://www.npmjs.com/package/@pinegrow/tailwindcss-plugin"
              >Pinegrow Tailwind CSS Plugin</NuxtLink
            >
            so Vue Designer can work directly with your components.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <BaseButton
              label="Open the quick start"
              size="lg"
              to="/quick-start"
              trailing
              trailing-icon="i-material-symbols-arrow-forward-rounded"
              class="!rounded-full !bg-[#6d5efc] !px-5 !py-3 !text-white shadow-lg shadow-[#6d5efc]/20 hover:!bg-[#5b4de0]"
            />
            <a
              href="#walkthrough"
              class="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-semibold text-slate-600 transition hover:bg-[#ebeafd] hover:text-[#4c3dc1] dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              See the walkthrough
              <BaseIcon name="i-material-symbols-arrow-downward-rounded" />
            </a>
          </div>
        </div>
      </div>

      <div
        class="mt-20 grid gap-4 border-t border-[#e1e4ee] pt-8 dark:border-white/10 sm:grid-cols-3"
      >
        <div class="flex gap-3 rounded-2xl p-3">
          <BaseIcon
            name="i-material-symbols-visibility-rounded"
            class="mt-0.5 text-2xl text-[#6d5efc] dark:text-[#b9b2ff]"
          />
          <div>
            <p class="font-semibold">Live visual editing</p>
            <p
              class="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400"
            >
              See your Vue UI take shape as you work.
            </p>
          </div>
        </div>
        <div class="flex gap-3 rounded-2xl p-3">
          <BaseIcon
            name="i-material-symbols-responsive-layout-rounded"
            class="mt-0.5 text-2xl text-[#20b396]"
          />
          <div>
            <p class="font-semibold">Responsive by default</p>
            <p
              class="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400"
            >
              Compose layouts that adapt across breakpoints.
            </p>
          </div>
        </div>
        <div class="flex gap-3 rounded-2xl p-3">
          <BaseIcon
            name="i-material-symbols-lock-open-right-rounded"
            class="mt-0.5 text-2xl text-[#e07c5c]"
          />
          <div>
            <p class="font-semibold">Your code stays yours</p>
            <p
              class="mt-1 text-sm leading-6 text-slate-500 dark:text-slate-400"
            >
              Keep standard files and your existing toolchain.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
