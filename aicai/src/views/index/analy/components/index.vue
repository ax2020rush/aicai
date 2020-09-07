<template>
  <div class="list">
    <van-popup  safe-area-inset-bottom
               v-model="show">
      <div @dblclick="show=false" class="table" v-html="content&&content.replace(/text-align: center;/g,'text-align: left;padding: 3% 0;font-size:13px')"></div>
    </van-popup>
    <van-pull-refresh ref="refresh" v-model="refreshing" @refresh="onRefresh">
      <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
          offset="140"
      >
        <van-cell-group v-if="list.length>0">
          <van-cell @click="show=true,content=item.content" :title="item.title" v-for="(item,key) in list" :key="key">
            <div slot="label" class="van-cell__label">
              作者：{{ item.author }}
              <br>
              {{ parseInt(item.created_at * 1000) | formatDate }}
            </div>
          </van-cell>
        </van-cell-group>
        <van-empty v-else/>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { formatDate } from '@/assets/js/filters'
import api from '@/assets/js/api'

export default {
  props: {
    id: Number
  },
  name: 'index',
  data () {
    return {
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      pageNum: 1,
      show: false,
      content: null
    }
  },
  methods: {
    onLoad () {
      setTimeout(async () => {
        const res = await api.getList({
          type: this.id + 1,
          pid: this.$route.query.pid,
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
      this.pageNum = 1
      this.finished = false

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true
      this.onLoad()
    }
  },
  filters: {
    formatDate
  },
  mounted () {
    this.$refs.refresh.scrollEl.style.height =
    document.getElementById('app').clientHeight -
    this.$refs.refresh.headHeight + 'px'
  }
}
</script>

<style scoped lang="scss">

.van-popup--center{
  width: 100%;

}
.van-pull-refresh {
  overflow-y: auto;
}
.van-popup{
  background: #fff0;
}
</style>
