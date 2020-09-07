<template>
  <div class="dslist">
    <van-popup v-if="content" v-model="showPop" >
      <div class="showPop">
        <h2>第{{content.period}}期</h2>
        <div v-html="content.content.replace(/text-align: center;/g,'text-align: left;')"></div>
      </div>
    </van-popup>
    <topBar title="大神详情"></topBar>
    <div class="cont">
      <div class="top">
        <van-image round width="50" height="50" src="https://img.yzcdn.cn/vant/cat.jpeg"/>
        <div>
          <h1>{{ newData.nickname }}</h1>
          <p>擅长: <span>{{ newData.label }}</span></p>
        </div>
        <div>
          <h2>{{ newData.hit_rate }}%</h2>
          <span>总命中率</span>
        </div>
      </div>
      <p>{{ newData.introduction }}</p>
    </div>
    <div class="rull">
      <van-tabs
          ref="tabs"
          background="#F9F9F9"
          :offset-top="177"
          animated
          color="#747474"
          line-width="52"
          line-height="1px"
          v-model="active">
        <van-tab :title="iscz(item)" v-for="(item,k) in  newData.lottery_type.split(',')" :key="k">
          <list @changes="getBom" :code="item"></list>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import list from '@/views/index/dsfl/dsdetile/components/list'
import { mapGetters } from 'vuex'
import { iscz } from '@/assets/js/fun'

export default {
  name: 'index',
  data () {
    return {
      active: 0,
      iscz,
      showPop: false,
      content: null
    }
  },
  methods: {
    getBom (value) {
      this.content = value
      this.showPop = true
    }
  },
  computed: {
    ...mapGetters(['dstj']),
    // eslint-disable-next-line vue/return-in-computed-property
    newData () {
      const ts = this
      const arr = ts.dstj
      if (!ts.$route.query.id) {
        ts.$router.push({ path: '/dsfl' })
      }
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === ts.$route.query.id) {
          return arr[i]
        }
      }
    }
  },
  components: {
    list
  },
  mounted () {
    document.querySelector('.van-tabs__line').style.bottom = 23 + 'px'
    this.$refs.tabs.$refs.wrap.style.position = 'sticky'
    this.$refs.tabs.$refs.wrap.style.top = '0px'
    this.$refs.tabs.$refs.wrap.style.zIndex = 999
  }

}
</script>

<style scoped lang="scss">

.dslist {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  align-content: space-between;
  .van-popup--center{
    width: 90%;
    margin: 0 auto;
  }
  .showPop{
    padding: 2% 0;
    width: 90%;
    margin: 0 auto;
    >div{
      @include tp30;
      word-break: break-all;
      p{
        text-align: left;
      }
    }
    h2{
      font-weight: 400;
      @include tp36;
      color: $cl;
    }
  }

  .rull {
    width: 100%;
    height: calc(100% - 30%);
    background: #F9F9F9;
    overflow: hidden;
    overflow-y: auto;
    position: relative;
    padding: 0 3%;
  }
}

.cont {
  min-height: 300px;
  width: 100%;
  background: #ffffff;
  border-top: .5PX solid #f4f4f4;
  padding-bottom: 2.2%;

  > p {
    padding: 0 5%;
    @include tp30;
    color: $cl1;
  }

  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 4% auto 0;
    padding-bottom: 1%;

    > div {
      display: flex;
      justify-content: left;
      align-content: space-between;
      flex-wrap: wrap;
      padding-bottom: 2%;

      &:first-child {
        width: 60PX !important;
      }

      &:nth-child(2) {
        min-height: 124px;
        margin-left: 4%;
        width: 70%;
      }

      &:last-child {
        width: 20%;
        text-align: center;
        justify-content: center;
        height: 106px;
      }

      h1 {
        font-weight: 400;
        @include tp32;
        color: $cl;
      }

      p {
        @include tp30;
        color: $cl2;
        display: flex;
        justify-content: flex-end;
        margin-top: 4%;

        span {
          max-width: 70%;
          color: $cl3;
          @include tp30;
          border: 1px solid $cl3;
          padding: 2px 8px;
          margin-left: 4PX;
          border-radius: 2PX;
        }
      }

      h2 {
        @include tp40;
        color: red;
        font-weight: 400;
        text-align: center;
      }

      > span {
        @include tp30;
        color: $cl3;
      }
    }
  }
}
</style>
