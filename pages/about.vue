<script setup lang="ts">
import { ref } from 'vue'

const { data: profile } = await useAsyncData('about', () => queryContent('/_data/profile').findOne())
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
      .stat-value.text-emerald-500 {{ age(profile.dob) }}
      .stat-desc Born in the 80s
    .stat.flex-1
      .stat-figure.text-sky-500.text-3xl
        Icon(name="fa:arrows-v")
      .stat-title Height
      .stat-value.text-sky-500 {{ profile.height }} m
      .stat-desc That's 6 ft imperial
    .stat.flex-1
      .stat-figure.text-red-600.text-3xl
        Icon(name="fa:tint")
      .stat-title Blood Type
      .stat-value.text-red-600 {{ profile.blood }}
      .stat-desc 3 time donor

  h2 Programming
  ContentQuery(path="/_data/skills" find="one")
    template(#default="{ data }")
      .grid.grid-cols-3
        .text-center(v-for="skill in data.body" :key="skill.name")
          .text-8xl
            Icon(:name="skill.icon")
          p {{ skill.name }}
</template>
