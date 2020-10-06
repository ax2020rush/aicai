<template>
  <div class="head">
    <a class="goleft" @click="$router.go(-1)"></a>
    <h2>{{title}}</h2>
    <slot class="right" name="right"></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: String
  },
  name: 'topbar',
  methods: {

  }
}
</script>

<style scoped lang="scss">

.head{
  width: 100%;
  height: 110px;
  background: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h2{
    @include tp36;
    color: $cl;
    font-weight: 400;
  }
  &:after{
    content: ""; width: 0%; display: block; height:0; width:0%;
    /*只需要添加父元素的after伪元素中 高度0 ，宽度与item的宽一样*/
  }
  >div{
    position: absolute;
    right: 3%;
  }
}
.goleft{
  width: 40px;
  height: 40px;
  background: url("~@/assets/img/back2.png") no-repeat;
  background-size:100% ;
  position: relative;
  left: 5%;
}
</style>
