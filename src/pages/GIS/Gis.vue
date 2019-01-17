<template>
  <div id="content" ref="homePage">
    <div class="main">
      <el-col class="common-height left-div" :span="4">
        <h4 class="left-title">监所区域信息11</h4>
        <p>
          <span class="p-left">人员总数</span>
          <span class="p-right">2341</span>
        </p>
        <p>
          <span class="p-left">建筑总数</span>
          <span class="p-right">14</span>
        </p>
        <p>
          <span class="p-left">宿舍总数</span>
          <span class="p-right">433</span>
        </p>
        <p>
          <span class="p-left">工厂车间</span>
          <span class="p-right">7</span>
        </p>
        <p>
          <span class="p-left">鹰眼</span>
          <span class="p-right">2</span>
        </p>
        <p>
          <span class="p-left">视频监控</span>
          <span class="p-right">2101</span>
        </p>
        <p>
          <span class="p-left">人像卡口</span>
          <span class="p-right">241</span>
        </p>
        <p>
          <span class="p-left">抓拍人数</span>
          <span class="p-right">2111</span>
        </p>
        <p>
          <span class="p-left">警员数量</span>
          <span class="p-right">33</span>
        </p>
        <p>
          <span class="p-left">巡逻车辆</span>
          <span class="p-right">2</span>
        </p>
        <p>
          <span class="p-left">重点区域</span>
          <span class="p-right">3</span>
        </p>
        <p>
          <span class="p-left">高分预警人数</span>
          <span class="p-right">18</span>
        </p>
      </el-col>
      <el-col class="common-height middle-div" :span="16">
        <MainChart/>
      </el-col>
      <el-col class="common-height right-div" :span="4">
        <div class="liquid">
          <LiquidChart/>
        </div>
        <div class="data-info">
          <h4>值班人员信息</h4>
          <ul >
            <li class="first-li">
              <span class="li-left">巡逻人员</span>
              <span class="li-middle">工作时间</span>
              <span class="li-right">信息</span>
            </li>
            <li>
              <span class="li-left">李某</span>
              <span class="li-middle">11:27</span>
              <span class="li-right">未见异常</span>
            </li>
            <li>
              <span class="li-left">张某</span>
              <span class="li-middle">21:12</span>
              <span class="li-right">集众斗殴</span>
            </li>
            <li>
              <span class="li-left">田某</span>
              <span class="li-middle">17:21</span>
              <span class="li-right">未见异常</span>
            </li>
            <li>
              <span class="li-left">陈某</span>
              <span class="li-middle">13:24</span>
              <span class="li-right">未见异常</span>
            </li>
          </ul>
        </div>
        <div class="percent-div">
          <PercentChart/>
        </div>
        <div class="qushi">
          <BLLineChart :xData="xData1" :seriesData="seriesData1"/>
        </div>
        <div class="select-area">
            <BLBarL/>
        </div>
      </el-col>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import MainChart from "../../components/GIS/MainChart";
import LiquidChart from "../../components/GIS/LiquidCharts";
import PercentChart from "../../components/GIS/PercentChart";
import BLLineChart from "../../components/GIS/BLLineChart";
import BLBarL from "../../components/GIS/BLBarLongitudinal";

export default {
  components: { MainChart, LiquidChart, PercentChart, BLLineChart,BLBarL },
  data() {
    return {
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      xData1: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      hunheXname1: "数量",
      hunheYname1: "类型",
      seriesData1: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "line",
          symbol: "circle",
          symbolSize: 8,
          itemStyle: {
            normal: {
              color: "#26b2bd",
              lineStyle: {
                color: "#26b2bd",
                width: 2,
                type: "dotted"
              }
            }
          }
        }
      ]
    };
  },
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
      oIframe.style.height = Number(val) - 70 + "px"; //'120'是页面布局调整，可去除
    }
  }
};
</script>
<style scoped>
* {
  margin: 0;
  color: #fff;
}
ul,
li {
  list-style: none;
}
#content {
  width: 100%;
  height: 100%;
  background: #060723;
}
.main {
  padding: 35px;
  width: calc(100% - 70px);
  height: calc(100% - 70px);
}
.common-height {
  height: 100%;
}
.left-div,
.right-div {
  background: #151948;
}
.left-title {
  margin-top: 20px;
  margin-bottom: 30px;
}
.left-div p {
  text-align: left;
  padding-left: 18%;
  height: 7%;
}
.p-left {
  display: inline-block;
  width: 58%;
}
.p-right {
  color: #01dde8;
}
.middle-div {
  background: #0a0a0a;
}
.middle-div div {
  height: 100%;
}
.liquid {
  height: 20%;
}

.liquid div {
  height: 100%;
}
.data-info {
  height: 27%;
  width: 100%;
}
.data-info h4 {
  margin-bottom: 20px;
}
.data-info ul {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: auto;
}
.data-info ul li {
  width: 100%;
  padding: 1% 0;
}
.data-info li span {
  display: inline-block;
  width: 30%;
}
.first-li span {
  color: #00eaf2;
}
.percent-div {
  height: 15%;
}
.percent-div h4 {
  margin-top: 20px;
}
.percent-div div {
  height: 100%;
}
.qushi {
  height: 22%;
}
.qushi div {
  height: 100%;
}
.select-area{
    height: 18%;
}
.select-area div{
    height: 100%;
}
</style>


