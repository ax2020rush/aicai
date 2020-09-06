import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant, { Lazyload } from 'vant'
import 'vant/lib/index.css'
import loading from '@/components/loading'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.min.css'
Vue.use(VueAwesomeSwiper)
Vue.component('v-loading', loading)
Vue.use(vant)
Vue.use(Lazyload)
router.beforeEach((to, from, next) => {
  const token = sessionStorage.getItem('accessToken')
  if (to.meta.isLogin) {
    if (token) {
      next()
    } else {
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
