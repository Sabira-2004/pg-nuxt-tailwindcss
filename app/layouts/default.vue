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
    <div
      class="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50"
    >
      <NavBar
        class="fixed inset-x-0 top-0 z-50 border-b border-neutral-200/80 bg-white/85 shadow-sm backdrop-blur-xl dark:border-neutral-800/80 dark:bg-neutral-950/85"
      />
      <main class="flex-1 pt-20">
        <slot />
      </main>
      <TheFooter />
    </div>
  </div>
</template>
<style></style>
