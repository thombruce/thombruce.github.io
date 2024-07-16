<script setup lang="ts">
import { ref } from 'vue'

const { data: profile } = await useAsyncData('about', () => queryContent('/_data/profile').findOne())
</script>

<template lang="pug">
.prose.max-w-none
  h1 About

  Breadcrumbs

  h2 General

  p Hey you! Welcome. I'm still working on my about page. In the meantime, here's some irrelevant data you really don't care about:

  .flex
    .flex-1.text-center
      .text-emerald-600.text-4xl
        Icon(name="fa:calendar")/
      strong Age
      .font-bold.text-4xl.text-emerald-500 {{ age(profile.dob) }}
      em Born in the 80s
    .flex-1.text-center
      .text-sky-600.text-4xl
        Icon(name="fa:arrows-v")/
      strong Height
      .font-bold.text-4xl.text-sky-500 {{ profile.height }} m
      em That's 6 ft imperial
    .flex-1.text-center
      .text-red-700.text-4xl
        Icon(name="fa:tint")/
      strong Blood Type
      .font-bold.text-4xl.text-red-600 {{ profile.blood }}
      em 3 time donor

  h2 Programming Skills
  ContentQuery(path="/_data/skills" find="one")
    template(#default="{ data }")
      .grid.grid-cols-3
        .text-center(v-for="skill in data.body" :key="skill.name")
          .text-8xl
            Icon(:name="skill.icon")/
          p {{ skill.name }}
</template>
