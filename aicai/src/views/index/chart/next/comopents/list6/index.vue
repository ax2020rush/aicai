<template>
  <div class="list9" v-if="list">
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td>期号</td>
        <td>开奖号码</td>
        <td>特码</td>
        <td>色波</td>
        <td>五行</td>
        <td>单双</td>
        <td>合单双</td>
        <td>大小</td>
        <td>和大小</td>
      </tr>
      <tr v-for="(item,k) in list" :key="k">
        <td>{{ item.expect.slice(item.expect.length - 3) }}期</td>
        <td ><div class="red" v-html="ball(item.opencode.split(',').slice(0,item.opencode.split(',').length-1))"></div></td>
        <td class="red" v-html="ball(item.opencode.split(',').slice(item.opencode.split(',').length-1))"></td>
        <td v-html="ballColor(isColor(item.opencode.split(',').slice(0,item.opencode.split(',').length-1)))"></td>
        <td >{{wuxing(item.opencode.split(',').slice(item.opencode.split(',').length-1)[0])}}</td>
        <td v-html="orArr(item.opencode.split(',').slice(item.opencode.split(',').length-1)[0])"></td>
        <td v-html="orArr(item.opencode.split(',').slice(item.opencode.split(',').length-1)[0].split('').reduce((a,b)=>parseInt(a)+parseInt(b)))"></td>
        <td v-html="contrast(item.opencode.split(',').slice(item.opencode.split(',').length-1))"></td>
        <td v-html="hsContrast(item.opencode.split(',').slice(item.opencode.split(',').length-1)[0])"></td>
        <td>头数</td>
      </tr>
    </table>
  </div>
  <v-loading v-else></v-loading>
</template>

<script>
import { isColor, sxSort, wuxing } from '@/assets/js/fun'
import scss from '@/assets/css/index.scss'
import { mapState } from 'vuex'

export default {
  name: 'index1',
  data () {
    return {
      scss,
      isColor,
      sxSort,
      wuxing,
      style: `display: flex;
        width: 24px;
        height: 24px;
        margin: 0px 2px;
        justify-content: center;
    align-items: center;
        border-radius: 50%;`
    }
  },
  computed: {
    ...mapState({
      list: state => state.chart && state.chart.data
    })
  },
  methods: {
    hsContrast (s) {
      if (s === '49') {
        return '<span style="color:' + this.scss.fontColor + '">和</span>'
      }
      const str = parseInt(s.split('').reduce((a, b) => parseInt(a) + parseInt(b)))
      if (str <= 6) {
        return '<span style="color:' + this.scss.fontColor2 + '">小</span>'
      } else if (str >= 7) {
        return '<span style="color:' + this.scss.fontColor + '">大</span>'
      }
    },
    contrast (s) {
      const str = parseInt(s)
      if (str <= 24) {
        return '<span style="color:' + this.scss.fontColor2 + '">小</span>'
      } else if (str > 24) {
        return '<span style="color:' + this.scss.fontColor + '">大</span>'
      } else if (str === 49) {
        return '<span style="color:' + this.scss.fontColor + '">和</span>'
      }
    },
    addArr (arr) {
      return arr.reduce((a, b) => {
        return parseInt(a) + parseInt(b)
      })
    },
    orArr (str) {
      return str % 2 === 0 ? '<span style="color:' + this.scss.fontColor2 + '">双</span>' : '<span style="color:' + this.scss.fontColor + '">单</span>'
    },
    sxpan (arr) {
      let n = 0
      let m = 0
      for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) <= 40) {
          n++
        } else {
          m++
        }
      }
      return n > m ? '上' : '下'
    },
    ball (arr) {
      let result = ''
      for (let i = 0; i < arr.length; i++) {
        if (this.isColor(arr[i]) === 'red') {
          result += '<div><span style="background: #B62929;' + this.style + '">' + arr[i] + '</span><p style="color: ' + scss.fontColor + '">' + this.sxSort(arr[i]) + '</p></div>'
        } else if (this.isColor(arr[i]) === 'blue') {
          result += '<div><span style="background: #0679DF;' + this.style + '">' + arr[i] + '</span><p style="color: ' + scss.fontColor + '">' + this.sxSort(arr[i]) + '</p></div>'
        } else {
          result += '<div><span style="background: #1E8615;' + this.style + '">' + arr[i] + '</span><p style="color: ' + scss.fontColor + '"> ' + this.sxSort(arr[i]) + '</p></div>'
        }
      }
      return result
    },
    ballColor (str) {
      if (str === 'green') {
        return '<span style="color: #1E8615">绿波</span>'
      }
      if (str === 'red') {
        return '<span style="color:' + this.scss.fontColor + '">红波</span>'
      }
      if (str === 'blue') {
        return '<span style="color:' + this.scss.blue + '">蓝波</span>'
      }
    }
  },
  mounted () {
  }

}
</script>

<style scoped lang="scss">
.loding {
  height: 500px;
}

.list9 {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;

  table {
    tr {
      td {
        padding: 20px 40px;
        @include tp34;
        color: $cl;
        word-break: keep-all;
        text-align: center;
        border-right: 1px solid $cl3;
        border-top: 1px solid $cl3;
      }

      .red {
        color: #ffffff;
        display: flex;
        span {
          display: flex;
          width: 30px;
          height: 30px;
          border-radius: 50%;
        }
      }
    }

    border-bottom: 1px solid $cl3;
    border-left: 1px solid $cl3;
  }
}
</style>
