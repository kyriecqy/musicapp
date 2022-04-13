import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mlist from '../views/Mlist.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/mlist',
    name: 'Mlist',
    component: Mlist
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
