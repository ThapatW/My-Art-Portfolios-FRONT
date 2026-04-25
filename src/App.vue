<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
const bgImage = new URL('@/assets/pics/background.jpg', import.meta.url).href
</script>

<template>
  <div class="bg-cover bg-center bg-no-repeat backdrop-blur-sm min-h-screen w-full"
    :style="{ backgroundImage: `url(${bgImage})` }">
    <div class="sticky top-0 z-10 bg-black/40 backdrop-blur-md shadow-md">
      <nav class="flex justify-between px-[10vw]">
        <div class="flex items-center">
          <RouterLink to="/">
            <img src="@/assets/pics/logo.png" alt="Logo" class="h-[35px] md:h-[55px] inline-block mr-2" />
          </RouterLink>
        </div>

        <div class="hidden md:flex">
          <RouterLink to="/commission"
            class="flex items-center text-lg font-semibold text-white py-8 px-7 tracking-wider hover:neon-text-pink"
            :class="{ 'neon-gradient-border': route.path === '/commission' }">
            Commission
          </RouterLink>
          <RouterLink to="/gallery"
            class="flex items-center text-lg font-semibold text-white py-8 px-7 tracking-wider hover:neon-text-blue"
            :class="{ 'neon-gradient-border': route.path === '/gallery' }">
            Gallery
          </RouterLink>
          <RouterLink to="/mini"
            class="flex items-center text-lg font-semibold text-white py-8 px-7 tracking-wider hover:neon-text-pink"
            :class="{ 'neon-gradient-border': route.path === '/mini' }">
            Minigame
          </RouterLink>
        </div>
        <div class="flex md:hidden">
          <RouterLink to="/commission"
            class="flex items-center text-lg font-semibold text-white py-4 px-7 tracking-wider hover:neon-text-pink"
            :class="{ 'neon-gradient-border': route.path === '/commission' }">
            =
          </RouterLink>
        </div>
      </nav>
    </div>
    <div class="min-h-[calc(100vh-60px)] md:min-h-[calc(100vh-92px)] bg-black/50 backdrop-blur-md">
      <div class="px-[10vw] py-[7vh]">
        <RouterView v-slot="{ Component }">
          <Transition name="fade">
            <component :is="Component" />
          </Transition>
        </RouterView>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
