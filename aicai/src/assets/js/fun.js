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
export const isColor = (str) => {
  let strs
  switch (parseInt(str)) {
    case 1:
    case 2:
    case 7:
    case 8:
    case 12:
    case 13:
    case 18:
    case 19:
    case 23:
    case 24:
    case 29:
    case 30:
    case 34:
    case 35:
    case 40:
    case 45:
    case 46:
      strs = 'red'
      break
    case 3:
    case 4:
    case 9:
    case 10:
    case 14:
    case 15:
    case 20:
    case 25:
    case 26:
    case 31:
    case 36:
    case 37:
    case 41:
    case 42:
    case 47:
    case 48:
      strs = 'blue'
      break
    default:
      strs = 'green'
      break
  }
  return strs
}
export const sxSort = (str) => {
  if (['01', '13', '25', '37', '49'].includes(str)) {
    return '鼠'
  }
  if (['11', '23', '35', '47'].includes(str)) {
    return '虎'
  }
  if (['09', '21', '33', '45'].includes(str)) {
    return '龙'
  }
  if (['07', '19', '31', '43'].includes(str)) {
    return '马'
  }
  if (['05', '17', '29', '41'].includes(str)) {
    return '猴'
  }
  if (['03', '15', '27', '39'].includes(str)) {
    return '狗'
  }
  if (['12', '24', '36', '48'].includes(str)) {
    return '牛'
  }
  if (['10', '22', '34', '46'].includes(str)) {
    return '兔'
  }
  if (['08', '20', '32', '44'].includes(str)) {
    return '蛇'
  }
  if (['06', '18', '30', '42'].includes(str)) {
    return '羊'
  }
  if (['04', '16', '28', '40'].includes(str)) {
    return '鸡'
  }
  if (['02', '14', '26', '38'].includes(str)) {
    return '猪'
  }
}
export const wuxing = (str) => {
  if (['01', '06', '11', '16', '21', '26', '31', '36', '41', '46'].includes(str)) {
    return '金'
  }
  if (['03', '08', '13', '18', '23', '28', '33', '38', '43', '48'].includes(str)) {
    return '水'
  }
  if (['05', '10', '15', '20', '25', '30', '35', '40', '45'].includes(str)) {
    return '土'
  }
  if (['02', '07', '12', '17', '22', '27', '32', '37', '42', '47'].includes(str)) {
    return '木'
  }
  if (['04', '09', '14', '19', '24', '29', '34', '39', '44', '49'].includes(str)) {
    return '火'
  }
}
