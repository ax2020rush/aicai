<template>
<div>
  <topBar title="聊天"></topBar>
  <van-cell-group v-if="getMessageNum">
    <van-cell @click="Judging(item.id,item.name)" :name="item.name"  title-style="color:#2196F3;" v-for="(item,k) in getMessageNum" :key="k">
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
      <div v-if="item.msg" class="tips"  slot="right-icon"><p>{{timeFormat(item.msg&&item.msg.sent_at*1000)}}</p>
        <span v-if="item.num||item.num>0" class="tps">{{item.num}}</span></div>
    </van-cell>
  </van-cell-group>
</div>
</template>

<script>
import { ishttp, timeFormat } from 'assets/js/fun'
import api from 'assets/js/api'
import { mapState } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      data: null,
      ishttp,
      timeFormat,
      websoket: null,
      soketTimes: null,
      status: true,
      messages: null
    }
  },
  computed: {
    ...mapState({
      chartMessage: 'chartMessage',
      getMessageNum: 'messageNum'
    })
  },
  watch: {
    chartMessage (redata, vl) {
      // 数据接收
      if (redata.type === 'cmd' && redata.order === 'revoke_message') {
      }
    }
  },
  methods: {
    async Judging (id, name) {
      const res = await api.chatcode({
        room_id: id
      })
      if (res.code === 422) {
        this.$toast.fail(res.message)
      } else if (res.code === 423) {
        this.$dialog.confirm({
          confirmButtonText: '申请加入',
          title: res.message
        })
          .then(async () => {
            const rt = await api.qzsq({
              room_id: id
            })
            if (rt.code === 200) {
              this.$toast.success(rt.message)
            } else {
              this.$toast.fail(rt.message)
            }
          })
          .catch(() => {
            // on cancel
          })
      } else if (res.code === 424) {
        this.$toast.fail(res.message)
      } else if (res.code === 200) {
        this.$router.push({ path: '/recode?id=' + id + '&&room=' + name })
      }
      //
    },
    async getRoom () {
      const res = await api.room()
      this.data = res.data.map((a, b) => {
        a.num = 0
        return a
      })
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
  position: relative;
}
.tps{
  display: flex;
  width: 100px;
  height: 40px;
  background: #ED7355;
  color: #ffffff;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 0;
  border-radius: 50px;
}
</style>
