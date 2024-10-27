<script setup lang="ts">
</script>
<template>
  <div style="background-color: gray">
    <img src="/public/logo.svg" alt="logo"/>
    <div style="background-color: yellow">DEFAULT LAYOUT</div>
    <main>
      <slot/>
    </main>
    <LayoutSelector/>
  </div>
</template>