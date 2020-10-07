<template>
  <div class="box" >
    <h2 :class="'names'+num">{{name}}</h2>
    <div class="tell" :class="'tell'+num">
      <input v-if="!code" :type="type" :code="code" @focus="focus" :class="'in'+num" @click="focus" @blur="blur" v-model="message" :placeholder="placeholder">
      <div v-if="code" class="codes">
        <input :type="type" :code="code" ref="smsMobil" @focus="focus" :class="'in'+num" @click="focus" @blur="blur" v-model="message" :placeholder="placeholder">
        <a v-if="code" @click="getMsmCode">{{smsCode}}</a>
      </div>
    </div>
  </div>
    </template>

<script>
import api from 'assets/js/api'
export default {
  name: 'inputBox',
  props: {
    placeholder: String,
    num: String,
    name: String,
    type: String,
    codephone: null,
    code: {
      type: Boolean,
      default: false
    },
    usage: String
  },
  data () {
    return {
      message: null,
      smsCode: '获取验证码'
    }
  },
  methods: {
    focus () {
      document.querySelector('.names' + this.num).classList.remove('active2')
      document.querySelector('.names' + this.num).classList.add('active')
      document.querySelector('.tell' + this.num).style.borderBottom = '1px solid #333333'
      setTimeout(() => {
        document.querySelector('.in' + this.num).style.opacity = '1'
      }, 200)
    },
    blur () {
      if (!this.message) {
        document.querySelector('.names' + this.num).classList.remove('active')
        document.querySelector('.names' + this.num).classList.add('active2')
        document.querySelector('.in' + this.num).style.opacity = '0'
        document.querySelector('.tell' + this.num).style.borderBottom = '1px solid #d3d3d3'
      }
    },
    getMsmCode () {
      const tiss = this
      let num = 60
      let mobileNumber
      if (this.$route.name === 'forget' || this.$route.name === 'register') {
        mobileNumber = document.querySelector('.in1').value
      } else {
        mobileNumber = tiss.$refs.smsMobil._value
      }
      if (!mobileNumber || mobileNumber.length !== 11) {
        tiss.$toast.fail('请输入正确的手机号码')
        return
      }
      if (parseInt(tiss.smsCode) > -1) {
        return
      }

      api.getSms({
        mobile: mobileNumber,
        usage: tiss.usage
      }).then(res => {
        if (res.code !== 200) {
          this.$toast.fail(res.data.message)
          return
        }

        const time = setInterval(() => {
          // eslint-disable-next-line no-const-assign
          num--
          // eslint-disable-next-line no-const-assign
          tiss.smsCode = num + 's'
          // eslint-disable-next-line no-unused-expressions
          num < 0 ? (tiss.smsCode = '重新获取', clearInterval(time)) : ''
        }, 1000)
      })
    }
  },
  computed: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">

.box{
  position: relative;
  margin-top: 10%;
  >h2{
    font-size: 36px;
    font-weight: 400;
    color: #797676;
    position: absolute;
    z-index: 999;
    margin: 0;
  }
  >h2.active{
    animation: move .3s;
    top: -46px;
    font-size: 32px;
    color: #aaaaaa;
  }
  >h2.active2{
    animation: move2 .2s;
    top: 0px;
    @include tp34
    color: #797676;
  }
  @keyframes move2{
    0%{
      top: -46px;
      font-size: 32px;
      color: #aaaaaa;
    }
    100%{
      top: -0px;
    }
  }
  @keyframes move{
    0%{
      top: 0px;
    }
    100%{
      top: -46px;
      font-size: 32px;
      color: #aaaaaa;

    }
  }
  .tell{
    padding: 0;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 18px;
    border-bottom: 1px solid #d3d3d3;
    input{
      width: calc(100%-100px);
      opacity: 0;
      @include tp32;
      color: $cl1;
      cursor: pointer;
      position: relative;
      z-index: 9999;
    }
    .codes{
      display: flex;
      a{
        width: 46%;
        background: #ffffff;
        color: $red;
        height: 60px;
        margin-top: -18px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        bottom: -8px;
        padding-left: 10px;
        cursor: pointer;
        border-radius:100px ;
        border: 2px solid $red;
        @include tp32
      &:after{
        content: '';
        position: absolute;
        width: 6px;
        height: 0.26667rem;
        background: #ffffff;
        bottom: -0.05333rem;
        left: -6px;
      }
      }
    }
  }
}
</style>
