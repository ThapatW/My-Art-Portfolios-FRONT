<script setup lang="ts">
import { ref, reactive, computed } from 'vue'

const colors = ['red', 'green', 'blue', 'yellow'] as const
type Color = typeof colors[number]

// will only pick top 3
const Leaderboard = [
    { name: 'lnwJakkapat', score: 4101 },
    { name: 'Hinoshii', score: 67 },
    { name: 'KwyJib', score: 24 },
]

const shadowColors: Record<Color, string> = {
    red: '0 0 20px rgba(239,68,68,0.8)',
    green: '0 0 20px rgba(34,197,94,0.8)',
    blue: '0 0 20px rgba(59,130,246,0.8)',
    yellow: '0 0 20px rgba(234,179,8,0.8)',
}

const colorClasses: Record<Color, { base: string; lit: string }> = {
    red: { base: 'bg-[rgba(239,68,68,0.6)] border-10 border-red-300', lit: 'bg-red-300' },
    green: { base: 'bg-[rgba(34,197,94,0.6)] border-10 border-green-300', lit: 'bg-green-300' },
    blue: { base: 'bg-[rgba(59,130,246,0.6)] border-10 border-blue-300', lit: 'bg-blue-300' },
    yellow: { base: 'bg-[rgba(234,179,8,0.6)] border-10 border-yellow-300', lit: 'bg-yellow-300' },
}

const sequence = ref<Color[]>([])
const playerSequence = ref<Color[]>([])
const lit = reactive<Record<Color, boolean>>({ red: false, green: false, blue: false, yellow: false })
const status = ref('Press Start to play!')
const score = ref(0)
const isPlaying = ref(false)
const playerTurn = ref(false)

function flash(color: Color, duration = 500) {
    return new Promise<void>(resolve => {
        lit[color] = true
        setTimeout(() => { lit[color] = false; resolve() }, duration)
    })
}

async function playSequence() {
    playerTurn.value = false
    status.value = 'Watch carefully...'
    for (const color of sequence.value) {
        await new Promise(r => setTimeout(r, 200))
        await flash(color)
    }
    playerTurn.value = true
    status.value = 'Your turn!'
}

async function startGame() {
    submitted.value = false
    sequence.value = []
    playerSequence.value = []
    score.value = 0
    isPlaying.value = true
    await nextRound()
}

async function nextRound() {
    playerSequence.value = []
    const next = colors[Math.floor(Math.random() * 4)] as Color
    sequence.value.push(next)
    score.value = sequence.value.length - 1
    await playSequence()
}

async function handleClick(color: Color) {
    if (!playerTurn.value) return
    await flash(color, 300)
    playerSequence.value.push(color)

    const i = playerSequence.value.length - 1
    if (playerSequence.value[i] !== sequence.value[i]) {
        status.value = `Wrong! You scored ${score.value}`
        isPlaying.value = false
        playerTurn.value = false
        return
    }

    if (playerSequence.value.length === sequence.value.length) {
        score.value = sequence.value.length
        status.value = 'Correct! Get ready...'
        playerTurn.value = false
        await new Promise(r => setTimeout(r, 1000))
        await nextRound()
    }
}

const submitted = ref(false)
const submitLabel = computed(() => {
  if (score.value === 0) return 'Play the game first bro'
  if (isPlaying.value) return 'Focus the game not me'
  if (submitted.value) return 'Submitted!'
  return 'Submit Score'
})
function submitScore() {
    if (submitted.value) return
    alert(`Submitting score: ${score.value}`)
    submitted.value = true
}
</script>

<template>

    <div class="flex flex-col items-center justify-center min-h-full text-center gap-4 pt-20 px-6 md:pt-0 md:px-0">
        <h1 class="text-5xl font-bold text-white neon-text-pink mb-2 leading-[1.25]">Simon Says</h1>
        <p class="text-xl text-gray-300 tracking-widest">Remember the color and click it in order!</p>
    </div>

    <div class="flex flex-col xl:flex-row items-center xl:items-start justify-center gap-[10vw] pt-[10vh] px-6">
        <div class="relative w-fit h-fit xl:mt-6">
            <div class="grid grid-cols-2 gap-4">
                <button v-for="color in colors" :key="color" :class="[
                    lit[color] ? colorClasses[color].lit : colorClasses[color].base,
                    'w-[115px] h-[115px] lg:w-[200px] lg:h-[200px] rounded-xl transition-all duration-200 active:scale-95'
                ]" :style="{ boxShadow: shadowColors[color] }" :disabled="!playerTurn" @click="handleClick(color)" />
            </div>

            <button
                class="inline-block lg:hidden w-[100px] h-[100px] rounded-xl neon-btn-pink absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold z-10" 
                :style="{ top: 'calc(-123px)' }"
                :disabled="isPlaying" @click="startGame">
                {{ isPlaying ? score : 'Start' }}
            </button>
            <button
                class="hidden lg:inline-block w-[150px] h-[150px] rounded-xl neon-btn-pink absolute left-1/2 -translate-x-1/2 -translate-y-1/2 text-xl font-bold z-10" 
                :style="{ top: 'calc(-208px)' }"
                :disabled="isPlaying" @click="startGame">
                {{ isPlaying ? score : 'Start' }}
            </button>
        </div>

        <div class="flex flex-col items-center justify-start gap-4 mt-[-60px] md:mt-0 w-[60vw] lg:w-[20vw]">
            <p class="text-center text-lg text-white mt-1 w-full bg-black/50 rounded-xl px-10 py-4">{{ status }}</p>
            <div class="flex flex-col items-center justify-center gap-2 mt-4 w-full bg-black/50 rounded-xl px-10 py-6">
                <p class="text-2xl font-bold text-white">Score</p>
                <p class="text-7xl font-bold text-white">{{ score }}</p>
            </div>
            <div class="text-center mt-4 w-full bg-black/50 rounded-xl px-10 py-4">
                <p class="text-xl font-bold text-white mb-2">Leaderboard</p>
                <div v-for="(entry, index) in Leaderboard" :key="index" class="text-white text-lg justify-between flex">
                    <p>[ {{ index + 1 }} ] {{ entry.name }}</p>
                    <p>{{ entry.score }}</p>
                </div>
            </div>
            <button @click="submitScore" class="neon-btn-pink w-full mt-4" :disabled="score === 0 || isPlaying || submitted">
                {{ submitLabel }}
            </button>
        </div>
    </div>
</template>

<style scoped>
.center-btn {
  top: calc(-30vw - 8px);
}

@media (min-width: 1280px) {
  .center-btn {
    top: calc(-25vh - 8px);
  }
}
</style>