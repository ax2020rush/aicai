<template>
<div class="box">
  <van-image-preview
      v-model="showtt"
      :images="images"
      @change="onChange"
  />
  <div class="hs">
    <a @click="values"></a>
    <p>收款方式管理</p>
    <i></i>
  </div>
  <div :style="{background:'#50B674'}" class="lists">
    <div class="trues" v-if="userAgent&&userAgent.account.wechat_account_url">
      <p>当前二维码</p>
      <van-image @click="showtt=true,images[0]=userAgent.account.wechat_account_url" width="90" height="90" :style="{borderRadius:'2px',overflow:'hidden'}"
                 cover
                 :src="ishttp(userAgent.account.wechat_account_url,true)" />
    </div>
    <div v-else>
      <van-uploader  max-count="1" :after-read="afterRead2" >
      <div slot="default">
        <p>
          <van-icon name="add-o"/>
          添加微信收款码
        </p>
        <em>提示:收款码上传后将无法更改</em>
      </div>
        </van-uploader>
    </div>

  </div>

  <div :style="{background:'#09A0F8'}" class="lists">

    <div class="trues" v-if="userAgent&&userAgent.account.alipay_account_url">
      <p>当前二维码</p>
      <van-image @click="showtt=true,images[0]=userAgent.account.alipay_account_url" width="90" height="90" :style="{borderRadius:'2px',overflow:'hidden'}"
                 cover
                 :src="ishttp(userAgent.account.alipay_account_url,true)" />
    </div>
    <div v-else>
      <van-uploader  max-count="1"  :after-read="afterRead" >
      <div slot="default">
        <p :style="{color:'#09A0F8'}">
          <van-icon name="add-o"/>
          添加支付宝收款码
        </p>
        <em>提示:收款码上传后将无法更改</em>
      </div>
      </van-uploader>
    </div>

  </div>
  <div :style="{background:'#D6C502'}" class="lists">
    <div class="trues" v-if="userAgent&&userAgent.account.bank_card">
      <p>当前银行卡</p>
      <h1>{{userAgent.account.bank_card}}</h1>
      <em>开户行:{{ userAgent.account.bank_address }}</em>
    </div>
    <div v-else @click="shows2=true">
      <div>
        <p :style="{color:'#D6C502'}">
          <van-icon name="add-o"/>
          添加银行卡收款方式
        </p>
      </div>
    </div>

  </div>
  <div :style="{background:'#E64C34'}" class="lists">
    <div class="trues" v-if="userAgent&&userAgent.account.site_account">
      <p>当前平台账号</p>
      <h1>{{userAgent.account.site_account}}</h1>
      <em>提示:绑定后无法更改</em>
    </div>
    <div v-else @click="shows=true" >
      <div>
        <p :style="{color:'#E64C34'}">
          <van-icon name="add-o"/>
          添加平台账号
        </p>
        <em>提示:绑定后无法修改</em>
      </div>
    </div>
  </div>
  <van-popup v-model="shows" class="showti">
    <div class="in" >
      <p>绑定平台账号</p>
      <inputBox name="请输入平台账号" ref="user" type="text"  num="1"></inputBox>
      <div>
        <a @click="bangd">立即绑定</a>
      </div>
    </div>
  </van-popup>
  <van-popup v-model="shows2" class="showti">
    <div class="in">
      <p>绑定银行卡信息</p>
      <inputBox name="请输入银行卡号" ref="user2" type="text"  num="0"></inputBox>
      <inputBox name="请输入开户行地址" ref="user3" type="text"  num="1"></inputBox>
      <div>
        <a @click="bangd2">立即绑定</a>
      </div>
    </div>
  </van-popup>
</div>
</template>

