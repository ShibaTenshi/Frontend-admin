<template>
  <Head>
    <title>Restaurant Request - Shibaqueue Admin</title>
  </Head>

  <div class="p-20 my-10">
    <UInput v-model="q" placeholder="Search" />
    <br/>
    <UTable
        loading
        :loading-state="{ icon: 'i-heroicons-arrow-path-20-solid', label: 'Loading...' }"
        class="w-full"
        :columns="colums"
        v-if="pending"
    />
    <UTable :columns="colums" :rows="filteredRows" @select="select" v-else/>
  </div>

</template>

<script setup lang="ts">
definePageMeta({
  middleware: 'auth'
})

const runtime = useRuntimeConfig();

const colums = [{
  key: 'restaurantName', label: 'Restaurant Name', sortable: "true"
}, {
  key: 'category', label: 'Category', sortable: "true"
}, {
  key: 'dateAdded', label: 'Date Added', sortable: "true"
}];

const {pending, data} = useFetch(runtime.public.API_URL + '/admin/unapproved/list', {
  params: {
    tokenId: useCookie("token")
  }
});

const q = ref('');

const filteredRows = computed(() => {
  if (!q.value) {
    return data.value;
  }

  return data.value.filter((person) => {
    return Object.values(person).some((value) => {
      return String(value).toLowerCase().includes(q.value.toLowerCase())
    })
  })
})

function select(row: any) {
  useCookie("restaurant_ID").value = row.id;
  navigateTo("/restaurant/info");
}
</script>