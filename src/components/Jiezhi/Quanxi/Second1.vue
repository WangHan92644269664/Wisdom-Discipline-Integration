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
            tooltip : {
              trigger: 'item',
              formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
              x : 'center',
          y : 'bottom',
              data:[]
            },
            toolbox: {
              feature : {
                magicType : {
                  show: true,
                  type: ['pie']
                },
              }
            },
            series : [
              {
                name:'面积模式',
                type:'pie',
                radius : [0,80],
                center : ['50%', '50%'],
                roseType : 'area',
                data:[
                  {value:40, name:'心里戒毒'},
                  {value:12, name:'娱乐活动'},
                  {value:30, name:'生理戒毒'},
                  {value:23, name:'义务劳动'},
                  {value:5, name:'用餐'},
                ]
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
