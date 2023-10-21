<template>
  <header class="bg-white py-3 opacity-90 fixed top-0 w-full flex justify-start items-center border-2 border-b-gray-200">
    <div class="flex justify-center items-center px-3">
      <img class="w-[50px] h-[50px]" src="/logo.png" alt=""/>
      <h1 class="font-bold mx-3 text-xl">ShibaQueue</h1>
    </div>
    <div class="px-3">
      <UButton color="orange" variant="outline" to="/">Home</UButton>
    </div>
    <div class="px-3">
      <UButton color="orange" variant="outline" to="/restaurant">Restaurant Request</UButton>
    </div>
    <div class="px-3">
      <UButton color="red" variant="outline" to="/logout">Logout</UButton>
    </div>
  </header>
</template>
<script setup lang="ts">
</script>