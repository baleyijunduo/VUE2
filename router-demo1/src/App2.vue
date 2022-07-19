<template>
  <div class="app-container">
    <h1>App2 组件</h1>
    <!-- 配置router后，用router-link来替代普通的a链接 -->
    <!-- <a href="#/home">首页</a> -->
    <router-link to="/home">首页</router-link>
    <!-- <a href="#/movie">电影</a> -->
    <!-- <router-link to="/movie">电影</router-link> -->
    <!-- 在hash地址中,/后面的参数项叫做路径参数 -->
    <!-- 在路由参数对象中，需要使用this.$route.params来访问路径参数 -->
    <!-- 在hash地址中,？后面的参数项叫做查询参数 -->
    <!--  在路由参数对象中，需要使用this.$route.query来访问路径参数 -->
    <router-link to="/movie/1">雷浩</router-link>
    <router-link to="/movie/2">浩浩</router-link>
    <router-link to="/movie/3">小浩</router-link>
    <!-- <a href="#/about">关于</a> -->
    <router-link to="about">关于</router-link>
    <!-- 只要在项目中安装配置了vue-router,就可以使用router-view这个组件了 -->
    <!-- 作用为占位符 -->
    <!-- router-view内显示组件 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App2'
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
