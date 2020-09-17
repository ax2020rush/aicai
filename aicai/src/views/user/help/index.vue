<template>
<div>
  <topBar title="帮助中心"></topBar>
  <div class="help" v-html="$store.state.config.data.help_content">

  </div>
</div>
</template>

<script>
export default {
  name: 'index',
  created () {

  }
}
</script>

<style scoped lang="scss">
p{
  @include tp34;
}
</style>
