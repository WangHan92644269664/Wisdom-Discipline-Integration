<template>
  <el-container id="wrapper">
    <!--主体内容的侧边栏-->
    <el-aside width="200px">
      <!--左侧侧边栏组件-->
     <Aside></Aside>
    </el-aside>
    <el-container>
      <!--子路由显示的地方-->
      <router-view/>
    </el-container>
  </el-container>
</template>

<script>

  import Aside from '../../components/Portrayal/PortrayalAside'
  export default {
    data() {
      return {
        screenHeight: document.documentElement.clientHeight //屏幕高度
      }
    },
    components: {
      Aside
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
  .el-aside{
    height: 100%!important;
  }
  .el-container{
    height: 100%;
  }
</style>
