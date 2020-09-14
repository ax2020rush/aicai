<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
        v-model="loading"
        :finished="finished"
        @load="onLoad"
    >
      <van-cell v-for="(item,k) in list" :key="k">
       <div class="nxt">
         <div>
           <p>{{item.period}}</p>
           <p>{{item.pre}}</p>
         </div>
         <div>
           <a :style="{color:'#'+item.pre_status_color}">{{item.pre_status}}</a>
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
    width: 50%;
    >p{
      @include tp34;
      color: $cl2;
    }
    &:last-child{
      @include tp36;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
  }
}
</style>
