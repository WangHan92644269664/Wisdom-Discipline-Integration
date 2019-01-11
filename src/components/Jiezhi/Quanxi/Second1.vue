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
          color: ['#B9DCE0', '#9B8478', '#C0D25C', '#32cd32', '#58C5BF', '#E46D33',],   //饼状图颜色数组
          tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
          },
          series : [
            {
              name: '访问来源',
              type: 'pie',
              radius: ['0%', '55%'],
              label: {
                normal: {
                  formatter: '{b|{b}}\n{hr|}\n{d|{d}%}',
                  rich: {
                    //文字的设置
                    b: {
                      fontSize: 16,
                      padding: 4,
                    },
                    //线的设置
                    hr: {
                      borderColor: '#555',
                      width: '70%',
                      borderWidth:1,
                      height: 0
                    },
                    //设置百分比
                    d: {
                      fontSize: 10,
                      align: 'left',
                      padding: 4
                    },
                  }
                }
              },
              labelLine: {
                normal: {
                  show: true,
                  length: 10,
                  length2: 30,
                }
              },
              data:[
                {value:600, name:'心里戒毒'},
                {value:220, name:'娱乐活动'},
                {value:500, name:'生理戒毒'},
                {value:310, name:'义务劳动'},
                {value:135, name:'用餐'},
              ],
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
