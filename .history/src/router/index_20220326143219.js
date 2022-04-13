import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Mlist from '../views/Mlist.vue'
import Search from '../views/Search.vue'
import Login from '../views/Login.vue'
import Mine from '../views/Mine.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/mlist',
    name: 'mlist',
    component: Mlist
  },
  {
    path: '/search',
    name: 'search',
    component: Search
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/mine',
    name: 'mine',
    component: Mine
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
