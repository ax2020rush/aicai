<template>
  <van-tabbar v-model="active">
    <van-tabbar-item v-for="(item,key) in icon" :key="key" :to="item.path">
      <span>{{ item.title }}</span>
      <template #icon="props">
        <img :src="props.active ? item.active : item.inactive" />
      </template>
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import sy from '@/assets/img/nav/sy.png'
import sy2 from '@/assets/img/nav/sy2.png'
import kj from '@/assets/img/nav/kj.png'
import kj2 from '@/assets/img/nav/kj2.png'
import lt from '@/assets/img/nav/lt.png'
import lt2 from '@/assets/img/nav/lt2.png'
import wd from '@/assets/img/nav/wd.png'
import wd2 from '@/assets/img/nav/wd2.png'
export default {
  name: 'navBar',
  data () {
    return {
      active: 0,
      icon: [
        {
          title: '首页',
          active: sy2,
          inactive: sy,
          path: '/',
          id: 0
        },
        {
          title: '开奖',
          active: kj,
          inactive: kj2,
          path: '/open',
          id: 1
        },
        {
          title: '聊天',
          active: lt,
          inactive: lt2,
          path: '/chat',
          id: 2

        },
        {
          title: '我的',
          active: wd,
          inactive: wd2,
          path: '/user',
          id: 3
        }
      ]
    }
  },

  mounted () {
  },
  watch: {
    '$route' (to, from) {
      if (to.name === 'index') {
        this.active = 0
      } else if (to.name === 'open') {
        this.active = 1
      } else if (to.name === 'user') {
        this.active = 3
      } else if (to.name === 'chat') {
        this.active = 2
      }
    }
  }

}
</script>

<style scoped lang="scss">
.van-tabbar{
  height: 70px;
}
.van-tabbar-item__icon img{
  height: 30px;
}
.van-tabbar-item__text{
  span{
    font-size: .82rem;
  }
}
</style>
