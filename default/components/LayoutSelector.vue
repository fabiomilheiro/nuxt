<script setup lang="ts">
</script>
<template>
  <div>
    Layouts:
    <button @click="setPageLayout('default')">Default</button>
    <button @click="setPageLayout('post')">Post</button>
    <button @click="setPageLayout(false)">None</button>
  </div>
</template>