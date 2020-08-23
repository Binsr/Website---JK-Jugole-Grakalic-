import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/news', //MENJATI
    name: 'News',
    component: () => import('../views/News.vue')
  },
  {
    path: '/skola-jedrenja', //MENJATI
    name: 'PageSkolaJedrenja',
    component: () => import('../views/PageSkolaJedrenja.vue')
  },
  {
    path: '/klase', //MENJATI
    name: 'PageKlase',
    component: () => import('../views/PageKlase.vue')
  },
  {
    path: '/foto-arhiv', //MENJATI
    name: 'PageFotoArhiv',
    component: () => import('../views/PageFotoArhiv.vue')
  },
  {
    path: '/fotografije', //MENJATI
    name: 'PageFotografije',
    component: () => import('../views/PageFotografije.vue')
  },
  {
    path: '/plan-uredjenja-skvera', //MENJATI
    name: 'PagePlanUredjenjaSkvera',
    component: () => import('../views/PagePlanUredjenjaSkvera.vue')
  },
  {
    path: '/brodarsko-drustvo-jg', //MENJATI
    name: 'PageBrodarskoDrustvoJG',
    component: () => import('../views/PageBrodarskoDrustvoJG.vue')
  },
  


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
