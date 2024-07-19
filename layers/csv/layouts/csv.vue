<template lang="pug">
.prose.max-w-none
  ContentDoc(v-slot="{ doc }")
    h1 {{ doc.title }}
    Breadcrumbs
    table.table
      thead
        tr
          th(v-for="cell in doc.body[0].split(',')") {{ cell }}
      tbody
        tr(v-for="(item, index) in doc.body")
          template(v-if="index")
            td(v-for="cell in item.split(',')") {{ cell }}
  PrevNext
</template>
