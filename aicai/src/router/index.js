import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      isLogin: true
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('views/notfile/index'),
    meta: {
      isLogin: false
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login/login'),
    meta: {
      isLogin: false
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('views/login/register'),
    meta: {
      isLogin: false
    }
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import('views/login/forget'),
    meta: {
      isLogin: false
    }
  },
  {
    path: '/analy',
    name: 'analy',
    component: () => import('@/views/index/analy/index'),
    meta: {
      isLogin: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
