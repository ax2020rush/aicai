<template>
  <div :style="{height:'100%',overflow:'hidden',display:'flex',flexDirection:'column',background:'#ffffff'}">
    <topBar :title="$route.query.room"></topBar>
    <van-image-preview v-model="show" :images="images">
    </van-image-preview>
    <div class="Notice">
      <van-icon name="volume-o"/>
      <MarqueeTips :content="maptips" :speed="20"></MarqueeTips>
    </div>
    <div class="chats" @click="eomjs">
      <div class="cont" ref="cont" v-if="list.length>0">
        <div v-for="(item,k) in list" :key="k">
          <div v-if="item.sender.nickname!==($store.state.userAgent&&$store.state.userAgent.data.member.nickname)">
            <van-image width="40" height="40"
                       round
                       fit="cover"
                       :src="ishttp(item.sender.head_portrait,true)"/>
            <div>
              <div>
                <p>{{ item.sender.nickname }}</p>
                <span>{{ item.sender.memberLevel.name }}</span>
                <p>{{ item.sent_at && filterTime(item.sent_at * 1000).slice(5) }}</p>
              </div>
              <div>
                <p v-if="item.msg_type!=='3'"
                   @click="item.content.slice(0,4)==='img['?show=true:show=false,images[0]=isImg(item.content,true)"
                   v-html="isImg(item.content)"></p>
                <p v-else>
                  <van-image @click="qhb(item.content)" style="border-radius: 4px;overflow: hidden" width="80"
                             height="100"
                             fit="cover"
                             :src="hb"/>
                </p>
              </div>
            </div>
          </div>
          <div v-else-if="chsta.includes(k)===false" class="right">
            <div>

            </div>
            <div>
              <div>
                <p class="righttext">{{ item.sent_at && filterTime(item.sent_at * 1000).slice(5) }}</p>
              </div>
              <div class="tgh">
                <p class="rgd">
                  <span class="tips" v-if="stip===k">
                      <span @click="copy($event,item.content)"> <i class="iconfont">&#xe616;</i>复制</span>
                      <span @click="cehui(item.id,k)"> <i class="iconfont">&#xe710;</i>撤回</span>
                    </span>
                  <span style="user-select: none;" @touchstart="star(k)" @touchend="end" v-if="item.msg_type!=='3'"
                        @click="item.content.slice(0,4)==='img['?show=true:show=false,images[0]=isImg(item.content,true)"
                        v-html="isImg(item.content)">
                  </span>

                  <!--                <van-icon color="#10e117" name="ellipsis" />-->
                  <span v-else>
                <van-image
                    @click="qhb(item.content)"
                    style="border-radius: 4px;overflow: hidden" width="80" height=" 100;"
                    fit="cover"
                    :src="hb"/>
              </span>
                  <van-icon color="#10e117" name="success"/>

                </p>

              </div>
            </div>
          </div>
          <div class="delete" v-else>
            <span>{{ $store.state.userAgent.data.member.nickname }}撤回了一条消息</span>
          </div>
        </div>
        <p v-if="ts" class="ts"></p>

      </div>

      <v-loading v-else></v-loading>
      <div class="hb">
        <van-image
            @click="sendeHb" name="bill"
            width="30px"
            height="40px"
            fit="contain"
            :src="roomhb"
        />
      </div>
      <div class="bottom">
        <van-field maxlength="30" class="inp"
                   clearable
        >
          <div slot="left-icon">
            <van-uploader
                :preview-image="false"
                v-model="fileList"
                :after-read="afterRead">
              <van-icon slot="default" size="24" name="photo"/>
            </van-uploader>

          </div>

          <div slot="right-icon" class="rico">

            <span @click="fasong" style="color: #222222;cursor: pointer" class="iconfont">&#xe60e;</span>
          </div>
          <input style="padding: 0 2%" @click.stop="" v-model="value" slot="input" type="text"
                 class="van-field__control">
          <span @click.stop="vemoji" slot="input" class="iconfont">&#xe629;</span>
        </van-field>
        <div @click.stop="" :style="{display: emojiShow?'':'none'}">
          <VEmojiPicker ref="emoji" :style="{width:'100%'}" @select="selectEmoji">
          </VEmojiPicker>

        </div>
      </div>
    </div>
    <van-popup class="hbp" v-model="hbshow">
      <gbnav @emit="setawi" :data="datas"></gbnav>
    </van-popup>
    <van-popup class="hbbg" v-model="hbshow2">
      <img :src="gbbg" alt="">
      <div v-if="gq" :style="{zIndex:'999'}">
        <p>恭喜发财,大吉大利</p>
        <a @click="hbshow=true,getHb()"> 看看别人手气</a>
      </div>
      <div v-else>
        <p v-if="qw">红包已过期,系统已回收</p>
        <p v-else>手慢了，红包已抢完</p>
      </div>
      <div v-if="gq" class="fuimg">
        <img @click="openhb" style="cursor:pointer;" class="open" :src="open" alt="">
      </div>
    </van-popup>
    <van-popup class="showfhb" v-model="showfhb">
      <div class="foot">
        <a @click="showfhb=false"></a>
        <p>发送包</p>
        <i></i>
      </div>
      <div class="cat">
      </div>
      <div class="cat2">
        <van-field v-model="vl1"
                   label="金额"
                   placeholder="0.00"
                   type="tel"
                   input-align="right">
          <div slot="right-icon">元</div>
        </van-field>
        <van-field
            v-model="vl2"
            label="红包个数"
            placeholder="0"
            :border="true"
            type="tel"
            input-align="right">
          <div slot="right-icon">个</div>
        </van-field>
      </div>
      <div @click="fhb" class="sqbtn">
        <a>塞钱</a>
      </div>
    </van-popup>
  </div>
