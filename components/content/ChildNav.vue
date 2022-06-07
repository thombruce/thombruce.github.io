<!-- This template should be redundant in a future release of @nuxt/content -->

<template lang="pug">
nav
  ContentNavigation(v-slot="{ navigation }" :path="[path]")
    template(v-for="dir of navigation")
      ol
        template(v-for="link of dir.children")
          li(v-if="link._path != dir._path" :key="link._path")
            NuxtLink(:to="link._path") {{ link.title }}
</template>
