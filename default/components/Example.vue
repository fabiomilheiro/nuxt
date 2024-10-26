<script setup lang="ts">
const value = ref(1000);

const onClick = ()=> {
  value.value++;
};
</script>
<template>
  <div>Example component {{ value }} <button @click="onClick">Increment</button></div>
</template>