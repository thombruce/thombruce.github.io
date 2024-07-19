<template lang="pug">
.prose.max-w-none
  ContentDoc(#default="{ doc }")
    h1 {{ doc.title }}
    div(
      v-for="item in doc.body"
      :class="item.state === '!' ? 'toodles-focus' : ['x', 'X'].includes(item.state) ? 'toodles-done' : ''"
    )
      span.not-prose.mr-3
        input(
          :id="item.id"
          type="checkbox"
          :checked="item.state === 'x'"
          disabled
          :class="item.indent ? 'ml-8' : ''"
        )
      label(:for="item.id")
        MDC(:value="item.text" tag="span" unwrap="p" class="toodles-mdc")
</template>

<style lang="postcss">
.toodles-focus > label {
  @apply font-bold;
}

.toodles-done > label {
  @apply
    relative
    opacity-70;
  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 63%;
    position: absolute;
    top: 0;
    left: 0;
    border-bottom: 3px solid;
  }
}

.toodles-mdc span:is(.toodles-priority) + time::before,
.toodles-mdc time + time::before,
.toodles-mdc time + span:is(.toodles-price, .toodles-context, .toodles-project, .toodles-hashtag, .toodles-tag, .toodles-multiplier)::before,
.toodles-mdc span:is(.toodles-priority, .toodles-price, .toodles-context, .toodles-project, .toodles-hashtag, .toodles-tag) + span:is(.toodles-price, .toodles-context, .toodles-project, .toodles-hashtag, .toodles-tag, .toodles-multiplier)::before {
  content: ' '
}

.toodles-priority {
  @apply
    font-black
    text-violet-800
    dark:text-violet-300;
}

label time.toodles-date:first-of-type {
  @apply
    text-cyan-800
    dark:text-cyan-300;
}

label time.toodles-date:nth-of-type(2) {
  @apply
    text-yellow-800
    dark:text-yellow-300;
}

.toodles-done > label time.toodles-date:first-of-type {
  @apply
    text-lime-800
    dark:text-lime-300;
}

.toodles-done > label time.toodles-date:nth-of-type(2) {
  @apply
    text-cyan-800
    dark:text-cyan-300;
}

.toodles-done > label time.toodles-date:nth-of-type(3) {
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