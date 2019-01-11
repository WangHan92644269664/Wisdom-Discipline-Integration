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
          tooltip: {
          },
          legend: {
            orient: 'horizontal',
            x: 'right',
            y: 'top',
            padding: 10,
            data: [
              {
                name:'分数',
                textStyle:{
                  fontSize:14,
                  color:'#fff'
                },
                icon:'stack'
              },
              ]

          },
          grid: {
            top: '8%',
            left: '3%',
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
                color: 'transparent'
              },
            },
            axisLabel: { //坐标轴刻度标签的相关设置
              margin:10,
              textStyle: {
                color: '#fff',
                margin:100,
              },
            },
            axisTick: { show: false,},
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月','8月', '9月', '10月', '11月', '12月'],
          }],
          yAxis: [{
            type: 'value',
            splitLine: {
              show: true,
              lineStyle: {
                color: 'transparent'
              }
            },
            axisLine: {show: false,},
            axisLabel: {
              margin:24,
              textStyle: {
                color: '#aaa',
              },
            },
            axisTick: { show: false,},
          }],
          series: [{
            name: '分数',
            type: 'line',
            smooth: true, //是否平滑曲线显示
            symbolSize:0,
            lineStyle: {
              normal: {
                color: "#066083"   // 线条颜色
              }
            },
            areaStyle: { //区域填充样式
              normal: {
                //线性渐变，前4个参数分别是x0,y0,x2,y2(范围0~1);相当于图形包围盒中的百分比。如果最后一个参数是‘true’，则该四个值是绝对像素位置。
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0,  color: 'rgba(61,234,255, 0.9)'},
                  { offset: 0.7,  color: 'rgba(61,234,255, 0)'}
                ], false),

                shadowColor: 'rgba(53,142,215, 0.9)', //阴影颜色
                shadowBlur: 20 //shadowBlur设图形阴影的模糊大小。配合shadowColor,shadowOffsetX/Y, 设置图形的阴影效果。
              }
            },
            data: [12,17,20,15,12,13,16,11,10,11,13,15]
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
    background-size: 100% 100%;
  }
</style>
