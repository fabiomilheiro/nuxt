<script setup lang="ts">

import {useDebounce} from "@vueuse/shared";

const causeError = ref(false);

const toggleError = () => {
  causeError.value = !causeError.value;
}

const url = computed(() => {
  if (!causeError.value) {
    return "/api/hello";
  }

  return "/api/hello?error=true";
});

const debouncedUrl = useDebounce(url, 200);

const result = await useFetch<{ value: string }, { data: { message: string; }; }>(
    debouncedUrl,
    {
      retry: false,
    }
);

</script>
<template>
  <span>
    <span v-if="result.data?.value">Hello {{ result.data?.value }}</span>
    <span v-else style="color:red">{{ result.error?.value?.data?.message}}</span>
    <button @click="toggleError">{{ causeError ? "Hello error" : "Good hello" }}</button>
  </span>
</template>