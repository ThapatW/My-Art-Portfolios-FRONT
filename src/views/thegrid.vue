<script setup lang="ts">
import { ref, computed } from 'vue'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3000')

const cells = ref<boolean[]>(Array(5000).fill(false))

const activeCount = computed<number>(() => cells.value.filter(Boolean).length)

socket.on('init', (state: boolean[]) => {
  cells.value = state
})

socket.on('toggle', ({ i, value }: { i: number, value: boolean }) => {
  cells.value[i] = value
})

function toggle(i: number): void {
  cells.value[i] = !cells.value[i]
  socket.emit('toggle', i)
}
</script>

<template>
    <div class="flex flex-col items-center gap-6">
        <!-- Header -->
        <div class="text-center flex items-baseline gap-2">
            <p class="text-4xl font-bold neon-text-pink text-white">
                {{ activeCount }}
            </p>
            <span class="text-zinc-600 text-base font-normal">/ {{ cells.length }}</span>
        </div>

        <!-- Grid -->
        <div class="grid gap-1.5 p-3 w-full" style="grid-template-columns: repeat(auto-fill, minmax(40px, 1fr))">
            <button v-for="(cell, i) in cells" :key="i"
                class="aspect-square rounded-sm border transition-all duration-100 active:scale-90" :class="cell
                    ? 'border-pink-300'
                    : 'bg-zinc-800 border-zinc-700 hover:border-zinc-500 hover:bg-zinc-700'"
                :style="cell ? 'background: var(--color-pink-mid)' : ''" @click="toggle(i)" />
        </div>
    </div>
</template>