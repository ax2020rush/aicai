<template>
<div class="com">
  <topBar :title="$route.query.name"></topBar>
  <openList></openList>
</div>
</template>

<script>
export default {
  name: 'index'
}
</script>

<style scoped lang="scss">
.com{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
