import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    {
      name: 'home',
      path: '/',
      component: () => import('@/pages/HomePage.vue'),
    },
    {
      name: 'about',
      path: '/about',
      component: () => import('@/pages/AboutPage.vue'),
    },
  ],
  history: createWebHistory(),
})
