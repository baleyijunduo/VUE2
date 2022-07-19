import Vue from 'vue'
import App from '@/App.vue'
import App2 from '@/App2.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// 导入路由模块
import router from '@/router/index.js'
// 全局样式
import '@/assets/global.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App2),
  // 挂载router
  router
}).$mount('#app')
