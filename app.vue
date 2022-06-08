<script setup>
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<template lang="pug">
.container.mx-auto.px-4
  header
    NavLinks

  NuxtPage

  footer
    SiteMap(:navigation-tree="navigation")
    small &copy; Thom Bruce {{ new Date().getFullYear() }}
</template>
