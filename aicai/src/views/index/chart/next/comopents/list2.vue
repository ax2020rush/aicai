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
      <van-tab title="冠军走势">
        <index2></index2>
      </van-tab>
      <van-tab title="亚军走势">
        <index3></index3>
      </van-tab>
      <van-tab title="季军走势">
        <index4></index4>
      </van-tab>
      <van-tab title="第四位走势">
        <index5></index5>
      </van-tab>
      <van-tab title="第五位走势">
        <index6></index6>
      </van-tab>
      <van-tab title="第六位走势">
        <index7></index7>
      </van-tab>
      <van-tab title="第七位走势">
        <index8></index8>
      </van-tab>
      <van-tab title="第八位走势">
        <index9></index9>
      </van-tab>
      <van-tab title="第九位走势">
        <index10></index10>
      </van-tab>
      <van-tab title="第十位走势">
        <index11></index11>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import scss from '@/assets/css/index.scss'
import { mapActions } from 'vuex'
import index1 from '@/views/index/chart/next/comopents/list2/index1'
import index2 from 'views/index/chart/next/comopents/list2/index2'
import index3 from 'views/index/chart/next/comopents/list2/index3'
import index4 from 'views/index/chart/next/comopents/list2/index4'
import index5 from 'views/index/chart/next/comopents/list2/index5'
import index6 from 'views/index/chart/next/comopents/list2/index6'
import index7 from 'views/index/chart/next/comopents/list2/index7'
import index8 from 'views/index/chart/next/comopents/list2/index8'
import index9 from 'views/index/chart/next/comopents/list2/index9'
import index10 from 'views/index/chart/next/comopents/list2/index10'
import index11 from 'views/index/chart/next/comopents/list2/index11'

export default {
  name: 'list2',
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
    index4,
    index5,
    index6,
    index7,
    index8,
    index9,
    index10,
    index11

  }
}
</script>

<style scoped lang="scss">

</style>
