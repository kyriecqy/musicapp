import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mlist from '../views/Mlist.vue'
import Search from '../views/Search.vue'
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
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
