<template>
<div>
  <topBar title="设置"></topBar>
  <van-cell-group>
    <van-cell to="/xgmm" title="修改密码" is-link />
  </van-cell-group>
  <div class="btn">
    <a @click="goOut"> 退出登录</a>
  </div>
</div>
</template>

<script>

export default {
  name: 'index',
  methods: {
    goOut () {
      sessionStorage.clear()
      localStorage.clear()
      setTimeout(() => {
        location.reload()
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
.btn{
  width: 80%;
  margin: 0 auto;
  margin-top: 4%;
  @include btnBig
  a{
    height: 80px;
  }

}
</style>
