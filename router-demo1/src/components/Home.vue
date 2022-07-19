<template>
  <div class="home-container">
    <h3>Home 组件</h3>
    <hr />
    <button @click="gotoLK">通过push跳转到浩浩页面</button>
    <button @click="gotoLK2">通过replace跳转到浩浩页面</button>
    <router-link to="/main">访问后台</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    gotoLK(){
      // 通过编程式导航API，导航跳转到指定页面,并增加一条历史记录
      // 在行内使用编程式跳转时一定要省略this否则报错
      this.$router.push('/movie/1');
    },
    gotoLK2(){
      this.$router.replace('/movie/1');
    }
  }
}
</script>

<style lang="less" scoped>
.home-container {
  min-height: 200px;
  background-color: pink;
  padding: 15px;
}
</style>
