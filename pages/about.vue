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
  .stats.shadow
    .stat
      .stat-figure.text-emerald-500.text-2xl
        Icon(name="fa:calendar")
      .stat-title Age
      .stat-value.text-emerald-500 {{ age }}
      .stat-desc Born in the 80s
    .stat
      .stat-figure.text-sky-500.text-2xl
        Icon(name="fa:arrows-v")
      .stat-title Height
      .stat-value.text-sky-500 1.83 m
      .stat-desc That's 6 ft imperial
    .stat
      .stat-figure.text-red-600.text-2xl
        Icon(name="fa:tint")
      .stat-title Blood Type
      .stat-value.text-red-600 O+
      .stat-desc 2 time donor
</template>
