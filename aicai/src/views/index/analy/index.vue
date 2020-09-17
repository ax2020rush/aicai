<template>
  <div class="analy">
    <van-tabs :color="scss.fontColor2"
              :title-active-color="scss.fontColor2"
              title-inactive-color="#999999"
              line-width="56px"
              line-height="2px"
              animated
              swipeable
              sticky
              v-model="activeName">
        <topBar slot="nav-left"></topBar>
      <van-tab title="精选分析">
        <list :id="activeName"></list>
      </van-tab>
      <van-tab title="光荣榜">
        <list :id="activeName"></list>
      </van-tab>

    </van-tabs>
  </div>
</template>

<script>
import list from './components/index'
import scss from '@/assets/css/index.scss'
export default {
  name: 'index',
  data () {
    return {
      activeName: 0,
      scss
    }
  },
  watch: {
    activeName (val, vl) {
    }
  },
  components: {
    list
  }
}
</script>

<style scoped lang="scss">
.analy {
  .head{
    width: 54%;
    height: auto;
  }
  .van-tab{
    line-height: normal;
  }
}
</style>