</template>

<script>
import VEmojiPicker from 'v-emoji-picker'
import hb from 'assets/img/pthb.png'
import gbbg from 'assets/img/red_packet_big.png'
import roomhb from 'assets/img/room_hb.png'
import { mapActions } from 'vuex'
import api from 'assets/js/api'
import MarqueeTips from 'vue-marquee-tips'
import { filterTime, ishttp, isImg, pushAllowed } from 'assets/js/fun'
import gbnav from 'components/hb'
import open from 'assets/img/open_icon.png'
import Clipboard from 'clipboard'

export default {
  name: 'index',
  data () {
    return {
      hbshow2: false,
      hbshow: false,
      show: false,
      gbbg,
      stip: null,
      open,
      value: null,
      list: [],
      filterTime,
      chsta: [],
      hb,
      roomhb,
      ishttp,
      isImg,
      images: [],
      tys: false,
      ts: false,
      hbid: null,
      gq: true,
      qw: true,
      showfhb: false,
      vl1: null,
      vl2: null,
      datas: null,
      fileList: [],
      times: 0,
      travl: null,
      touch: false,
      emojiShow: false,
      websoket: null,
      soketTimes: null,
      status: true,
      zdget: true,
      maptips: null,
      close: true,
      content: null

    }
  },
  components: {
    MarqueeTips,
    gbnav,
    VEmojiPicker
  },
  destroyed () {
    this.close = false
    this.websoket.close() // 离开路由之后断开websocket连接
  },
  methods: {
    async roomSet () {
      const res = await api.settings({
        id: this.$route.query.id
      })
      this.maptips = res.data.notice
    },
    initWebSoket () {
      const url = 'ws://ws.lemaifangzhi.com:8585/'
      this.websoket = new WebSocket(url)
      if (this.websoket) {
        this.websoket.onmessage = this.websocketonmessage
        this.websoket.onopen = this.websocketonopen
        this.websoket.onerror = this.websocketonerror
        this.websoket.onclose = this.websocketclose
      }
    },
    websocketonopen () { // 连接建立之后执行send方法发送数据
      if (this.soketTimes) {
        clearInterval(this.soketTimes)
      }
      this.soketTimes = setInterval(() => {
        this.websocketsend('ping')
      }, 3000)
    },
    websocketonerror () { // 连接建立失败重连
      if (this.close) {
        this.initWebSoket()
      }
    },
    websocketonmessage (e) { // 数据接收
      const redata = JSON.parse(e.data)
      if (redata.type === 'message' && parseInt(redata.room_id) === parseInt(this.$route.query.id)) {
        this.getchat(false, true)
        this.zdget = false// 切换到实时获取聊天记录
        let newObj = {}
        newObj = redata
        newObj.id = redata.msg_id
        newObj.sent_at = redata.time
        newObj.sender.memberLevel = {
          name: redata.sender.level
        }
        this.list = pushAllowed(this.list, newObj)
      }
      if (redata.type === 'cmd' && this.status) {
        this.status = false
        this.websocketsend(JSON.stringify({ type: 'init' }))
        api.bind({
          client_id: redata.client_id
        })
      } else {
        this.websocketsend(JSON.stringify({ type: 'cmd' }))
      }
    },
    websocketsend (Data) { // 数据发送
      this.websoket.send(Data)
    },
    websocketclose (e) { // 关闭
      clearInterval(this.soketTimes)
    },
    eomjs () {
      this.emojiShow = false
    },
    vemoji () {
      this.$refs.emoji.$children[0].$el.style.display = 'none'
      this.$refs.emoji.$children[1].$el.style.display = 'none'
      if (this.emojiShow) {
        this.emojiShow = false
      } else {
        this.emojiShow = true
      }
    },
    selectEmoji (emoji) {
      if (this.value) {
        this.value += emoji.data
      } else {
        this.value = emoji.data
      }
    },
    async cehui (id, k) {
      const res = await api.cehui({
        room_id: this.$route.query.id,
        id: id
      })
      if (res.code === 200) {
        this.chsta.push(k)
      } else {
        this.$toast.fail(res.message)
      }
    },
    star (k) {
      this.touch = true
      this.travl = setInterval(() => {
        this.times++
        if (this.times >= 8 && this.touch) {
          clearInterval(this.travl)
          this.stip = k
          setTimeout(() => {
            this.stip = false
          }, 2000)
        }
      }, 100)
    },
    end () {
      clearInterval(this.travl)
      this.touch = false
      this.times = 0
    },
    async afterRead (file) {
      const dat = new FormData()
      dat.append('file', file.file)
      const res = await api.upImg(dat, true)
      if (res.code === 200) {
        const obj = {}
        obj.room_id = this.$route.query.id
        // eslint-disable-next-line no-use-before-define
        obj.content = 'img[' + res.data.url + ']'
        obj.msg_type = 2
        const res2 = await api.sendChat(obj)
        if (res2.code === 200) {
          this.getchat(false, true)
        } else {
          this.$toast.fail(res2.message)
        }
        this.$toast.success('上传成功')
      } else {
        this.$toast.fail('上传失败，请稍后重试')
      }
    },
    async getHb () {
      const res = await api.hbxq({
        id: this.hbid
      })
      this.datas = res.data
    },
    async fhb () {
      if (this.vl1 && this.vl2) {
        const res = await api.fhb({
          room_id: this.$route.query.id,
          amount: this.vl1,
          count: this.vl2
        })
        if (res.code === 200) {
          this.getchat(false, true)
          this.showfhb = false
          this.vl1 = null
          this.vl2 = null
        }
      } else {
        this.$toast.fail('请输入金额')
      }
    },
    sendeHb () {
      this.showfhb = true
    },
    setawi (val) {
      this.hbshow = false
      this.hbshow2 = false
    },
    async openhb () {
      const res = await api.qsb({
        id: this.hbid
      })
      if (res.code === 200) {
        this.hbshow = true
        this.getHb()
      }
    },
    async qhb (cont) {
      const id = parseInt(cont.replace(/[^\d]/g, ''))
      const res = await api.hbstu({
        id: id
      })
      this.hbid = id

      if (res.data.status === 3) {
        this.hbshow2 = true
        this.gq = true
      } else if (res.data.status === 0) {
        this.hbshow2 = true
        this.gq = false
        this.qw = true
      } else if (res.data.status === 2) {
        this.hbshow2 = true
        this.gq = false

        this.qw = false
      } else {
        this.hbshow = true
        this.getHb()
      }
    },
    ...mapActions(['getuser']),
    async getchat (id, bom) {
      const obj = {}
      obj.room_id = this.$route.query.id
      if (id) {
        obj.top_id = id
      }
      const res = await api.chatcode(obj)
      if (res.code === 200) {
        if (bom) {
          this.list = res.data
          return
        }
        this.tys = false
        for (let i = 0; i < res.data.length; i++) {
          this.list.push(res.data[i])
        }
        if (res.data.length < 10) {
          this.ts = true
          this.tys = true
          return
        }
        if (res.data.length >= 10 && this.tys === false) {
          this.$nextTick(() => {
            // scrollHeight  clientHeight
            this.$refs.cont.addEventListener('scroll', () => {
              const num = parseInt(this.$refs.cont.scrollHeight - this.$refs.cont.clientHeight + this.$refs.cont.scrollTop)
              if (num < 5) {
                if (this.tys) {

                } else {
                  if (this.list.slice(this.list.length - 1)[0].id) {
                    this.getchat(this.list.slice(this.list.length - 1)[0].id)
                  }
                }
                this.tys = true

                // this.getchat(res.data.slice(res.data.length - 1).id)
              }
            })
          })
        }
      } else if (res.code === 422) {
        this.$toast({
          type: 'fail',
          message: res.message,
          duration: 2000
        })
        this.$router.push({ path: '/chat' })
      }
    },
    async fasong () {
      if (this.value) {
        const res = await api.sendChat({
          room_id: this.$route.query.id,
          content: this.value,
          msg_type: 1
        })
        if (res.code === 200) {
          if (this.zdget) {
            this.getchat(false, true)
          }
          //  在这里
          this.value = null
        } else {
          this.$toast.fail(res.message)
        }
      } else {
        this.$toast.fail('请输入评论内容')
      }
    },
    copy (e, text) {
      const clipboard = new Clipboard(e.target, { text: () => text })
      clipboard.on('success', e => {
        this.$toast.success('复制成功')
        // 释放内存
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
      })
      clipboard.on('error', e => {
        // 不支持复制
        this.$toast.fail('手机权限不支持复制功能')
        // 释放内存
        clipboard.off('error')
        clipboard.off('success')
        clipboard.destroy()
      })
      clipboard.onClick(e)
    }
  },
  created () {
    this.getchat()
    this.getuser()
    this.initWebSoket()
    this.roomSet()
  },

  mounted () {
  }

}
</script>

