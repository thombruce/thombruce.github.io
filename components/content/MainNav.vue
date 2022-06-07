<template lang="pug">
nav
  ContentNavigation(v-slot="{ navigation }" :path="[path]")
    ul
      li(v-for="dir of navigation" :key="dir._path")
        NuxtLink(:to="dir._path") {{ dir.title }}
</template>
