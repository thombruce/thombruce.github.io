<script setup lang="ts">
import { ref } from 'vue'

const currentDate = new Date()
const birthDate = new Date("1989-03-14")
const age = ref<number>(0)
const differenceInMilliseconds = currentDate - birthDate
age.value = Math.floor(differenceInMilliseconds / 31557600000)
</script>

<template lang="pug">
.prose.mx-auto
  h1 About

  h2 General
  .stats.shadow.w-full
    .stat.flex-1
      .stat-figure.text-emerald-500.text-3xl
        Icon(name="fa:calendar")
      .stat-title Age
      .stat-value.text-emerald-500 {{ age }}
      .stat-desc Born in the 80s
    .stat.flex-1
      .stat-figure.text-sky-500.text-3xl
        Icon(name="fa:arrows-v")
      .stat-title Height
      .stat-value.text-sky-500 1.83 m
      .stat-desc That's 6 ft imperial
    .stat.flex-1
      .stat-figure.text-red-600.text-3xl
        Icon(name="fa:tint")
      .stat-title Blood Type
      .stat-value.text-red-600 O+
      .stat-desc 3 time donor

  h2 Programming
  .stats.shadow.w-full
    .stat.flex-1
      .stat-figure.text-5xl
        Icon(name="skill-icons:javascript")
      .stat-title JavaScript
      .stat-value(class="text-[#f7df1e]") 12 y
    .stat.flex-1
      .stat-figure.text-5xl
        Icon(name="skill-icons:ruby")
      .stat-title Ruby
      .stat-value(class="text-[#D51F06]") 12 y
    .stat.flex-1
      .stat-figure.text-5xl
        Icon(name="skill-icons:rust")
      .stat-title Rust
      .stat-value(class="text-[#F46623]") 1 y
</template>
