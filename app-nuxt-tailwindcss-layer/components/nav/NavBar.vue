<script setup lang="ts">
  const { allNavs, navsPrimary, navsSecondary, currentPath } = useNavMenu()
  const desktopNavs = [...navsPrimary, ...navsSecondary]
</script>
<template>
  <div class="w-full">
    <nav aria-label="Main navigation">
      <div class="container mx-auto px-5 sm:px-6">
        <div class="flex h-20 items-center justify-between">
          <TheLogo />
          <div class="flex items-center gap-1">
            <NavPrimary
              :navs="desktopNavs"
              :current-path="currentPath"
              class="hidden md:flex"
            />
            <DarkModeSwitch class="hidden md:block" />
            <div class="flex items-center md:hidden">
              <DarkModeSwitch />
              <NavHamburger v-if="allNavs.length" />
            </div>
          </div>
        </div>
      </div>
      <NavSecondary
        class="sm:hidden"
        :navs="allNavs"
        :current-path="currentPath"
      />
    </nav>
  </div>
</template>
<style scoped></style>
