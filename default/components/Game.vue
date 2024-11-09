<script setup lang="ts">
const value = ref("");
const list = [
  "Ariana",
  "Fabio",
  "Carlos",
  "Estela",
  "Tata",
  "Jose",
  "Fatinha",
  "Antonio",
  "Isidro",
];

interface Game {
  target: string;
  state: string;
}

const getRandomName = () => {
  const index = Math.floor(Math.random() * list.length) + 1;

  return list[index]?.toUpperCase();
};

const target = ref("");

const game = computed<Game>(() => {
  return {
    target: target.value,
    state: value.value == target.value ? "✅" : "❌",
  };
});
</script>
<template>
  <h1>_GAME_
    <UButton @click="target=getRandomName()">Start</UButton>
  </h1>
  <h2>Target: {{ game.target ?? "--" }}</h2>
  <UFormField label="NAME">
    <UInput v-model="value" autocomplete="no"/> <span class="text-lg">{{game.state}}</span>
  </UFormField>
</template>