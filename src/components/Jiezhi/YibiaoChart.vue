<template>
  <div>
    <div class="chartHeight" style="width:100%;" ref="echarts"></div>
  </div>
</template>
<script>
import echarts from "echarts";
export default {
  props: {},
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
      var highlight = "#03b7c9";

      var demoData = [
        {
          name: "心率",
          value: 120,
          unit: "",
          pos: ["16.6%", "50%"],
          range: [0, 200]
        },
        {
          name: "收缩压",
          value:135,
          unit: "",
          pos: ["49.8%", "50%"],
          range: [0,200]
        },
        {
          name: "舒张压",
          value: 86,
          pos: ["83%", "50%"],
          range: [0, 120],
        }
      ];
      $(window).resize(function() {
        myChart.resize(); //窗口变化
      });
      // 绘制图表
      myChart.setOption({
        series: (function() {
          var result = [];
         
          demoData.forEach(function(item) {
            result.push(
              // 外围刻度
              {
                type: "gauge",
                center: item.pos,
                radius: "33.33%", // 1行3个
                splitNumber: item.splitNum || 10,
                min: item.range[0],
                max: item.range[1],
                startAngle: 225,
                endAngle: -45,
                axisLine: {
                  show: true,
                  lineStyle: {
                    width: 2,
                    shadowBlur: 0,
                    color: [[1, highlight]]
                  }
                },
                axisTick: {
                  show: true,
                  lineStyle: {
                    color: highlight,
                    width: 1
                  },
                  length: -5,
                  splitNumber: 10
                },
                splitLine: {
                  show: true,
                  length: -14,
                  lineStyle: {
                    color: highlight
                  }
                },
                axisLabel: {
                  distance: -20,
                  textStyle: {
                    color: highlight,
                    fontSize: "14",
                    fontWeight: "bold"
                  }
                },
                pointer: {
                  show: 0
                },
                detail: {
                  show: 0
                }
              },

              // 内侧指针、数值显示
              {
                name: item.name,
                type: "gauge",
                center: item.pos,
                radius: "30.33%",
                startAngle: 225,
                endAngle: -45,
                min: item.range[0],
                max: item.range[1],
                axisLine: {
                  show: true,
                  lineStyle: {
                    width: 16,
                    color: [[1, "rgba(255,255,255,.1)"]]
                  }
                },
                axisTick: {
                  show: 0
                },
                splitLine: {
                  show: 0
                },
                axisLabel: {
                  show: 0
                },
                pointer: {
                  show: true,
                  length: "105%"
                },
                detail: {
                  show: true,
                  offsetCenter: [0, "100%"],
                  textStyle: {
                    fontSize: 20,
                    color: "#fff"
                  },
                  formatter: [
                    "{value} " + (item.unit || ""),
                    "{name|" + item.name + "}"
                  ].join("\n"),
                  rich: {
                    name: {
                      fontSize: 14,
                      lineHeight: 30,
                      color: "#ddd"
                    }
                  }
                },
                itemStyle: {
                  normal: {
                    color: highlight
                  }
                },
                data: [
                  {
                    value: item.value
                  }
                ]
              }
            );
          });

          return result;
        })()
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