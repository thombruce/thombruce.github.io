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
    const content = await $content(params.section, slug)
      .where({ draft: { $ne: true } })
      .fetch()
      .catch(async () => {
        const taxonomy = params.section
        const term = await $taxonomies(taxonomy, '', { deep: true }).find(slug)
        const articles = await $content('', { deep: true })
          .where({
            $and: [
              { draft: { $ne: true } },
              { $or: [{ [taxonomy]: { $contains: term.title } }, { [taxonomy]: { $eq: term.title } }] }
            ]
          })
          .sortBy('date', 'desc')
          .fetch()
        
        return articles
      })
    return { content }
  },
  head () {
    return {
      title: this.content.title
    }
  }
}
</script>
