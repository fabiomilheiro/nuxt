<script setup lang="ts">
import PiniaExampleList from "~/components/PiniaExampleList.vue";

const listStore = useListStore();
const newValue = ref("");
</script>
<template>
  <div>
    <h2>Pinia store example</h2>
    <div class="space-x-2">
      <label for="new-value">New value</label>
      <UInput v-model="newValue" id="new-value"/>
      <UButton @click="()=> listStore.add(newValue)">Submit</UButton>
      <PiniaExampleList />
    </div>
  </div>
</template>