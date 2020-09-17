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
}//
const qianbao = () => {
  return api.get('api/v1/member/account/wallet', false, true)
}// 我的钱包
const addtx = (obj) => {
  return api.post('api/v1/member/withdraw-bill', obj, true)
}// 添加提现
const bdtx = (obj) => {
  return api.post('api/v1/member/account', obj, true)
}// 绑定提现资料
const txhis = (obj) => {
  return api.get('api/v1/member/withdraw-bill', obj, true)
}// 提现记录
const syjl = (obj) => {
  return api.get('api/v1/member/credits-log', obj, true)
}// 收益记录
const room = (obj) => {
  return api.get('api/v1/room/room', obj, true)
} // 获取房间列表
const chatcode = (obj) => {
  return api.get('api/v1/room/room/history', obj, true)
}// 聊天记录
const sendChat = (obj) => {
  return api.post('api/v1/room/room/send-message', obj, true)
}// 发送聊天
const qsb = (obj) => {
  return api.post('api/v1/room/room/get-red-package', obj, true)
}// 抢红包
const hbstu = (obj) => {
  return api.post('api/v1/room/room/red-package-status', obj, true)
}// 红包状态
const hbxq = (obj) => {
  return api.post('api/v1/room/room/red-package-detail', obj, true)
}// 红包详情
const fhb = (obj) => {
  return api.post('api/v1/room/room/send-red-package', obj, true)
}// 发红包
const cehui = (obj) => {
  return api.post('api/v1/room/room/revoke-message', obj, true)
}// 撤回消息
const bind = (obj) => {
  return api.post('api/v1/room/room/bind', obj, true)
}// 初始化通信
const settings = obj => {
  return api.post('api/v1/room/room/room-settings', obj, true)
}// 房间设置
const xgmm = (obj) => {
  return api.post('api/v1/member/member/update-password', obj, true)
}// 修改密码
const wjmm = (obj) => {
  return api.post('/api/v1/site/up-pwd', obj)
}
export default {
  wjmm,
  xgmm,
  settings,
  bind,
  cehui,
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
  upImg,
  qianbao,
  addtx,
  bdtx,
  txhis,
  syjl,
  room,
  chatcode,
  sendChat,
  qsb,
  hbstu,
  hbxq,
  fhb
}
