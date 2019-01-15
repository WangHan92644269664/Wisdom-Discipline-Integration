<template>
  <el-container id="wrapper">
    <el-header style="background: #181818;box-shadow: 4px 0 20px rgba(0,0,0,0.3);height: 70px;">
      <el-row>
        <el-col :span="24" style="color:#fdfdfd;text-align: left;line-height: 70px;height: 70px;font-size:27px">
          <img :src="left" alt="" style="margin-right: 10px;">智慧戒管一体化平台
        </el-col>
      </el-row>
    </el-header>
    <el-main class="home">
      <el-row class="wrapper first">
        <el-col :span="8" >
          <div class="bg1 bg"  @click="change('/anfang')">
            <img :src="small1" alt="">
            <p>安防平台</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bg2 bg"  @click="change('/portrayal')">
            <img :src="small2" alt="">
            <p>人员画像平台</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bg3 bg"  @click="change('/zongzhi')">
            <img :src="small3" alt="">
            <p>戒治综合平台</p>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="5"><img :src="shadow" alt=""></el-col>
        <el-col :span="5"><img :src="shadow" alt=""></el-col>
        <el-col :span="5"><img :src="shadow" alt=""></el-col>
      </el-row>
      <el-row class="wrapper">
        <el-col :span="8">
          <div class="bg4 bg"  @click="change('/data')">
            <img :src="small4" alt="">
            <p>大数据融合展示平台</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bg5 bg"  @click="change('/gis')">
            <img :src="small5" alt="">
            <p>GIS平台</p>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="bg6 bg"  @click="change('/daily')">
            <img :src="small6" alt="">
            <p>日常办公平台</p>
          </div>
        </el-col>
      </el-row>
      <el-row type="flex" justify="space-around">
        <el-col :span="5"><img :src="shadow" alt=""></el-col>
        <el-col :span="5"><img :src="shadow" alt=""></el-col>
        <el-col :span="5"><img :src="shadow" alt=""></el-col>
      </el-row>
    </el-main>
  </el-container>
</template>

<script>
  import Bus from '../assets/js/bus'
  export default {
    name: "Home",
    data() {
      return {
        left: require('./images/home/logo.png'),
        shadow: require('./images/home/shadow.png'),
        small1: require('./images/home/small1.png'),
        small2: require('./images/home/small2.png'),
        small3: require('./images/home/small3.png'),
        small4: require('./images/home/small4.png'),
        small5: require('./images/home/small5.png'),
        small6: require('./images/home/small6.png'),
        screenHeight: document.documentElement.clientHeight //屏幕高度
        }},
        methods:{
          change(url) {
            this.$router.push({path:url})
            Bus.$emit('activeIndex',url)
          }
        },
        mounted() {
          var _this = this;
          //页面加载时赋值id全屏高度
          var oIframe = document.getElementById("wrapper");
          oIframe.style.height = document.documentElement.clientHeight+ "px";
          window.onresize = function() {
            // 定义窗口大小变更通知事件
            _this.screenHeight = document.documentElement.clientHeight; //窗口高度
          };
          const vm = this;
          //刷新页面的时候会触发
          vm.$nextTick(() => {});
      },
        watch: {
          screenHeight: function(val) {
            //监听屏幕高度变化
            var oIframe = document.getElementById("wrapper");
            oIframe.style.height = Number(val) + "px";
          }
        }
  }
</script>

<style scoped>
  .wrapper {
    margin-top: 5%;
  }
  .first{
    margin-top: 8%;
  }

  .wrapper img {
    margin: 50px auto 0
  }

  .wrapper p {
    color: #fff;
    font-size: 26px;
    margin-top: 16px;
  }

  .wrapper .el-col {
    cursor: pointer;
    transition: margin-top .6s;
  }

  .wrapper .el-col:hover {
    margin-top: -20px;
  }

  .el-main {
    background: url("./images/home/bg.png");
    background-size: 100% 100%;
    height: 94vh;
  }

  .bg1 {
    background: url("./images/home/bg1.png") no-repeat;
    background-position: center center;
    height: 240px;
  }

  .bg2 {
    background: url("./images/home/bg2.png") no-repeat;
    background-position: center center;
    height: 240px;
  }

  .bg3 {
    background: url("./images/home/bg3.png") no-repeat;
    background-position: center center;
    height: 240px;
  }

  .bg4 {
    background: url("./images/home/bg4.png") no-repeat;
    background-position: center center;
    height: 240px;
  }

  .bg5 {
    background: url("./images/home/bg5.png") no-repeat;
    background-position: center center;
    height: 240px;
  }

  .bg6 {
    background: url("./images/home/bg6.png") no-repeat;
    background-position: center center;
    height: 240px;
  }
  @media only screen and (min-width: 2560px)
  {
  .first{
    margin-top:14%!important;
  }
  }
</style>
