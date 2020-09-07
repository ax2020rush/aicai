<template>
  <div id="app">
<!--    <transition :name="transitionName">-->
      <router-view></router-view>
<!--    </transition>-->
    <navBar v-if="$show"></navBar>
  </div>
</template>
<script>
import navBar from '@/components/navBar'
import { mapGetters } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      transitionName: ''
    }
  },
  provide () { // 在祖先组件中通过 provide 提供变量
    return {
      reload: this.reload //  声明一个变量
    }
  },
  methods: {
    reload () {
      // 通过 this.isRouterAlive 控制 router-view 达到刷新效果
      this.isRouterAlive = false
      this.$nextTick(function () {
        this.isRouterAlive = true
      })
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
    config (val, vl) {
      document.title = val.data.web_site_title || '人人爱彩'
    }
  },
  created () {
  },
  computed: {
    ...mapGetters(['config'])
  },
  components: {
    navBar
  }
}
</script>
<style scoped lang="scss">
body,html{
  height: 100%;
  overflow: hidden;
}
* {
  padding: 0;
  margin: 0;
  font-style: normal;
  text-decoration: none;
  list-style: none;
  font-weight: 400;
}

#app{
  height: 100%;
  @include max_width
}
.slide-right-enter-active,
 .slide-right-leave-active,
 .slide-left-enter-active,
 .slide-left-leave-active {
   will-change: transform;
   transition: all 250ms;
   position: absolute;
 }
.slide-right-enter {
  opacity: 0;
}
.slide-right-leave-active {
  opacity: 0;
}
.slide-left-enter {
  opacity: 0;
}
.slide-left-leave-active {
  opacity: 0;
}
</style>
