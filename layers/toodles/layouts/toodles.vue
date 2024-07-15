<template lang="pug">
.prose.max-w-none
  ContentDoc(#default="{ doc }")
    h1 {{ doc.title }}
    ul
      li(v-for="item in doc.body") {{ item }}
</template>
