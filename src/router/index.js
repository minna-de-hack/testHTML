import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
			path: '/watch/:id',
			name: 'イベント詳細',
			component: () => import('../views/WatchView.vue')
		},
  ]
})

export default router
