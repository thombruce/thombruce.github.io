<template lang='pug'>
div
  RockBandContent(v-if='!Array.isArray(content)' :article='content')
  article(v-else)
    header
      h1 {{ slug | titleize }}
    RockBandBlogList(:articles='content')
</template>

<script>
export default {
  async asyncData ({ $content, $taxonomies, params }) {
    const slug = params.page
    const content = await $content(slug)
      .where({ draft: { $ne: true } })
      .sortBy('date', 'desc')
      .fetch()
      .catch(async () => {
        const terms = await $taxonomies(slug, '', { deep: true }).all()
        return terms
      })
    return { slug, content }
  }
}
</script>
