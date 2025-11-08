import { createRouter, createWebHistory } from 'vue-router'

export const router = createRouter({
  routes: [
    // {
    //   path: '/:pathMatch(.*)*',
    //   name: 'not-found',
    //   component: () => import('./views/NotFoundView.vue'),
    // },
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
