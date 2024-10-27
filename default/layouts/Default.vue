<script setup lang="ts">
</script>
<template>
  <div style="background-color: gray">
    <NuxtLink to="/">
      <img src="/public/logo.svg" alt="logo"/>
    </NuxtLink>
    <div style="background-color: yellow">DEFAULT LAYOUT (go to <NuxtLink :to="{name: 'admin'}">admin</NuxtLink>)</div>
    <main>
      <slot/>
    </main>
    <LayoutSelector/>
  </div>
</template>