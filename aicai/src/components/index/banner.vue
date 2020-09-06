<template>

  <swiper ref="mySwiper" :options="swiperOptions">
    <v-loading name="banner" width="100%" position="absolute" height="200px"></v-loading>
    <swiper-slide v-for="(image, index) in bannerData()" :key="index">
      <img :src="image.content" :class="{'swiper-lazy':true}" alt="">
    </swiper-slide>

    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'banner',
  data () {
    return {
      swiperOptions: {
        notNextTick: true,
        autoplay: {
          disableOnInteraction: false,
          delay: 3000
        },
        watchSlidesVisibility: false,
        speed: 1000,
        loop: true, // 循环轮播 是否
        observer: true, // 修改swiper自己或子元素时，自动初始化swiper
        observeParents: true // 修改swiper的父元素时，自动初始化swiper
      }
    }
  },
  methods: {
    ...mapGetters({
      bannerData: 'bannerData'
    })
  },
  computed: {
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
.swiper-container{
  min-height: 200PX;
  overflow: hidden;
  border-radius: 0 0 20px 20px;
}
.swiper-slide {
  width: 100%;
  height: 200PX;

  img{
    width: 100%;
  }
}
</style>
