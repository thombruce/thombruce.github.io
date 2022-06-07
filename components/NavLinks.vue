<template lang="pug">
nav(class='space-x-2')
  ContentNavigation(v-slot="{ navigation }")
    NuxtLink(v-for="link of navigation" :key="link._path" :to="link._path") {{ link.title }}
</template>
