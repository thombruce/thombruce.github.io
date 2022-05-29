<template>
  <div>
    <article>
      <h1>
        <NuxtLink :to="article">{{ article.title }}</NuxtLink>
      </h1>

      <NuxtContent :document="article" />
    </article>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'SectionPage',
  async asyncData({ $content, params }) {
    const article = await $content(params.section, params.page)
      .where({ draft: { $ne: true } })
      .fetch()
      .catch(() => {})

    return { article }
  },
})
</script>
