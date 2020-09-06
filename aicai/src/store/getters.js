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
  }
}
export default getters
