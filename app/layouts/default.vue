<script setup lang="ts">
  const route = useRoute()

  const pageMeta = computed(() => {
    return {
      title: route.meta.title,
      description: route.meta.description,
      ogImage: route.meta.ogImage,
      canonicalUrl: route.meta.canonicalUrl || route.fullPath,
      generator: route.meta.generator,
      tags: route.meta.tags,
    }
  })

  useHeadAndMeta(pageMeta)
  useOgImage()
</script>

<template>
  <div>
    <!-- <div class="container mx-auto"> -->
    <div
      class="min-h-screen flex flex-col bg-white text-neutral-900 dark:bg-[#0b1020] dark:text-neutral-50"
    >
      <NavBar
        class="fixed inset-x-0 top-0 z-20 border-b border-white/10 bg-[#0b1020]/90 text-white shadow-none backdrop-blur-xl"
      />
      <div class="mt-20">
        <main>
          <slot />
        </main>
      </div>
      <TheFooter />
    </div>
    <!-- </div> -->
  </div>
</template>
<style></style>
