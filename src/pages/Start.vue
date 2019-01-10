<template>
  <div style="background: #000;height:100%">
    <div class="login" >
        <img  src="../assets/images/开场动画_灰.gif" alt="">
          <p>智慧戒管一体化平台</p>
    </div>
    <el-row>
      <el-col :span="8" :offset="16" style="float: right">
        <router-link to="/login">点击登录>></router-link>
      </el-col>
    </el-row>
    <vue-particles
      color="#00FEFE"
      :particleOpacity="0.8"
      :particlesNumber="40"
      shapeType="circle"
      :particleSize="4"
      linesColor="#ccc"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="3"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
  export default {
    name: "Start",
    methods: {

    },
  }
</script>
<style>
  #particles-js>canvas{
    height: 1100px!important;
  }
</style>
<style scoped>
.login{
  position: absolute;
  top: 22%;
  left:35%;
}
  .login p{
    color:#f8f8f8;
    font-size:31px;

    position: relative;
    top: -350px;
  }
 a{
    font-size:18px;
    background-size: 100% 100%;
    padding: 15px 30px;
    text-decoration: none;
    color:#00caff;
    border:1px solid rgb(0,149,255);
    border-radius: 7px;
    box-shadow: 2px 2px 10px #333 inset;
    font-weight: bolder;
   position: fixed;
   bottom:70px;
   right: 60px;
  }

</style>
