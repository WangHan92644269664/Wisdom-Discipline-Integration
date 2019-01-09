<template>
  <el-container id="content" ref="homePage">
    <!--主体内容的侧边栏-->
    <el-aside width="200px">
      <!--左侧侧边栏组件-->
      <Aside></Aside>
    </el-aside>
    <el-container class="main-right">
      <!--子路由显示的地方-->
      <router-view/>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "../../components/Jiezhi/JieZhiAside";
export default {
  data() {
    return {
      screenHeight: document.documentElement.clientHeight //屏幕高度
    };
  },
  components: {
    Aside
  },
  methods: {},
  mounted() {
    var _this = this;
    //页面加载时赋值id全屏高度
    var oIframe = document.getElementById("content");
    oIframe.style.height = document.documentElement.clientHeight - 70 + "px";
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      _this.screenHeight = document.documentElement.clientHeight; //窗口高度
    };
    // //echart操作
    const vm = this;
    vm.$nextTick(() => {});
  },
  watch: {
    screenHeight: function(val) {
      //监听屏幕高度变化
      var oIframe = document.getElementById("content");
      oIframe.style.height = Number(val) - 70 + "px"; //'70'是页面布局调整，可去除
    }
  }
};
</script>
<style scoped>
#content {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: #040c19;
  color:#fff;
}
.el-aside {
  background: #191d43;
  height: 100%;
}
.el-menu{
  border-right: none;
}
.main-right {
  padding: 35px;
  height: 100%;
}
.main-right div {
  height: 100%;
  width:100%;
  background: #191d43;
}
</style>
