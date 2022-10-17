import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/list',
    name: 'List',
    component: () => import('../views/List'),
    meta: { title: '文章列表', noCache: false }
  },
  {
    path: '/article',
    name: 'Article',
    component: () => import('../views/Article')
  },
  {
    path: '/search',
    name: 'Search',
    component: () => import('../views/Search')
  },
  {
    path: '/404',
    name: 'NotFound',
    component: () => import('../views/NotFound')
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
