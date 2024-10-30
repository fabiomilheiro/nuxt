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
  <NuxtErrorBoundary>
    <div>Example component {{ value }}
      <component :is="useAnotherButton ? AnotherButton : DefaultButton" @click="onClick">Increment</component>
      (sensitive info: <span class="sentry-mask">Potentially sensitive</span>)
      <GlobalCount />
      <PiniaExample/>
      <LazyComplexThing v-if="value > 10"/>
      <LocalizationExample/>
      <SomeClientOnlyCode/>
      <ClientOnly>
        <Whatever/>
      </ClientOnly>
      <Foo/>
    </div>
    <DefaultButton @click="()=>{ throw new Error('Error on purpose')}">Cause error</DefaultButton>
    <template #error="{error}">
      <em style="color:maroon">{{error}}</em>
    </template>
  </NuxtErrorBoundary>
</template>