<template>
  <div>
    <div class="chartHeight" style="width:100%;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import liquidfill from "echarts-liquidfill";
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
         title: {
          text: '上半年学员高分预警次数',
          textStyle: {
            color: "#feffff",
            fontSize: "16"
          },
          padding: [10, 10, 5, 40] //设置标题内边距,上，右，下，左
        },
        backgroundColor: "#151948",
        series: [
          {
            title:{},
            type: "liquidFill",
            radius: "25%",
            center: ["15%", "45%"],
            data: [0.12, 0.1, 0.05],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#294D99",
                  insideColor: "#fff",
                  fontSize: 25,
                  fontWeight: "bold",
                  align: "center",
                  baseline: "middle"
                },
                position: "inside",
                formatter: function(v) {
                  var reverData = (1 - v.value) * 100;
                  return "" + reverData + "";
                }
              }
            },
            backgroundStyle: {
              color: "#fff",
              borderColor: "#4FA8F9",
              borderWidth: 5,
              shadowColor: "rgba(0, 0, 0, 0.4)",
              shadowBlur: 20
            },
            outline: { show: false }
          },
          {
            type: "liquidFill",
            radius: "25%",
            center: ["50%", "45%"],
            data: [0.18, 0.13, 0.08],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#294D99",
                  insideColor: "#fff",
                  fontSize:25,
                  fontWeight: "bold",
                  align: "center",
                  baseline: "middle"
                },
                position: "inside",
                formatter: function(v) {
                  var reverData = (1 - v.value) * 100;
                  return "" + reverData + "";
                }
              }
            },
            backgroundStyle: {
              color: "#fff",
              borderColor: "#4FA8F9",
              borderWidth: 5,
              shadowColor: "rgba(0, 0, 0, 0.4)",
              shadowBlur: 20
            },
            outline: { show: false }
          },
          {
            type: "liquidFill",
            radius: "25%",
            center: ["85%", "45%"],
            data: [0.48, 0.63, 0.28],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#294D99",
                  insideColor: "#fff",
                  fontSize:25,
                  fontWeight: "bold",
                  align: "center",
                  baseline: "middle"
                },
                position: "inside",
                formatter: function(v) {
                  var reverData = (1 - v.value) * 100;
                  return "" + reverData + "";
                }
              }
            },
            backgroundStyle: {
              color: "#fff",
              borderColor: "#4FA8F9",
              borderWidth: 5,
              shadowColor: "rgba(0, 0, 0, 0.4)",
              shadowBlur: 20
            },
            outline: { show: false }
          },
          {
            type: "liquidFill",
            radius: "25%",
            center: ["15%", "80%"],
            data: [0.27, 0.2, 0.1],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#294D99",
                  insideColor: "#fff",
                  fontSize: 25,
                  fontWeight: "bold",
                  align: "center",
                  baseline: "middle"
                },
                position: "inside",
                formatter: function(v) {
                  var reverData = (1 - v.value) * 100;
                  return "" + reverData + "";
                }
              }
            },
            backgroundStyle: {
              color: "#fff",
              borderColor: "#4FA8F9",
              borderWidth: 5,
              shadowColor: "rgba(0, 0, 0, 0.4)",
              shadowBlur: 20
            },
            outline: { show: false }
          },
          {
            type: "liquidFill",
            radius: "25%",
            center: ["50%", "80%"],
            data: [0.33, 0.2, 0.1],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#294D99",
                  insideColor: "#fff",
                  fontSize: 25,
                  fontWeight: "bold",
                  align: "center",
                  baseline: "middle"
                },
                position: "inside",
                formatter: function(v) {
                  var reverData = (1 - v.value) * 100;
                  return "" + reverData + "";
                }
              }
            },
            backgroundStyle: {
              color: "#fff",
              borderColor: "#4FA8F9",
              borderWidth: 5,
              shadowColor: "rgba(0, 0, 0, 0.4)",
              shadowBlur: 20
            },
            outline: { show: false }
          },
          {
            type: "liquidFill",
            radius: "25%",
            center: ["85%", "80%"],
            data: [0.54, 0.4, 0.3],
            label: {
              normal: {
                show: true,
                textStyle: {
                  color: "#294D99",
                  insideColor: "#fff",
                  fontSize: 25,
                  fontWeight: "bold",
                  align: "center",
                  baseline: "middle"
                },
                position: "inside",
                formatter: function(v) {
                  var reverData = (1 - v.value) * 100;
                  return "" + reverData + "";
                }
              }
            },
            backgroundStyle: {
              color: "#fff",
              borderColor: "#4FA8F9",
              borderWidth: 5,
              shadowColor: "rgba(0, 0, 0, 0.4)",
              shadowBlur: 20
            },
            outline: { show: false }
          }
        ]
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