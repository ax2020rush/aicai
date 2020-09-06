import api from '@/assets/js/api'
const actions = {
  loadMove ({ commit }, res) {
    commit('LOADING', res)
  },
  async getBanner ({ commit }) {
    const res = await api.banner()
    commit('BANNER', res.data)
  },
  async getConfig ({ commit }) {
    const res = await api.config()
    commit('CONFIG', res)
  },
  async getIdexApp ({ commit }) {
    const res = await api.indexApp()
    commit('INDEXAPP', res)
  }
}
export default actions
