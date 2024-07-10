<template lang="pug">
ContentDoc(#default="{ doc }")
  .prose.max-w-none
    h1 {{ doc.title }}
    table.table
      thead
        tr
          th(v-for="cell in doc.body[0].split(',')") {{ cell }}
      tbody
        tr(v-for="(item, index) in doc.body")
          template(v-if="index")
            td(v-for="cell in item.split(',')") {{ cell }}
</template>
