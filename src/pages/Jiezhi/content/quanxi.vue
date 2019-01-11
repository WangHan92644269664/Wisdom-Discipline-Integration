<template>
  <div class="wrapper">
    <el-row>
      <el-col :span="5">
        <h4 class="title">人员全息档案</h4>
      </el-col>
      <el-col :span="3" :offset="16">
        <img src="../../../assets/images/jiezhi/quanxi/out.png" alt="">导出PDF文档
      </el-col>
    </el-row>
    <el-row class="first">
      <el-col :span="6" class="box">
        <p>人员各项数据测控</p>
        <First1/>
      </el-col>
      <el-col :span="4" class="box first2">
        <p>人员指纹检索</p>
        <img src="../../../assets/images/jiezhi/quanxi/scan.gif" alt="">
      </el-col>
      <el-col :span="6" class="box peopleInfo">
        <p style="margin-bottom: 26px;">学员个人信息</p>
        <el-row>
          <el-col :span="3" :offset="1">
            <img src="../../../assets/images/jiezhi/quanxi/header.png">
          </el-col>
          <el-col :span="15" :offset="5">
            <p>姓名:张某华</p>
            <p>年龄:26岁</p>
            <p>人员来源: 自愿入所戒毒</p>
            <p>进所时间: 2017年6月2日</p>
            <p>历史体检次数：6</p>
            <p>历史涉案次数：21</p>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="8" class="box">
        <p>学员历史涉案情况</p>
        <PeopleHistory :lineColor="firstLineColor" :data="firstData"/>
      </el-col>
    </el-row>
    <el-row class="second">
      <el-col :span="6" class="box">
        <p>学员日常活动数据占比</p>
        <Second1/>
      </el-col>
      <el-col :span="4" class="box">
        <p>个体综合数据测评</p>
        <el-row style="height:60%;">
          <el-col :span="16" :offset="4" class="second2">
            <span>78</span><span>分</span>
          </el-col>
        </el-row>
        <span :span="18" :offset="3" class="col2">
              <a href="#">综合测评:</a>
              <strong>良好</strong>
            </span>
      </el-col>
      <el-col :span="6" class="second3">
        <img src="../../../assets/images/jiezhi/quanxi/100%bg.gif" alt="">
      </el-col>
      <el-col :span="8" class="box second4">
        <p>异常行为记录</p>
        <Second4/>
      </el-col>
    </el-row>
    <el-row class="third">
      <el-col :span="8" class="box">
        <p>两周内生理健康情况</p>
        <Third1/>
      </el-col>
      <el-col :span="8" class="box">
        <p>周期内分数变化情况</p>
        <Third2/>
      </el-col>
      <el-col :span="8" class="box third3">
        <p>大队内分数排名情况</p>
        <PeopleHistory :lineColor="thirdLineColor" :data="thirdData"/>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import First1 from '../../../components/Jiezhi/Quanxi/First1'
  import PeopleHistory from '../../../components/Jiezhi/Quanxi/PeopleHistory'
  import Second1 from '../../../components/Jiezhi/Quanxi/Second1'
  import Second4 from '../../../components/Jiezhi/Quanxi/Second4'
  import Third1 from '../../../components/Jiezhi/Quanxi/Third1'
  import Third2 from '../../../components/Jiezhi/Quanxi/Third2'

  export default {
    components: {
      PeopleHistory,
      First1,
      Second1,
      Second4,
      Third1,
      Third2
    },
    data() {
      return {
        firstLineColor: '#fff',
        firstData: [1, 13, 12, 20, 11, 9, 2],
        thirdLineColor: '#0070ff',
        thirdData: [1, 10, 2, 15, 16, 17, 20]
      }
    }

  }
</script>
<style scoped>
  .main-right div[data-v-706553db] {
    background-image: url("../../../assets/images/jiezhi/quanxi/bg.png") !important;
    background-position: center center;
  }

  .wrapper {
    height: 100%;
  }
  .wrapper .el-row:first-child{
    padding:0;
  }
  .wrapper .el-row:first-child .el-col:nth-of-type(2){
    height: 35px;
    line-height: 35px;
    color:#e5e5e5;
    border:1px solid #350DA8;
    margin-top: 5px;
  }
  .wrapper .el-row:first-child .el-col-3{
    width: 12%;
  }
  .wrapper .el-row:first-child .el-col:nth-of-type(2) img{
    margin-right: 5%;
  }
  .wrapper .el-row {
    padding: 0.4% 0 0 0.4%;
    color: #00c6ff;
    /*border:1px solid red;*/
  }

  .wrapper .first{
    height:27%;
  }
  .wrapper .second{
    height: 33%;
  }
  .wrapper .third{
    height: 32%;
  }

  .wrapper .el-row > .el-col {
    height: 100%;
  }

  .wrapper .el-row > .el-col-4 {
    width: 15.6%;
    margin: 0 0.4% 0 0;
  }

  .wrapper .el-row > .el-col-6 {
    margin: 0 0.4% 0 0;
  }

  .wrapper .el-row > .el-col-8 {
    width: 32.8%;
    margin: 0 0.4% 0 0;
  }

  .title {
    text-align: left;
    color: #0070ff;
    border-bottom: 1px solid #040c19;
    padding: 10px 0 10px 20px;
    margin: 0;
  }

  .box {
    border: 2px solid #040c19;
    border-radius: 5px;
    /*margin-right: 10px;*/
    padding: 12px 0;
    height: 100%;
  }

  .box > div {
    height: 100%;
  }

  .first .el-col > p, .second .el-col > p, .third .el-col > p {
    text-align: left;
    margin-bottom: 10px;
    margin-top: 0;
    font-weight: bolder;
    padding-left: 15px;
  }

  .peopleInfo img {
    display: block;
    height: 70%;
  }

  .peopleInfo div {
    color: #fff;
    font-size: 12px;
    text-align: left;
    /*border:1px solid red;*/
  }

  .peopleInfo  p {
    height:5%;
    margin: 1px;
  }

  .peopleInfo  p:first-child {
    margin: 0;
    height: 10%;
  }
  .infoBox p {
    text-align: left;
    padding-left: 22%;
    font-size: 12px;
    line-height: 22px;
  }
  .second2 {
    background-image: url("../../../assets/images/jiezhi/quanxi/测评bg.png");
    background-size: 100% 100%;
    padding-left: 30%;
    color: #139866;
  }

  .second4>div{
    height: 85%;
  }

  .second2 > span:first-child {
    font-size:90px;
    position: relative;
    left: -60%;
    top: 5%;
    -webkit-transition:font-size 0.2s ease-out;
  }
  @media only screen and (max-width: 1820px) {.second2 > span:first-child{ font-size: 85px; }}
  @media only screen and (max-width: 1720px) {.second2 > span:first-child{ font-size: 75px; }}
  @media only screen and (max-width: 1650px) { .second2 > span:first-child{ font-size: 70px; }}
  @media only screen and (max-width: 1420px) { .second2 > span:first-child{ font-size: 65px; }}
  @media only screen and (max-width: 1366px) { .second2 > span:first-child{ font-size: 50px; }}

  .second2 > span:nth-child(2) {
    position: relative;
    top: -30%;
    left: 15%;
    font-size: 18px;
    font-weight: bolder;
  }

  .col2 > a {
    color: #fff
  }

  .col2 > strong {
    color: #139866;
    font-size: 50px;
    font-weight: normal;
  }
  @media only screen and (max-width: 1420px) {  .col2 > strong{ font-size: 45px; }}
  .second3 > img {
    position: relative;
    top: 67%;
    left: 8%;
  }
</style>
