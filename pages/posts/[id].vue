<script setup lang="ts">
const route = useRoute()
const { data:post } = await useAsyncData(`post-${route.path}`, () => queryContent(route.path).findOne())
</script>

<template lang="pug">
NuxtLayout(:name="page?.layout || layout || 'default'")
  article
    div
      NuxtLink(:to="post._path") {{ post.createdAt }}
    div {{ post.body }}
</template>