<style scoped lang="scss">
.moji {
  > div {
    display: none;
  }
}

.showfhb {
  height: 100%;
  width: 100%;
  background: #F9F9F9;

  .cat {
    width: 100%;
    height: 200px;
    background: #FB6D6D;

  }

  .sqbtn {
    width: 90%;
    height: 80px;
    background: red;
    margin: 0 auto;
    background: #FB6D6D;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #ffffff;
    @include tp32;
    margin-top: 80px;
    border-radius: 10px;

    &:active {
      background: #e54141;
    }
  }

  .cat2 {
    width: 90%;
    border-radius: 10px;
    height: 200px;
    position: relative;
    z-index: 9;
    background: #ffffff;
    margin: -170px auto 0;
    box-shadow: 0 0PX 4PX #00000010;
    overflow: hidden;
  }

  .foot {
    width: 90%;
    height: 90px;
    background: #ffffff;
    margin: 0 auto;
    padding: 0 5%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4PX 6PX rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 999;

    a {
      width: 40px;
      height: 40px;
      background: url("~assets/img/back2.png") no-repeat;
      background-size: 100%;
    }

    p {
      @include tp34;
      color: $cl;
    }
  }
}

.fuimg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  align-content: flex-end;

}

.open {
  width: 30% !important;
  position: relative;
  bottom: 20px;
  display: block;
  text-align: center;
}

