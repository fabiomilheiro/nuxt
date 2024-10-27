<script setup lang="ts">

const config = useRuntimeConfig();

const searchText = ref("");

interface ListMoveResponse {
  results: Movie[];
}

interface Movie {
  title: string;
  backdrop_path: string;
}

const url = computed(()=> `https://api.themoviedb.org/3/search/movie?query=${searchText.value}&include_adult=false&language=en-GB&page=1`);

const movies = await useFetch<ListMoveResponse>(
    url,
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
    <div>
      <label for="search-text">Search:</label>
      <input id="search-text" v-model="searchText" />
    </div>
    <ul>
      <li v-for="result of movies.data.value?.results">
        <NuxtImg :datasrc="`https://media.themoviedb.org/t/p/w94_and_h141_bestv2/${result.backdrop_path}`" />
        {{result.title}}</li>
    </ul>
  </div>
</template>