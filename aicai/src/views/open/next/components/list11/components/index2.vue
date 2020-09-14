<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
    >
      <van-cell v-for="(item,l) in list" :key="l">
       <div class="nxt">
         <div>
           <p>{{item.expect}}期</p>
           <div>
             <i v-for="(it,key) in item.opencode.split(',')" :key="key">{{it}}</i>
           </div>
         </div>

       </div>
      </van-cell>
      <van-empty  class="custom-image"
                  :image="swg"
                  v-if="list.length===0" />
    </van-list>
  </van-pull-refresh></template>

<script>
import api from 'assets/js/api'
import swg from 'assets/img/zwsj.png'

export default {
  props: {
    type: Number
  },
  name: 'index',
  data () {
    return {
      swg,
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      pageNum: 1
    }
  },
  methods: {
    onLoad () {
      setTimeout(async () => {
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }
        const res = await api.jihua({
          lottery_code: this.$route.query.code,
          type: this.type,
          page: this.pageNum++
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
      this.pageNum = 1
      // 清空列表数据
      this.finished = false
      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }
  }
}
</script>

<style scoped lang="scss">
.van-cell{
  border-radius: 4px;

}
.nxt{
  display: flex;
  justify-content: space-between;
  >div{
    width: 100%;
    >p{
      @include tp32;
      color: $cl;
    }
    >div{
      display: flex;
      justify-content: left;
      flex-wrap: wrap;
      align-items: center;

      i {
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
        margin: 1% 1%;
      }
    }

  }
}
</style>
