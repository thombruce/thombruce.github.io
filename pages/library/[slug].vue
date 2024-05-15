<template lang="pug">
.prose.mx-auto
  ContentDoc(v-slot="{ doc }")
    article
      h1 {{ doc.title }}
      template(v-if="doc.mods")
        h2 Mods
        ul
          li(v-for="mod in doc.mods" :key="mod.title")
            a(:href="mod.url") {{ mod.title }}
</template>
