<script setup>
const { currentTheme } = useTheme()
</script>

<template>
  <div :data-theme="currentTheme">
    <NuxtPage />
  </div>
</template>
