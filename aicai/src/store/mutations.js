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
  }

}
export default mutations
