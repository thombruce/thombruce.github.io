<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(`posts`, () => queryContent(route.path).sort({ createdAt: -1 }).find())
</script>

<template lang="pug">
NuxtLayout(:name="page?.layout || layout || 'default'")
  article.py-5(v-for="post in data")
    div
      NuxtLink(:to="post._path") {{ new Date(post.createdAt).toLocaleString() }}
    MDC.text-lg(:value="post.body" unwrap="p")
</template>
