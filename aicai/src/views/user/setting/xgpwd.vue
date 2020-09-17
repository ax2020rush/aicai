<template>
<div>
  <topBar title="修改密码"></topBar>
  <div class="fbox">
    <inputBox name="输入旧密码" ref="user" type="password"  num="1"></inputBox>
    <inputBox name="输入新密码" ref="pwd" type="password"  num="2"></inputBox>
    <div class="bt"><a @click="onsubmit">修改</a></div>
  </div>

</div>
</template>

<script>
import api from 'assets/js/api'
import inputBox from 'components/inputBox'
export default {
  name: 'xgpwd',
  components: {
    inputBox
  },
  methods: {
    async onsubmit () {
      const user = this.$refs.user.message
      const pwd = this.$refs.pwd.message
      if (!user) {
        this.$toast.fail('请输入旧密码')
        return
      }
      if (!pwd) {
        this.$toast.fail('请输入新密码')
      }
      if (user === pwd) {
        this.$toast.fail('新密码不能与旧密码一致')
      }
      const res = await api.xgmm({
        old_password: user,
        new_password: pwd,
        new_password_repetition: pwd

      })
      if (res.code === 200) {
        this.$toast.success('修改成功,请重新登录')
        localStorage.clear()
        sessionStorage.clear()
        this.$router.push({ path: '/login' })
      } else {
        this.$toast.fail(res.message)
      }
    }
  }
}
</script>

<style scoped lang="scss">
.fbox{
  width: 90%;
  margin: 0 auto;
  .box{
    margin: 10% 0;
  }
  .bt{
    @include btnBig
  }
}
input{
  background: red;
}
</style>