<script>
import { ishttp } from 'assets/js/fun'
import inputBox from 'components/inputBox'
import api from 'assets/js/api'
import { mapGetters } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      shows: false,
      shows2: false,
      ishttp,
      showtt: false,
      index: 0,
      images: []
    }
  },
  computed: {
    ...mapGetters(['userAgent'])
  },
  components: {
    inputBox
  },
  methods: {
    onChange (index) {
      this.index = index
    },
    values () {
      this.$emit('changes', false)
    },
    async bangd () {
      if (this.$refs.user.message) {
        const res = await api.bdtx({
          scenario_type: 'site_account',
          site_account: this.$refs.user.message,
          pingtai_user_name: this.$refs.user.message
        })
        if (res.code === 200) {
          this.shows = false
          this.$store.dispatch('getuser')
        } else {
          this.$toast.fail(res.message)
        }
      } else {
        this.$toast.fail('请输入账号')
      }
    },
    async bangd2 () {
      if (this.$refs.user2.message && this.$refs.user3.message) {
        const res = await api.bdtx({
          scenario_type: 'bank_card',
          bank_address: this.$refs.user3.message,
          bank_card: this.$refs.user2.message
        })
        if (res.code === 200) {
          this.shows2 = false
          this.$store.dispatch('getuser')
        } else {
          this.$toast.fail(res.message)
        }
      } else {
        this.$toast.fail('请输入账号')
      }
    },
    async afterRead (file) {
      const data = new FormData()
      data.append('file', file.file)
      const res = await api.upImg(data, true)
      if (res.code === 200) {
        this.img = res.data.url
        const obj = {}
        obj.scenario_type = 'alipay_account_url'
        obj.alipay_account_url = res.data.url
        const ds = await api.bdtx(obj)
        if (ds.code === 200) {
          this.$store.dispatch('getuser')
        } else {
          this.$toast.fail(ds.message)
        }
      } else {
        this.$toast.fail('上传失败，请稍后重试')
      }
    },
    async afterRead2 (file) {
      const data = new FormData()
      data.append('file', file.file)
      const res = await api.upImg(data, true)
      if (res.code === 200) {
        this.img = res.data.url
        const obj = {}
        obj.scenario_type = 'wechat_account_url'
        obj.wechat_account_url = res.data.url
        const ds = await api.bdtx(obj)
        if (ds.code === 200) {
          this.$store.dispatch('getuser')
        } else {
          this.$toast.fail(ds.message)
        }
      } else {
        this.$toast.fail('上传失败，请稍后重试')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.van-uploader__upload{
  width: 100%;
}
.trues{
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-around;
  >p{
    @include tp32;
    color: $ballBlue;
  }
  h1{
    @include tp38;
    color: $red;
  }
  em{
    @include tp30;
    color: $cl3;
  }
}
.showti{
  min-height: 15%;
  width: 50%;
  padding:5%;
  border-radius: 10px;
  padding-bottom: 6%;

  p{
    @include tp32;
    color: $cl;
  }
  >div{
    @include btnBig;
    a{
      height: 60px;
      width: 60%;
      margin: 0 auto;
      position: relative;
      top: 20px;
      border-radius: 4px;
    }
  }
}
.hs {
  width: 90%;
  height: 90px;
  box-shadow: 0 0 0.21333rem #c4c4c4;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    width: 40px;
    height: 40px;
    background: url(~assets/img/back2.png) no-repeat;
    background-size: 100%;
  }

  > p {
    @include tp34;
    color: $cl;
  }
}

.lists {
  width: 90%;
  margin: 0 auto;
  min-height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  align-self: center;
  margin-top: 4%;
  position: relative;
  border-radius: 20px;

  > div {
    background: #ffffff;
    width: 90%;
    height: 80%;
    border-radius: 16px;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    margin: auto;
    display: flex;
    align-items: center;

    > div {
      text-align: left;
      width: 60%;
      margin: 0 auto;

      p {
        @include tp36;
        color: #50B674;
        display: flex;
        align-items: center;

        i {
          margin-right: 3%;
        }
      }

      em {
        @include tp30;
        color: $cl3;
      }
    }
  }
}
</style>
