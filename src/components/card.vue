<script setup lang="ts">

defineProps<{
  title: string
  description: string
  price?: string
  imgSrc?: string
}>()
</script>

<template>
  <div class="w-full rounded-lg p-5 flex gap-15">
    <!-- Displayed Picture -->
    <div class="flex h-[70vh] w-[50vw] rounded-lg relative">
      <div class="absolute inset-[30vw] bg-black/30 rounded-lg neon-chrome-boxshadow"></div>
      <img :src="imgSrc" alt="" class="object-contain rounded-lg w-full" />
    </div>
    <!-- Text -->
    <div class="flex rounded-lg w-[20vw] text-white h-[70vh] flex-col justify-center items-center gap-4">
      <h1 class="text-5xl font-bold text-white neon-text-pink mb-6 text-center leading-[1.25]">{{ title }}</h1>
      <p class="text-3xl font-bold font-valera">Price : <span class="neon-text-blue">{{ price }}</span></p>
      <p class="text-lg whitespace-pre-line font-valera text-center">{{ description }}</p>
    </div>
  </div>
</template>

<style scoped></style>