<template>
  <Head>
    <title>Restaurant Info - Shibaqueue Admin</title>
  </Head>
  <div class="p-20 my-10">

    <div class="flex justify-center">
      <img :src="logoLink" class="w-[200px]"/>
    </div>
    <div class="flex justify-center p-5">
      <h1 class="text-3xl font-bold">{{record.restaurantName}}</h1>
    </div>
    <div class="flex justify-center p-16">
      <a>{{record.description}}</a>
    </div>
    <div>
      <img />
    </div>
  </div>

</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const runtime = useRuntimeConfig();

const restaurantId = useCookie("restaurant_ID");
if (!restaurantId.value) navigateTo("/");

const { data } = await useFetch(runtime.public.API_URL + '/content/unapproved', {
  params: {
    id: restaurantId
  }
});
const record = data.value;

const { data: logo } = await useFetch(runtime.public.STORAGE_URL + '/restaurant/image/logo/' + record.id);
const logoLink = runtime.public.STORAGE_URL + logo.value;

const envLink: string[] = [];
const { data: env } = await useFetch(runtime.public.STORAGE_URL + '/restaurant/image/logo/' + record.id);

</script>