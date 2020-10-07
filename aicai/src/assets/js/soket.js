import api from 'assets/js/api'
import store from '../../store/index'

var cl = true
var sta = true
var time = true

export const soket = async (callback) => {
  const nulls = await api.room()

  if (nulls.code === 200) {
    const arrData = nulls.data.map((a, b) => {
      a.num = 0
      return a
    })
    store.dispatch('getMessageNum', arrData)
  }

  const sokets = new WebSocket('ws://ws.lemaifangzhi.com:8585/')
  let status = true
  let soketTimes
  sokets.onopen = () => {
    if (soketTimes) {
      clearInterval(soketTimes)
    }
    soketTimes = setInterval(() => {
      sokets.send('ping')
    }, 3000)
  }// 发送请求ping
  sokets.onmessage = async (e) => {
    const data = JSON.parse(e.data)
    store.dispatch('getMessage', data)
    if (time) {
      localStorage.setItem('time', Math.round(new Date().getTime() / 1000))
    }
    if (data.type === 'message') {
      const obj = store.state.messageNum
      for (let i = 0; i < obj.length; i++) {
        if (parseInt(obj[i].id) === parseInt(data.room_id)) {
          obj[i].msg.content = data.content
          obj[i].msg.msg_type = String(data.msg_type)
          obj[i].num++
        }
      }
      store.dispatch('getMessageNum', obj)
    }
    if (data.type === 'cmd' && status) {
      status = false
      sokets.send(JSON.stringify({ type: 'init' }))
      const res = await api.bind({
        client_id: data.client_id
      })
      if (res.code === 200) {
        sta = true
        const ress = api.newMessage({
          disconnect_time: localStorage.getItem('time')
        })
        if (ress.code === 200) {
          time = true
        }
      }
    }
  }
  sokets.onerror = () => {
    time = false
    run()
  }// 链接失败重连
  sokets.onclose = () => {
    if (sta) {
      sta = false
      time = false
      run()
    }
  }// 链接关闭
}
const run = () => {
  if (cl) {
    setTimeout(() => {
      soket()
      cl = true
    }, 3000)
  }
  cl = false
}
