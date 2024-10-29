<script setup lang="ts">
</script>
<template>
  <div>
    <main>
      <div style="background-color: gray">
        <NuxtLink to="/">
          <img src="/public/logo.svg" alt="logo"/>
        </NuxtLink>
        <div style="background-color: orange">POST LAYOUT</div>
        <main>
          <slot/>
        </main>
        <LayoutSelector/>
      </div>
    </main>
  </div>
</template>