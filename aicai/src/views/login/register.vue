<template>
  <div class="login">
    <div>
      <h1>注册,<br>人人爱彩</h1>
      <inputBox name="请输入手机号" ref="user" type="number" num="1"></inputBox>
      <inputBox name="请输入验证码" :code="true" usage="register" ref="code" type="number"  num="2"></inputBox>
      <inputBox name="请输入密码"  ref="password" type="password"  num="3"></inputBox>
      <inputBox name="请输入邀请码"  ref="yqm" type="text"  num="4"></inputBox>
      <div class="btn">
        <a @click="onsubmit">注册</a>
      </div>
      <div class="chek">
        <span>已有账号?</span>
        <span @click="$router.push({path:'/login'})">立即登录</span>
      </div>
    </div>

  </div>
</template>

<script>
import inputBox from '@/components/inputBox'
import scss from '@/assets/css/index.scss'
import api from '@/assets/js/api'

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
      const user = this.$refs.user.message || ''
      const code = this.$refs.code.message || ''
      const password = this.$refs.password.message || ''
      const yqm = this.$refs.yqm.message || ''
      if (user.length !== 11) {
        this.$toast.fail('请输入正确的手机号')
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

      const res = await api.resgiter({
        mobile: user,
        code: code,
        group: 'app',
        drive: '1',
        promo_code: yqm,
        password: password,
        password_repetition: password
      })
      if (res.code === 200) {
        sessionStorage.clear()
        localStorage.clear()
        sessionStorage.setItem('userinfos', JSON.stringify(res.data))
        sessionStorage.setItem('accessToken', res.data.member.access_token)
        sessionStorage.setItem('refresh_token', res.data.member.refresh_token)
        this.$router.push({ path: '/' })
      } else {
        this.$toast.fail({
          message: res.message,
          position: 'bottom'
        })
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
