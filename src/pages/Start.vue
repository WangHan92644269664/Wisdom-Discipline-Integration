<template>
    <div>
      <div class="container">
        <div id="particles"></div>
      </div>
      <div class="enter">
        <div class="logo">
          <h1>智慧戒管一体化平台</h1>
          <router-link to="/login">点击登录>></router-link>
        </div>
      </div>
    </div>
</template>

<script>
  import particles from 'particles.js'
    export default {
        name: "Start1",
      mounted(){
          particlesJS.load('particles','../../static/particles.json')
      }
    }
</script>

<style scoped>
  @import "../assets/css/index/index.css";
#particles{
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #000;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50% 50%;

}
</style>
