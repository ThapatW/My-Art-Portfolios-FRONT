<script setup lang="ts">
import MinigameCard from '@/components/minigamecard.vue'

const game1Img = new URL('@/assets/pics/simonsays.png', import.meta.url).href
const game2Img = new URL('@/assets/pics/mascot.png', import.meta.url).href
</script>

<template>
  <div class="flex flex-col items-center justify-center min-h-full text-center gap-4 pt-20 px-6 md:pt-0 md:px-0">
    <h1 class="text-5xl font-bold text-white neon-text-pink mb-6 leading-[1.25]">Minigames</h1>
    <p class="text-xl text-gray-300 tracking-widest">This is where I keep all the minigames I made :)</p>
  </div>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 mt-[10vh] px-12 md:px-0">
    <MinigameCard
      title="Simon Says"
      links="/minigame/simonsay"
      :imgSrc="game1Img"
    />
    <MinigameCard
      title="Game 2"
      links="/minigame/game2"
      :imgSrc="game2Img"
    />
  </div>
</template>