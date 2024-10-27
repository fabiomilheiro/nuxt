<script setup lang="ts">


import {AnotherButton, DefaultButton} from "#components";

const value = ref(0);

const onClick = () => {
  value.value++;

  if (value.value == 10) {
    throw new Error("Example Button Error");
  }
};

// const defaultButton = resolveComponent("DefaultButton");
// const anotherButton = resolveComponent("AnotherButton");

const useAnotherButton = computed(() => value.value % 2 != 0);


</script>
<template>
  <div>Example component {{ value }}
    <component :is="useAnotherButton ? AnotherButton : DefaultButton" @click="onClick">Increment</component>
    (sensitive info: <span class="sentry-mask">Potentially sensitive</span>)
    <LazyComplexThing v-if="value > 10" />

    <SomeClientOnlyCode />
    <ClientOnly>
      <Whatever/>
    </ClientOnly>
    <Foo />
  </div>
</template>