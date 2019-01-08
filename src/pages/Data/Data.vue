<template>
  <div>
    <div class="content" id="content" ref="homePage">
      <div class="header">
        <img src="../../assets/images/title.png" alt>
      </div>
      <span class="back-index">返回首页</span>
      <el-col class="common-height" :span="5">
        <div class="bili-chart">
          <Pie3DChart class="pie3DChart" :id="id" :option="option"/>
        </div>
        <div class="data-table">1</div>
        <div class="common-chart">1</div>
      </el-col>
      <el-col class="common-height" :span="14">
        <div class="data-info">1</div>
        <div class="map-chart">1</div>
        <div class="common-chart">1</div>
      </el-col>
      <el-col class="common-height" :span="5">
        <div class="common-chart">1</div>
        <div class="common-chart">1</div>
        <div class="common-chart">1</div>
      </el-col>
    </div>
  </div>
</template>
<script>
import Pie3DChart from "../../components/Data/Pie3Dchart"
export default {
  name: "Data",
  data() {
    return {
      screenHeight: document.documentElement.clientHeight, //屏幕高度
      option: {
        colors: [
          "#c73e6a",
          "#e192a8",
          "#ff8b4e",
          "#fbd884",
          "#08b170",
          "#00b6e8",
          "#8d7ce4"
        ],
        chart: {
          backgroundColor: null,
          type: "pie", //饼图
          options3d: {
            enabled: true, //使用3d功能
            alpha: 60, //延y轴向内的倾斜角度
            beta: 0
          }
        },
        title: {
          text: "重点事件比例分布", //图表的标题文字
          style: {
            color: "#fff"
          },
          align: "left"
        },
        plotOptions: {
          pie: {
            allowPointSelect: true, //每个扇块能否选中
            cursor: "pointer", //鼠标指针
            depth: 15, //饼图的厚度
            dataLabels: {
              enabled: true //是否显示饼图的线形tip
            }
          }
        },
        series: [
          {
            type: "pie",
            // name: "测试用1", //统一的前置词,非必须
            data: [
              ["待接收", 12], //模块名和所占比，也可以{name: '测试1',y: 12}
              ["待派遣", 23],
              ["待处理", 19],
              ["已废弃", 29],
              ["待核查", 29],
              ["待结案", 29],
              ["待延期审核", 29]
            ]
          }
        ]
      }
    };
  },
  components: {Pie3DChart},
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
.common-height {
  height: calc(100% - 108px);
}
.bili-chart {
  height: 28%;
}
.bili-chart div {
  height: 100%;
}
.data-table {
  height: 40%;
}
.common-chart {
  height: 32%;
}
.map-chart {
  height: 46%;
}
.data-info {
  height: 20%;
}
</style>
