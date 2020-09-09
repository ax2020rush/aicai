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
  },
  async getYcFl ({ commit }) {
    const res = await api.czfl({
      type: 'all'
    })
    commit('YCFL', res)
  },
  async getDsyc ({ commit }) {
    const res = await api.dsTj()
    commit('DSTJ', res)
  },
  async getChart ({ state, commit }, obj) {
    if (state.chart && state.chart.code === obj.lottery_code) {
      commit('CHART', state.chart)
    } else {
      const res = await api.chart(obj)
      res.code = obj.lottery_code
      commit('CHART', res)
    }
  }
}
export default actions
