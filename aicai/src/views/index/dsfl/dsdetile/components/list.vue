<template>
  <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
    <van-list
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
        offset="100"
    >
      <van-cell v-for="(item,k) in list" :value="timeFormat(item.created_at*1000)" :key="k">
        <template #title>
          <span class="custom-title">第{{item.period}}期</span>
            <van-tag @click="popTips(item)" type="danger">[查看]</van-tag>
        </template>
      </van-cell>
    </van-list>
  </van-pull-refresh>
</template>

<script>
import { timeFormat } from '@/assets/js/fun'
import api from '@/assets/js/api'
export default {
  name: 'list',
  props: {
    code: null
  },
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      pageNum: 1,
      timeFormat,
      show: false
    }
  },
  methods: {
    popTips (str) {
      this.$emit('changes', str)
    },
    onLoad () {
      setTimeout(async () => {
        const res = await api.dscz({
          lottery_code: this.code,
          id: this.$route.query.id,
          page: this.pageNum++
        })
        if (this.refreshing) {
          this.list = []
          this.refreshing = false
        }

        for (let i = 0; i < res.data.length; i++) {
          this.list.push(res.data[i])
        }
        this.loading = false
        if (res.data.length < 10) {
          this.finished = true
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
  mounted () {

  }
}
</script>

<style scoped lang="scss">
.van-cell{
  margin-bottom: 2%;
  border-radius: 4PX;
}
.van-tabs__wrap{
  position: sticky;
  top: 0;
  z-index: 999;
}
</style>
