<script setup lang="ts">
import PiniaExampleList from "~/components/PiniaExampleList.vue";

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
      <PiniaExampleList />
    </div>
  </div>
</template>