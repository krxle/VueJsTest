import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/car-detail/:id',
    name: 'CarDetail',
    component: () => import('./../views/CarDetail.vue')
  },
  {
    path: '/car-create',
    name: 'CarCreate',
    component: () => import('./../views/CarCreate.vue')
  },
  {
    path: '/car-update/:id',
    name: 'CarUpdate',
    component: () => import('./../views/CarUpdate.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
