<!-- At present, it appears pages are not generated if linked via a Markdown Component -->

<script setup>
defineProps({
  navigationTree: {
    type: Array,
    default: () => []
  }
})
</script>

<template lang="pug">
ul.hidden
  li(v-for="(item, index) in navigationTree" :key="index")
    NuxtLink(:to="item._path") {{ item.title }}
    SiteMap(v-if="item.children" :navigation-tree="item.children")
</template>
