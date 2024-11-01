<script setup lang="ts">
import {z} from "zod";

const schema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Min 8 characters"),
});

type Schema = z.output<typeof schema>;

const state = ref<Partial<Schema>>({
  email: undefined,
  password: undefined,
});

const toast = useToast();

const onSubmit = ()=>{
  toast.add({
    color: "primary",
    title: "Logging in not yet implemented.",
    description: "TODO",
  })
};
</script>
<template>
  <div>
    <h1>Login</h1>
    <UForm :schema="schema" :state="state" class="space-y-4" @submit="onSubmit">
      <UFormField label="Email" name="email">
        <UInput v-model="state.email" />
      </UFormField>

      <UFormField label="Password" name="password">
        <UInput v-model="state.password" type="password" />
      </UFormField>

      <UButton type="submit">
        Submit
      </UButton>
    </UForm>
  </div>
</template>