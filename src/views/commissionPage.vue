<script setup lang="ts">
import Card from '../components/card.vue'
import { ref } from 'vue'

const cards = [
  { id: 1, title: 'Profile',
  price: '250.-', 
  description: '+ 180.- for extra character\n Canvas size will adjust by the character you added\n\n [ You will get ]\n - .png transparent profile\n - Profile with gray bg', 
  placement: 'Left', imgSrc: new URL('@/assets/pics/profiles.png', import.meta.url).href },
  { id: 2, title: 'Youtube Banner', 
  price: '500.-', 
  description: 'Start with 1 character\n + 180.- for extra character in the banner\n\n [ You will get ]\n - Ready-to-use banner sized image\n - Typography in the banner (+ 50.-)', 
  placement: 'Right', imgSrc: new URL('@/assets/pics/lootbox.png', import.meta.url).href },
  { id: 3, title: 'Items', 
  price: '300.-', 
  description: 'The price is per 1 item\n The final price is negotiable if you order more than 3 items\n\n [ You will get ]\n - .png transparent image', 
  placement: 'Left', imgSrc: new URL('@/assets/pics/lootbox.png', import.meta.url).href },
  { id: 4, title: 'Emoji', 
  price: '250.-/1', 
  description: 'Set 6 - 1200.-\n Set 12 - 2200.-\n Set 24 - 4000.-\n Set 32 - 5000.-\n\n [ You will get ]\n - .png transparent image\n - happiness guaranteed :D', 
  placement: 'Right', imgSrc: new URL('@/assets/pics/lootbox.png', import.meta.url).href },
]

const current = ref(0)

const prev = () => {
  current.value = current.value === 0 ? cards.length - 1 : current.value - 1
}

const next = () => {
  current.value = current.value === cards.length - 1 ? 0 : current.value + 1
}
</script>

<template>
  <div class="relative flex items-center justify-center gap-4">
    <!-- Left button -->
    <img @click="prev" src="@/assets/pics/leftarrow.png" alt="Left Arrow" class="w-[3vw] mr-[3vw]">

    <!-- Card display -->
    <div class="overflow-hidden w-full">
      <div class="flex transition-transform duration-500 ease-in-out"
           :style="{ transform: `translateX(-${current * 100}%)` }">
        <div v-for="card in cards" :key="card.id" class="min-w-full">
          <Card
            :title="card.title"
            :description="card.description"
            :placement="card.placement"
            :imgSrc="card.imgSrc"
            :price="card.price"
          />
        </div>
      </div>
    </div>

    <!-- Right button -->
    <img @click="next" src="@/assets/pics/rightarrow.png" alt="Right Arrow" class="w-[3vw] ml-[3vw]">
  </div>

  <!-- Dots -->
  <!-- <div class="flex justify-center gap-2 mt-15">
    <button v-for="(card, i) in cards" :key="i"
      @click="current = i"
      class="w-2.5 h-2.5 rounded-full transition"
      :class="i === current ? 'bg-white' : 'bg-white/40'"
    />
  </div> -->
</template>

<style scoped></style>
