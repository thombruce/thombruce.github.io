<script setup lang="ts">
const route = useRoute()
const { data:post } = await useAsyncData(`post-${route.path}`, () => queryContent(route.path).findOne())
</script>

<template lang="pug">
NuxtLayout(:name="page?.layout || layout || 'default'")
  article.py-5
    div.text-lg
      NuxtLink(:to="post._path") {{ new Date(post.createdAt).toLocaleString() }}
    MDC.text-xl(:value="post.body" unwrap="p")
</template>
