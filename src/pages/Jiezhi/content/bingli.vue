<template>
  <div>
    <h4 class="bingli-title">人员电子病历</h4>
    <el-col class="common-height" :span="4">
      <div class="left-div bingli-head">
        <div class="head-info">
          <img
            style="display:block;margin:0 auto;"
            src="../../../assets/images/jiezhi/bingli/ceshiicon.png"
            alt
          >
          <span class="people-name">张勇</span>
        </div>
        <p>年龄:26岁</p>
        <p>人员来源:自愿入所戒毒</p>
        <p>进所时间:2017年6月2日</p>
        <p>历史体检次数：6</p>
      </div>
      <div class="left-div personal-info">
        <h4>个人信息</h4>
        <p>
          <span class="p-left">心理数据</span>
          <span class="p-right">23</span>
        </p>
        <p>
          <span class="p-left">生理数据</span>
          <span class="p-right">14</span>
        </p>
        <p>
          <span class="p-left">人际管理</span>
          <span class="p-right">455</span>
        </p>
        <p>
          <span class="p-left">行为情况</span>
          <span class="p-right">72</span>
        </p>
      </div>
      <div class="left-div shengli-info">
        <h4>生理数据</h4>
        <p>
          <span class="p-left">心跳</span>
          <span class="p-right">88</span>
        </p>
        <p>
          <span class="p-left">收缩压</span>
          <span class="p-right">133</span>
        </p>
        <p>
          <span class="p-left">舒张压</span>
          <span class="p-right">75</span>
        </p>
        <p>
          <span class="p-left">呼吸</span>
          <span class="p-right">22</span>
        </p>
        <p>
          <span class="p-left">体温</span>
          <span class="p-right">37.1</span>
        </p>
      </div>
    </el-col>
    <el-col class="common-height" :span="6">
      <div class="table-area">
        <h4>护理记录</h4>
        <TabCompoent/>
      </div>
      <div class="left-chart">
        <HunHe :xData="xData1" :seriesData="seriesData1" :chartTitle="chartTitle1"/>
      </div>
      <div class="left-chart">
        <HunHe :xData="xData2" :seriesData="seriesData2" :chartTitle="chartTitle2"/>
      </div>
    </el-col>
    <el-col class="common-height" :span="7">
      <div class="ai-top">
        <img src="../../../assets/images/jiezhi/DNA.gif" alt>
      </div>
      <div class="ai-bottom">
        <div class="fangan">
          <div class="fangan-button">戒毒<br>方案</div>
        </div>
        <img src="../../../assets/images/jiezhi/3D_peopel.gif" alt>
      </div>
    </el-col>
    <el-col class="common-height" :span="7">
      <div class="huizhen">
        <h4>会诊记录</h4>
        <TabHuiZ/>
      </div>
      <div class="yibiao-chart">
        <YiBiao></YiBiao>
      </div>
      <div class="fengXian">
        <el-col class="fx-div fx-left" :span="8">
          <PieChart/>
        </el-col>
        <el-col class="fx-div fx-right" :span="16">
          <ColorfulBar/>
        </el-col>
        <div class="fx-info">
          <p class="fx-info-p">
            长期的高血压可诱发脑卒中。建议控制体重，减少食盐的摄入等方式控制血压。
            单纯的药物是无法很好地控制的，
            因为血脂高的根源还是在饮食生活习惯上：先从饮食，生活习惯上控制。
          </p>
        </div>
      </div>
    </el-col>
  </div>
