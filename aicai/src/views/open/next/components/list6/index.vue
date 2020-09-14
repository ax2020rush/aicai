<template>
  <div class="next">
    <van-cell-group :border="false">
      <van-cell :border="false" class="cells">
        <p v-if="list">第{{list.expect}}期</p>
        <p>开奖记录</p>
      </van-cell>
      <van-cell class="ball" v-if="list">
        <div v-for="(item,k) in list.opencode.split(',').slice(0,list.opencode.split(',').length-1)" :key="k">
          <i  :style="{background:ball(item)}" >{{item}}</i>
          <p>{{sxSort(item)}}</p>
        </div>
        <van-icon color="#333333" style="background: none" name="plus" />
        <div>
          <i  :style="{background:ball(list.opencode.split(',').slice(list.opencode.split(',').length-1))}" >{{parseInt(list.opencode.split(',').slice(list.opencode.split(',').length-1))}}</i>
          <p>{{sxSort(list.opencode.split(',').slice(list.opencode.split(',').length-1)[0])}}</p>
        </div>

      </van-cell>
      <van-cell v-else><v-loading></v-loading></van-cell>
    </van-cell-group>
    <van-tabs
        animated
        color="#050505"
        line-height="1"
        title-active-color="#333333"
        line-width="36%"
        class="open"
        v-model="active">
      <van-tab title="实时计划">
        <div class="cas">
          <div>
            <indexs :type="active+1"></indexs>
          </div>
        </div>
      </van-tab>
      <van-tab title="开奖历史">
        <div class="cas">
          <div>
            <indexs2 :type="active+1"></indexs2>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import indexs from './components/index'
import indexs2 from './components/index2'
import { isColor, sxSort } from 'assets/js/fun'
import scss from '@/assets/css/index.scss'
import api from '@/assets/js/api'
export default {
  name: 'index',
  data () {
    return {
      scss,
      active: 0,
      list: null,
      isColor,
      sxSort
    }
  },
  methods: {
    async getList () {
      const res = await api.chart({
        lottery_code: this.$route.query.code
      })
      if (res.data) {
        this.list = res.data
      }
    },
    ball (num) {
      if (this.isColor(num) === 'red') {
        return '#B62929'
      } else if (this.isColor(num) === 'blue') {
        return '#0679DF'
      } else {
        return '#1E8615'
      }
    }
  },
  created () {
    this.getList()
  },
  components: {
    indexs,
    indexs2
  }
}
</script>

<style scoped lang="scss">
.next {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.van-tabs__wrap {
  width: 50%;
}

.cells {
  margin-bottom: 0;
  padding-bottom: 0;

  > div {
    display: flex;
    justify-content: space-between;

    p {
      @include tp30;
      color: $cl2;
      padding-top: 0;
      margin-bottom: 0;
    }
  }
}

.ball > div {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
  align-items: center;
  >div{
    display: flex;
    flex-direction: column;
    text-align: center;
    margin: 1%;
  }

  i {
    margin: 1% 1%;
    width: 26PX;
    height: 26PX;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #EA075F;
    @include tp32;
    color: #ffffff;
    font-style: normal;
    border-radius: 50%;
  }
}

.van-tabs {
  height: 100%;
  display: flex;
  flex-direction: column;

}

.cas {
  width: 100%;
  height: 100%;
  background: $bg;
  display: flex;
  flex-direction: column;
  position: relative;

  > div {
    width: 94%;
    height: 100%;
    position: absolute;
    margin: auto;
    top: 0px;
    left: 0;
    right: 0;
  }
}
</style>
