<template lang="pug">
.prose.max-w-none
  ContentDoc(#default="{ doc }")
    h1 {{ doc.title }}
    .not-prose
      TntCheckbox(v-for="item in doc.body" :label="item" disabled)
</template>
