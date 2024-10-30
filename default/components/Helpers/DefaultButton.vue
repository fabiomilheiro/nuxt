<script setup lang="ts">
</script>
<template>
  <button type="button" :class="$style.button"><slot></slot></button>
</template>
<style module>
  .button {
    padding: 0.4rem;
    margin: 0.1rem;
    border-radius: 0.2rem;
    border:1px;
  }
</style>