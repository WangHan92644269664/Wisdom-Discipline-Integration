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
      var data = [70, 34, 60, 78];
      var titlename = ["C:", "D:", "E:", "F:"];
      var valdata = [100, 200, 200, 500];
      var myColor = ["#1e5847", "#28af9d", "#32812f", "#1bad9c"];
      $(window).resize(function() {
        myChart.resize(); //窗口变化
      });
      // 绘制图表
      myChart.setOption({
        backgroundColor: "#0e2147",
        xAxis: {
          show: false
        },
        grid:{
            top:'2%',
            bottom:'2%',
            left:'15%'
        },

        yAxis: [
          {
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#fff",
              formatter: function(value, index) {
                return [
                  "{lg|" + (index + 1) + "}" + "{title|" + value + "} "
                ].join("\n");
              },
              rich: {
                lg: {
                  backgroundColor: "#339911",
                  color: "#fff",
                  borderRadius: 15,
                  // padding: 5,
                  align: "center",
                  width: 15,
                  height: 15
                }
              }
            }
          },
          {
            show: false,
            inverse: true,
            data: valdata,
            axisLabel: {
              textStyle: {
                fontSize: 12,
                color: "#fff"
              }
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: data,
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{c}%"
              }
            }
          },
          {
            name: "框",
            type: "bar",
            yAxisIndex: 1,
            barGap: "-100%",
            data: [100, 100, 100, 100],
            barWidth: 20,
            itemStyle: {
              normal: {
                color: "none",
                borderColor: "#9a9aa1",
                borderWidth: 3,
                barBorderRadius: 15,
              }
            }
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