<script setup lang="ts">
import { useRoute } from 'vue-router'
const route = useRoute()
</script>

<template>
    <img src="@/assets/pics/bunny-corner.png" alt="corner decoration"
        class="hidden md:flex absolute bottom-0 left-0 w-[30vw] z-[-1]">
    <img src="@/assets/pics/mascot.png" alt="corner decoration"
        class="hidden md:flex absolute bottom-0 right-0 w-[30vw] z-[-1]">
    <div class="flex flex-col items-center justify-center min-h-full text-center gap-4 pt-20 px-6 md:pt-0 md:px-0">
        <h1 class="text-5xl font-bold text-white neon-text-pink mb-6 leading-[1.25]">H<span class="neon-text-blue">in</span>oshii's
            Sandbox !</h1>
        <p class="text-xl text-gray-300 tracking-widest">Digital Artist · Minecraft / Roblox</p>
        <p class="text-gray-400 max-w-md">I draw :DD (also open for commissions!)</p>
    </div>
    <div class="flex flex-col lg:flex-row justify-center gap-10 md:gap-30 mt-[10vh] px-6">
        <RouterLink to="/commission">
            <div class="flex flex-col w-full lg:w-[20vw] lg:h-[20vh] justify-center items-center">
                <img src="@/assets/pics/commissionemote.png" alt="Commission Preview" class="hidden md:flex h-[10vw] z-2">
                <button class="neon-btn-pink w-full">
                    Commission Me
                </button>
            </div>
        </RouterLink>
        <RouterLink to="/minigame">
            <div class="flex flex-col w-full lg:w-[20vw] lg:h-[20vh] justify-center items-center">
                <img src="@/assets/pics/minigameemote.png" alt="Minigame Preview" class="hidden md:flex h-[10vw] z-2">
                <button class="neon-btn-blue w-full">
                    Play minigame?
                </button>
            </div>
        </RouterLink>
    </div>
</template>

<style scoped></style>