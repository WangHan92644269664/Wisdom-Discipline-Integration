<template>
  <div>
    <div class="content" id="content" ref="homePage">
      <div class="header">
        <img src="../../assets/images/title.png" alt>
      </div>
      <span class="back-index" @click="go">返回首页</span>
      <div class="main-view">
        <el-col class="common-height" :span="6">
          <div class="bili-chart">
            <Pie3DChart class="pie3DChart" :id="id"/>
          </div>
          <div class="data-table">
            <TableCompent/>
          </div>
          <div class="common-chart">
            <span class="chart-title">学院年龄分布</span>
            <BarChart
              :chartData="chartData1"
              :chartYdata="chartYdata1"
              :colorZero="colorZero1"
              :colorHalf="colorHalf1"
              :colorAll="colorAll1"
              :xName="xName1"
              :yName="yName1"
            />
          </div>
        </el-col>
        <el-col class="common-height" :span="12">
          <div class="data-info">
            <div class="auto-data">
              <div class="info-top">
                <el-col :span="8">
                  <h5>现有学员总数</h5>
                  <div class="data-number">
                    <span>2</span>
                    <span>6</span>
                    <span>5</span>
                    <span>3</span>
                    人
                  </div>
                </el-col>
                <el-col :span="8">
                  <h5>全年日均人数</h5>
                  <div class="data-number">
                    <span>2</span>
                    <span>6</span>
                    <span>5</span>
                    <span>3</span>
                    人
                  </div>
                </el-col>
                <el-col :span="8">
                  <h5>累计戒治人数</h5>
                  <div class="data-number">
                    <span>2</span>
                    <span>6</span>
                    <span>5</span>
                    <span>3</span>
                    人
                  </div>
                </el-col>
              </div>
              <div class="info-bottom">
                <div class="info-type">
                  <div class="info-img">
                    <img src="../../assets/images/icon1.png" alt="">
                  </div>
                  <div class="info-unit">
                    <span class="type-name">建筑物</span>
                    <br>
                    <span class="type-number">20 <i>栋</i></span>
                  </div>


                </div>
                <div class="info-type">
                  <div class="info-img">
                    <img src="../../assets/images/icon2.png" alt="">
                  </div>
                  <div class="info-unit">
                    <span class="type-name">部件</span>
                    <br>
                    <span class="type-number">10 <i>件</i></span>
                  </div>
                </div>
                <div class="info-type">
                  <div class="info-img">
                    <img src="../../assets/images/icon3.png" alt="">
                  </div>
                  <div class="info-unit">
                    <span class="type-name">走访</span>
                    <br>
                    <span class="type-number">10 <i>件</i></span>
                  </div>
                </div>
                <div class="info-type">
                  <div class="info-img">
                    <img src="../../assets/images/icon4.png" alt="">
                  </div>
                  <div class="info-unit">
                    <span class="type-name">事件</span>
                    <br>
                    <span class="type-number">14 <i>件</i></span>
                  </div>
                </div>
                <div class="info-type">
                  <div class="info-img">
                    <img src="../../assets/images/icon1.png" alt="">
                  </div>
                  <div class="info-unit">
                    <span class="type-name">组织</span>
                    <br>
                    <span class="type-number">12 <i>个</i></span>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div class="map-chart">
            <MapChart/>
          </div>
          <div class="common-chart1">
            <span class="chart-title1">一周内探访次数柱状图</span>
            <HunheChart
              :xData="xData1"
              :hunheXname="hunheXname1"
              :hunheYname="hunheYname1"
              :seriesData="seriesData1"
            />
          </div>
        </el-col>
        <el-col class="common-height" :span="6">
          <div class="common-chart">
            <span class="chart-title">学院总数统计图</span>
            <BarChart
              :chartData="chartData2"
              :chartYdata="chartYdata2"
              :colorZero="colorZero2"
              :colorHalf="colorHalf2"
              :colorAll="colorAll2"
              :xName="xName2"
              :yName="yName2"
            />
          </div>
          <div class="common-chart">
            <span class="chart-title">新增学院统计图</span>
            <BarChart
              :chartData="chartData3"
              :chartYdata="chartYdata3"
              :colorZero="colorZero3"
              :colorHalf="colorHalf3"
              :colorAll="colorAll3"
              :xName="xName3"
              :yName="yName3"
            />
          </div>
          <div class="common-chart">
            <span class="chart-title">学员复吸率统计图</span>
            <HunheChart
              :xData="xData2"
              :hunheXname="hunheXname2"
              :hunheYname="hunheYname2"
              :seriesData="seriesData2"
            />
          </div>
        </el-col>
      </div>
    </div>
  </div>
