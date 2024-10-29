<script setup lang="tsx">
const InlineComponent = defineComponent(()=> {
  return () => <div>Inline TSX component</div>;
})

const value = ref(0);

const onClick = () => {
  value.value++;

  if (value.value == 10) {
    throw new Error("Example Button Error");
  }
};

const useAnotherButton = computed(() => value.value % 2 != 0);
</script>
<template>
  <NuxtErrorBoundary>
    <div style="background-color: green;">
      <InlineComponent />
    </div>
    <template #error="{error}">
      <em style="color:maroon">{{error}}</em>
    </template>
  </NuxtErrorBoundary>
</template>