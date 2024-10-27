<script setup lang="ts">
definePageMeta({
  layout: false,
  middleware: [
    "log-test-value",
  ]
})
</script>
<template>
  <NuxtLayout name="custom">
    <title>Custom title X</title>
  </NuxtLayout>
</template>