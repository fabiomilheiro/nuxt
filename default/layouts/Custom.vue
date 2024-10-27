<script setup lang="ts">
</script>
<template>
  <div>
    <div>
      <div style="background-color: gray">
        <NuxtLink to="/">
          <img src="/public/logo.svg" alt="logo"/>
        </NuxtLink>
        <div style="background-color: aqua">CUSTOM LAYOUT</div>
        <main>
          <slot/>
        </main>
      </div>
    </div>
  </div>
</template>