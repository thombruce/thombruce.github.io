<template lang="pug">
.prose.max-w-none
  ContentDoc(#default="{ doc }")
    h1 {{ doc.title }}
    .not-prose
      div(v-for="item in doc.body")
        span.mr-3
          input(
            :id="item"
            disabled
            type="checkbox"
          )
        label(:for="item" v-html="item")
</template>

<style lang="postcss">
.toodles-priority {
  @apply
    font-bold
    text-violet-800
    dark:text-violet-300;
}
.toodles-date {
  @apply
    text-indigo-800
    dark:text-indigo-300;
}
.toodles-price {
  @apply
    text-green-800
    dark:text-green-300;
}
.toodles-context {
  @apply
    font-bold
    text-lime-800
    dark:text-lime-300;
}
.toodles-project {
  @apply
    font-bold
    text-blue-800
    dark:text-blue-300;
}
.toodles-hashtag {
  @apply
    font-bold
    text-orange-800
    dark:text-orange-300;
}
.toodles-tag {
  @apply
    text-purple-800
    dark:text-purple-300;
}
.toodles-multiplier {
  @apply
    text-pink-800
    dark:text-pink-300;
}
</style>