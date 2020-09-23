<template>
  <div class="login">
    <div>
      <h1>找回密码,<br>下次一定要记住</h1>
      <inputBox name="请输入手机号" ref="user" type="number" num="1"></inputBox>
      <inputBox name="请输入验证码" :code="true" usage="up-pwd"  ref="code" type="number"  num="2"></inputBox>
      <inputBox name="请输入新密码"  ref="password" type="password"  num="3"></inputBox>
      <div class="btn">
        <a @click="onsubmit">找回</a>
      </div>
      <div class="chek">
        <span>想起账号?</span>
        <span @click="$router.push({path:'/login'})">立即登录</span>
      </div>
    </div>

  </div>
</template>

<script>
import api from 'assets/js/api'
import inputBox from '@/components/inputBox'
import scss from '@/assets/css/index.scss'

export default {
  name: 'register',
  data () {
    return {
      checked: false,
      scss: scss
    }
  },
  methods: {
    async onsubmit () {
      const user = this.$refs.user.message
      const code = this.$refs.code.message
      const password = this.$refs.password.message
      if (!user) {
        this.$toast.fail('请输入手机号')
        return
      }
      if (!code) {
        this.$toast.fail('请输入验证码')
        return
      }
      if (!password) {
        this.$toast.fail('请输入密码')
        return
      }
      const res = await api.wjmm({
        mobile: user,
        code: code,
        group: 'app',
        password: password,
        password_repetition: password

      })
      if (res.code === 200) {
        this.$router.push({ path: 'login' })
      } else {
        this.$toast.fail(res.message)
      }
    }
  },
  mounted () {
  },
  components: {
    inputBox
  }
}
</script>

<style scoped lang="scss">
.login {
  width: 100%;
  min-height: 100%;
  background: #ffffff;
  .btn{
    margin-top: 10%;
  }
  .chek{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 60px;
    display: flex;justify-content: center;
    align-items: center;
    margin-top: 30px;
    span{
      @include tp30
      margin-right: 3%;
      margin-left: 20px;
      &:first-child{
        margin-left: -30px;
      }
      &:last-child{
        color: $bln;
        margin-right: 0%;
      }
    }
  }
  >div{
    width: 90%;
    margin: 0 auto;
    padding-top: 10%;
    >a{
      display: flex;
      width: 100%;
      margin-top: 1%;
      height: 120px;
      align-items: center;
      @include tp32;
      color: $cl;
      justify-content: flex-end;
    }
    >div{
      @include btnBig;
    }
  }

  h1 {
    @include tp38
    color: $cl;
    line-height: 60px;
  }
}
</style>
