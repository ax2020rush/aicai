import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import loading from '@/components/loading'
// import Socketio from 'vue-socket.io'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
import topbar from '@/components/topbar'
import 'assets/aly/iconfont.css'
Vue.use(VueAwesomeSwiper)

Vue.component('topBar', topbar)
Vue.component('v-loading', loading)
Vue.use(vant)
Vue.use(Lazyload)
// Vue.component('charList', () => import('@/views/index/chart/next/comopents/list' + to.query.type))
router.beforeEach((to, from, next) => {
  Vue.component('charList', () => {
    return import('@/views/index/chart/next/comopents/list' + to.query.type)
  })
  Vue.component('openList', () => {
    return import('@/views/open/next/components/list' + to.query.type + '/index')
  })
  to.name === 'index' || to.name === 'open' || to.name === 'user' || to.name === 'chat' ? Vue.prototype.$show = true : Vue.prototype.$show = false
  const token = sessionStorage.getItem('accessToken')
  if (to.meta.isLogin) {
    if (token) {
      next()
    } else {
      sessionStorage.clear()
      localStorage.clear()
      next({
        path: '/login'
      })
    }
  } else {
    if (token) {
      next({
        path: '/'
      })
    } else {
      next()
    }
  }
})
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
