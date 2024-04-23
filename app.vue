<script setup>
const { name, copyright } = useAppConfig()
</script>

<template lang="pug">
header.text-center.py-4
  NuxtLink.text-lg.font-bold(to="/") {{ name }}
main
  NuxtPage
footer.text-center.py-4
  small {{ copyright }}
</template>
