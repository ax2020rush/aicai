<template>
  <div class="userio">
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
    <topBar title="个人信息"></topBar>
    <van-cell-group v-if="userAgent" >
      <van-cell border is-link title-style="display:flex;align-items:center"
                style="background:#F9F9F9;padding-bottom: 2px;display: flex;align-items: center;" title="头像" >
        <div slot="default">
          <van-uploader  style="position:absolute;right: -28px;z-index: 999;top: 0;opacity: 0" max-count="1" v-model="fileList" :after-read="afterRead" />
          <van-image fit="cover" round  width="40" height="40" :name="userAgent.member.head_portrait" :src="img||ishttp(userAgent.member.head_portrait,true)" />
        </div>
      </van-cell>
      <van-cell @click="show=true,type=1" :value="userAgent.member.nickname" border is-link title-style="display:flex;align-items:center"
                style="background:#F9F9F9;padding-bottom: 2px;display: flex;align-items: center;" title="昵称" >

      </van-cell>
      <van-cell @click="show=true,type=2" :value="userAgent.member.realname" border is-link title-style="display:flex;align-items:center"
                style="background:#F9F9F9;padding-bottom: 2px;display: flex;align-items: center;" title="真实姓名" >

      </van-cell>
    </van-cell-group>
    <v-loading v-else></v-loading>
  </div>
</template>

<script>
import api from 'assets/js/api'
import { mapGetters, mapActions } from 'vuex'
import { ishttp } from 'assets/js/fun'
import inputBox from 'components/inputBox'

export default {
  name: 'index',
  data () {
    return {
      ishttp,
      show: false,
      type: null,
      img: null,
      fileList: [

      ]
    }
  },
  computed: {
    ...mapGetters(['userAgent'])
  },
  methods: {
    async afterRead (file) {
      const data = new FormData()
      data.append('file', file.file)
      const res = await api.upImg(data, true)
      if (res.code === 200) {
        this.img = res.data.url
        const obj = {}
        obj.scenario_type = 'head_portrait'
        obj.head_portrait = res.data.url
        this.getuser()
        await api.realname(obj)
      } else {
        this.$toast.fail('上传失败，请稍后重试')
      }
    },
    ...mapActions(['getuser']),
    async onsubmit () {
      const obj = {}
      const user = this.$refs.user.message
      if (this.type === 1) {
        obj.scenario_type = 'nickname'
        obj.nickname = user
      } else if (this.type === 2) {
        obj.scenario_type = 'realname'
        obj.realname = user
      }
      if (obj.nickname || obj.realname) {
        const res = await api.realname(obj)
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
    }
  },
  components: {
    inputBox
  }
}
</script>

<style scoped lang="scss">
.loding{
  min-height: 300px;
}
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

</style>
