<script setup lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const query: QueryBuilderParams = {
  path: '/',
  where: [{
    navigation: { $eq: false },
    _dir: '',
    layout: { $eq: 'redirect' },
    link: { $exists: true },
  }]
}
</script>

<template lang="pug">
.thombruce-socials
  ContentList(:query="query")
    template(#default="{ list }")
      ul.mb-4.space-x-4
        li.inline(v-for="article in list" :key="article._path")
          NuxtLink(:to="article.link" :title="article.title" :rel="article.me ? 'me' : undefined")
            Icon(:name="article.icon" size="2em")/
            span.sr-only {{ article.title }}
    template(#not-found)
</template>
