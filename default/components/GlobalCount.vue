<script setup lang="ts">
import {useGlobalCounter} from "~/composables/useGlobalCounter";

const globalCounter = useGlobalCounter();
</script>
<template>
  <div>
    <DefaultButton @click="globalCounter--">-1</DefaultButton>
    <span>{{globalCounter}}</span>
    <DefaultButton @click="globalCounter++">+1</DefaultButton>
  </div>
</template>