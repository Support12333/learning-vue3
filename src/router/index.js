import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@views/base/login')
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('@views/home')
  },
  {
    path: '/',
    name: 'todolist',
    component: () => import('@views/todolist')
  }
]

const router = createRouter({
  history: createWebHistory(),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
  routes
})

export default router
