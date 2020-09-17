<template>
  <div class="conts">
    <div>
      <div class="pupo">
        <div>
          <a @click="aweit">
            <van-icon name="arrow-left"/>
          </a></div>
        <div class="text" v-if="data">
          <p>红包</p>
          <p>恭喜发财，大吉大利</p>
          <em>{{data.mine_got_money}} <span>元</span></em>
          <p>已存入余额，可直接体现</p>
        </div>
      </div>

      <img :src="bg" alt="">
    </div>
    <div v-if="data">
      <div class="tit">已领取{{data.detail.got_count}}/{{data.detail.total_count}}个，{{data.detail.got_money}}/{{data.detail.total_money}}元</div>
    </div>
    <van-cell-group v-if="data">
      <van-cell value="内容" v-for="(item,k) in data.lists" :key="k">
        <van-image
            slot="icon"
            width="50"
            height="50"
            round
            fit="cover"
            :src="ishttp(item.head_portrait,true)"/>
        <div class="title" style="margin-left: 4%;" slot="title">
          <p>{{item.nickname}}</p>
          <p>{{timeFormat(item.time*1000)}}</p>
        </div>
        <div style="color: red" slot="default">
          {{item.money}}元
        </div>
      </van-cell>
    </van-cell-group>
    <v-loading v-else></v-loading>
  </div>
</template>

<script>
import bg from 'assets/img/red_packet_bg.png'
import { ishttp, timeFormat } from 'assets/js/fun'

export default {
  name: 'hb',
  props: {
    data: null
  },
  data () {
    return {
      bg,
      ishttp,
      timeFormat
    }
  },
  methods: {
    aweit () {
      this.$emit('emit', false)
    }
  },
  created () {
  }
}
</script>

<style scoped lang="scss">
.conts {
  width: 100%;
  overflow: hidden;

  > div {
    position: relative;

    > img {
      width: 100%;
    }
  }

  .pupo {
    position: absolute;
    width: 100%;

    > div {
      width: 90%;
      display: flex;
      justify-content: left;
      margin: 0 auto;
      margin-top: 20px;

      a {
        width: 50px;
        height: 50px;
        font-size: 50px;
        color: #F0CC9B;
      }
    }

    .text {
      display: flex;
      justify-content: center;
      align-content: center;
      flex-wrap: wrap;

      color: #F0CC9B;

      p {
        text-align: center;
        width: 100%;
        @include tp32;
      }

      em {
        margin-top: 6%;
        font-size: 50px;
        font-weight: 600;

        span {
          @include tp30;
        }
      }
    }
  }

  .title {
    @include tp30;
    color: $cl;
  }

  > div {
    .tit {
      width: 90%;
      display: flex;
      background: #E0E0E0;
      @include tp32;
      margin: 0 auto;
      color: $cl;
      padding: 1% 5%;

    }
  }
}

</style>
