<template>
  <div>
    <topBar title="原创分类"></topBar>
    <!-- 两端对齐 -->
    <div class="listFl">
      <div v-for="(item,k) in ycfl" :key="k" @click="$router.push({path:'/analy',query:{pid:item.id}})">
        <van-image round width="50" height="50" :src="ishttp(item.logo)"/>
        <p>{{ item.name }}</p>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
import { ishttp } from '@/assets/js/fun'
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      ishttp
    }
  },
  computed: {
    ...mapGetters(['ycfl'])
  }
}
</script>

<style scoped lang="scss">
.head{
  margin-bottom: 5%;
  box-shadow: 0px 0px 8px #c4c4c4;
}
.listFl {
  width: 94%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    width: 23%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-bottom: 6%;
    p {
      width: 100%;
      text-align: center;
      padding: 0;
      margin: 0;
      @include tp30;
      color: $cl2;
      white-space: nowrap;
      margin-top: 3%;
    }
  }
  &:after {
    content: "";
    width: 23%;
    display: block;
    height: 0;
    width: 23%;
    /*只需要添加父元素的after伪元素中 高度0 ，宽度与item的宽一样*/
  }
}
</style>
