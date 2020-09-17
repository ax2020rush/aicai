import { getitem } from '@/assets/js/fun'

const state = {
  loading: { banner: null },
  banner: getitem('vuex') && (getitem('vuex').banner || null),
  config: getitem('vuex') && (getitem('vuex').config || null),
  indexApp: getitem('vuex') && (getitem('vuex').indexApp || null),
  ycfl: getitem('vuex') && (getitem('vuex').ycfl || null),
  dstj: getitem('vuex') && (getitem('vuex').dstj || null),
  chart: null,
  clph: null,
  userInfo: getitem('userinfos') || null,
  userAgent: null

}
export default state
