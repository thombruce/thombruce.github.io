<script setup lang="ts">
const { path } = useRoute()

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = {
  where: [
    { navigation: { $ne: false } },
    { _path: {
      $regex: new RegExp(`^${path.replace(/\/$/, "")}/.+`)
    } },
    { _dir: path.split('/').slice(-1)[0] },
    { _partial: false }
  ],
  sort: [{ date: -1 }]
}
</script>

<template lang="pug">
ContentList(v-slot="{ list }" :query="query")
  ul
    li(v-for="article in list" :key="article._path")
      NuxtLink(:to="article._path") {{ article.navigation?.title || article.title }}
</template>
