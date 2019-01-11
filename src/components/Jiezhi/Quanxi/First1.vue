<template>
  <div>
    <div class="chartHeight" style="width:100%;" ref="echarts"></div>
  </div>
</template>

<script>
  import echarts from "echarts";
  export default {
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
            trigger: 'item',
          },
          legend: {
            data: []
          },
          series: [
            {
              name:'漏斗图',
              type:'funnel',
              left: '10%',
              top: 0,
              bottom:40,
              width: '80%',
              min: 0,
              max: 100,
              minSize: '0%',
              maxSize: '100%',
              sort: 'ascending',
              gap:0,
              label: {
                normal: {
                  show: true,
                  position: 'inside'
                },
                emphasis: {
                  textStyle: {
                    fontSize: 20
                  }
                }
              },
              labelLine: {
                normal: {
                  // length: 1,
                  lineStyle: {
                    width: 1,
                    type: 'solid'
                  }
                }
              },
              itemStyle: {
                normal: {
                  borderColor: 'transparent',
                }
              },
              data: [
                {
                  value: 20,
                  name: ' ',
                  itemStyle: {
                    normal: {
                      color: '#EFBB19'
                    }
                  },
                },
                {
                  value: 40,
                  name: '人际管理',
                  itemStyle: {
                    normal: {
                      color: '#EFBB19'
                    }
                  },},
                {
                  value: 60,
                  name: '行为情况',
                  itemStyle: {
                    normal: {
                      color: '#D77068'
                    }
                  },},
                {
                  value: 80,
                  name: '生理数据',
                  itemStyle: {
                    normal: {
                      color: '#C24F60'
                    }
                  },
                },
                {
                  value: 140,
                  name: '心里数据',
                  itemStyle: {
                    normal: {
                      color: '#953F62'
                    }
                  },
                }
              ]
            }
          ],
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
    background-size: 100% 100%;
  }
</style>
