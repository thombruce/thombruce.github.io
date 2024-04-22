<script setup lang="ts">
const { page } = useContent()

useContentHead(page)
</script>

<template lang="pug">
main
  NuxtLayout(v-if="page._extension == 'fountain'" name="fountain")
  NuxtLayout(v-else name="default")
</template>
