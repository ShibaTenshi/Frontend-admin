<template>
  <header>
    <nav class="bg-[#618264]">
      <ul class="mr-auto flex items-center ">
        <li class="p-3">
          <h1 class="font-bold text-white">Shibaqueue Admin |</h1>
        </li>
        <li class="p-3 hover:bg-[#79AC78] hover:animate-pulse">
          <NuxtLink to="/" class="text-white">Home</NuxtLink>
        </li>
        <li v-if="isTokenValidate()" class="p-3 hover:bg-[#79AC78] hover:animate-pulse">
          <NuxtLink to="restaurant" class="text-white">Restaurant Request</NuxtLink>
        </li>
        <li class="p-3 absolute right-0">
          <div class="flex items-center">
            <h1 v-if="isTokenValidate()" class="p-3 text-white">Hello {{ username }} </h1>
            <NuxtLink v-if="isTokenValidate()" to="/" class="h-8 bg-red-400 px-2 py-1 rounded-md hover:animate-pulse" href="">Logout</NuxtLink>
            <NuxtLink v-else to="login" class="h-8 bg-yellow-500 px-2 py-1 rounded-md hover:animate-pulse" href="">Login</NuxtLink>
          </div>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup lang="ts">
import {isTokenValidate} from "~/composables/tokenValidate";
const username = ref("");

if(isTokenValidate()) {
  username.value = "";
}
</script>