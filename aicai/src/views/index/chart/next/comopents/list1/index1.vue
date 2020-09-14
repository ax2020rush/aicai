<template>
  <div class="list9" v-if="list">
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td>期号</td>
        <td>开奖号码</td>
        <td>和值</td>
        <td>总和大小</td>
        <td>总和单双</td>
        <td>跨度</td>
        <td>形态</td>
      </tr>
      <tr v-for="(item,k) in list" :key="k">
        <td>{{item.expect.slice(item.expect.length-3)}}期</td>
        <td><div class="ks"><span v-for="(item,kk) in item.opencode.split(',')" :key="kk" :class="'ball'+item"></span></div></td>
        <td>{{addArr(item.opencode.split(','))}}</td>
        <td v-html="contrast(addArr(item.opencode.split(',')))"></td>
        <td v-html="orArr(addArr(item.opencode.split(',')))"></td>
        <td>{{Math.max(...item.opencode.split(','))-Math.min(...item.opencode.split(','))}}</td>
        <td>{{tsk3(item.opencode.split(',').map((a,b)=>parseInt(a)))}}</td>
      </tr>
    </table>
  </div>
  <v-loading v-else></v-loading>
</template>

<script>
import scss from '@/assets/css/index.scss'
import { mapState } from 'vuex'
import { tsk3 } from 'assets/js/fun'

export default {
  name: 'index1',
  data () {
    return {
      scss,
      tsk3
    }
  },
  computed: {
    ...mapState({
      list: state => state.chart && state.chart.data
    })
  },
  methods: {
    contrast (str) {
      if (str <= 10) {
        return '<span style="color:' + this.scss.fontColor2 + '">小</span>'
      } else {
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
    ArrXt (str) {
      if (!str) {
        return ''
      }
      const arr = str.split(',')
      var obj = {}
      for (var i = 0, l = arr.length; i < l; i++) {
        var item = arr[i]
        obj[item] = (obj[item] + 1) || 1
      }
      if (Math.max(...Object.values(obj)) === 1) {
        return '组六'
      } else if (Math.max(...Object.values(obj)) === 2) {
        return '组三'
      } else if (Math.max(...Object.values(obj)) === 3) {
        return '豹子'
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
      .ks{
        display: flex;
        >span{
          width: 64px;
          height: 64px;

        }
        >span.ball1{
          background:url(~@/assets/img/ico/1.png) no-repeat;
          background-size: 100%;
        }
        >span.ball2{
          background:url(~@/assets/img/ico/2.png) no-repeat;
          background-size: 100%;
        }
        >span.ball3{
          background:url(~@/assets/img/ico/3.png) no-repeat;
          background-size: 100%;
        }
        >span.ball4{
          background:url(~@/assets/img/ico/4.png) no-repeat;
          background-size: 100%;
        }
        >span.ball5{
          background:url(~@/assets/img/ico/5.png) no-repeat;
          background-size: 100%;
        }
        >span.ball6{
          background:url(~@/assets/img/ico/6.png) no-repeat;
          background-size: 100%;
        }
      }
    }
    border-bottom: 1px solid $cl3;
    border-left:1px solid $cl3;
  }
}
</style>
