import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/2023',
      component: () => import('../pages/MainPage.vue')
    },
    {
      path: '/',
      redirect: '/2023'
    },
    {
      path: '/cfp',
      component: () => import('../pages/CFP.vue')
    },
    {
      path: '/program',
      component: () => import('../pages/ProgramInfo.vue'),
      children: [
        {
          path: ':programID',
          component: () => import('../pages/ProgramInfo.vue')
        }
      ]
    },
    {
      path: '/partner',
      component: () => import('../pages/PartnerInfo.vue')
    },
  ]
});

export default router;
