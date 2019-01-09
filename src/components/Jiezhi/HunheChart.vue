<template>
  <div>
    <div class="chartHeight" style="width:100%;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
export default {
  props: {
    chartTitle: {
      type: String
    },
    xData: {
      type: Array
    },
    seriesData: {
      type: Array
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
        title: {
          text: this.chartTitle,
          textStyle: {
            color: "#0379ff",
            fontSize: "16"
          },
          padding: [10, 10, 5, 20] //设置标题内边距,上，右，下，左
        },
        xAxis: {
          data: this.xData,
          axisLine: {
            lineStyle: {
              color: "#fff"
            }
          },
          axisTick: {
            show: false
          },
          nameTextStyle: {
            fontSize: 11,
            fontFamily: "Microsoft YaHei",
            color: "#fbd101"
          },
          splitLine: {
            show: true,
            lineStyle: {
                width:1,
                color:'#abadc0'
            }
          }, //去除网格线
        },
        yAxis: {
          splitLine: {
            show: true,
            lineStyle: {
                width:2,
                color:'#abadc0'
            }
          }, //去除网格线
          axisLine: {
            show: true,
            lineStyle:{
                color:'#abadc0'
            }
          },
          axisLabel: {
            color: "#fff"
          },
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