<script setup lang="ts">
  const platforms = ['Mac', 'Windows', 'Linux']
</script>

<template>
  <section class="relative overflow-hidden bg-[#0a1422] text-white">
    <div
      class="pointer-events-none absolute -right-48 -top-48 h-[34rem] w-[34rem] rounded-full bg-[#2dcc83]/10 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute bottom-0 left-0 h-80 w-80 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#5d80f5]/10 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:72px_72px]"
      aria-hidden="true"
    />

    <div
      class="relative mx-auto max-w-7xl px-6 pb-20 pt-16 sm:px-8 lg:px-12 lg:pb-28 lg:pt-24"
    >
      <div
        class="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
      >
        <div>
          <div
            class="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-sm font-medium text-[#cbd7e2]"
          >
            <span
              class="h-2 w-2 rounded-full bg-[#5ee1a4] shadow-[0_0_0_5px_rgba(94,225,164,.12)]"
              aria-hidden="true"
            />
            A visual editor for Vue
          </div>

          <h1
            class="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.045em] text-white sm:text-6xl lg:text-7xl"
          >
            Build Vue interfaces
            <span class="text-[#5ee1a4]">visually.</span>
          </h1>

          <p class="mt-7 max-w-2xl text-lg leading-8 text-[#aebdca] sm:text-xl">
            A desktop drag-and-drop editor for Mac, Windows and Linux that lets
            you visually design your Vue apps.
          </p>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <BaseButton
              to="https://vuedesigner.com"
              target="_blank"
              trailing-icon="i-material-symbols-arrow-outward-rounded"
              size="xl"
              label="Start free trial"
              class="!rounded-full !bg-[#5ee1a4] !px-6 !py-4 !font-semibold !text-[#08141f] shadow-[0_12px_30px_rgba(94,225,164,.2)] transition hover:!bg-[#8cefc0]"
            />
            <BaseButton
              to="#walkthrough"
              variant="ghost"
              color="white"
              size="xl"
              label="See how it works"
              class="!rounded-full !px-6 !py-4 !text-[#e7eef5] hover:!bg-white/10"
            />
          </div>

          <div
            class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#8fa1b1]"
          >
            <span class="inline-flex items-center gap-2">
              <BaseIcon
                name="i-material-symbols-check-circle-outline-rounded"
                class="text-[#5ee1a4]"
              />
              Clean Vue code
            </span>
            <span class="inline-flex items-center gap-2">
              <BaseIcon
                name="i-material-symbols-check-circle-outline-rounded"
                class="text-[#5ee1a4]"
              />
              No lock-in
            </span>
          </div>
        </div>

        <div class="relative mx-auto w-full max-w-xl lg:ml-auto">
          <div
            class="absolute -inset-5 rounded-[2rem] bg-gradient-to-br from-[#5ee1a4]/20 via-transparent to-[#5d80f5]/20 blur-2xl"
            aria-hidden="true"
          />
          <div
            class="relative overflow-hidden rounded-[1.75rem] border border-white/15 bg-[#132235] shadow-[0_28px_80px_rgba(0,0,0,.42)]"
          >
            <div
              class="flex items-center justify-between border-b border-white/10 px-5 py-4"
            >
              <div class="flex items-center gap-2.5">
                <img
                  src="/vue-designer.png"
                  alt=""
                  class="h-8 w-8 rounded-lg"
                />
                <span class="text-sm font-semibold tracking-wide text-white"
                  >Vue Designer</span
                >
              </div>
              <span
                class="inline-flex items-center gap-2 rounded-full bg-[#5ee1a4]/10 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-[#78e9b1]"
              >
                <span
                  class="h-1.5 w-1.5 rounded-full bg-[#5ee1a4]"
                  aria-hidden="true"
                />
                Live canvas
              </span>
            </div>

            <div
              class="grid min-h-[22rem] grid-cols-[8.5rem_1fr] sm:min-h-[25rem] sm:grid-cols-[10.5rem_1fr]"
            >
              <div class="border-r border-white/10 bg-[#0f1b2b] p-4">
                <div
                  class="mb-5 flex items-center justify-between text-[10px] font-semibold uppercase tracking-[0.16em] text-[#71869b]"
                >
                  Layers
                  <span class="text-[#5ee1a4]">+</span>
                </div>
                <div class="space-y-2 text-xs">
                  <div
                    class="rounded-lg bg-[#5ee1a4]/10 px-3 py-2.5 font-medium text-[#8cefc0]"
                  >
                    HeroSection
                  </div>
                  <div class="px-3 py-2 text-[#8fa1b1]">Navigation</div>
                  <div class="px-3 py-2 text-[#8fa1b1]">FeatureGrid</div>
                  <div class="px-3 py-2 text-[#8fa1b1]">Footer</div>
                </div>
                <div class="mt-12 space-y-2">
                  <div class="h-2 w-16 rounded-full bg-white/10" />
                  <div class="h-2 w-24 rounded-full bg-white/10" />
                  <div class="h-2 w-12 rounded-full bg-white/10" />
                </div>
              </div>

              <div class="relative overflow-hidden bg-[#f3f7f6] p-5 sm:p-7">
                <div
                  class="absolute right-5 top-5 rounded-md bg-white px-2.5 py-1.5 text-[10px] font-semibold text-[#5c6f7b] shadow-sm"
                >
                  Desktop / 1440
                </div>
                <div
                  class="mt-7 overflow-hidden rounded-xl border border-[#d8e5e0] bg-white shadow-[0_14px_30px_rgba(33,54,70,.12)]"
                >
                  <div
                    class="flex items-center justify-between border-b border-[#e5eeeb] px-4 py-3"
                  >
                    <div class="h-2.5 w-20 rounded-full bg-[#1c3143]" />
                    <div class="flex gap-2">
                      <div class="h-2 w-7 rounded-full bg-[#d7e4df]" />
                      <div class="h-2 w-10 rounded-full bg-[#5ee1a4]" />
                    </div>
                  </div>
                  <div class="p-5 sm:p-7">
                    <div class="h-3 w-24 rounded-full bg-[#5ee1a4]/70" />
                    <div class="mt-3 h-5 w-4/5 rounded-full bg-[#1c3143]" />
                    <div class="mt-2 h-5 w-3/5 rounded-full bg-[#1c3143]" />
                    <div class="mt-4 h-2 w-full rounded-full bg-[#e6efeb]" />
                    <div class="mt-2 h-2 w-4/5 rounded-full bg-[#e6efeb]" />
                    <div
                      class="mt-7 h-24 rounded-lg bg-gradient-to-br from-[#d8f8e8] via-[#edf7f3] to-[#dce8ff] sm:h-32"
                    />
                  </div>
                </div>
                <div
                  class="absolute bottom-4 right-4 rounded-lg border-2 border-[#5ee1a4] bg-[#5ee1a4]/10 px-2 py-1 text-[9px] font-bold uppercase tracking-[0.14em] text-[#237a56]"
                >
                  Selected
                </div>
              </div>
            </div>
            <div
              class="flex items-center justify-between border-t border-white/10 bg-[#101d2d] px-5 py-3 text-[10px] font-medium text-[#7f95a8]"
            >
              <span>Drag. Drop. Design.</span>
              <span class="text-[#5ee1a4]">Ready to build</span>
            </div>
          </div>

          <div
            class="absolute -bottom-5 -left-5 hidden items-center gap-3 rounded-2xl border border-white/15 bg-[#1b2b3e] px-4 py-3 shadow-xl sm:flex"
          >
            <div class="flex -space-x-1.5">
              <span
                v-for="platform in platforms"
                :key="platform"
                class="flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#1b2b3e] bg-[#2c4054] text-[9px] font-bold text-white"
              >
                {{ platform.slice(0, 1) }}
              </span>
            </div>
            <div>
              <p class="text-xs font-semibold text-white">Works where you do</p>
              <p class="text-[10px] text-[#8fa1b1]">Mac · Windows · Linux</p>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-20 border-t border-white/10 pt-7 lg:mt-24">
        <div
          class="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"
        >
          <p class="text-sm font-medium text-[#7f95a8]">
            Everything you need to move from idea to interface.
          </p>
          <div class="flex flex-wrap gap-3">
            <span
              class="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-[#b5c3cf]"
              >Visual controls</span
            >
            <span
              class="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-[#b5c3cf]"
              >Live preview</span
            >
            <span
              class="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs font-medium text-[#b5c3cf]"
              >Vue SFCs</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
