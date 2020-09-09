<template>
  <div>
    <topBar :title="$route.query.name +'走势图'"></topBar>
    <div>
      <charList></charList>
    </div>

  </div>
</template>

<script>
export default {
  name: 'inex',
  data () {
    return {
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
