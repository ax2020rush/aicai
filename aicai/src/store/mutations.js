const mutations = {
  'LOADING' (state, res) {
    state.loading = res
  },
  'BANNER' (state, res) {
    state.banner = res
  },
  'CONFIG' (state, res) {
    state.config = res
  },
  'INDEXAPP' (state, res) {
    state.indexApp = res
  },
  'YCFL' (state, res) {
    state.ycfl = res
  },
  'DSTJ' (state, res) {
    state.dstj = res
  },
  'CHART' (state, res) {
    state.chart = res
  }

}
export default mutations
