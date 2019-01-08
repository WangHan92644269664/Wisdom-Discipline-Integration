<template>
  <el-container>
    <el-header style="background: #181818;box-shadow: 4px 0 20px rgba(0,0,0,0.3);height: 70px;">
      <el-row>
        <el-col :xl="7" :lg="5" style="color:#fdfdfd;text-align: left;line-height: 70px;height: 70px;font-size:27px">
          <img :src="left" alt="" style="margin-right: 10px;">智慧戒管一体化平台
        </el-col>
        <el-col :xl="14" :lg="16"  style="text-align: center;margin:0 auto;" id="two">
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#181818"
            text-color="#fff"
            active-text-color="#007eff" router>
            <el-menu-item index="/" class="left">首页</el-menu-item>
            <el-menu-item index="/anfang">安防平台</el-menu-item>
            <el-menu-item index="/portrayal">人员面像平台</el-menu-item>
            <el-menu-item index="/zongzhi">戒治综合平台</el-menu-item>
            <el-menu-item index="/data">大数据平台</el-menu-item>
            <el-menu-item index="/gis">GIS平台</el-menu-item>
            <el-menu-item index="/daily">日常办公平台</el-menu-item>
          </el-menu>
        </el-col>
        <el-col :xl="3" :lg="3" id="three" style="padding-right: 35px;">
          <el-row style="padding-top: 15px;">
            <el-col :span="5">
              <img :src="header" height="40px" style="border-radius: 50%">
            </el-col>
            <el-col :span="13" :offset="1" style="color:#fff;font-size:12px;line-height: 40px;">
             管理员 : 黄佩珊
            </el-col>
            <el-col :span="2" :offset="1">
              <el-button type="primary" id="headerBtn">退出</el-button>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-header>
  </el-container>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        activeIndex: '/working',
        header:require('./images/header.jpg'),
        left:require('./images/logo.png')
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
    },
  }
</script>

<style scoped>
.el-menu{
  height: 70px!important;
  border-bottom: none!important;
}
#headerBtn{
  background: #777;
  font-size:14px;
  color:#17232f;
  border:none;
  font-weight: bolder;
  padding: 8px 13px;
 position: relative;
  top: 4px;
}
  .el-menu--horizontal > .el-menu-item {
    line-height: 70px;
    height: 70px;
    font-size: 16px;
  }

  .el-menu--horizontal > .el-menu-item.is-active {
    border-bottom:5px solid #007eff!important;
    background: none !important;
    font-weight: bolder;
  }

  .iconfont {
    color: #fff;
    font-size: 20px;
  }
  .el-menu-item[data-v-61dd7a3d]{
    padding: 0 30px;
  }
  @media screen and (max-width: 1720px){
    .el-menu-item[data-v-61dd7a3d]{
      padding: 0 28px!important;
    }
  }
  @media screen and (max-width: 1500px){
    .el-menu-item[data-v-61dd7a3d]{
      padding: 0 25px!important;
    }
  }
  @media screen and (max-width: 1400px){
    .el-menu-item[data-v-61dd7a3d]{
      padding: 0 23px!important;
    }
  }
  @media screen and (max-width: 1366px){
    .el-menu-item[data-v-61dd7a3d]{
      padding: 0 20px!important;
    }
  }
</style>
