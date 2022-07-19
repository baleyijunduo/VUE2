<template>
  <div class="movie-container">
    <h3>Movie 组件 ---{{$route.params.id}} -----{{id}}</h3>
    <button @click="showThis">打印this</button>
    <button @click="goback">后退</button>
  </div>
</template>

<script>
export default {
  name: 'Movie',
  methods: {
    showThis(){
      // 可以获得路由链接里的动态数据
      console.log(this.$route.params.id);
    },
    goback(){
      // 通过go回退或前进
      this.$router.go(-1);
    }
  },
  props:['id']
}
</script>

<style lang="less" scoped>
.movie-container {
  min-height: 200px;
  background-color: lightsalmon;
  padding: 15px;
}
</style>
