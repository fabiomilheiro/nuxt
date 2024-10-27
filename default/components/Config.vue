<script setup lang="ts">
const config = useRuntimeConfig();
</script>
<template>
  <ul>
    <li>config.public.environment={{config.public.environment}}</li>
    <li>config.public.sentryDsn={{config.public.sentryDsn}}</li>
    <li>config.public.tmdbApiToken={{config.public.tmdbApiToken}}</li>
  </ul>
</template>