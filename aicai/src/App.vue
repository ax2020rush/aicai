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
import { soket } from 'assets/js/soket'
export default {
  name: 'app',
  data () {
    return {
      transitionName: '',
      soketStatus: true

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
      if (to.name !== 'login' && to.name !== 'register' && to.name !== 'forget') {
        if (this.soketStatus) {
          soket()
          this.soketStatus = false
        }
      } else {
        this.soketStatus = true
      }
      const toDepth = to.path.split('/').length
      const fromDepth = from.path.split('/').length
      this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
    },
    config (val, vl) {
    }
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
