<template>
    <main>
        <!-- 通过路由控制 -->
        <h1>{{title}}</h1>
        <router-view></router-view>
    </main>
</template>

<script>
    //导出组件配置
    export default {
     data(){
       return{
          title:'hello world!'
       }
     }
    }
</script>

<style scoped>
    h1{
      font-size: 30px;
      color:red;
    }
</style>
