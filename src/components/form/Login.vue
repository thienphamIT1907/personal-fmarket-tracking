<script lang="ts" setup>
  import * as z from 'zod';

  const isShowPassword = ref(false);

  const cannotSubmit = ref(true);

  const schema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(8, 'Must be at least 8 characters'),
  });

  type Schema = z.output<typeof schema>;

  const state = reactive<Partial<Schema>>({
    email: undefined,
    password: undefined,
  });

  const toast = useToast();
  async function onSubmit() {
    toast.add({
      title: 'Success',
      description: 'The form has been submitted.',
      color: 'success',
    });
  }
</script>

<template>
  <UForm class="space-y-6" :schema="schema" :state="state" @submit="onSubmit">
    <UFormField label="Email" name="email">
      <UInput
        v-model="state.email"
        class="w-full"
        size="xl"
        name="email"
        placeholder="Email"
      />
    </UFormField>

    <UFormField label="Password" name="password" placeholder="Password">
      <UInput
        v-model="state.password"
        placeholder="Password"
        :type="isShowPassword ? 'text' : 'password'"
        :ui="{ trailing: 'pe-1' }"
        size="xl"
        class="w-full"
      >
        <template #trailing>
          <UButton
            color="neutral"
            variant="link"
            size="sm"
            :icon="isShowPassword ? 'i-lucide-eye-off' : 'i-lucide-eye'"
            :aria-label="isShowPassword ? 'Hide password' : 'Show password'"
            :aria-pressed="isShowPassword"
            aria-controls="password"
            @click="isShowPassword = !isShowPassword"
          />
        </template>
      </UInput>
    </UFormField>

    <UButton
      type="submit"
      block
      size="xl"
      color="neutral"
      :disabled="cannotSubmit"
    >
      Submit
    </UButton>
  </UForm>
</template>

<style lang="css" scoped></style>
