<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const { copyright } = useAppConfig()
const query: QueryBuilderParams = {
  path: '/',
  where: [{
    navigation: { $eq: false },
    _dir: '',
    layout: { $eq: 'redirect' },
    link: { $exists: true }
  }]
}
</script>

<template lang="pug">
ContentList(:query="query")
  template(#default="{ list }")
    ul.mb-4.space-x-4
      li.inline(v-for="article in list" :key="article._path")
        NuxtLink(:to="article._path" :title="article.title")
          Icon(:name="article.icon" size="2em")
          span.sr-only {{ article.title }}
  template(#not-found)
</template>
