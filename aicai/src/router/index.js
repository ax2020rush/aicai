import Vue from 'vue'
import VueRouter from 'vue-router'
import index from '../views/index/index'

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      isLogin: true,
      title: '人人爱彩'
    }
  },
  {
    path: '*',
    name: '404',
    component: () => import('views/notfile/index'),
    meta: {
      isLogin: false,
      title: '人人爱彩'
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('views/login/login'),
    meta: {
      isLogin: false,
      title: '人人爱彩'
    }
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('views/login/register'),
    meta: {
      isLogin: false,
      title: '人人爱彩'

    }
  },
  {
    path: '/forget',
    name: 'forget',
    component: () => import('views/login/forget'),
    meta: {
      isLogin: false,
      title: '人人爱彩'

    }
  },
  {
    path: '/analy',
    name: 'analy',
    component: () => import('@/views/index/analy/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/ycfl',
    name: 'ycfl',
    component: () => import('@/views/index/ycfl/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/dsfl',
    name: 'dsfl',
    component: () => import('@/views/index/dsfl/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/dsxq',
    name: 'dsxq',
    component: () => import('@/views/index/dsfl/dsdetile/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/chart',
    name: 'chart',
    component: () => import('@/views/index/chart/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/chartNT',
    name: 'chartNT',
    component: () => import('@/views/index/chart/next/inex'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/sy',
    name: 'sy',
    component: () => import('@/views/index/shouyi/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/open',
    name: 'open',
    component: () => import('@/views/open/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/openNY',
    name: 'openNY',
    component: () => import('@/views/open/next/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('@/views/user/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/userio',
    name: 'userio',
    component: () => import('@/views/user/userio/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/card',
    name: 'card',
    component: () => import('@/views/user/card/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/tixian',
    name: 'tixian',
    component: () => import('@/views/user/card/tixian/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/txlb',
    name: 'txlb',
    component: () => import('@/views/user/card/tixian/txlist/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/syls',
    name: 'syls',
    component: () => import('@/views/user/card/tixian/syls/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/setting',
    name: 'setting',
    component: () => import('@/views/user/setting/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/chat',
    name: 'chat',
    component: () => import('@/views/chat/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/recode',
    name: 'recode',
    component: () => import('@/views/chat/recode/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/xgmm',
    name: 'xgmm',
    component: () => import('@/views/user/setting/xgpwd'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/yqhy',
    name: 'yqhy',
    component: () => import('@/views/user/yqhy/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('@/views/user/help/index'),
    meta: {
      isLogin: true,
      title: '人人爱彩'

    }
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
