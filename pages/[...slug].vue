<script setup lang="ts">
const { page } = useContent()

useContentHead(page)
</script>

<template lang="pug">
main.prose.mx-auto
  ContentDoc(#default="{ doc }")
    ContentRenderer(v-if="doc.body" :value="doc")
</template>
