<template>
  <div>
    <template v-if="Array.isArray(content)">
      <article v-for="article in content" v-bind:key="article.slug">
        <h1>
          <NuxtLink :to="article">{{ article.title }}</NuxtLink>
        </h1>

        <NuxtContent :document="article" />
      </article>
    </template>

    <article v-else>
      <h1>
        <NuxtLink :to="content">{{ content.title }}</NuxtLink>
      </h1>

      <NuxtContent :document="content" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'RegularPage',
  async asyncData({ $content, params }) {
    const content = await $content(params.page)
      .where({ draft: { $ne: true } })
      .sortBy('date', 'desc')
      .fetch()
      .catch(() => {})

    return { content }
  },
})
</script>
