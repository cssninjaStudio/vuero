import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const DefaultLayout = () => import('@src/layouts/DefaultLayout.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('@src/pages/index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)',
    component: DefaultLayout,
    children: [
      {
        path: '',
        name: 'not-found',
        component: () => import('@src/pages/404.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
