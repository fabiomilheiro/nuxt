<script setup lang="ts">

import {useDebounce} from "@vueuse/shared";

const config = useRuntimeConfig();

const searchText = ref("");

type ListMoveResponse = Movie[];

interface Movie {
  _id: string;
  title: string;
  numberInStock: number;
  dailyRentalRate: number;
  genre: {
    _id: string;
    name: string;
  }
}

const url = computed(() => `/api/movies?searchText=${searchText.value}`);

const debouncedUrl = useDebounce(url, 400);

const movies = await useFetch<ListMoveResponse>(
    debouncedUrl,
    {
      headers: {
        accept: "application/json",
        // "Authorization": `Bearer ${config.public.tmdbApiToken}`,
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
    <p v-if="movies.status.value == 'pending'">
      Loading...
    </p>
    <p v-if="movies.status.value == 'success' && movies.data.value?.length == 0">
      No results
    </p>
    <ul>
      <li v-for="result of movies.data.value" :key="result._id">
<!--        <NuxtImg :src="`https://media.themoviedb.org/t/p/w50_and_h50_face${result.backdrop_path}`" width="50" height="50"/>-->
        {{ result.title }}
      </li>
    </ul>
  </div>
</template>