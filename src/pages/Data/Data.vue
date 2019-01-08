<template>
   <div>
       <div class="content" id="content" ref="homePage">
111
       </div>
   </div>
</template>
<script>
export default {
  name: "Data",
  data() {
    return {
      screenHeight: document.documentElement.clientHeight, //屏幕高度
     
    };
  },
  components: {
   
  },
  mounted() {
    var _this = this;
    //页面加载时赋值id全屏高度
    var oIframe = document.getElementById("content");
    oIframe.style.height = document.documentElement.clientHeight + "px";
    window.onresize = function() {
      // 定义窗口大小变更通知事件
      _this.screenHeight = document.documentElement.clientHeight; //窗口高度
    };
    //echart操作
    const vm = this;
    vm.$nextTick(() => {});
  },
  watch: {
    screenHeight: function(val) {
      //监听屏幕高度变化
      var oIframe = document.getElementById("content");
      oIframe.style.height = Number(val) + "px"; //'120'是页面布局调整，可去除
    }
  },
  created() {

  },
  methods: {}
};
</script>
<style scoped>
.content{
    width:100%;
    height: 100%;
    background:url('../../assets/images/data_bg.png') no-repeat;
}
</style>
