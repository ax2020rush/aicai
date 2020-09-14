import covers from '@/assets/img/caovue.png'
export const getitem = (str) => {
  return JSON.parse(sessionStorage.getItem(str))
}
export const setitem = (str, data) => {
  return sessionStorage.setItem(str, JSON.stringify(data))
}
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
export const touwei = (str) => {
  if (['01', '02', '03', '04', '05', '06', '07', '08', '09'].includes(str)) {
    return '0头'
  }
  if (['20', '21', '22', '23', '24', '25', '26', '27', '28', '29'].includes(str)) {
    return '2头'
  }
  if (['10', '11', '12', '13', '14', '15', '16', '17', '18', '19'].includes(str)) {
    return '1头'
  }
  if (['30', '31', '32', '33', '34', '35', '36', '37', '38', '39'].includes(str)) {
    return '3头'
  }
  if (['40', '41', '42', '43', '44', '45', '46', '47', '48', '49'].includes(str)) {
    return '4头'
  }
}
export const weiNum = (str) => {
  return str.slice(1) + '尾'
}
export const beast = (str) => {
  if (['牛', '马', '羊', '鸡', '狗', '猪'].includes(str)) {
    return '家禽'
  }
  if (['鼠', '虎', '兔', '龙', '蛇', '猴'].includes(str)) {
    return '野兽'
  }
}
export const DuplicateNumber = (ar1, ar2) => {
  if (ar2) {
    const data = ar1.filter((validate, val, set) => {
      if (ar2.includes(validate)) {
        return validate
      }
    })
    return data.length
  } else {
    return 0
  }
} // 数组对比取重
export const color28 = (str) => {
  if (['0', '13', '14', '27'].includes(str)) {
    return '<span style="color: gray">无</span>'
  }
  if (['1', '4', '7', '10', '16', '19', '22', '25'].includes(str)) {
    return '<span style="color: #3fa93f">绿</span>'
  }
  if (['2', '5', '8', '11', '17', '20', '23', '26'].includes(str)) {
    return '<span style="color: #2299d5">蓝</span>'
  }
  if (['3', '6', '9', '12', '15', '18', '21', '24'].includes(str)) {
    return '<span style="color: #ff5151">蓝</span>'
  }
}
export const addAr = (arr) => {
  return arr.reduce((a, b) => parseInt(a) + parseInt(b))
}
//

export const chunk = (m, n, currentIndex = 0, choseArr = [], result = []) => {
  const mLen = m.length
  // 可选数量小于项所需元素的个数，则递归终止
  if (currentIndex + n > mLen) {
    return
  }
  for (let i = currentIndex; i < mLen; i++) {
    // n === 1的时候，说明choseArr在添加一个元素，就能生成一个新的完整项了。
    // debugger
    if (n === 1) {
      // 再增加一个元素就能生成一个完整项，再加入到结果集合中
      const nums = [...choseArr, m[i]].reduce((a, b) => a + b)
      if (parseFloat(nums / 10) === parseInt(nums / 10)) {
        result.push([...choseArr, m[i]])
      }
      // 继续下一个元素生成一个新的完整项
      i + 1 < mLen && chunk(m, n, i + 1, choseArr, result)
      break
    }
    // 执行到这，说明n > 2，choseArr还需要两个以上的元素，才能生成一个新的完整项。则递归，往choseArr添加元素
    chunk(m, n - 1, i + 1, [...choseArr, m[i]], result)
  }
  return result
}
// test 测试用例
export const niuniu = (arr) => {
  const arr2 = chunk(arr, 3)
  if (parseInt(addAr(arr) / 10) === parseFloat(addAr(arr) / 10)) {
    return '牛牛'
  } else if (arr2.length === 0) {
    return '没牛'
  }

  arr2.filter((a) => {
    arr[arr.indexOf(a)] = 0
  })
  return '牛' + arr.reduce((a, b) => a + b) % 10
}
export const lhvs = (a, b) => {
  if (a === b) {
    return '和'
  } else if (a < b) {
    return '虎'
  } else if (a > b) {
    return '龙'
  }
}
export const pk10 = (arr) => {
  const style = `display: flex;
        width: 28px;
        height: 18px;
        margin: 0px 4px;
        justify-content: center;
    align-items: center;
        border-radius: 2px;`
  let str = ''
  for (let i = 0; i < arr.length; i++) {
    if (parseInt(arr[i]) === 1) {
      str += '<div><span style="background: #E5B800;' + style + '">' + arr[i] + '</span></div>'
    } else if (parseInt(arr[i]) === 2) {
      str += '<div><span style="background: #0278D7;' + style + '">' + arr[i] + '</span></div>'
    } else if (parseInt(arr[i]) === 3) {
      str += '<div><span style="background: #474C50;' + style + '">' + arr[i] + '</span></div>'
    } else if (parseInt(arr[i]) === 4) {
      str += '<div><span style="background: #F17403;' + style + '">' + arr[i] + '</span></div>'
    } else if (parseInt(arr[i]) === 5) {
      str += '<div><span style="background: #25B5CB;' + style + '">' + arr[i] + '</span></div>'
    } else if (parseInt(arr[i]) === 6) {
      str += '<div><span style="background: #003E92;' + style + '">' + arr[i] + '</span></div>'
    } else if (parseInt(arr[i]) === 7) {
      str += '<div><span style="background: #AA9E9E;' + style + '">' + arr[i] + '</span></div>'
    } else if (parseInt(arr[i]) === 8) {
      str += '<div><span style="background: #EA075F;' + style + '">' + arr[i] + '</span></div>'
    } else if (parseInt(arr[i]) === 9) {
      str += '<div><span style="background: #7E0209;' + style + '">' + arr[i] + '</span></div>'
    } else if (parseInt(arr[i]) === 10) {
      str += '<div><span style="background: #288C06;' + style + '">' + arr[i] + '</span></div>'
    }
  }
  return str
}
export const pk102 = (str) => {
  if (parseInt(str) === 1) {
    return 'E5B800'
  } else if (parseInt(str) === 2) {
    return '0278D7'
  } else if (parseInt(str) === 3) {
    return '474C50'
  } else if (parseInt(str) === 4) {
    return 'F17403'
  } else if (parseInt(str) === 5) {
    return '25B5CB'
  } else if (parseInt(str) === 6) {
    return '003E92'
  } else if (parseInt(str) === 7) {
    return 'AA9E9E'
  } else if (parseInt(str) === 8) {
    return 'EA075F'
  } else if (parseInt(str) === 9) {
    return '7E0209'
  } else if (parseInt(str) === 10) {
    return '288C06'
  }
}
export const tsk3 = (arr, str, nums = 0) => {
  let num = arr.length
  if (str) {
    str--
    num = str
  } else {
    num--
  }
  const arr2 = arr.filter((a, b) => {
    if (b !== num) {
      return arr
    }
  })
  const news = arr2.filter((a, b) => {
    return arr2.includes(arr[num])
  })
  nums += (news.length > 0 && 1) || 0
  if (str === 0) {
    if (nums === 0) {
      return '三不同'
    } else if (nums === 2) {
      return '二同号'
    } else if (nums === 3) {
      return '豹子'
    }
  } else {
    return tsk3(arr, num, nums)
  }
}
