<template>
  <div class="notfile">
    <van-empty image="error" description="404" />
    <router-link to="/">点击返回上一下</router-link>
  </div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
.notfile{
  min-height: 100%;
  width: 100%;
  text-align: center;
  background-color: rebeccapurple;
}
</style>
