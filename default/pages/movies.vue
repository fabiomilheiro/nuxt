<script setup lang="ts">

import {useDebounce} from "@vueuse/shared";

const config = useRuntimeConfig();

const searchText = ref("");

interface ListMoveResponse {
  results: Movie[];
}

interface Movie {
  id: number;
  title: string;
  backdrop_path: string;
}

const url = computed(() => `https://api.themoviedb.org/3/search/movie?query=${searchText.value}&include_adult=false&language=en-GB&page=1`);

const debouncedUrl = useDebounce(url, 400);

const movies = await useFetch<ListMoveResponse>(
    debouncedUrl,
    {
      headers: {
        accept: "application/json",
        "Authorization": `Bearer ${config.public.tmdbApiToken}`,
      }
    },
);

</script>
<template>
  <div style="margin-bottom:5rem;">
    <h1>Movies</h1>
    <UFormField label="Search" name="search">
      <UInput v-model="searchText" />
    </UFormField>
    <ul>
      <li v-for="result of movies.data.value?.results" :key="result.id">
        <NuxtImg :src="`https://media.themoviedb.org/t/p/w50_and_h50_face${result.backdrop_path}`" width="50" height="50"/>
        {{ result.title }}
      </li>
    </ul>
  </div>
</template>