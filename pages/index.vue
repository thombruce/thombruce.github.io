<script setup lang="ts">
const route = useRoute()
const { data: posts } = await useAsyncData(`posts`, () => queryContent('/posts').sort({ createdAt: -1 }).find())
</script>

<template lang="pug">
NuxtLayout(:name="page?.layout || layout || 'default'")
  //- ArticleList

  article.py-5(v-for="post in posts")
    div
      NuxtLink(:to="post._path") {{ new Date(post.createdAt).toLocaleString() }}
    MDC.text-lg(:value="post.body" unwrap="p")
</template>
