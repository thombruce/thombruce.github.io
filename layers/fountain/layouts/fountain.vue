<template lang="pug">
ContentDoc(#default="{ doc }")
  .prose.mx-auto
    h1 {{ doc.body.title }}
    Breadcrumbs
  .screenplay
    .title-page(v-html="doc.body.html.title_page")
    .script(v-html="doc.body.html.script")
</template>
