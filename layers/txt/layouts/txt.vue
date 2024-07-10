<template lang="pug">
ContentDoc(#default="{ doc }")
  .prose.max-w-none
    h1 {{ doc.title }}
    ul
      li(v-for="item in doc.body") {{ item }}
</template>
