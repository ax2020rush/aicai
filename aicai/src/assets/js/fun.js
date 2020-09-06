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
