<script setup lang="ts">
import { useRoute } from 'vue-router'
import { ref } from 'vue'
const route = useRoute()
const menuOpen = ref(false)
const bgImage = new URL('@/assets/pics/background.jpg', import.meta.url).href
</script>

<template>
  <div class="bg-cover bg-center bg-no-repeat backdrop-blur-sm min-h-screen w-full"
    :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="sticky top-0 z-10 bg-black/40 backdrop-blur-md shadow-md">
      <nav class="flex justify-between pl-4 md:px-[10vw]">
        <div class="flex items-center">
          <RouterLink to="/">
            <img src="@/assets/pics/logo.png" alt="Logo" class="h-[35px] md:h-[55px] inline-block mr-2" />
          </RouterLink>
        </div>

        <!-- Desktop nav -->
        <div class="hidden md:flex">
          <RouterLink to="/commission"
            class="flex items-center text-lg font-semibold text-white py-8 px-7 tracking-wider hover:neon-text-pink"
            :class="{ 'neon-gradient-border': route.path === '/commission' }">
            Commission
          </RouterLink>
          <RouterLink to="/minigame"
            class="flex items-center text-lg font-semibold text-white py-8 px-7 tracking-wider hover:neon-text-pink"
            :class="{ 'neon-gradient-border': route.path === '/minigame' }">
            Minigame
          </RouterLink>
        </div>

        <!-- Hamburger mobile -->
        <button class="flex md:hidden text-white text-2xl px-4 py-3" @click="menuOpen = !menuOpen">
          ☰
        </button>

        <!-- Hamburger dropdown -->
        <div v-if="menuOpen"
          class="absolute top-full left-0 w-full bg-black/80 backdrop-blur-md flex flex-col md:hidden">
          <RouterLink to="/commission"
            class="text-lg font-semibold text-white py-4 px-7 tracking-wider hover:neon-text-pink border-b border-white/10"
            :class="{ 'neon-text-pink': route.path === '/commission' }" @click="menuOpen = false">
            Commission
          </RouterLink>
          <RouterLink to="/minigame"
            class="text-lg font-semibold text-white py-4 px-7 tracking-wider hover:neon-text-pink"
            :class="{ 'neon-text-pink': route.path === '/minigame' }" @click="menuOpen = false">
            Minigame
          </RouterLink>
        </div>

      </nav>
    </div>
    <div class="min-h-[calc(100vh-56px)] md:min-h-[calc(100vh-92px)] bg-black/50 backdrop-blur-md">
      <div class="md:px-[10vw] md:py-[7vh]">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
