<template>
  <div class="list9" v-if="list">
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td>期号</td>
        <td>开奖号码</td>

      </tr>
      <tr v-for="(item,k) in list" :key="k">
        <td>{{ item.expect.slice(item.expect.length - 3) }}期</td>
        <td ><div class="red" v-html="pk10(item.opencode.split(','))"></div>
        <div class="list3"><span>冠军 <span v-html="contrast(item.opencode.split(',')[0])"></span>
          <span v-html="orArr(item.opencode.split(',')[0])"></span></span>
          <span>冠亚和值<span v-html="contrast2(pk10hz(item.opencode.split(',')))"></span>
            <span v-html="orArr(pk10hz(item.opencode.split(',')))"></span>
          </span></div>
        </td>
      </tr>
    </table>
  </div>
  <v-loading v-else></v-loading>
</template>

<script>
import { isColor, beast, pk10, sxSort, wuxing, touwei, weiNum } from '@/assets/js/fun'
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
      touwei,
      beast,
      weiNum,
      pk10,
      style: `display: flex;
        width: 28px;
        height: 18px;
        margin: 0px 2px;
        justify-content: center;
    align-items: center;
        border-radius: 2px;`
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
    pk10hz (arr) {
      return parseInt(arr[0]) + parseInt(arr[1])
    },
    contrast (s) {
      const str = parseInt(s)
      if (str <= 6) {
        return '<span style="color:' + this.scss.fontColor2 + '">小</span>'
      } else {
        return '<span style="color:' + this.scss.fontColor + '">大</span>'
      }
    },
    contrast2 (s) {
      const str = parseInt(s)
      if (str <= 11) {
        return '<span style="color:' + this.scss.fontColor2 + '">小</span>'
      } else if (str > 11) {
        return '<span style="color:' + this.scss.fontColor + '">大</span>'
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
    orArr2 (str) {
      return str % 2 === 0 ? '<span style="color:' + this.scss.fontColor2 + '">总双</span>' : '<span style="color:' + this.scss.fontColor + '">总单</span>'
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
    width: 100%;
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
      .list3{
        width: 100%;
        display: flex;
        justify-content: space-between;
        padding-top: 10px;
        >span{
          @include tp32;
          color: $cl;
          >span {
            padding: 2px 10px;
          }
        }
      }
    }

    border-bottom: 1px solid $cl3;
    border-left: 1px solid $cl3;
  }
}
</style>
