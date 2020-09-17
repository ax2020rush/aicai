<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
    >
      <van-cell-group v-if="list" :style="{width:'94%',margin:'4% auto'}">
        <van-cell v-for="(item,k) in list" :key="k"  :class="{act:true}">
          <div>
            <p>订单号:{{ item.sn }}</p>
            <h1 :style="{color:item.status&&isStatus(parseInt(item.status))&&isStatus(parseInt(item.status))[1]}">{{item.status&&isStatus(parseInt(item.status))&&isStatus(parseInt(item.status))[0]}}</h1>
          </div>
          <div>
            <p>提现方式:{{isType(parseInt(item.type))}}</p>
            <a>{{filterTime(parseInt(item.created_at))}}</a>
          </div>
        </van-cell>
      </van-cell-group>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import { filterTime } from 'assets/js/fun'
import api from 'assets/js/api'
export default {
  name: 'index',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      pageNum: 1,
      filterTime
    }
  },
  methods: {
    isStatus (int) {
      if (int === 0) {
        return ['待审核', '#2B47FC']
      } else if (int === 1) {
        return ['通过', '#12B825']
      } else if (int === 2) {
        return ['拒绝', '#E0D314']
      } else if (int === 3) {
        return ['取消', '#FA393D']
      }
    },
    isType (int) {
      if (int === 1) {
        return '微信'
      } else if (int === 2) {
        return '支付宝'
      } else if (int === 3) {
        return '平台'
      } else if (int === 4) {
        return '银行卡'
      }
    },
    onLoad () {
      setTimeout(async () => {
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }
        const res = await api.txhis({
          page: this.pageNum
        })
        if (res.code === 200) {
          for (let i = 0; i < res.data.length; i++) {
            this.list.push(res.data[i])
          }
          this.loading = false
          if (res.data.length < 10) {
            this.finished = true
          }
        }
      }, 1000)
    },
    onRefresh () {
      // 清空列表数据
      this.finished = false
      this.pageNum = 1
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }

  },
  created () {

  }
}
</script>

<style scoped lang="scss">
.act{
  border-radius: 10px;
  overflow: hidden;
  >div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    >div{
      width: 100%;
      display: flex;
      justify-content: space-between;
      p{
        @include tp32;
        color: $cl;
      }
      h1{
        @include tp34;
        font-weight: 400;
      }
      a{
        @include tp30;
        color: $cl3;
      }
    }
  }
}
</style>
