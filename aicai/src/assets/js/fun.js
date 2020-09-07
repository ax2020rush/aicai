export const getitem = (str) => {
  return JSON.parse(sessionStorage.getItem(str))
}
export const setitem = (str, data) => {
  return sessionStorage.setItem(str, JSON.stringify(data))
}
const covers = ''
export const ishttp = (str, cover) => {
  if (!str) {
    if (cover) {
      return covers
    } else {
      return ''
    }
  }
  if (str.slice(0, 4) === 'http') {
    return str
  } else {
    return process.env.VUE_APP_API_ROOT + str
  }
}
export const iscz = (str) => {
  if (parseInt(str) === 1801) {
    return '福彩3D'
  }
  if (parseInt(str) === 1901) {
    return '排列3'
  }
  if (parseInt(str) === 9999) {
    return '双色球'
  }
  if (parseInt(str) === 9998) {
    return '大乐透'
  }
}
export const timeFormat = (time) => {
  if (time > 0) {
    var result
    time = parseInt(time)
    var minute = 1000 * 60
    var hour = minute * 60
    var day = hour * 24
    var month = day * 30
    var now = new Date().getTime()
    var diffValue = now - time
    if (diffValue < 0) {
      return
    }
    var monthC = diffValue / month
    var weekC = diffValue / (7 * day)
    var dayC = diffValue / day
    var hourC = diffValue / hour
    var minC = diffValue / minute
    if (monthC >= 1) {
      if (monthC <= 12) {
        result = '' + parseInt(monthC) + '月前'
      } else {
        result = '' + parseInt(monthC / 12) + '年前'
      }
    } else if (weekC >= 1) {
      result = '' + parseInt(weekC) + '周前'
    } else if (dayC >= 1) {
      result = '' + parseInt(dayC) + '天前'
    } else if (hourC >= 1) {
      result = '' + parseInt(hourC) + '小时前'
    } else if (minC >= 1) {
      result = '' + parseInt(minC) + '分钟前'
    } else {
      result = '刚刚'
    }
    return result
  } else {
    return ''
  }
}
console.log(timeFormat(1599381188 * 1000))
