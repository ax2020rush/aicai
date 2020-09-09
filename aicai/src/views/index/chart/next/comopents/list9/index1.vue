<template>
  <div class="list9" v-if="list">
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td>期号</td>
        <td>开奖号码</td>
        <td>和值</td>
        <td>跨度</td>
        <td>百位</td>
        <td>十位</td>
        <td>个位</td>
        <td>形态</td>
      </tr>
      <tr v-for="(item,k) in list" :key="k">
        <td>{{item.expect.slice(item.expect.length-3)}}期</td>
        <td class="red">{{item.opencode}}</td>
        <td>{{addArr(item.opencode.split(','))}}</td>
        <td>{{Math.max(...item.opencode.split(','))-Math.min(...item.opencode.split(','))}}</td>
        <td v-html="orArr(parseInt(item.opencode.split(',')[0]))"></td>
        <td v-html="orArr(parseInt(item.opencode.split(',')[1]))"></td>
        <td v-html="orArr(parseInt(item.opencode.split(',')[2]))"></td>
        <td>{{ArrXt(item.opencode)}}</td>
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
      if (str > 4) {
        return str % 2 === 0 ? '<span style="color:' + this.scss.blue + '">大双</span>' : '<span style="color:' + this.scss.fontColor + '">大单</span>'
      } else {
        return str % 2 === 0 ? '<span style="color:#999999">小双</span>' : '<span style="color:' + this.scss.fontColor2 + '">小单</span>'
      }
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
    }
    border-bottom: 1px solid $cl3;
    border-left:1px solid $cl3;
  }
}
</style>
