<template>
  <div>
    <div class="container">
      <div id="particles-js"></div>
    </div>
    <div class="sun">
      <div class="earth"></div>
      <div class="other"></div>
    </div>
    <div class="enter">
      <div class="logo">
        <img class="logoimg" src="../assets/images/开场动画_灰.gif" alt="">
        <h1>贵阳市第一戒毒所</h1>
          <h2>智慧戒管数字智慧平台</h2>
       <router-link to="/home">登录进入</router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import $ from 'jquery'
  import '../assets/css/normalize.css'
  import '../assets/css/style.css'
  export default {
    name: "Start",
    methods: {

    },
    created(){
      $('.enter').click(function(){

      })
    }
  }
</script>

<style scoped>

</style>
