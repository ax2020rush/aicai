<template>
<div>
  <topBar title="我的钱包"></topBar>
  <div class="card">
    <div v-if="dat">
      <p>总金额(元)</p>
      <h2>{{dat.money}}</h2>
      <i>总收益:￥{{dat.total_money}}</i>
      <router-link to="/tixian">马上提现</router-link>
      <div><span @click="$router.push({path:'/txlb'})" :style="{cursor:'pointer'}">提现记录</span><em></em>
        <span @click="$router.push({path:'/syls'})" :style="{cursor:'pointer'}">收益记录</span></div>
    </div>
    <v-loading v-else></v-loading>
    <p>温馨提示:提现操作需预约才可进行</p>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex'
import api from 'assets/js/api'
export default {
  name: 'index',
  data () {
    return {
      dat: null
    }
  },
  computed: {
    ...mapGetters(['userAgent'])
  },
  methods: {
    async getmoney () {
      const res = await api.qianbao()
      this.dat = res.data
    }
  },
  created () {
    this.getmoney()
  }
}
</script>

<style scoped lang="scss">
.head{
  box-shadow: 0 0 0.21333rem #c4c4c4;
}
.loding{
  height: 70%;
}
.card{
  width: 90%;
  height: 500px;
  background: linear-gradient(#ED6F52,#E64D35);
  margin: 0 auto;
  border-radius: 20px;
  margin-top: 5%;
  overflow: hidden;
  >div{
    width: 90%;
    min-height:70%;
    background: #ffffff;
    margin: 0 auto;
    margin-top: 40px;
    border-radius: 14px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    text-align: center;
    @include tp32;
    color: $cl;
    flex-wrap: wrap;
    align-items: center;
    align-content: center;
    h1{
      @include tp34;
    }
    i{
      background: #F5F5F5;
      color: #7C4DFF;
      width: 40%;
      border-radius: 50px;
      color: $cl3;
    }
    a{
      @include jbtn;
    }
    >div{
      color: $ballBlue;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 50%;
      span{
        @include tp30;
      }
      em{
        width: 1PX;
        height: 30px;
        background: #BDBDBD;
      }
    }
  }
  >P{
    text-align: center;
    margin-top: 20px;
    color: #ffffff;
    @include tp32;
  }
}
</style>
