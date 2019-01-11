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
      };
    },
    props:{
      lineColor:{
        type:String
      },
      data:{
        type:Array
      }
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
          legend:{
            orient: 'horizontal',
            x: 'right',
            y: 'top',
            padding: 20,
            data: [
              {
                name:'次',
                icon: 'circle',
                textStyle: {fontWeight: 'bold', color: '#fff'}
              },

            ],
          },
            xAxis: {
              type: 'category',
              data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月'],
              //坐标轴的线条显示或者不显示
              axisLine:{
                show:false,
              },
              //坐标轴上的字体颜色
              axisLabel: {
                textStyle: {
                  color: '#fff',
                  margin:15,
                },
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
                show:false,
              },
              //坐标轴上的字体颜色
              axisLabel: {
                textStyle: {
                  color: '#999',
                },
              },
              //去掉刻度线
              axisTick:{
                show:false
              }
            },
            series: [{
            name:'次',
              data: this.data,
              type: 'line',
              symbol: 'circle',
              symbolSize:8,
              lineStyle: {
                normal: {
                  color:this.lineColor,
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
    created: () => {},
  };
</script>

<style scoped>
  .chartHeight {
    height: 100%;
    /* background: url("../../assets/images/data/bili_bg.png") no-repeat; */
    background-size: 100% 100%;
  }
</style>
