<template lang="pug">
ContentDoc(#default="{ doc }")
  .prose.mx-auto
    h1 {{ doc.title }}
    table.table
      thead
        tr
          th {{ doc.body[0] }}
      tbody
        tr(v-for="(item, index) in doc.body")
          td(v-if="index") {{ item }}
</template>
