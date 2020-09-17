<template>
  <div class="login">
    <div>
      <h1>您好,<br>欢迎来到人人爱彩</h1>
      <inputBox name="请输入手机号" ref="user" type="number"  num="1"></inputBox>
      <inputBox name="请输入密码" ref="password" type="password"  num="2"></inputBox>
      <a ><span @click="$router.push({path:'/forget'})">忘记密码?</span></a>
      <div class="btn">
        <a @click="onsubmit">登录</a>
      </div>

      <div class="chek" :style="{marginTop:'30px'}">
          <span>没有账号?</span>
          <span @click="$router.push({path:'/register'})">立即注册</span>
      </div>
    </div>

  </div>
</template>

<script>
import inputBox from '@/components/inputBox'
import scss from '@/assets/css/index.scss'
import api from '@/assets/js/api'

export default {
  name: 'login',
  data () {
    return {
      checked: false,
      scss: scss
    }
  },
  methods: {
    async onsubmit () {
      const user = this.$refs.user.message || ''
      const password = this.$refs.password.message || ''
      if (user.length !== 11) {
        this.$toast.fail('请输入正确的手机号')
        return
      }
      if (!password) {
        this.$toast.fail('请输入密码')
        return
      }

      const res = await api.login({
        mobile: user,
        password: password,
        group: 'h5',
        drive: '1'
      })
      if (res.code === 200) {
        sessionStorage.clear()
        localStorage.clear()
        sessionStorage.setItem('userinfos', JSON.stringify(res.data))
        sessionStorage.setItem('accessToken', res.data.member.access_token)
        sessionStorage.setItem('refresh_token', res.data.member.refresh_token)
        this.$router.push({ path: '/' })
        this.$notify({
          type: 'success',
          message: res.message
        })
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
  .chek{
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    height: 60px;
    display: flex;justify-content: center;
    align-items: center;
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
