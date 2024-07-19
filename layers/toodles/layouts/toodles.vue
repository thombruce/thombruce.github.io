<template lang="pug">
.prose.max-w-none
  ContentDoc(#default="{ doc }")
    h1 {{ doc.title }}
    .not-prose
      div(
        v-for="item in doc.body"
        :class="item.state === '!' ? 'toodles-focus' : ['x', 'X'].includes(item.state) ? 'toodles-done' : ''"
      )
        span.mr-3
          input(
            :id="item.id"
            type="checkbox"
            :checked="item.state === 'x'"
            disabled
            :class="item.indent ? 'ml-8' : ''"
          )
        label(:for="item.id" v-html="item.text")
</template>

<style lang="postcss">
.toodles-focus > label {
  @apply font-bold;
}

.toodles-done > label {
  @apply
    opacity-70
    line-through;
}

.toodles-priority {
  @apply
    font-black
    text-violet-800
    dark:text-violet-300;
}

label > time.toodles-date:first-of-type {
  @apply
    text-cyan-800
    dark:text-cyan-300;
}

label > time.toodles-date:nth-of-type(2) {
  @apply
    text-yellow-800
    dark:text-yellow-300;
}

.toodles-done > label > time.toodles-date:first-of-type {
  @apply
    text-lime-800
    dark:text-lime-300;
}

.toodles-done > label > time.toodles-date:nth-of-type(2) {
  @apply
    text-cyan-800
    dark:text-cyan-300;
}

.toodles-done > label > time.toodles-date:nth-of-type(3) {
  @apply
    text-yellow-800
    dark:text-yellow-300;
}

.toodles-price {
  @apply
    text-green-800
    dark:text-green-300;
}

.toodles-context {
  @apply
    font-black
    text-lime-800
    dark:text-lime-300;
}

.toodles-project {
  @apply
    font-black
    text-blue-800
    dark:text-blue-300;
}

.toodles-hashtag {
  @apply
    font-black
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