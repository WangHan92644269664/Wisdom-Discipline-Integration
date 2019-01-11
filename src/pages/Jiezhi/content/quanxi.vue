<template>
    <div class="wrapper">
      <h4 class="title">人员全息档案</h4>
      <el-row class="first">
        <el-col :span="6" class="box box1">
          <p>人员各项数据测控</p>
          <First1/>
        </el-col>
        <el-col :span="4"  class="box">
          <p>人员指纹检索</p>
          <img src="../../../assets/images/jiezhi/quanxi/scan.gif" alt="">
        </el-col>
        <el-col :span="6" class="box peopleInfo">
          <p style="margin-bottom: 26px;">学员个人信息</p>
          <img src="../../../assets/images/jiezhi/quanxi/header.png">
           <div>
             <p>姓名:张某华</p>
             <p>年龄:26岁</p>
             <p>人员来源: 自愿入所戒毒</p>
             <p>进所时间: 2017年6月2日</p>
             <p>历史体检次数：6</p>
             <p>历史涉案次数：21</p>
           </div>
        </el-col>
        <el-col :span="8" class="box box1">
          <p>学员历史涉案情况</p>
          <PeopleHistory/>
        </el-col>
      </el-row>
      <el-row class="first">
        <el-col :span="6" class="box1">
          <p>学员日常活动数据占比</p>
          <Second1/>
        </el-col>
        <el-col :span="4">
          <p>个体综合数据测评</p>

        </el-col>
        <el-col :span="6" class="second3">
          <img src="../../../assets/images/jiezhi/quanxi/100%bg.gif" alt="">
        </el-col>
        <el-col :span="8">
          <p>异常行为记录</p>
          <Second4/>
        </el-col>
      </el-row>
      <el-row class="third">
        <el-col :span="8">kh</el-col>
        <el-col :span="8">kh</el-col>
        <el-col :span="8">kh</el-col>
      </el-row>
    </div>
</template>
<script>
  import First1 from '../../../components/Jiezhi/Quanxi/First1'
  import PeopleHistory from '../../../components/Jiezhi/Quanxi/PeopleHistory'
  import Second1 from '../../../components/Jiezhi/Quanxi/Second1'
  import Second4 from '../../../components/Jiezhi/Quanxi/Second4'
export default {
    components:{
      PeopleHistory,
      First1,
      Second1,
      Second4
    }

}
</script>
<style scoped>
  .main-right div[data-v-706553db]{
    background-image: url("../../../assets/images/jiezhi/quanxi/bg.png")!important;
    background-position: center center;
  }
  .wrapper{
    height: 100%;
  }
  .wrapper .el-row{
    padding: 6px;
    color:#00c6ff;
    height: 33.33%;
    border:1px solid red;
  }
  .wrapper .el-row>.el-col{
    height: 100%;
    border:1px solid red;
  }
  .title {
    text-align: left;
    color: #0070ff;
    border-bottom: 1px solid #040c19;
    padding: 10px 0 10px 20px;
    margin: 0;
  }

 .box{
   border: 2px solid #040c19;
   border-radius: 5px;
   /*margin-right: 10px;*/
   padding: 12px 0;
 }
  .first .el-col>p{
    text-align: left;
    margin-bottom:10px;
    margin-top: 0;
    font-weight: bolder;
    padding-left: 15px;
  }
.peopleInfo img{
  display: block;
  float: left;
  padding-left: 40px;
}
  .peopleInfo div{
    float: right;
    color:#fff;
    font-size:12px;
    text-align: left;
    /*border:1px solid red;*/
    padding-right:20%;
  }
  .peopleInfo div>p{
    line-height: 20px;
    height: 20px;
    margin: 1px;
  }
  .peopleInfo div>p:first-child{
    margin: 0;
    line-height: 10px;
    height: 15px;
  }
  .infoBox p {
    text-align: left;
    padding-left: 22%;
    font-size: 12px;
    line-height: 22px;
  }
  .box1{
    height: 100%;
  }
  .box1 div{
    height: 100%;
  }
  .second3>img{
    position: relative;
    top: 47%;
    left: 8%;
  }
</style>
