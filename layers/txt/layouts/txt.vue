<template lang="pug">
ContentDoc(#default="{ doc }")
  .prose.mx-auto
    h1 {{ doc.title }}
    ul
      li(v-for="item in doc.body") {{ item }}
</template>