.hbbg {
  width: 60%;
  background: rgba(0, 0, 0, 0);
  display: flex;
  justify-content: center;

  img {
    width: 100%;
  }

  > div {
    position: absolute;
    z-index: 9;
    top: 0;
    text-align: center;
    margin: 0 auto;

    p {
      margin-top: 40%;
      color: #FFB825;
      padding-bottom: 10%;
    }

    a {
      color: #FFB825;
      text-decoration: underline;
      padding-bottom: 10px;
      position: relative;
      z-index: 9999;

    }
  }

}

.bottom {
}

.hbp {
  width: 100%;
  height: 100%;
}

.ts {
  text-align: center;
  @include tp32;
  padding: 4% 0;
  color: $cl3;
}

.rico {
  width: 30%;
  display: flex;
}

.tgh {
  justify-content: flex-end !important;
}

.delete {
  width: 100%;
  @include tp30;
  margin: 0 auto;
  display: flex;
  justify-content: center;

  > span {
    background: #E0E0E0;
    text-align: center;
    padding: 1% 2%;
    color: $cl3;
    border-radius: 10px;
  }
}

.right {
  justify-content: flex-end;

  .righttext {
    width: 100%;
    justify-content: flex-end;
  }

  .rgd {
    background: #C8E6C9 !important;
    position: relative;
    display: flex;
    flex-wrap: wrap;

    .tips {
      background: #7d7d7df0;
      width: 400px;
      position: absolute;
      top: -60px;
      z-index: 999;
      right: 0;
      height: 70px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      animation: moves .5s;
      @keyframes moves {
        to {
          opacity: 1;
        }
        from {
          opacity: 0;
        }
      }

      span {
        display: flex;
        word-break: keep-all;
        width: 50%;
        justify-content: center;
        color: $ballBlue;

        i {
          width: auto;
          color: $red;
          cursor: pointer;
        }
      }
    }

    i {
      right: 0;
      width: 100%;
      bottom: 0;
      text-align: right;
    }
  }
}

