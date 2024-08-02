import { createMemoryHistory, createRouter } from 'vue-router'
import Home from '../views/Home/index.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
    {
    path: '/about',
    name: 'About',
    component: () => import('@/views/About/index.vue')
  },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router;