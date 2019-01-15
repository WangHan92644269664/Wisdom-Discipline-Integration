<template>
  <div>
    <h4 class="bingli-title">人员电子病历</h4>
    <el-col class="common-height" :span="15">
      <div class="left-div left-top">
        <el-col class="top-height" :span="9">
          <h4>人员房间位置图</h4>
          <div class="location"></div>
        </el-col>
        <el-col class="info-div" :span="15">
          <div class="con1">
            <div class="info-left">
              <h4>所在大队信息</h4>
              <img src="../../../assets/images/jiezhi/guanxi/icon1.png" alt>
              <p class="p-title">一大队</p>
              <p>负责人:王东华</p>
              <p>联系电话：13623849782</p>
            </div>
            <div class="info-right">
              <h4>人员信息</h4>
              <div class="main-info">
                <img src="../../../assets/images/jiezhi/guanxi/head.png" alt>
                <div class="p-con">
                  <p>姓名：张勇</p>
                  <p>年龄：26岁</p>
                  <p>人员来源：自愿进所戒毒</p>
                  <p>进所时间：2017年6月2日</p>
                  <p>历史预警次数：6</p>
                </div>
              </div>
            </div>
          </div>
          <div class="con2"></div>
        </el-col>
      </div>
      <el-row class="left-div left-bottom">
        <el-col class="bottom-height" :span="13">
          <div class="contact">
            <h4>亲属关系</h4>
            <div class="contact-info">
              <img src="../../../assets/images/jiezhi/guanxi/guanxi.png" alt>
            </div>
            <div class="father-info">
              <p>姓名：张毅</p>
              <p>年龄：47岁</p>
              <p>职业：工人</p>
            </div>
            <div class="mother-info">
              <p>姓名：王改荣</p>
              <p>年龄：45岁</p>
              <p>职业：工人</p>
            </div>
            <div class="sibling-info">
              <p>姓名：张源</p>
              <p>年龄：26岁</p>
              <p>职业：工人</p>
            </div>
            <div class="sister-info">
              <p>姓名：张媛</p>
              <p>年龄：18岁</p>
              <p>职业：学生</p>
            </div>
          </div>
        </el-col>
        <el-col class="bottom-height" :span="11">
          <div class="location-info">
            <h4>人员位置信息</h4>
            <div class="location-main">
              <div class="icon-left">
                <img class src="../../../assets/images/jiezhi/guanxi/dingwei_blue.png" alt>
              </div>
              <div class="icon-right">
                <p>B楼231宿舍</p>
                <p>联系人：王永继</p>
                <p>联系电话：13923765456</p>
              </div>
            </div>
            <div class="jiankong">
              <h5>————&nbsp;&nbsp;&nbsp;房间附近监控&nbsp;&nbsp;&nbsp;————</h5>
              <img
                class="first-img"
                src="../../../assets/images/jiezhi/guanxi/jiankong_pic1.png"
                alt
              >
              <img
                class="last-img"
                src="../../../assets/images/jiezhi/guanxi/jiankong_pic2.png"
                alt
              >
            </div>
          </div>
        </el-col>
      </el-row>
    </el-col>
    <el-col class="common-height" :span="9">
      <div class="right-div1">
        <h4>同寝人员关系状态</h4>
        <div class="right-first">
          <el-col :span="6" v-for="(item,index) in peopleData1" :key="index">
            <div class="contact-img">
              <img :src="item.imgUrl" alt>
              <br>
              <span>{{item.name}}</span>
              <br>
              <span class style="color:#f1a504">{{item.status}}</span>
            </div>
          </el-col>
        </div>
      </div>
      <div class="right-div2">
        <h4>房间各类系统状态</h4>
        <div class="right-second">
          <el-col :span="6" v-for="(item,index) in Data2" :key="index">
            <div class="contact-img">
              <img :src="item.imgUrl" alt>
              <br>
              <span>{{item.name}}</span>
              <br>
              <span class style="color:#f1a504">{{item.status}}</span>
            </div>
          </el-col>
        </div>
      </div>
      <div class="right-div3">
        <h4>历史抓拍人像</h4>
        <el-col :span="12" v-for="(item,index) in Data3" :key="index">
          <div class="contact-img contact-img3">
            <img :src="item.imgUrl" alt>
            <br>
            <span>{{item.name}}</span>
            <br>
            <span class style="color:#f1a504">{{item.status}}</span>
          </div>
        </el-col>
      </div>
    </el-col>
    <div class="center">
      <img src="../../../assets/images/jiezhi/guanxi/center.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      peopleData1: [
        {
          imgUrl: require("../../../assets/images/jiezhi/guanxi/people1.png"),
          name: "张勇",
          status: "【正常】"
        },
        {
          imgUrl: require("../../../assets/images/jiezhi/guanxi/people2.png"),
          name: "陈万象",
          status: "【非正常】"
        },
        {
          imgUrl: require("../../../assets/images/jiezhi/guanxi/people3.png"),
          name: "徐进",
          status: "【正常】"
        },
        {
          imgUrl: require("../../../assets/images/jiezhi/guanxi/people4.png"),
          name: "张先勇",
          status: "【正常】"
        }
      ],
      Data2: [
        {
          imgUrl: require("../../../assets/images/jiezhi/guanxi/xitong_1.png"),
          name: "人像卡口",
          status: "【正常】"
        },
        {
          imgUrl: require("../../../assets/images/jiezhi/guanxi/xitong_2.png"),
          name: "视频监控",
          status: "掉线！"
        },
        {
          imgUrl: require("../../../assets/images/jiezhi/guanxi/xitong_3.png"),
          name: "消防烟感",
          status: "【正常】"
        },
        {
          imgUrl: require("../../../assets/images/jiezhi/guanxi/xitong_4.png"),
          name: "人员数量",
          status: "【正常】"
        }
      ],
      Data3: [
        {
          imgUrl: require("../../../assets/images/jiezhi/guanxi/zhuapai1.png"),
          name: "监控A218"
        },
        {
          imgUrl: require("../../../assets/images/jiezhi/guanxi/zhuapai2.png"),
          name: "监控A219"
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
  color: #4704e8;
  border-bottom: 1px solid #040c19;
  padding: 10px 0;
  margin: 0;
  padding-left: 20px;
}
.common-height {
  height: calc(100% - 42px);
}
.left-div {
}
.left-top {
  height: 45%;
}
.top-height {
  height: 95%;
  border: 2px solid #040c19;
  margin-top: 1%;
  border-radius: 5px;
}
.top-height h4 {
  text-align: left;
  color: #0070ff;
  padding: 10px 0;
  margin: 0;
  padding-left: 20px;
}
.location {
  width: 100%;
  height: calc(100% - 41px);
  background: url("../../../assets/images/jiezhi/guanxi/local_bg.png") no-repeat;
  background-size: 100% 100%;
}
.info-div {
  height: 100%;
}
.con1 {
  height: 67%;
  margin: 1% auto;
}
.con2 {
  height: 30%;
}
.location-main {
  height: 32%;
}
.info-left {
  float: left;
  height: 100%;
  border: 2px solid #040c19;
  border-radius: 5px;
  width: 180px;
  margin: 0 auto;
  margin-left: 1%;
}
.info-left img {
  display: inline-block;
  height: 30%;
}
.info-right {
  float: left;
  height: 100%;
  border: 2px solid #040c19;
  border-radius: 5px;
  width: calc(100% - 206px);
  margin: 0 auto;
  margin-left: 1%;
  position: relative;
}
.info-left h4,
.info-right h4,
.contact h4,
.location-info h4,
.right-div1 h4,
.right-div2 h4,
.right-div3 h4 {
  text-align: left;
  color: #0070ff;
  padding: 10px 0;
  margin: 0;
  padding-left: 20px;
}
.info-left p {
  text-align: left;
  font-size: 14px;
  height: 14%;
  padding-left: 6%;
}
.info-left .p-title {
  color: #fbd502;
}
.main-info {
  position: absolute;
  /* top:50%;
  left:50%; */
  text-align: left;
  padding: 3% 2%;
}
.main-info img {
  display: block;
  /* height: 70%; */
  width: 90px;
  float: left;
}
.p-con {
  display: inline-block;
  padding-left: 4%;
}
.p-con p {
  height: 15%;
  font-size: 14px;
}
.left-bottom {
  height: 55%;
  position: relative;
}
.bottom-height {
  height: 100%;
}
.contact {
  height: 96%;
  border: 2px solid #040c19;
  width: 96%;
  margin: 1% 1%;
  border-radius: 5px;
}
.father-info {
  position: absolute;
  top: 15%;
  left: 6%;
}
.mother-info {
  position: absolute;
  top: 25%;
  left: 41%;
}
.sibling-info {
  position: absolute;
  top: 75%;
  left: 6%;
}
.sister-info {
  position: absolute;
  top: 75%;
  left: 40%;
}
.contact-info {
  height: calc(100% - 41px);
  position: relative;
}
.contact-info img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* width:65%;
  margin-top:10%; */
}
.location-info {
  position: absolute;
  bottom: 2%;
  height: 62%;
  border: 2px solid #040c19;
  width: 45%;
  border-radius: 5px;
}
.icon-left {
  float: left;
  margin-left: 7%;
  height: 100%;
}
.icon-right {
  float: left;
  width: 80%;
  text-align: left;
  padding-left: 2%;
  font-size: 14px;
}
.icon-right p {
  padding: 2px;
}
.jiankong h5 {
  color: #01ade9;
}
.jiankong img {
  display: inline-block;
  margin-top: 1%;
}
.first-img {
  width: 30%;
  margin-right: 10%;
}
.last-img {
  width: 42.5%;
}
.right-div1 {
  height: 30%;
  border: 2px solid #040c19;
  margin-top: 1%;
  width: 98%;
  border-radius: 5px;
  position: relative;
}
.right-div2 {
  height: 31%;
  border: 2px solid #040c19;
  margin-top: 1%;
  width: 98%;
  border-radius: 5px;
  position: relative;
}
.right-div3 {
  height: 34%;
  border: 2px solid #040c19;
  margin-top: 1%;
  width: 98%;
  border-radius: 5px;
}
.right-div3 img {
  width: 80%;
}
.center {
  position: absolute;
  top: 52%;
  left: 53%;
  transform: translate(-50%, -50%);
}
.right-first {
  width: 100%;
  height: 60%;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
}
.right-second {
  width: 100%;
  height: 60%;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, -50%);
}
@media screen and (max-width: 1366px) {
  .main-info img {
    /* display: block;
    height: 70%; */
    width: 30%;
  }
  .p-con p {
    height: 15%;
    font-size: 12px;
  }
  .center {
    position: absolute;
    top: 55%;
    left: 56%;
    transform: translate(-50%, -50%);
  }
  .father-info {
    position: absolute;
    top: 15%;
    left: 6%;
    font-size: 12px;
  }
  .mother-info {
    position: absolute;
    top: 25%;
    left: 41%;
    font-size: 12px;
  }
  .sibling-info {
    position: absolute;
    top: 75%;
    left: 6%;
    font-size: 12px;
  }
  .sister-info {
    position: absolute;
    top: 75%;
    left: 40%;
    font-size: 12px;
  }
}
@media screen and (min-width: 1920px) {
  * {
    font-size: 16px;
  }
  .main-info {
    width: 100%;
  }
  .main-info img {
    /* display: block;
    height: 70%; */
    width: 25%;
  }
  .p-con {
    display: inline-block;
    width: 50%;
    height: 100%;
  }
  .p-con p {
    font-size: 16px;
    padding: 2% 0;
  }
  .center {
    position: absolute;
    top: 55%;
    left: 56%;
    transform: translate(-50%, -50%);
  }
  .father-info {
    position: absolute;
    top: 15%;
    left: 6%;
    font-size: 12px;
  }
  .mother-info {
    position: absolute;
    top: 25%;
    left: 41%;
    font-size: 12px;
  }
  .sibling-info {
    position: absolute;
    top: 75%;
    left: 6%;
    font-size: 12px;
  }
  .sister-info {
    position: absolute;
    top: 75%;
    left: 40%;
    font-size: 12px;
  }
  .contact-img img {
    width: 70%;
    margin-top: 10%;
  }
  .contact-img span {
    font-size: 16px;
  }
  .contact-info img {
    width: 60%;
  }
  .contact-info {
    font-size: 18px;
  }
  .center {
    width: 20%;
    height: 20%;
    position: absolute;
    top: 50%;
    left: 54%;
    transform: translate(-50%, -50%);
  }
  .center img {
    height: 100%;
  }
  .contact-img3 img {
    margin-top: 8%;
  }
  .info-right {
    width: calc(100% - 220px);
  }
  .right-first {
    width: 100%;
    height: 60%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .right-second {
    width: 100%;
    height: 60%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
@media screen and (min-width: 2461px) {
  * {
    font-size: 18px;
  }
  .main-info {
    width: 100%;
  }
  .main-info img {
    /* display: block;
    height: 70%; */
    width: 25%;
  }
  .p-con {
    display: inline-block;
    width: 50%;
    height: 100%;
  }
  .p-con p {
    font-size: 16px;
    padding: 2% 0;
  }
  .center {
    position: absolute;
    top: 55%;
    left: 54%;
    transform: translate(-50%, -50%);
  }
  .father-info {
    position: absolute;
    top: 15%;
    left: 6%;
    font-size: 12px;
  }
  .mother-info {
    position: absolute;
    top: 25%;
    left: 41%;
    font-size: 12px;
  }
  .sibling-info {
    position: absolute;
    top: 75%;
    left: 6%;
    font-size: 12px;
  }
  .sister-info {
    position: absolute;
    top: 75%;
    left: 40%;
    font-size: 12px;
  }
  .contact-img img {
    width: 70%;
    margin-top: 30%;
  }
  .contact-img span {
    font-size: 16px;
  }
  .contact-info img {
    width: 60%;
  }
  .contact-info {
    font-size: 18px;
  }
  .center {
    width: 20%;
    height: 20%;
    position: absolute;
    top: 50%;
    left: 52%;
    transform: translate(-50%, -50%);
  }
  .center img {
    height: 100%;
  }
  .contact-img3 img {
    margin-top: 15%;
  }
  .info-right {
    width: calc(100% - 220px);
  }
  .right-first {
    width: 100%;
    height: 60%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .right-second {
    width: 100%;
    height: 60%;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>


