<template lang="pug">
ContentDoc(#default="{ doc }")
  .prose.mx-auto
    ContentRenderer(v-if="doc.body" :value="doc")
</template>
