<template>
  <div>
    <van-tabs
        animated
        color="#F44336"
        line-height="1"
        :title-active-color="scss.fontColor2"
        line-width="50%"
        v-model="active">
      <van-tab title="红球">
        <index1></index1>
      </van-tab>
      <van-tab title="篮球">
        <index2></index2>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import scss from '@/assets/css/index.scss'
import index1 from '@/views/index/chart/next/comopents/list10/index1'
import index2 from '@/views/index/chart/next/comopents/list10/index2'
import { mapActions } from 'vuex'
export default {
  name: 'list10',
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
    index2
  }
}
</script>

<style scoped lang="scss">

</style>
