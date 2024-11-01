<script setup lang="ts">
import {useGlobalCounter} from "~/composables/useGlobalCounter";

const globalCounter = useGlobalCounter();
</script>
<template>
  <div class="space-x-2">
    <UButton variant="solid" color="error" @click="globalCounter--">-1</UButton>
    <span>{{globalCounter}}</span>
    <UButton variant="solid" color="primary" @click="globalCounter++">+1</UButton>
  </div>
</template>