<template>
  <div>
    <div class="chartHeight" :id="id"></div>
  </div>
</template>
<script>
import HighCharts from "highcharts";
export default {
  props: {
    id: {
      type: String
    },
  },
  data() {
    return {
      option: {
        colors: [
          "#d32279",
          "#007ddf",
        ],
        chart: {
          backgroundColor: null,
          type: "pie", //饼图
          options3d: {
            enabled: true, //使用3d功能
            alpha: 60, //延y轴向内的倾斜角度
            beta: 0
          }
        },
        title: {
          text: "", //图表的标题文字
          style: {
            color: "#fff"
          },
          align: "left"
        },
        plotOptions: {
          pie: {
            allowPointSelect: true, //每个扇块能否选中
            cursor: "pointer", //鼠标指针
            depth: 20, //饼图的厚度
            dataLabels: {
              enabled: true //是否显示饼图的线形tip
            }
          }
        },
        series: [
          {
            type: "pie",
            data: [
              ["女", 12], //模块名和所占比，也可以{name: '测试1',y: 12}
              ["男", 23],
            ]
          }
        ]
      }
    };
  },
  mounted() {
    HighCharts.chart(this.id, this.option);
    const vm = this;
    // 基于准备好的dom，初始化echarts实例
    var myChart = HighCharts.chart(this.id, this.option);
    vm.$nextTick(() => {
      vm.drawChart();
    });
  },
  methods: {
    drawChart() {
      const vm = this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = HighCharts.chart(this.id, this.option);
    }
  },
  created() {}
};
</script>
 
<style scoped>
/* 容器 */
.chartHeight {
  height: 100%;
}
</style>
