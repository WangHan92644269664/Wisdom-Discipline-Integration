<template>
  <div>
    <div class="content" id="content" ref="homePage">
      <div class="header">
        <img src="../../assets/images/title.png" alt>
      </div>
      <span class="back-index">返回首页</span>
      <div class="main-view common-height">
        <el-col class="common-height" :span="6">
          <div class="bili-chart">
            <Pie3DChart class="pie3DChart" :id="id"/>
          </div>
          <div class="data-table">
            <TableCompent/>
          </div>
          <div class="common-chart">
              <BarChart :chartData ="chartData1"/>
          </div>
        </el-col>
        <el-col class="common-height" :span="12">
          <div class="data-info">1</div>
          <div class="map-chart">1</div>
          <div class="common-chart">1</div>
        </el-col>
        <el-col class="common-height" :span="6">
          <div class="common-chart">1</div>
          <div class="common-chart">1</div>
          <div class="common-chart">1</div>
        </el-col>
      </div>
    </div>
  </div>
</template>
<script>
import Pie3DChart from "../../components/Data/Pie3Dchart";
import TableCompent from "../../components/Data/TableComponent";
import BarChart from "../../components/Data/BarChart"
export default {
  name: "Data",
  data() {
    return {
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      id: "biliChart",
      chartData1 :[100,123,112,124,132,121,114]
    };
  },
  components: { Pie3DChart, TableCompent,BarChart },
  mounted() {
    var _this = this;
    //页面加载时赋值id全屏高度
    var oIframe = document.getElementById("content");
    oIframe.style.height = document.documentElement.clientHeight + "px";
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
      oIframe.style.height = Number(val) + "px"; //'120'是页面布局调整，可去除
    }
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
.content {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/data_bg.png") no-repeat;
  background-size: 100% 100%;
  color: #fff;
  overflow: hidden;
}
.header {
  padding: 30px 0;
}
.header img {
  width: auto;
}
.back-index {
  color: #fff;
  position: absolute;
  top: 50px;
  left: 200px;
  display: inline-block;
  width: 100px;
  height: 40px;
  background: url("../../assets/images/backIndex_1.png") no-repeat;
  background-size: 100% 100%;
  line-height: 40px;
}
.back-index:hover {
  background: url("../../assets/images/back_index_2.png") no-repeat;
  background-size: 100% 100%;
}
.main-view {
  width: 100%;
  height: 100%;
  padding: 30px;
}
.common-height {
  height: calc(100% - 108px);
}
.bili-chart {
  height: 28%;
  background: url("../../assets/images/bili_bg.png") no-repeat;
  background-size: 100% 100%;
  width: 90%;
  margin: 0 auto;
}
.bili-chart div {
  height: 90%;
  padding-top: 6%;
}
.data-table {
  height: 40%;
}
.common-chart {
  height: 32%;
}
.common-chart div{
    height: 100%;
}
.map-chart {
  height: 46%;
}
.data-info {
  height: 20%;
}
.data-table {
  background: url("../../assets/images/daiban_bg.png") no-repeat;
  background-size: 100% 100%;
  width: 90%;
  margin: 1% auto;
}
</style>