</template>
<script>
import echarts from "echarts";
import Pie3DChart from "../../components/Data/Pie3Dchart";
import TableCompent from "../../components/Data/TableComponent";
import BarChart from "../../components/Data/BarChart";
import MapChart from "../../components/Data/MapChart";
import HunheChart from "../../components/Data/HunheChart";
export default {
  name: "Data",
  data() {
    return {
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      id: "biliChart",
      chartData1: ["18-25", "25-35", "35-45", "45-55", "55-65", "65-75"],
      chartYdata1: [500, 1000, 2500, 2000, 250, 100],
      colorZero1: "#00ccff",
      colorHalf1: "#0088ff",
      colorAll1: "#004aff",
      xName1: "年龄",
      yName1: "学员",
      chartData2: ["2015", "2016", "2017", "2018"],
      chartYdata2: [500, 1000, 2500, 2000],
      colorZero2: "#ab01ff",
      colorHalf2: "#5225ff",
      colorAll2: "#0347ff",
      xName2: "数量",
      yName2: "类型",
      chartData3: ["2015", "2016", "2017", "2018"],
      chartYdata3: [500, 1000, 2500, 2000],
      colorZero3: "#17c947",
      colorHalf3: "#0f9c86",
      colorAll3: "#0876bd",
      xName3: "数量",
      yName3: "类型",
      chartData4: ["18-25", "25-35", "35-45", "45-55", "55-65", "65-75"],
      chartYdata4: [500, 1000, 2500, 2000, 250, 100],
      colorZero4: "#00ccff",
      colorHalf4: "#0088ff",
      colorAll4: "#004aff",
      xName4: "年龄",
      yName4: "学员",
      xData1: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      hunheXname1: "数量",
      hunheYname1: "类型",
      seriesData1: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          itemStyle: {
            normal: {
              color:"rgba(1,119,255,1)"
            }
          }
        },
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "line",
          symbol: "circle",
          symbolSize: 8,
          itemStyle: {
            normal: {
              color: "#ff9501",
              lineStyle: {
                color: "#ff9501",
                width: 2
              }
            }
          }
        }
      ],
       xData2: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      hunheXname2: "数量",
      hunheYname2: "类型",
      seriesData2: [
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "bar",
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "#fd8f00"
                },
                { offset: 0.5, color: "#b36500" },
                {
                  offset: 1,
                  color: "#623700"
                }
              ]),
              opacity: 1
            }
          }
        },
        {
          data: [120, 200, 150, 80, 70, 110, 130],
          type: "line",
          symbol: "circle",
          symbolSize: 8,
          itemStyle: {
            normal: {
              color: "#008afe",
              lineStyle: {
                color: "#008afe",
                width: 2
              }
            }
          }
        }
      ]
    };
  },
  components: { Pie3DChart, TableCompent, BarChart, MapChart, HunheChart },
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
  methods: {
    go(){
      this.$router.push('/home')
    }
  }
};
</script>
<style scoped>
.content {
  width: 100%;
  height: 100%;
  background: url("../../assets/images/data_bg.png") no-repeat;
  background-size: 100% 100%;
  color: #fff;
  /* overflow: hidden; */
}
.header {
  padding: 30px 0 0;
}
.header img {
  width: auto;
}
.back-index {
  color: #fff;
  position: absolute;
  top: 50px;
  left: 50px;
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
  width: calc(100% - 60px);
  height: calc(100% - 138px);
  padding: 30px;
}
.common-height {
  height: 100%;
  overflow: hidden;
}
.bili-chart {
  height: 27%;
  background: url("../../assets/images/bili_bg.png") no-repeat;
  background-size: 100% 100%;
  width: 90%;
  margin: 0 auto;
}
.bili-chart div {
  height: 90%;
  padding-top: 6%;
}
.common-chart {
  height: 33.3%;
  width: 90%;
  margin: 0 auto;
  background: url("../../assets/images/common_bg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
}
.common-chart1 {
  height: 33.3%;
  width: 100%;
  margin: 0 auto;
  background: url("../../assets/images/middle_botton_bg.png") no-repeat;
  background-size: 100% 100%;
  position: relative;
  margin-top: 2%;
}
.common-chart div,
.common-chart1 div {
  height: calc(100% - 36px);
}
.chart-title {
  display: block;
  width: 44%;
  height: 28px;
  background: url("../../assets/images/comm_title.png") no-repeat;
  background-size: 100% 100%;
  margin-left: 20px;
  line-height: 28px;
}
.chart-title1 {
  display: block;
  width: 25%;
  height: 28px;
  background: url("../../assets/images/large_title.png") no-repeat;
  background-size: 100% 100%;
  margin-left: 10%;
  line-height: 28px;
}
.map-chart {
  height: 42%;
  background: url("../../assets/images/map_bg.png") no-repeat;
  background-size: 100% 100%;
  margin-top: 2%;
}
.map-chart div {
  height: 100%;
}
.data-info {
  height: 20%;
}
.data-table {
  height: 36.5%;
  background: url("../../assets/images/daiban_bg.png") no-repeat;
  background-size: 100% 100%;
  width: 90%;
  margin: 15px auto;
  margin-top: 2%;
}
.data-number {
  color: #01a7fe;
  font-size: 12px;
  padding: 0;
}
.data-number span {
  font-size: 24px;
  font-weight: bold;
  border: 1px solid #094183;
  margin: 0 0 0 -4px;
  padding: 0 4px;
}

.info-type{
  width:20%;
  float: left;
  margin-top:10px;
}
.info-img,.info-unit{
  display:inline-block;
}
.info-unit{
  vertical-align: top;
}
.type-name{
  font-size: 18px;

}
.type-number{
  font-size: 18px;
  color:#ff9600;
}
.type-number i{
  font-style: normal;
  font-size: 12px;
}
@media screen and (min-width: 1921px)
{
  .header {
    padding-top:2%;
  }
  .data-info{
    position:relative;
  }
  .auto-data{
    width:100%;
    height: 50%;
    position:absolute;
    top:50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
}
</style>
