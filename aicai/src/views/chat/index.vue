<template>
<div>
  <topBar title="聊天"></topBar>
  <van-cell-group v-if="data">
    <van-cell :to="'/recode?id='+item.id+'&&room='+item.name" :name="item.name" title-style="color:#2196F3;" v-for="(item,k) in data.data" :key="k">
      <div slot="icon" :style="{marginRight:'10px'}">
        <van-image
            width="50"
            height="50"
            fit="cover"
            round
            :src="ishttp(item.avatar,true)"
        />
      </div>
      <div slot="title">{{item.name}}</div>
      <div slot="label" v-if="item.msg">
        {{item.msg.msg_type==='1'?item.msg.content:item.msg.msg_type==='2'?'[图片]':'[红包]'}}
      </div>
      <div v-if="item.msg" class="tips"  slot="right-icon">{{timeFormat(item.msg&&item.msg.sent_at*1000)}}</div>
    </van-cell>
  </van-cell-group>
</div>
</template>

<script>
import { ishttp, timeFormat } from 'assets/js/fun'
import api from 'assets/js/api'
export default {
  name: 'index',
  data () {
    return {
      data: null,
      ishttp,
      timeFormat
    }
  },
  methods: {
    async getRoom () {
      const res = await api.room()
      this.data = res
    }
  },
  created () {
    this.getRoom()
  }
}
</script>

<style scoped lang="scss">
.tips{
  @include tp30;
  color: $cl3;
}

</style>
