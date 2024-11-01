<script setup lang="ts">
const listStore = useListStore();
</script>
<template>
<!--  <MotionGroup  preset="fadeVisible">-->
    <ul>
      <li v-motion-roll-bottom v-for="v of listStore.list" :key="v">{{ v }}</li>
    </ul>
<!--  </MotionGroup>-->
</template>