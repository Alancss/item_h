//导入受路由控制的组件
import HomeComponent from '../component/home/Home.vue';
import LoginComponent from '../component/login/Login.vue';

//导入路由配置
export default{
    routes:[
       //首页路由设置
       {path:'/',redirect:"/home"},
       {name:"h",path:"/home",component:HomeComponent},
       //登录路由配置
       {name:"l",path:"./login",component:LoginComponent},
    ]
};