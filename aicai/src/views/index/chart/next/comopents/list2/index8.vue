<template>
  <div class="red" v-if="list">
    <div><p v-for="(item,k) in list" :key="k">{{ item.expect.slice(item.expect.length-3) }}期</p></div>
    <div>
      <div v-for="(item,k) in list" :key="k">
        <a v-for="ks in 10" :key="ks">
          <span :class="{active:item.opencode.split(',')[6].indexOf(ks.toString().length === 1 ? '0' + ks : ks.toString())!==-1}">
            {{ ks.toString().length === 1 ? '0' + ks : ks }}
          </span>
        </a>
      </div>
    </div>
  </div>
  <v-loading v-else></v-loading>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'index1',
  computed: {
    ...mapState({
      list: state => state.chart && state.chart.data
    })
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
.loding{
  width: 100% !important;
  z-index: 999;
  min-height: 600px;
}
.red {
  display: flex;
  margin-top: 1px;
  justify-content: space-between;
  > div {
    &:first-child {
      width: 30%;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;

      p {
        width: 100%;
        border-top: 1px solid $cl3;
        border-left: 1px solid $cl3;
        border-right: 1px solid $cl3;
        height: 70px;
        background: #F9F9F9;
        text-align: center;
        @include tp30;
        color: $cl;
        display: flex;
        justify-content: center;
        align-items: center;

        &:last-child {
          border-bottom: 1px solid $cl3;
        }
      }
    }

    &:last-child {
      width: 69.88%;
      background: #ffffff;
      overflow: hidden;
      overflow-x: auto;
      position: relative;
      display: flex;
      flex-wrap: wrap;

      > div {
        display: flex;

        &:last-child {
          > a {
            border-bottom: 1px solid $cl3;
          }
        }

        > a {
          width: 130px;
          background: #ffffff;
          height: 70px;
          text-align: center;
          @include tp32;
          color: $cl;
          border-top: 1px solid $cl3;
          border-right: 1px solid $cl3;
          display: flex;
          justify-content: center;
          align-items: center;

          > span {
            display: flex;
            width: 100%;
            height: 100%;
            justify-content: center;
            align-items: center;

          }
          > span.active {
            background: #F44336;
            color: #ffffff;
          }
        }
      }
    }
  }
}
</style>
