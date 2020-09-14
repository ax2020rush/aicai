<template>
  <div class="index">
    <banner></banner>
    <div class="marquee">
      <div><span>{{ new Date().getDate() }}</span><span>{{ new Date().getMonth() + 1 }}月</span></div>
      <MarqueeTips v-if="config" :content="config.data.marquee_placard" :speed="20"></MarqueeTips>
    </div>
    <van-popup v-model="show">
      <van-cell-group v-if="$store.state.clph">
        <van-cell v-for="(item,k) in $store.state.clph.data" :key="k">
          <div class="contents">
            <van-image width="50"
                       height="50"
                       round
                       :src="ishttp(item.logo)" />
            <div>
              <h2>{{item.name}}</h2>
              <div>
<!--                ['#F44336','#7C4DFF','#2196F3']-->

                <span class="col">总和</span>
                <span :class="'col'+(k===0||k===1||k>5?3:k)">和{{isds(item.type)}}</span>
                <span>连{{item.count}}期</span>
              </div>
            </div>
          </div>
        </van-cell>
      </van-cell-group>
      <v-loading v-else></v-loading>
    </van-popup>
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
          <div @click="$router.push({path:'/chart'})">
            <h1>走势图</h1>
            <van-image
                width="40%"
                height="auto"
                :src="zs"
            />
          </div>
          <div @click="showcl">
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
    <div class="foot" @click="$router.push({path:'/sy'})">
      <div class="b_left" >
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
import { mapGetters, mapActions } from 'vuex'
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
      ishttp,
      show: false
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
    ...mapActions(['getCl']),
    showcl () {
      this.show = true
      this.getCl()
    },
    isds (n) {
      if (n === 1) {
        return '大'
      } else if (n === 2) {
        return '小'
      } else if (n === 3) {
        return '单'
      } else if (n === 4) {
        return '双'
      }
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.index {
  .van-popup--center{
    height: auto;
    width:60%;
    border-radius: 4px;
  }
  .contents{
    width: 100%;
    background: #ffffff;
    display: flex;
    >div{
      h2{
        @include tp32;
        font-weight: 400;
        text-align: center;
      }
      >div{
        text-align: center;
        >span{
          @include tp30;
          margin: 0px 6px;
          padding: 4px 6px;
        }
        >span.col{
          background: #757575;
        }
        .col2{
          background: #F44336;
        }
       .col3{
          background: #7C4DFF;
        }
        .col4{
          background: #2196F3;
        }
      }
      &:last-child{
        position: absolute;
        left: 100px;
        right: 0;
        margin: auto;
      }
    }
  }
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
