<template>
  <div>
    <van-tabs
        animated
        color="#F44336"
        line-height="1"
        :title-active-color="scss.fontColor2"
        line-width="20%"
        v-model="active">
      <van-tab title="开奖结果">
        <index1></index1>
      </van-tab>
      <van-tab title="百位走势">
        <index2></index2>
      </van-tab>
      <van-tab title="十位走势">
        <index3></index3>
      </van-tab>
      <van-tab title="个位走势">
        <index4></index4>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import scss from '@/assets/css/index.scss'
import { mapActions } from 'vuex'
import index1 from '@/views/index/chart/next/comopents/list1/index1'
import index2 from 'views/index/chart/next/comopents/list1/index2'
import index3 from 'views/index/chart/next/comopents/list1/index3'
import index4 from 'views/index/chart/next/comopents/list1/index4'

export default {
  name: 'list9',
  data () {
    return {
      active: 0,
      scss,
      list: null
    }
  },
  methods: {
    ...mapActions(['getChart']),
    getlist () {
      this.getChart({
        lottery_code: this.$route.query.code,
        type: 'all'
      })
    }
  },
  created () {
    this.getlist()
  },
  components: {
    index1,
    index2,
    index3,
    index4

  }
}
</script>

<style scoped lang="scss">

</style>
