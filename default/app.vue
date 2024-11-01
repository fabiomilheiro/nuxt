
<script setup lang="ts">
// <NuxtRouteAnnouncer />
// <Example/>
// <ContentDoc/>
// <NuxtWelcome />
// <Config/>
</script>
<template>
  <UApp>
    <NuxtLayout>
      <NuxtPage/>
    </NuxtLayout>
  </UApp>
</template>
<style>
@import "tailwindcss";
@import "@nuxt/ui";

.page-enter-active,
.page-leave-active {
  transition: ease-in-out 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
.layout-enter-active,
.layout-leave-active {
  transition: ease-in-out 0.4s;
}
.layout-enter-from,
.layout-leave-to {
  filter: grayscale(1);
}
</style>