<template>
  <div class="list9" v-if="list">
    <table border="0" cellspacing="0" cellpadding="0">
      <tr>
        <td>期号</td>
        <td>开奖号码</td>
        <td>和值</td>
        <td>万位</td>
        <td>千位</td>
        <td>百位</td>
        <td>十位</td>
        <td>个位</td>
        <td>前三</td>
        <td>中三</td>
        <td>后三</td>
        <td>和值</td>
        <td>大小</td>
        <td>单双</td>
        <td>牛牛</td>
        <td>1VS2</td>
        <td>1VS3</td>
        <td>1VS4</td>
        <td>1VS5</td>
        <td>2VS3</td>
        <td>2VS4</td>
        <td>2VS5</td>
        <td>3VS4</td>
        <td>3VS5</td>
        <td>4VS5</td>
      </tr>
      <tr v-for="(item,k) in list" :key="k">
        <td>{{item.expect.slice(item.expect.length-3)}}期</td>
        <td class="red">{{item.opencode}}</td>
        <td>{{addArr(item.opencode.split(','))}}</td>
        <td v-html="orArr2(item.opencode.split(',')[0])"></td>
        <td v-html="orArr2(item.opencode.split(',')[1])"></td>
        <td v-html="orArr2(item.opencode.split(',')[2])"></td>
        <td v-html="orArr2(item.opencode.split(',')[3])"></td>
        <td v-html="orArr2(item.opencode.split(',')[4])"></td>
        <td>{{ArrXt(item.opencode.split(',').slice(0,3))}}</td>
        <td>{{ArrXt(item.opencode.split(',').slice(1,4))}}</td>
        <td>{{ArrXt(item.opencode.split(',').slice(2,5))}}</td>
        <td>{{addArr(item.opencode.split(','))}}</td>
        <td v-html="contrast(addArr(item.opencode.split(',')))"></td>
        <td v-html="orArr(addArr(item.opencode.split(',')))"></td>
        <td>{{ niuniu(item.opencode.split(',').map((a) => parseInt(a))) }}</td>
        <td>{{ lhvs(item.opencode.split(',')[0],item.opencode.split(',')[1]) }}</td>
        <td>{{ lhvs(item.opencode.split(',')[0],item.opencode.split(',')[2]) }}</td>
        <td>{{ lhvs(item.opencode.split(',')[0],item.opencode.split(',')[3]) }}</td>
        <td>{{ lhvs(item.opencode.split(',')[0],item.opencode.split(',')[4]) }}</td>
        <td>{{ lhvs(item.opencode.split(',')[1],item.opencode.split(',')[2]) }}</td>
        <td>{{ lhvs(item.opencode.split(',')[1],item.opencode.split(',')[3]) }}</td>
        <td>{{ lhvs(item.opencode.split(',')[1],item.opencode.split(',')[4]) }}</td>
        <td>{{ lhvs(item.opencode.split(',')[2],item.opencode.split(',')[3]) }}</td>
        <td>{{ lhvs(item.opencode.split(',')[2],item.opencode.split(',')[4]) }}</td>
        <td>{{ lhvs(item.opencode.split(',')[3],item.opencode.split(',')[4]) }}</td>

      </tr>
    </table>
  </div>
  <v-loading v-else></v-loading>
</template>

<script>
import scss from '@/assets/css/index.scss'
import { mapState } from 'vuex'
import { color28, niuniu, lhvs } from '@/assets/js/fun'

export default {
  name: 'index1',
  data () {
    return {
      scss,
      isColor: color28,
      niuniu,
      lhvs
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
    orArr2 (str) {
      if (str > 5) {
        return str % 2 === 0 ? '<span style="color:' + this.scss.blue + '">大双</span>' : '<span style="color:' + this.scss.fontColor + '">大单</span>'
      } else {
        return str % 2 === 0 ? '<span style="color:#999999">小双</span>' : '<span style="color:' + this.scss.fontColor2 + '">小单</span>'
      }
    },
    contrast (str) {
      if (str <= 22) {
        return '<span style="color:' + this.scss.fontColor + '">小</span>'
      } else {
        return '<span style="color:' + this.scss.fontColor2 + '">大</span>'
      }
    },
    ArrXt (arr) {
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