</template>
<script>
import echarts from "echarts";
import TabCompoent from "../../../components/Jiezhi/TabCompoent";
import TabHuiZ from "../../../components/Jiezhi/TabHuiZ";
import HunHe from "../../../components/Jiezhi/HunheChart";
import YiBiao from "../../../components/Jiezhi/YibiaoChart";
import PieChart from "../../../components/Jiezhi/BingLiPie";
import ColorfulBar from "../../../components/Jiezhi/ColorfulBarChart";
export default {
  components: { TabCompoent, TabHuiZ, HunHe, YiBiao, PieChart, ColorfulBar },
  data() {
    return {
      chartTitle1: "历史生理健康数据",
      xData1: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      hunheXname1: "数量",
      hunheYname1: "类型",
      seriesData1: [
        {
          data: [120, 100, 250, 180, 70, 110, 130],
          type: "line",
          itemStyle: {
            normal: {
              color: "#f0166d",
              lineStyle: {
                color: "#f0166d",
                width: 2
              }
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
      ],
      chartTitle2: "历史行为异常数据",
      xData2: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      hunheXname2: "数量",
      hunheYname2: "类型",
      seriesData2: [
        {
          data: [8, 9, 7, 8, 10, 11, 14],
          type: "bar",
          barWidth: 30,
          itemStyle: {
            normal: {
              color: function(params) {
                var colorList = [
                  "rgba(255,132,0,1)",
                  "rgba(255,132,0,.5)",
                  "rgba(255,132,0,1)",
                  "rgba(255,132,0,.5)",
                  "rgba(255,132,0,1)",
                  "rgba(255,132,0,.5)",
                  "rgba(255,132,0,1)"
                ];
                return colorList[params.dataIndex];
              }
            }
          }
        }
      ]
    };
  }
};
</script>
<style scoped>
* {
  margin: 0;
}
.bingli-title {
  text-align: left;
  color: #0070ff;
  border-bottom: 1px solid #040c19;
  padding: 10px 0;
  margin: 0;
  padding-left: 20px;
}
.common-height {
  height: calc(100% - 42px);
}
.left-div {
  height: 32%;
  margin: 2% auto;
  width: 94%;
  border: 2px solid #040c19;
  border-radius: 5px;
}
.bingli-head p {
  text-align: left;
  padding-left: 22%;
  font-size: 12px;
  line-height: 22px;
}
.head-info {
  /* width: 130px;
  height: 95px;
  background-size: 100% 100%;
  margin: 3% auto;*/
  padding-top: 4%;
}
.head-info img {
  width: 36%;
  margin-top: 3%;
}
.people-name {
  color: #333;
  display: inline-block;
  background: #009cff;
  font-size: 14px;
  padding: 2px 6px;
  margin-top: 1%;
}
.personal-info h4,
.shengli-info h4 {
  margin-top: 10%;
  margin-bottom: 4%;
}
.personal-info p {
  text-align: left;
  padding-left: 20%;
  height: 20%;
}
.p-left {
  display: inline-block;
  width: 50%;
}
.p-right {
  padding-left: 20%;
  display: inline-block;
  /* width:80px; */
  color: #04d6e0;
}
.shengli-info p {
  text-align: left;
  padding-left: 20%;
  height: 15%;
}
.table-area {
  height: 38%;
  border: 2px solid #040c19;
  border-radius: 5px;
  margin-top: 2%;
}
.table-area div {
  height: calc(96% - 30px);
}
.table-area h4,
.huizhen h4 {
  color: #00c6ff;
  text-align: left;
  padding: 2% 0 2% 4%;
}
.huizhen {
  height: 25%;
  width: 96%;
  border: 2px solid #040c19;
  border-radius: 5px;
  margin-top: 2%;
}
.huizhen h4 {
}
.huizhen div {
  height: calc(100% - 50px);
}
.ai-top {
  height: 20%;
}
.ai-top img {
  width: 80%;
  margin-top: 10%;
}
.ai-bottom {
  height: 80%;
  position: relative;
}
.ai-bottom img {
  margin-top: 10%;
  width: 70%;
  height: 90%;
}
.fangan {
  width: 100px;
  height: 100px;
  background: url("../../../assets/images/jiezhi/fanga_bg.gif") no-repeat;
  background-size: 100% 100%;
  position: absolute;
  top: 15%;
  left: 20%;
}
.fangan-button {
  position: absolute;
  width: 50px;
  height: 50px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.left-chart {
  height: 28.5%;
  border: 2px solid #040c19;
  margin-top: 1.5%;
  border-radius: 5px;
}
.left-chart div {
  height: 100%;
}
.yibiao-chart {
  height: 35%;
  width: 96%;
  border: 2px solid #040c19;
  border-radius: 5px;
  margin-top: 2%;
}
.yibiao-chart div {
  height: 100%;
  width: 96%;
}
.fengXian {
  height: 34%;
  width: 96%;
  border: 2px solid #040c19;
  border-radius: 5px;
  margin-top: 2%;
}
.fx-div {
  height: 70%;
}
.fx-div div {
  height: 100%;
}
.fx-info {
  height: 30%;
}
.fx-info-p {
  text-align: left;
  padding: 0 20px;
  font-size: 14px;
}
@media screen and (min-width: 1921px) {
  * {
    font-size: 18px;
  }
  .head-info img {
    width: 50%;
    height: 40%;
  }
  .bingli-head p {
    font-size: 18px;
    height: 10%;
  }
  .people-name {
    font-size: 18px;
  }
}
@media screen and (min-height: 588px) {
  .head-info img{
    width:25%;
  }
  .people-name{
    padding:0 4px;
    font-size: 12px;
    
  }
  .bingli-head p{
    line-height: 14px;
  }
  .personal-info h4{
    padding:0;
    margin:0;
  }
  .shengli-info h4{
    padding:0;
    margin:0;
  }
  .fangan{
    width:70px;
    height: 70px;
  }
  .fangan-button{
    font-size: 12px;
    width:40px;
    height: 40px;
  }
  .right-second{
    top:50%;
  }
  .right-first{
    top:50%;
  }
}
@media screen and (min-height: 768px) {
  .head-info img{
    width:35%;
  }
  .people-name{
    padding:3px 4px;
    font-size: 16px;
    
  }
  .bingli-head p{
    line-height:22px;
  }
  .personal-info h4{
    /* padding:0; */
    padding:3%;
  }
  .shengli-info h4{
    padding:3%;
  }
}

</style>


