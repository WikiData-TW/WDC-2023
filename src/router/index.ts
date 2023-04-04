import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/cfp',
      component: () => import('../pages/CFP.vue')
    },
    {
      path: '/',
      redirect: '/cfp'
    }
  ]
});

export default router;
