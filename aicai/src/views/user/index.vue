<template>
  <div class="user">
    <div class="head">
      <div v-if="userAgent">
        <van-image @click="$router.push({path:'/userio'})" fit="cover" round width="60" height="60"
                   :src="ishttp(userAgent.member.head_portrait,true)"/>
        <div>
          <p>{{ userAgent.member.nickname }}</p>
          <em>{{ number(userAgent.member.mobile) }}</em>
          <a @click="copy($event,userAgent.member.promo_code)"> 邀请码:{{ userAgent.member.promo_code }}</a>
        </div>
      </div>
      <v-loading v-else></v-loading>
      <div>
        <div @click="sign">
          <van-icon color="#FFCD92" name="send-gift"/>
          <span>签到领现金</span>
        </div>
      </div>
    </div>
    <van-popup position="bottom" v-model="show">
      <div class="thead">
        <a @click="show=false"></a>
        <p>修改/绑定真实姓名</p>
        <s></s>
      </div>
      <div class="inputs">
        <inputBox name="请输入真实姓名"  ref="user" type="text"  num="1"></inputBox>
        <van-icon @click="onsubmit" size="20" name="success" />
      </div>
    </van-popup>
    <van-popup v-model="show2" style="width: 100%">
      <list @changes="vals"></list>
    </van-popup>
    <van-cell-group v-if="userAgent">
      <van-cell class="icoo" :name="userAgent.member.realname" @click="userAgent.member.realname?show2=true:show=true" icon="gold-coin-o" is-link
                title="收款方式"/>
      <van-cell class="icoo" icon="paid" to="/card" is-link title="我的钱包"/>
      <van-cell class="icoo" to="/yqhy" icon="friends-o" is-link title="邀请好友"/>
      <van-cell class="icoo" @click="href" icon="service-o" is-link title="联系客服"/>
      <van-cell class="icoo" to="/help" icon="chat-o" is-link title="帮助中心"/>
      <van-cell class="icoo" to="/setting" icon="setting-o" is-link title="设置"/>
    </van-cell-group>
  </div>
</template>

<script>
import Clipboard from 'clipboard'
import { mapGetters, mapActions } from 'vuex'
import { ishttp } from 'assets/js/fun'
import api from 'assets/js/api'
import inputBox from 'components/inputBox'
import list from './card/components/index'

export default {
  name: 'index',
  data () {
    return {
      inviteCode: '爸爸爱你',
      ishttp,
      show: false,
      show2: false
    }
  },
  computed: {
    ...mapGetters(['userAgent'])
  },
  components: {
    inputBox,
    list
  },
  methods: {
    href () {
      window.open('https://cai1w.com/21/#/')
    },
    ...mapActions(['getuser']),
    async onsubmit () {
      const user = this.$refs.user.message
      if (user) {
        const res = await api.realname({
          scenario_type: 'realname',
          realname: user
        })
        if (res.code === 200) {
          this.$refs.user.message = null
          this.show = false
          this.getuser()
        } else {
          this.$toast.fail(res.message)
        }
      } else {
        this.$toast.fail('请输入姓名')
      }
    },
    vals (val) {
      this.show2 = false
    },
    number (str) {
      return str.split('').map((index, k) => {
        // eslint-disable-next-line no-return-assign
        return (k > 3 && k < 8 ? index = '*' : index)
      }).toString().replace(/,/g, '')
    },
    copy (e, text) {
      const clipboard = new Clipboard(e.target, { text: () => text })
      clipboard.on('success', e => {
        this.$toast.success('复制成功')
        // 释放内存
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
    },
    async sign () {
      const res = await api.sign()
      if (res.code === 200) {
        this.$toast.success('签到成功~')
      } else {
        this.$toast.fail('您今天已经签过到啦！')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.user {
  .van-popup--bottom {
    width: 100%;
    height: 100%;
  }
  .box{
    margin-top: 0px;
  }
  .inputs{
    width: 90%;
    margin: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    margin-top: 10%;
    .box{
      width: 100%;
    }
    i{
      position: absolute;
      display: flex;
      align-content: flex-end;
      right: 5%;
    }
  }
  .thead{
    width: 90%;
    padding: 0 5%;
    margin: 0 auto;
    height: 110px;
    box-shadow: 0PX 0PX 8PX #00000021;
    display: flex;
    justify-content:space-between;
    align-items: center;
    a{
      display: flex;
      width: 30px;
      height: 30px;
      background: url(~assets/img/back2.png)no-repeat;
      background-size: 100%;
    }
    p{
      @include tp32;
      color: $cl;
    }

  }
  width: 100%;
  height: 100%;
  background: $bg;
  position: relative;

  .icoo {

    > i {
      position: relative;
      font-size: 46px;

      &:first-child {
        &:after {
          content: '';
          width: 14px;
          height: 14px;
          background: #f1381f47;
          position: absolute;
          left: 0;
          bottom: 10px;
          border-radius: 50%;
        }
      }
    }
  }

  .head {
    width: 90%;
    min-height: 200px;
    display: flex;
    align-items: center;
    background: #ffffff;
    margin: 0 auto;
    padding: 0 5%;
    margin-bottom: 30px;
    justify-content: space-between;

    > div {
      &:last-child {
        > div {
          position: absolute;
          right: 0;
          display: flex;
          align-items: center;
          background: #E0E0E0;
          border-radius: 30px 0 0 30px;
          padding: 1% 4%;
          top: 50px;

          span {
            @include tp32;
            color: #ffffff;
            margin-left: 10px;
          }
        }
      }

      &:first-child {
        > div {
          &:last-child {
            display: flex;
            flex-direction: column;
            margin-left: 5%;
          }
        }

        display: flex;
        width: 60%;

        p, em, a {
          color: $cl;
          margin: 1% 0;
        }

        p {
          @include tp38;
        }

        em {
          @include tp30;
        }

        a {
          @include tp30;
          color: #FFCD92;
          border: 1px solid #FFCD92;
          border-radius: 50px;
          padding: 0px 14px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

    }
  }
}
</style>
