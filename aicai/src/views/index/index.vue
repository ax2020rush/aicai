<template>
  <div class="index">
    <banner></banner>
    <div class="marquee">
      <div><span>{{ new Date().getDate() }}</span><span>{{ new Date().getMonth() + 1 }}月</span></div>
      <MarqueeTips v-if="config" :content="config.data.marquee_placard" :speed="20"></MarqueeTips>
    </div>
    <van-row class="indextype" type="flex" justify="center">
      <van-col span="6" v-for="(item,k) in indexApp" @click="$router.push({path:'/analy',query:{pid:item.id}})" :key="k">
        <van-image
            width="48px"
            height="48px"
            round
            :src="ishttp(item.logo)"
        />
        <p>{{item.name}}</p>
      </van-col>
    </van-row>
    <div class="content">
      <div class="left" @click="$router.push({path:'/ycfl'})">
        <h1>原创分析</h1>
        <van-image
            width="60%"
            height="auto"
            round
            :src="yc"
        />
        <a>点击进入</a>
      </div>
      <div class="right">
        <div class="top">
          <div>
            <div class="_left" @click="$router.push({path:'/dsfl'})">
              <h1>大神推荐</h1>
              <a>点击进入</a>
            </div>
            <van-image
                width="26%"
                height="auto"
                :src="tj"
            />
          </div>
        </div>
        <div class="bottom">
          <div>
            <h1>走势图</h1>
            <van-image
                width="40%"
                height="auto"
                :src="zs"
            />
          </div>
          <div>
            <h1>长龙提醒</h1>
            <van-image
                width="22%"
                height="auto"
                :src="cl"
            />
            <a>点击进入</a>
          </div>
        </div>
      </div>
    </div>
    <div class="foot">
      <div class="b_left">
        <van-image
            width="30px"
            height="30px"
            :src="ph"
        />
        <h1>收益排行</h1>
      </div>
      <div class="b_right">
        <a>立即查看</a>
      </div>
    </div>
  </div>
</template>

<script>
import { ishttp } from '@/assets/js/fun'
import banner from '@/components/index/banner'
import MarqueeTips from 'vue-marquee-tips'
import { mapGetters } from 'vuex'
import yc from '@/assets/img/yc.png'
import tj from '@/assets/img/tj.png'
import zs from '@/assets/img/zs.png'
import cl from '@/assets/img/cl.png'
import ph from '@/assets/img/ph.png'

export default {
  name: 'index',
  data () {
    return {
      yc,
      tj,
      zs,
      cl,
      ph,
      ishttp
    }
  },
  computed: {
    ...mapGetters(['config', 'bannerData', 'indexApp'])
  },
  components: {
    banner,
    MarqueeTips
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.index {
  padding-bottom: 26%;
  .foot {
    width: 94%;
    min-height: 90px;
    background: #ffffff;
    border-radius: 50px;
    margin: 0 auto;
    margin-top: 4%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .b_left {
      width: 50%;
      height: 100%;
      overflow: hidden;
      display: flex;
      justify-content: left;
      align-items: center;
      margin-left: 5%;

      h1 {
        @include tp36;
        margin-left: 5%;
        color: $cl;
        font-weight: 600;
      }

    }
    .b_right{
      margin-right: 5%;
      @include abtn2;
    }
  }

  .content {
    width: 94%;
    display: flex;
    margin: 0 auto;
    background: $bg;
    justify-content: space-between;
    margin-top: 3%;
    .left {
      width: 36%;
      min-height: 450px;
      @include idx1;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: space-between;

      h1 {
        width: 100%;
        margin-top: 5%;
        @include indexH1;
      }

      > a {
        @include abtn;
        margin-bottom: 5%;
      }
    }

    .right {
      width: 60%;
      min-height: 390px;
      display: flex;
      flex-wrap: wrap;
      align-content: space-between;

      .top {
        width: 100%;
        height: 50%;
        @include idx2;
        @include bord;
        display: flex;
        justify-content: center;
        align-items: center;

        > div {
          width: 90%;
          margin: 0 auto;
          height: 90%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          ._left {
            width: 80%;
            height: 100%;
            display: flex;
            justify-content: left;
            align-content: space-between;
            flex-wrap: wrap;

            h1 {
              width: 100%;
              @include indexH1;
              text-align: left;
            }

            > a {
              @include abtn
            }
          }
        }

      }

      .bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        height: 44%;

        > div {
          @include bord;
          width: 48%;
          height: 100%;
          background: deeppink;
          display: flex;
          justify-content: center;
          align-content: space-between;
          flex-wrap: wrap;
          height: 100%;

          h1 {
            width: 100%;
            margin-top: 5%;
            @include indexH1
          }

          > div {
            margin-bottom: 3%;
            border-bottom: .5PX solid #ffffff;
            position: relative;
            top: -15px;

          }

          a {
            position: relative;
            @include abtn;
            top: -14px;
          }

          &:first-child {
            @include idx3;
          }

          &:last-child {
            @include idx4;
          }
        }
      }
    }
  }

  .indextype {
    width: 72%;
    margin: 0 auto;

    .van-col.van-col--6 {
      text-align: center;
    }

    p {
      text-align: center;
      @include tp32;
      color: $cl;
    }
  }
}
</style>
