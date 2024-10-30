<script setup lang="ts">
import Hello from "~/components/Hello.vue";

useHead({
  titleTemplate: (title) => {
    if (!title) {
      return "Website name (default template)";
    }

    return `${title} - Website name (default template)`;
  }
});
</script>
<template>
  <div style="background-color: gray">
    <NuxtLink to="/">
      <img src="/public/logo.svg" alt="logo"/>
    </NuxtLink>
    <div style="background-color: yellow">DEFAULT LAYOUT (
      <NuxtLink :to="{name: 'admin'}">admin</NuxtLink>
      |
      <NuxtLink :to="{name: 'movies'}">movies</NuxtLink>
      )
      |
      <Hello/>
    </div>
    <main>
      <slot/>
    </main>
    <LayoutSelector/>
    <Config/>
  </div>
</template>