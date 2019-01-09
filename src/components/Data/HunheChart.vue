<template>
  <div>
    <div class="chartHeight" style="width:100%;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    xData:{
      type:Array
    },
    hunheXname:{
      type:String
    },
    hunheXname:{
      type:String
    },
    seriesData:{
      type:Array
    }
  },
  data() {
    return {
      count: 1
    };
  },
  methods: {
    drawChart() {
      const vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(this.$refs.echarts);
      $(window).resize(function() {
        myChart.resize(); //窗口变化
      });
      // 绘制图表
      myChart.setOption({
        tooltip: {
          trigger: "axis"
        },
        xAxis: {
          data: this.xData,
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          name: this.hunheYname,
          nameTextStyle: {
            fontSize: 11,
            fontFamily: "Microsoft YaHei",
            color: "#fbd101"
          },
          splitLine: { show: false } //去除网格线
        },
        yAxis: {
          splitLine: { show: false }, //去除网格线
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          name: this.hunheXname,
          nameTextStyle: {
            fontSize: 11,
            fontFamily: "Microsoft YaHei",
            color: "#fbd101"
          },
          axisTick: {
            show: false
          }
        },
        series: this.seriesData
      });
    }
  },
  computed: {},
  mounted: function() {
    const vm = this;
    vm.$nextTick(() => {
      vm.drawChart();
    });
  },
  created: () => {}
};
</script>

<style scoped>
.chartHeight {
  height: 100%;
  /* background: url("../../assets/images/data/bili_bg.png") no-repeat; */
  background-size: 100% 100%;
}
</style>