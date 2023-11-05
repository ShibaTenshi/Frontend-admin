<template>
  <Head>
    <title>Restaurant Info - Shibaqueue Admin</title>
  </Head>
  <div class="p-10 my-14">
    <div class="flex justify-center">
      <img :src="logoLink" class="w-[200px]" @click="isOpen = true; modalLink = logoLink"/>
    </div>
    <div>
      <UModal v-model="isOpen">
        <img :src="modalLink"/>
      </UModal>
      <UModal v-model="cancelRestaurant">
        <UForm class="p-5"
            :schema="schema"
            :state="state"
            @submit="submit"
        >
          <UFormGroup label="reason" name="reason">
            <UInput v-model="state.reason"/>
          </UFormGroup>
          <br/>
          <h1 class="text-red-500 text-sm text-center">{{error}}</h1>
          <br/>
          <UButton type="submit" block>
            Submit
          </UButton>
        </UForm>
      </UModal>
    </div>
    <div class="flex justify-center p-5">
      <h1 class="text-3xl font-bold">{{ record.restaurantName }}</h1>
    </div>
    <div class="flex justify-center p-5">
      <h1 class="text-sm font-bold">{{ record.dateAdded }}</h1>
    </div>
    <div class="flex justify-center p-5">
      <h1 class="text-sm font-bold">Category:  {{ record.category }}</h1>
    </div>
    <div class="flex justify-center p-16">
      <a class="text-gray-500">{{ record.description }}</a>
    </div>
    <div class="flex justify-center py-3">
      <h1 class="text-2xl font-bold text-primary">Restaurant Environments</h1>
    </div>
    <div class="grid grid-cols-3 gap-5 w-[90%] m-auto">
      <img v-for="link in envLink" :src="runtime.public.STORAGE_URL + link" class="w-[500px]" @click="isOpen = true; modalLink = runtime.public.STORAGE_URL + link"/>
    </div>
    <br/>
    <br/>
    <div class="flex justify-center py-3">
      <h1 class="text-2xl font-bold text-primary">Restaurant Menus</h1>
    </div>
    <div class="grid grid-cols-3 gap-5 w-[90%] m-auto">
      <img v-for="link in menuLink" :src="runtime.public.STORAGE_URL + link" @click="isOpen = true; modalLink = runtime.public.STORAGE_URL + link"/>
    </div>
    <br/>
    <br/>
    <div class="p-5">
      <h1 class="text-2xl font-bold text-primary text-center">Open Date</h1>
      <div></div>

      <div class="flex justify-center">
        <h1 class="p-5" v-bind:style="record.openDate[0] == 1 ? 'color: black' : 'color: lightgray'">Sunday</h1>
        <h1 class="p-5" v-bind:style="record.openDate[1] == 1 ? 'color: black' : 'color: lightgray'">Monday</h1>
        <h1 class="p-5" v-bind:style="record.openDate[2] == 1 ? 'color: black' : 'color: lightgray'">Tuesday</h1>
        <h1 class="p-5" v-bind:style="record.openDate[3] == 1 ? 'color: black' : 'color: lightgray'">Wednesday</h1>
        <h1 class="p-5" v-bind:style="record.openDate[4] == 1 ? 'color: black' : 'color: lightgray'">Thursday</h1>
        <h1 class="p-5" v-bind:style="record.openDate[5] == 1 ? 'color: black' : 'color: lightgray'">Friday</h1>
        <h1 class="p-5" v-bind:style="record.openDate[6] == 1 ? 'color: black' : 'color: lightgray'">Saturday</h1>

      </div>
      <div class="flex justify-center">
        <h1 class="p-5">Open Time: {{record.openTime}}</h1>
        <h1 class="p-5">Close Time: {{record.closeTime}}</h1>
      </div>
    </div>

    <div class="p-5">
      <h1 class="text-2xl font-bold text-primary text-center p-5">Owner</h1>
      <h1 class="text-center">Owner Name: {{record.ownerName}}</h1>
      <h1 class="text-center">User Name: {{record.username}}</h1>
      <h1 class="text-center">Owner Name: {{record.email}}</h1>
    </div>

    <div class="flex justify-around p-5">
      <UButton class="bg-red-400" @click="discard">Discard</UButton>
      <UButton class="bg-green-400" @click="approve">Approve</UButton>
    </div>
  </div>

</template>

<script setup lang="ts">
import {z} from "zod";
import {ref} from "vue";
import type {FormSubmitEvent} from '@nuxt/ui/dist/runtime/types'

definePageMeta({
  middleware: 'auth'
})
const isOpen = ref(false);
const cancelRestaurant = ref(false);

const modalLink = ref("");
const runtime = useRuntimeConfig();

const restaurantId = useCookie("restaurant_ID");
if (!restaurantId.value) navigateTo("/");

const {data} = await useFetch(runtime.public.API_URL + '/admin/unapproved', {
  params: {
    tokenId: useCookie("token"),
    id: restaurantId
  }
});
const record = data.value;
let error;

const {data: logo} = await useFetch(runtime.public.STORAGE_URL + '/restaurant/image/logo/' + record.restaurantName);
const logoLink = runtime.public.STORAGE_URL + logo.value;

const {data: envLink} = await useFetch(runtime.public.STORAGE_URL + '/restaurant/image/env/' + record.restaurantName);
const {data: menuLink} = await useFetch(runtime.public.STORAGE_URL + '/restaurant/image/menu/' + record.restaurantName);

const schema = z.object({
  reason: z.string()
})

type Schema = z.output<typeof schema>

const state = ref({
  reason: undefined
})

async function submit(event: FormSubmitEvent<Schema>) {
  const {data: responseData} = await useFetch(runtime.public.API_URL + '/admin/discard', {
    method: 'post',
    body: {
      tokenId: useCookie("token"),
      id: record.id,
      reason: event.data.reason
    }
  })

  if(!data.value) {
    navigateTo("/restaurant/list");
  }
  else{
    error = data.value;
  }
}
const discard = () => {
  cancelRestaurant.value = true;
}
async function approve() {
  const {data: responseData} = await useFetch(runtime.public.API_URL + '/admin/approve', {
    method: 'post',
    body: {
      tokenId: useCookie("token"),
      id: record.id
    }
  })
  navigateTo("/");
}
</script>