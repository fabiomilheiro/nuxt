<script setup lang="ts">
import Hello from "~/components/Hello.vue";
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
      <Hello />
    </div>
    <main>
      <slot/>
    </main>
    <LayoutSelector/>
    <Config/>
  </div>
</template>