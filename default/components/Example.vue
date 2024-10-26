<script setup lang="ts">


import {AnotherButton, DefaultButton} from "#components";

const value = ref(1000);

const onClick = () => {
  value.value++;
};

// const defaultButton = resolveComponent("DefaultButton");
// const anotherButton = resolveComponent("AnotherButton");

const useAnotherButton = computed(() => value.value % 2 == 0);
</script>
<template>
  <div>Example component {{ value }}
    <component :is="useAnotherButton ? AnotherButton : DefaultButton" @click="onClick">Increment</component>
  </div>
</template>