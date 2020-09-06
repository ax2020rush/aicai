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
export default {
  banner,
  indexApp,
  resgiter,
  config,
  getSms,
  login
}
