<template>
  <Head>
    <title>Login - Shibaqueue Admin</title>
  </Head>
  <div class="w-80 mx-auto my-[10%]">

    <img src="/logo.png" alt="" class="mx-auto w-[100px]"/>
    <br/>
    <h1 class="font-bold text-center">ShibaQueue Administration</h1>
    <br/>
    <UForm
        :schema="schema"
        :state="state"
        @submit="submit"
    >
      <UFormGroup label="Username" name="username">
        <UInput v-model="state.username"/>
      </UFormGroup>
      <br/>
      <UFormGroup label="Password" name="password">
        <UInput v-model="state.password" type="password"/>
      </UFormGroup>
      <br/>
      <h1 class="text-red-500 text-sm text-center">{{error}}</h1>
      <br/>
      <UButton type="submit" block>
        Submit
      </UButton>
    </UForm>
  </div>

</template>

<script setup lang="ts">
definePageMeta({
  layout: false,
});

import {ref} from 'vue'
import {z} from 'zod'
import type {FormSubmitEvent} from '@nuxt/ui/dist/runtime/types'
import {isTokenValidate} from "~/composables/tokenValidate";

const error = ref("");
const runtime = useRuntimeConfig();

if(await isTokenValidate()) {
  navigateTo("/");
}

const schema = z.object({
  username: z.string().min(5, 'Invalid username'),
  password: z.string().min(5, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = ref({
  username: undefined,
  password: undefined
})

async function submit(event: FormSubmitEvent<Schema>) {

  const {data: responseData} = await useFetch(runtime.public.API_URL + '/auth/login/admin', {
    method: 'post',
    body: {
      username: event.data.username,
      password: event.data.password
    }
  })

  let respond = <string>responseData.value;
  if (respond.startsWith("Error")) {
    error.value = respond.slice(7).toUpperCase();
  } else {
    const token = useCookie<string>("token");
    token.value = respond;
    navigateTo("/");
  }
}
</script>