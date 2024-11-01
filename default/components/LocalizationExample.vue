<script setup lang="ts">
import {useLocale} from "~/composables/locale";

const locale = useLocale();
const locales = useLocales();

const date = ref(new Date(2001, 1, 1));
const formattedDate = useLocaleDate(date);
</script>
<template>
  <div class="flex gap-2 my-2">
    <USelect v-model="locale" :items="locales" />
    <span>Formatted date: </span>
    <span>{{formattedDate}}</span>
  </div>
</template>