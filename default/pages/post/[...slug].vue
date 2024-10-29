<script setup lang="ts">

definePageMeta({
  layout: "post",
});

const route = useRoute();
</script>
<template>
  <div>
    <em>params={{ route.params }}</em>
    <ContentDoc>
      <template #not-found>Post not found.</template>
    </ContentDoc>
  </div>
</template>