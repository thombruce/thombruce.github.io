<template lang="pug">
NuxtLayout
  ContentDoc
    template(#default="{ doc }")
      .prose.max-w-none
        h1 {{ doc.body.title }}
        Breadcrumbs
      .screenplay
        .title-page(v-html="doc.body.html.title_page")
        .script(v-html="doc.body.html.script")
  PrevNext
</template>
