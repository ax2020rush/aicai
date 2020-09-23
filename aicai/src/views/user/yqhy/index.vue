<template>
  <div class="yqhy" >
    <topBar title="邀请好友"></topBar>
    <div class="t1"><p>邀请好友</p>
      <p>佣金返现</p></div>
    <div class="t2" v-if="userAgent">
      <p>截图保存二维码</p>
      <p>永久不会丢失软件</p>
      <van-image
          v-if="config.data.app_download_qr_code"
          :style="{borderRadius:'4px',margin:'0 auto',overflow:'hidden'}"
          width="100"
          height="100"
          fit="cover"
          :src="config.data.app_download_qr_code"
      >
      <template v-slot:loading>
        <van-loading type="spinner" size="20" />
      </template>
      </van-image>
      <p>{{config.data.app_download_link}}</p>
      <p @click="copy($event,config.data.app_download_link)">自由选择复制分享下载地址(点击复制)</p>
      <h2>邀请码</h2>
      <h3>{{userAgent.member.promo_code}}</h3>
      <a @click="copy($event,'aAFS')">复制邀请码</a>
    </div>
    <v-loading v-else></v-loading>
  </div>

</template>

<script>
import bg from 'assets/img/bg.png'
import Clipboard from 'clipboard'
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      bg
    }
  },
  computed: {
    ...mapGetters(['userAgent']),
    ...mapState(['config'])
  },
  methods: {
    copy (e, text) {
      const clipboard = new Clipboard(e.target, { text: () => text })
      clipboard.on('success', e => {
        // 释放内存
        this.$toast.success('复制成功')
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        this.$toast.fail('手机权限不支持复制功能')
        // 释放内存
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
      })
      clipboard.onClick(e)
    }
  }
}
</script>

<style scoped lang="scss">
.head {
  position: relative;
  z-index: 999;
  background: rgba(0, 0, 0, 0);
  color: red;
}
.loding{
  width: 60%;
  height: 400px;
  margin: 0 auto;
  border-radius: 10px;
}
.yqhy {
  width: 100%;
  height: 100%;
  position: relative;
  background: #FE3E24 url("~assets/img/bg.png") no-repeat;
  background-size: 100%;

  .t1 {
    width: 60%;
    margin: 0 auto;
    margin-top: 10%;
    display: flex;
    justify-content: space-between;

    p {
      @include tp38;
      color: #ffffff;
    }
  }

  .t2 {
    width: 80%;
    min-height: 300px;
    background: #ffffff;
    border-radius: 10px;
    @include tp30;
    color: $cl2;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
    flex-direction: column;
    text-align: center;
    flex-wrap: wrap;
    margin: 0 auto;
    margin-top: 50px;

    p{
      margin: 8px 0;
    }
    a{
      background: linear-gradient(#ffa233,#f4a840);
      border-radius: 100px;
      width: 58%;
      margin: 30px auto;
      padding: 20px;
      color: #ffffff;

    }
    h2{
      color: #FFB154;
      font-weight: 400;
      @include tp34;
      padding: 10px 0;
    }
    h3{
      margin-bottom: 10px;
      font-weight: 400;
      @include tp34;

      color: #FFB154;
      border: 1px solid #FFB154;
      border-radius: 100px;
      width: 24%;
      height: 54px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
