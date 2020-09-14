import { api } from '@/assets/js/MD5'
import configs from './config'
const banner = () => {
  return api.get('/api/v1/common/img-details', { pid: 3 }, false, 'banner')
}// 获取banner图
const indexApp = () => {
  return api.get('/api/v1/lottery/lottery', '', true)
}// app首页内容
const resgiter = (obj) => {
  return api.post('api/v1/site/register', obj)
} // 注册
const config = () => {
  return api.get('api/v1/common/config', { field: configs.configKey }, false)
}// 配置文件
const getSms = (obj) => {
  return api.post('api/v1/site/sms-code', obj)
}// 发送短信验证吗
const login = (obj) => {
  return api.post('api/v1/site/login', obj)
}// 用户登录
const getList = (obj) => {
  return api.get('api/v1/common/article-details', obj, true)
}// 首页四大接口
const czfl = (obj) => {
  return api.get('api/v1/lottery/lottery', obj, true, 'czfl')
}// 原厂分类
const dsTj = (obj) => {
  return api.get('api/v1/lottery/lottery/lottery-god-all', obj, true)
}// 大神推荐
const dscz = (obj) => {
  return api.get('api/v1/lottery/lottery/lottery-god-article', obj, true)
}// 大神分类
const chart = (obj) => {
  return api.get('api/v1/lottery/lottery/lottery-result', obj, true)
}// 走势图
const clph = (obj) => {
  return api.get('api/v1/lottery/lottery/long-notice', obj, true)
}// 长龙
const syph = (obj) => {
  return api.get('api/v1/member/account/money-rank', false, true)
}// 收益排行
const jihua = (obj) => {
  return api.get('api/v1/lottery/lottery/plan-and-history', obj, true)
}// 计划获取
const getUser = (obj) => {
  return api.get('api/v1/member/member', false, true)
}// 个人中心
const sign = () => {
  return api.post('api/v1/member/sign', false, true)
}// 登录
const realname = (obj) => {
  return api.post('api/v1/member/member/update-member', obj, true)
}// 修改资料
const upImg = (obj, data) => {
  return api.post('api/v1/file/images', obj, true, data)
}
export default {
  banner,
  indexApp,
  resgiter,
  config,
  getSms,
  login,
  getList,
  czfl,
  dsTj,
  dscz,
  chart,
  clph,
  syph,
  jihua,
  getUser,
  sign,
  realname,
  upImg
}
