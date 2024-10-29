<script setup lang="ts">
import {useLocale} from "~/composables/locale";

const locale = useLocale();
const locales = useLocales();

const date = ref(new Date(2001, 1, 1));
const formattedDate = useLocaleDate(date);
</script>
<template>
  <div>
    <select v-model="locale">
      <option v-for="l of locales" :key="l">
        {{l}}
      </option>
    </select>
    <span>Formatted date: </span>
    <span>{{formattedDate}}</span>
  </div>
</template>