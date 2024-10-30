<script setup lang="ts">
const listStore = useListStore();
const newValue = ref("");
</script>
<template>
  <div>
    <h2>Pinia store example</h2>
    <div>
      <label for="new-value">New value</label>
      <input v-model="newValue" id="new-value"/>
      <DefaultButton @click="()=> listStore.add(newValue)">Submit</DefaultButton>
      <ul>
        <li v-for="v of listStore.list" :key="v">{{ v }}</li>
      </ul>
    </div>
  </div>
</template>