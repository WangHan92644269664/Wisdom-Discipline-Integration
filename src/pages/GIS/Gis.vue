<template>
  <div>
    <h4 class="bingli-title">人员电子病历</h4>
    <el-col class="common-height" :span="4">
      <div class="left-div bingli-head">
        <div class="head-info">
          <img
            style="display:block;margin:0 auto;"
            src="../../assets/images/jiezhi/ceshiicon.png"
            alt
          >
          <span class="people-name">张某某</span>
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
  </div>
</template>
<script>
import echarts from "echarts";

export default {
  components: {},
  data() {
    return {};
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
  width: 130px;
  height: 95px;
  background: url("../../assets/images/jiezhi/head_bg.png") no-repeat;
  background-size: 100% 100%;
  margin: 3% auto;
  padding-top: 20px;
}
.people-name {
  color: #333;
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
  background: url("../../assets/images/jiezhi/fanga_bg.gif") no-repeat;
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
</style>


