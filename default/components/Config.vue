<script setup lang="ts">
const config = useRuntimeConfig();
</script>
<template>
  <ul>
    <li>config.public.sentryDsn={{config.public.sentryDsn}}</li>
  </ul>
</template>