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
  <div>
    <header class="flex">
      <NuxtLink to="/" class="grow">
        <img src="/public/logo.svg" alt="logo"/>
      </NuxtLink>
      <ColorModeSelector />
    </header>
    <div class="bg-yellow-400 dark:bg-yellow-600">DEFAULT LAYOUT (
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