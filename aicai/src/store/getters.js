import store from './index'
const getters = {
  bannerData (state) {
    if (state.banner) {
      return state.banner
    } else {
      store.dispatch('getBanner')
    }
  },
  config (state) {
    if (state.config) {
      return state.config
    } else {
      store.dispatch('getConfig')
    }
  },
  indexApp (state) {
    if (state.indexApp) {
      return state.indexApp.data
    } else {
      store.dispatch('getIdexApp')
    }
  },
  ycfl (state) {
    if (state.ycfl) {
      return state.ycfl.data
    } else {
      store.dispatch('getYcFl')
    }
  },
  dstj (state) {
    if (state.dstj) {
      return state.dstj.data
    } else {
      store.dispatch('getDsyc')
    }
  }
}
export default getters
