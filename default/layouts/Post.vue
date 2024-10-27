<script setup lang="ts">
</script>
<template>
  <div>
    <div>
      <slot name="head"></slot>
    </div>
    <main>
      <div style="background-color: gray">
        <img src="/public/logo.svg" alt="logo"/>
        <div style="background-color: orange">POST LAYOUT</div>
        <main>
          <slot/>
        </main>
        <LayoutSelector/>
      </div>
    </main>
  </div>
</template>