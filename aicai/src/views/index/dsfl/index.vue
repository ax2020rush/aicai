<template>
  <div>
    <topBar title="大神列表"></topBar>

    <van-cell-group class="vanCellGroup">
      <van-cell v-for="(item,k) in dstj" :key="k" @click="$router.push({path:'/dsxq',query:{id:item.id}})"  class="vanCell" title-style="margin-left:5%"
                :title="item.nickname"
                :label="item.label"  >
        <van-image slot="icon" round width="60" height="60" :src="item.avatar" />
        <div class="default" slot="default">
          <h2>{{item.hit_rate}}%</h2>
          <p>总命中率</p>
        </div>
      </van-cell>

    </van-cell-group>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  computed: {
    ...mapGetters(['dstj'])
  }
}
</script>

<style scoped lang="scss">
.head{
  @include boxShadow;
}
.vanCellGroup{
  width: 94%;
  margin: 0 auto;
  background-color: $bg;
}
.vanCell{
  margin-top: 4%;
  border-radius: 4PX;
  overflow: hidden;
  box-shadow: 0PX 2PX 2PX #9d9d9d59;
}
.default{
h2{
  color: red;
  font-weight: 400;
}
}
</style>
