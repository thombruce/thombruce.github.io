<script setup lang="ts">
const route = useRoute()

import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'
const query: QueryBuilderParams = { path: route.path, where: [{ navigation: { $ne: false }, _dir: route.path.slice(1) }] }
</script>

<template>
  <main class="my-10">
    <Breadcrumbs class="not-prose" />
    <ContentDoc>
      <template #default="{ doc }">
        <h1>{{ doc.title }}</h1>
        <div v-if="doc.author">
          {{ doc.author }}
        </div>

        <ContentRenderer :value="doc" />
      </template>
      <template #empty></template>
      <template #not-found>
        <h1>Oops!</h1>
        <p>We couldn't find what you were looking for.</p>
      </template>
    </ContentDoc>
    <ContentList :query="query">
      <template #default="{ list }">
        <ul>
          <li v-for="article in list" :key="article._path">
            <NuxtLink :to="article._path">{{ article.title }}</NuxtLink>
          </li>
        </ul>
      </template>
      <template #not-found></template>
    </ContentList>
  </main>
</template>
