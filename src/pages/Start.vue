<template>
  <div  id="start" >
      <div  class="login" >
        <div>
          <img  src="../assets/images/开场动画_灰.gif" alt="" >
          <p>智慧戒管一体化平台</p>
        </div>
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
        style="height: 100vh"
      >
      </vue-particles>
    </div>

</template>

<script>
  export default {
    name: "Start",
    data() {
      return {
        screenHeight: document.documentElement.clientHeight //屏幕高度
      };
    },
  }
</script>
<style>
  #start{
    height:100%;
    overflow: hidden;
    position: relative;
  }
  #particles-js>canvas{
    height: 100vh!important;
  }
  #start{
    background: #000!important;
  }

  @media only screen and (max-width:1920px)
  {
    #start{
      height:100%;
      overflow: hidden;
    }
  }
</style>
<style scoped>
.login{
  position: absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%);
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
   position:fixed;
   right: 8%;
   bottom: 10%;
  }

</style>