.cont {
  height: 100%;
  width: 96%;
  margin: 0 auto;
  overflow-y: auto;
  display: flex;
  flex-direction: column-reverse;

  > div > div {
    display: flex;
    margin-bottom: 5%;

    > div {
      &:nth-child(2) {
        display: flex;
        flex-direction: column;
        word-break: keep-all;
        width: 80%;

        > div {
          &:first-child {
            display: flex;
            align-items: center;
            width: 100%;

            p {
              font-size: 28px;
              word-break: keep-all;
              color: $cl;
              display: flex;
              align-items: center;

              &:first-child {
                margin-left: 4%;
              }
            }

            span {
              @include tp30;
              display: flex;
              align-items: center;
              color: $red;
              margin: 0 2%;
              font-size: 28px;
            }
          }

          &:last-child {
            @include tp30;
            margin-left: 4%;
            display: flex;
            flex-wrap: wrap;
            justify-content: left;

            p {
              background: #E0E0E0;
              padding: 2% 4%;
              border-radius: 10px;
              @include tp30;
              margin-top: 10px;
              font-size: 26px;
            }
          }
        }
      }
    }
  }
}

.hb {
  height: 90px;
  background: #F5F7FA;
  display: flex;
  align-items: center;
  width: 94%;
  margin: 0 auto;
  padding: 0 3%;
}

.van-field__control {
  background: #F5F7FA;
  border-radius: 60px;
}

.iconfont {
  font-size: 40px;
  margin: 0 2%;
}

.head {
  box-shadow: 0px 0px 8px #c4c4c4;;
}

.van-icon-photo {
  font-size: 30px;
}

.Notice {
  width: 94%;
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2%;
}

.chats {
  width: 100%;
  height: calc(100% - 180px);
  background: #ffffff;
  display: flex;
  flex-direction: column;
}
</style>
