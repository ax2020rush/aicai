<template>
<div :style="{width:width,height:height,position:position}"  v-if="loading[name]||loading[name]===undefined" class="loding">
  <van-loading size="50" color="#1989fa" />
</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'loading',
  props: {
    name: String,
    width: null,
    height: null,
    position: null
  },
  computed: {
    ...mapState(['loading'])
  },
  methods: {
    ...mapActions(['loadMove'])
  },
  created () {
    const obj = {}
    obj[this.name] = true
    this.loadMove({
      ...obj
    })
  }
}
</script>

<style scoped lang="scss">
.loding{
  width: 100%;
  height: 100%;
  background: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
