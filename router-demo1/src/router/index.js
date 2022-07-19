import Vue from 'vue'
import VueRouter from 'vue-router'

// 导入需要的组件
import Home from '@/components/Home.vue'
import Movie from '@/components/Movie.vue'
import About from '@/components/About.vue'
import Tab1 from '@/components/tabs/Tab1.vue'
import Tab2 from '@/components/tabs/Tab2.vue'
import Login from '@/components/Login.vue'
import Main from '@/components/Main.vue'
// 把VueRouter安装为Vue项目的插件
Vue.use(VueRouter)

// 创建路由实例对象
const router = new VueRouter({
    // routes是一个数组，定义"hash"地址与"组件"之间的对应关系
    routes:[
        // 重定向路由
        {path:'/',redirect:'/home'},
        {path:'/home',component:Home},
        // 可以用:来动态设置路由
        // 为当前路由开启props传参
        {path:'/movie/:id',component:Movie,props:true},
        { // about 页面路由规则
            path:'/about',
            component:About,
            children:[//about页面的子路由规则
            // 在这里不用加/号
            // 在子路由中重定向
            // 也可以设置默认子路由，把path值置空即可
                {path:'/',redirect:'tab1'},
                {path:'tab1',component:Tab1},
                {path:'tab2',component:Tab2}
        ]
        },
        {path:'/login',component:Login},
        {path:'/main',component:Main}
    ]
})

// 为router实例对象声明全局前置导航守卫
// 只要发生路由跳转，必定触发beforeEach指定的function回调函数
// function中接收三个形参，分别为将要访问的路由的信息对象
// 将要离开的路由的信息对象
// next（）表示放行
router.beforeEach(function(to,from,next){
// next()跳转有三种方式
    // 1.next()直接放行
    // 2.next('/login)没有访问权限强制跳转到登陆页面
    // 3.next(false)没有访问权限强制停留在本页面
   
    // 登录判断逻辑
    // 1.先拿到用户将要访问的hash地址
    // 2.判断hash地址是否等于/main
    // 3.若等于，则判断是否登录
    // 若不等于，直接放行
    if(to.path === '/main'){
        const token = localStorage.getItem('token')
        if(token){
            next()
        }else{
            next('/login')
        }
    }else{
        next();
    }
})

export default router