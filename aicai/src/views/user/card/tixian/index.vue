<template>
  <div>
    <topBar title="提现"></topBar>
    <van-cell-group :class="{list:true}" v-if="config">
      <van-cell><h1>提现金额</h1></van-cell>
      <van-cell :title="'￥'+item" v-for="(item,k) in config.data.can_withdraw_amount.split('/')" :key="k">
        <div slot="default" class="solt">
          <van-radio-group  v-model="radio">
            <van-radio @click="money=item" :name="k"></van-radio>
          </van-radio-group>
        </div>
      </van-cell>
      <van-cell><h1>提现方式</h1></van-cell>
      <van-cell v-if="index===0" @click="show=true" value="微信" is-link>
        <span :style="{color:'#50B674'}" slot="icon" class="iconfont wechat">&#xe600;</span>
      </van-cell>
      <van-cell v-if="index===1" @click="show=true" value="支付宝" is-link>
        <span :style="{color:'#09A0F8'}" slot="icon" class="iconfont wechat">&#xe614;</span>
      </van-cell>
      <van-cell v-if="index===2" @click="show=true" value="平台" is-link>
        <span :style="{color:'#ffffff'}" slot="icon" class="iconfont pintai">&#xe63d;</span>
      </van-cell>
      <van-cell v-if="index===3" @click="show=true" value="银行卡" is-link>
        <span slot="icon" class="iconfont wechat">&#xe6c6;</span>
      </van-cell>
    </van-cell-group>
    <van-popup class="pop" position="bottom" v-model="show">
      <van-cell @click="index=0,show=false" value="微信" is-link>
        <span :style="{color:'#50B674'}" slot="icon" class="iconfont wechat">&#xe600;</span>
      </van-cell>
      <van-cell @click="index=1,show=false" value="支付宝" is-link>
        <span :style="{color:'#09A0F8'}" slot="icon" class="iconfont wechat">&#xe614;</span>
      </van-cell>
      <van-cell @click="index=2,show=false" value="平台" is-link>
        <span :style="{color:'#ffffff'}" slot="icon" class="iconfont pintai">&#xe63d;</span>
      </van-cell>
      <van-cell @click="index=3,show=false" value="银行卡" is-link>
        <span slot="icon" class="iconfont wechat">&#xe608;</span>
      </van-cell>
    </van-popup>
    <van-popup position="bottom" class="box" v-model="showbox">
      <indexs @changes="dak" ></indexs>
    </van-popup>
    <a class="tj" @click="onsubmit">
      确认
    </a>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import api from 'assets/js/api'
import indexs from 'views/user/card/components/index'

export default {
  name: 'index',
  data () {
    return {
      radio: null,
      show: false,
      index: 0,
      showbox: false,
      dat: null,
      money: null
    }
  },
  components: {
    indexs
  },
  computed: {
    ...mapState(['config'])
  },
  methods: {
    dak (val) {
      this.showbox = val
    },
    async onsubmit () {
      if (this.radio === null) {
        this.$toast.fail('请选择提现金额')
        return
      }
      const res = await api.addtx({
        withdraw_money: this.money,
        type: this.index + 1
      })
      if (res.code === 200) {

      } else {
        this.showbox = true
      }
    }

  },
  created () {
  }
}
</script>

<style scoped lang="scss">
.head {
  box-shadow: 0 0 0.21333rem #c4c4c4;
}

.pop {
  height: 30%;
  width: 100%;
}
.box{
  height: 100%;
  .hs{
    width: 90%;
    height: 90px;
    box-shadow: 0 0 0.21333rem #c4c4c4;
    padding: 0 5%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    >a{
      width: 40px;
      height: 40px;
      background: url(~assets/img/back2.png) no-repeat;
      background-size: 100%;
    }
    >p{
      @include tp34;
      color: $cl;
    }
  }
  .lists{
    width: 90%;
    margin: 0 auto;
    min-height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    align-self: center;
    margin-top: 4%;
    position: relative;
    border-radius: 20px;
    >div{
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
      >div{
        text-align: left;
        width: 60%;
        margin: 0 auto;
        p{
          @include tp36;
          color: #50B674;
          display: flex;
          align-items: center;
          i{
            margin-right: 3%;
          }
        }
        em{
          @include tp30;
          color: $cl3;
        }
      }
    }
  }
}

.tj {
  @include tjbtn;
}

.wechat {
  font-size: 50px;
  margin-right: 2%;
}

.pintai {
  font-size: 30px;
  margin-right: 2%;
  width: 50px;
  height: 50px;
  background: #EA4A32;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
}

.list {
  width: 94%;
  margin: 0 auto;
  margin-top: 3%;
  border-radius: 20px;
  box-shadow: 0PX 2PX 5PX #00000012;
  overflow: hidden;
  padding-bottom: 20px;

  h1 {
    @include tp32;
    font-weight: 400;
  }

  .solt {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
