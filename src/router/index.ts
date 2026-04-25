import { createRouter, createWebHistory } from 'vue-router'
import CommissionPage from '../views/commissionPage.vue'
import MinigamePage from '../views/minigamePage.vue'
import HomePage from '@/views/homePage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/commission', component: CommissionPage },
    { path: '/minigame', component: MinigamePage },
  ]
})

export default router