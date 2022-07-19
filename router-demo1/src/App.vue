<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <a href="#/main">主页</a>
    <a href="#/login">登录</a>
    <a href="#/movie">电影</a>
    <component :is="comNum"></component>
  </div>
</template>

<script>
import Main from '@/components/Main.vue'
import Login from '@/components/Login.vue'
import Movie from '@/components/Movie.vue'
export default {
  name: 'App',
  components:{
    Main,
    Login,
    Movie
  },
  data() {
    return {
      comNum:'Movie'
    }
  },
  created() {
    window.onhashchange = () => {
      switch(location.hash){
        case '#/main':
          this.comNum = 'Main';
          break
        case '#/login':
          this.comNum = 'Login';
          break
        case '#/movie':
          this.comNum = 'Movie';
          break
      }
    }
  },
}
</script>

<style lang="less" scoped>
.app-container {
  background-color: #efefef;
  overflow: hidden;
  margin: 10px;
  padding: 15px;
  > a {
    margin-right: 10px;
  }
}
</style>
