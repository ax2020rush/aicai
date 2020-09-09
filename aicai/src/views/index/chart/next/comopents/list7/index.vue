<template>
  <div class="list9" v-if="list">
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td>期号</td>
        <td>开奖号码</td>
        <td>和值</td>
        <td>大小</td>
        <td>单双</td>
        <td>上下盘</td>
        <td>奇偶盘</td>
      </tr>
      <tr v-for="(item,k) in list" :key="k">
        <td>{{item.expect.slice(item.expect.length-3)}}期</td>
        <td class="red">{{item.opencode}}</td>
        <td>{{addArr(item.opencode.split(','))}}</td>
        <td v-html="contrast(addArr(item.opencode.split(',')))"></td>
        <td v-html="orArr(addArr(item.opencode.split(',')))"></td>
        <td v-html="sxpan(item.opencode.split(','))"></td>
        <td>{{jiOu(item.opencode.split(','))}}</td>
      </tr>
    </table>
  </div>
  <v-loading v-else></v-loading>
</template>

<script>
import scss from '@/assets/css/index.scss'
import { mapState } from 'vuex'
export default {
  name: 'index1',
  data () {
    return {
      scss
    }
  },
  computed: {
    ...mapState({
      list: state => state.chart && state.chart.data
    })
  },
  methods: {
    addArr (arr) {
      return arr.reduce((a, b) => {
        return parseInt(a) + parseInt(b)
      })
    },
    orArr (str) {
      return str % 2 === 0 ? '<span style="color:' + this.scss.fontColor2 + '">双</span>' : '<span style="color:' + this.scss.fontColor + '">单</span>'
    },
    contrast (str) {
      if (str <= 840) {
        return '<span style="color:' + this.scss.fontColor + '">小</span>'
      } else {
        return '<span style="color:' + this.scss.fontColor2 + '">大</span>'
      }
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
    jiOu (arr) {
      let n = 0
      let m = 0
      for (let i = 0; i < arr.length; i++) {
        if (parseInt(arr[i]) % 2 === 0) {
          n++
        } else {
          m++
        }
      }
      if (n > m) {
        return '偶'
      } else if (n < m) {
        return '奇'
      } else if (n === m) {
        return '和'
      }
    }
  },
  mounted () {
  }

}
</script>

<style scoped lang="scss">
.loding{
  height: 500px;
}
.list9 {
  width: 100%;
  overflow: hidden;
  overflow-x: auto;
  table{
    tr{
      td{
        padding: 20px 40px;
        @include tp34;
        color: $cl;
        word-break: keep-all;
        text-align: center;
        border-right: 1px solid $cl3;
        border-top: 1px solid $cl3;
      }
      .red{
        color: $red;
      }
    }
    border-bottom: 1px solid $cl3;
    border-left:1px solid $cl3;
  }
}
</style>
