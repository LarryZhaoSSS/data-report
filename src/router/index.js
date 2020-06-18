import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bMap',
    name: 'BMap',
    component: () => import('../views/BMap')
  },
  {
    path: '/bMap2',
    name: 'BMap2',
    component: () => import('../views/BMap2')
  },
  {
    path: '/liquid',
    name: 'liquid',
    component: () => import('../views/LiquidFill')
  }
]

const router = new VueRouter({
  routes
})

export default router
