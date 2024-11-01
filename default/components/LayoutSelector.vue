<script setup lang="ts">
</script>
<template>
  <div class="flex my-2 gap-2">
    <UButton @click="setPageLayout('default')">Default</UButton>
    <UButton @click="setPageLayout('post')">Post</UButton>
    <UButton @click="setPageLayout(false)">None</UButton>
  </div>
</template>