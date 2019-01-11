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
            trigger: "item"
          },
            xAxis: {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
              axisLine:{
                show:true,
                lineStyle:{
                  color:"#fff"
                }
              },
              axisTick:{
                show:false
              }
            },
            yAxis: {
              type: 'value',
              //修改表格里面的线的颜色
              splitLine:{
                show:true,
                lineStyle:{
                  color:'transparent'
                }
              },
              //修改线的颜色
              axisLine:{
                show:true,
                lineStyle:{
                  color:"#fff"
                }
              },
              //去掉刻度线
              axisTick:{
                show:false
              }
            },
            series: [{
              data: [0, 13, 14, 20,11, 9, 2],
              type: 'line',
              symbol: 'circle',
              symbolSize:8,
              lineStyle: {
                normal: {
                  color: 'white',
                  width:2,
                  type: 'dashed'
                }
              },
              itemStyle: {
                normal: {
                  borderWidth: 3,
                  color: 'red'
                }
              }
            }]
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
