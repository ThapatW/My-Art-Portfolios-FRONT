<script setup lang="ts">
import { useRouter } from 'vue-router'

const props = defineProps<{
  title: string
  links: string
  imgSrc?: string
}>()

const router = useRouter()
</script>

<template>
  <div
    class="relative w-full h-[300px] rounded-xl overflow-hidden cursor-pointer group"
    @click="router.push(links)"
  >
    <!-- Background image -->
    <img
      v-if="imgSrc"
      :src="imgSrc"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <!-- Fallback bg if no image -->
    <div v-else class="absolute inset-0 bg-gray-800" />

    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/70 group-hover:bg-black/40 transition-all duration-500" />

    <!-- Title -->
    <div class="absolute inset-0 flex items-center justify-center">
      <h2 class="text-white text-4xl font-bold tracking-wider neon-text-pink">{{ title }}</h2>
    </div>
  </div>
</template>