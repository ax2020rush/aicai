<template>
  <div class="sy">
    <div class="top">
      <topBar></topBar>
    </div>
    <div class="ny" v-if="list">
      <div>
        <div>
          <p>我的</p>
          <p>收益</p>
        </div>

        <div>
          <van-image width="40"
                     height="40"
                     round
                     :src="user.member&&ishttp(user.member.head_portrait,true)"/>
          {{user.member&&user.member.nickname}}
        </div>
        <div v-if="title"><span>第{{title}}名</span></div>
        <div>
          <p>{{list.mine&&list.mine.money}}元</p>
        </div>
      </div>
      <div v-for="(item,k) in list.ranks" :key="k">
        <div>
          <p>{{k+1}}</p>
        </div>
        <div>
          <van-image width="40"
                     height="40"
                     round
                     :src="user.member&&ishttp(item.member.head_portrait,true)"/>
          {{user.member&&item.member.nickname}}
        </div>
        <div>
          <p v-if="user.member" :name="user.member.id===parseInt(item.member.id)&&(title=k)">{{item.accumulate_money}}元</p>
        </div>
      </div>
    </div>
    <v-loading v-else></v-loading>

  </div>
</template>

<script>
import api from 'assets/js/api'
import { ishttp } from 'assets/js/fun'
export default {
  name: 'index',
  data () {
    return {
      list: null,
      ishttp,
      user: this.$store.state.userInfo,
      title: null
    }
  },
  methods: {
    async getSy () {
      const res = await api.syph()
      this.list = res.data
    }
  },
  mounted () {
    this.getSy()
  }
}
</script>

<style scoped lang="scss">
.sy {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.head {
  background: none;
}

.top {
  width: 100%;
  height: 600px;
  background: url(~@/assets/img/bgg.jpg) no-repeat;
  background-size: 100% auto;
}

.ny {
  width: 100%;
  height: 100%;
  background: #ffffff;
  border-radius: 30px 30px 0 0;
  margin-top: -20px;
  >div{
    &:nth-child(2),&:nth-child(3),&:nth-child(4){
      >div{
        p{
        color: $red;
        }
      }
    }
  }
  > div {
    &:first-child {
      width: 80%;
      min-height: 140px;
      border-radius: 20px;
      box-shadow: 0PX 0PX 13PX #00000014;
      margin: 0 auto;
      margin-top: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;
      > div {
        &:nth-child(2) {
          display: flex;
          justify-content: left;
          align-items: center;
          width: auto;
          > div {
            padding-right: 20px;
          }
        }
        @include tp30;
        &:nth-child(1) {
          color: $cl;
        }

        &:nth-child(3) {
          color: $cl2;
        }

        &:nth-child(3) {
          color: $ballBlue;
        }

        &:nth-child(5) {
          color: $red;
        }
      }
    }

    & {
      width: 80%;
      min-height: 140px;
      margin: 0 auto;
      margin-top: 10px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 5%;

      > div {
        &:nth-child(2) {
          display: flex;
          justify-content: left;
          width: 66%;
          align-items: center;
          >div{
            padding-right: 20px;
          }
        }

        @include tp30;

        &:nth-child(1) {
          color: $cl;
        }

        &:nth-child(3) {
          color: $red;
        }

        &:nth-child(4) {
          color: $red;
        }
      }
    }

  }

  .van-cell-group {
    margin-top: 20px;
  }
}
</style>
