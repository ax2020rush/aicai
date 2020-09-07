import { getitem } from '@/assets/js/fun'

const state = {
  loading: null,
  banner: null,
  config: getitem('vuex') && (getitem('vuex').config || null),
  indexApp: getitem('vuex') && (getitem('vuex').indexApp || null),
  ycfl: getitem('vuex') && (getitem('vuex').ycfl || null),
  dstj: getitem('vuex') && (getitem('vuex').dstj || null)

}
export default state
