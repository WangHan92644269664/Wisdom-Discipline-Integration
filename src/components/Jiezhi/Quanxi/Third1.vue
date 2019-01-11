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
          backgroundColor: "transparent",
          color:['red','#750E39'],
          legend: {
            show:true,
            data: ['上周', '本周'],
            orient: 'horizontal',
            x: 'right',
            y: 'top',
            padding: 10,
                textStyle:{
                  fontSize:14,
                  color:'#fff'
                },
                icon:'roundRect'
          },
          grid: {
            top: '8%',
            left: '1%',
            right: '3%',
            bottom: '12%',
            containLabel: true,
          },
          xAxis: [{
            type: 'category',
            boundaryGap: false,
            axisLine: { //坐标轴轴线相关设置。数学上的x轴
              show: true,
              lineStyle: {
                color: '#233e64'
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              textStyle: {
                color: '#fff',
                margin:15,
              },
            },
            axisTick: { show: false,},
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
          }],
          yAxis: [{
            type: 'value',
            min: 0,
            max:140,
            splitNumber: 7,
            splitLine: {
              show: true,
              lineStyle: {
                color: 'transparent'
              }
            },
            axisLine: {show: false,},
            axisLabel: {
              margin:20,
              textStyle: {
                color: '#aaa',

              },
            },
            axisTick: { show: false,},
          }],
          series: [{
            name: '本周',
            type: 'line',
            smooth: true, //是否平滑曲线显示
            symbolSize:0,

            lineStyle: {
              normal: {
                color: "transparent"   // 线条颜色
              }
            },
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0,  color: 'red'},
                  { offset: 0,  color: 'red'}
                ], false),
              }
            },
            data: [50, 60,90,60, 20, 90, 80]
          },
            {
              name: '上周',
              type: 'line',
              smooth: true, //是否平滑曲线显示
              symbolSize:0,

              lineStyle: {
                normal: {
                  color: "transparent"   // 线条颜色
                }
              },
              areaStyle: { //区域填充样式
                normal: {
                  //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                  color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                    { offset: 0,  color: '#750E39'},
                    { offset: 0,  color: '#750E39'}
                  ], false),
                }
              },
              data: [80, 90, 120,90, 60, 100, 90]
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
    background-size: 100% 100%;
  }
</style>
