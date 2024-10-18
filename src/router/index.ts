import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'

import HomeImages from '@/views/HomeImagesView.vue'
import SelectImage from '@/views/SelectImageView.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeImages
    },
    {
      path: '/select',
      name: 'select',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/SelectImageView.vue')
    }
  ]
})

export default router