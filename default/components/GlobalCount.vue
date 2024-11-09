<script setup lang="ts">
import {useGlobalCounter} from "~/composables/useGlobalCounter";

const globalCounter = useGlobalCounter();

const value = ref(0);
</script>
<template>
  <div class="flex gap-12 my-12">
    <div class="space-x-2">
      <UButton variant="solid" class="text-lg" color="secondary" @click="globalCounter-=2">-2</UButton>
      <span class="text-lg font-bold">{{globalCounter}}</span>
      <UButton variant="solid" class="text-lg" color="primary" @click="globalCounter+=2">+2</UButton>
    </div>
    <div class="space-x-2">
      <span class="text-lg font-bold">2 x</span>
      <UInput v-model="value" class="w-12" />
      <span class="text-lg font-bold">= {{value * 2}}</span>
    </div>
  </div>
</template>