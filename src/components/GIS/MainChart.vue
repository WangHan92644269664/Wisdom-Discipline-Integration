<template>
  <div>
    <div class="chartHeight" style="width:100%;" ref="echarts"></div>
  </div>
</template>

<script>
import echarts from "echarts";
import baiduJSON from "../../components/datas/baiduData";
import mainJson from "./main";
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
      // $(window).resize(function() {
      //   myChart.resize(); //窗口变化
      // });
      // 绘制图表
      let pointsData = baiduJSON; //其实这一步是多余的
      //把数据处理成需要的格式，只是把数值都改成了1，具体项目可以根据自己实际来处理
      var points = [].concat.apply(
        [],
        pointsData.map(function(track) {
          return track.map(function(seg) {
            return seg.coord.concat([1]);
          });
        })
      );
      var hStep = 300 / (mainJson.length - 1);
      var busLines = [].concat.apply(
        [],
        mainJson.map(function(busLine, idx) {
          var prevPt;
          var points = [];
          for (var i = 0; i < busLine.length; i += 2) {
            var pt = [busLine[i], busLine[i + 1]];
            if (i > 0) {
              pt = [prevPt[0] + pt[0], prevPt[1] + pt[1]];
            }
            prevPt = pt;

            points.push([pt[0] / 1e4, pt[1] / 1e4]);
          }
          return {
            coords: points,
            lineStyle: {
              normal: {
                color: echarts.color.modifyHSL(
                  "#5A94DF",
                  Math.round(hStep * idx)
                )
              }
            }
          };
        })
      );

      let option;
      myChart.setOption(
        (option = {
          // visualMap: {
          //   show: false
          // },
          bmap: {
            center: [116.46, 39.92],
            zoom: 10,
            roam: true,
            mapStyle: {
              styleJson: [
                {
                  featureType: "water",
                  elementType: "all",
                  stylers: {
                    color: "#031628"
                  }
                },
                {
                  featureType: "land",
                  elementType: "geometry",
                  stylers: {
                    color: "#000102"
                  }
                },
                {
                  featureType: "highway",
                  elementType: "all",
                  stylers: {
                    visibility: "off"
                  }
                },
                {
                  featureType: "arterial",
                  elementType: "geometry.fill",
                  stylers: {
                    color: "#000000"
                  }
                },
                {
                  featureType: "arterial",
                  elementType: "geometry.stroke",
                  stylers: {
                    color: "#0b3d51"
                  }
                },
                {
                  featureType: "local",
                  elementType: "geometry",
                  stylers: {
                    color: "#000000"
                  }
                },
                {
                  featureType: "railway",
                  elementType: "geometry.fill",
                  stylers: {
                    color: "#000000"
                  }
                },
                {
                  featureType: "railway",
                  elementType: "geometry.stroke",
                  stylers: {
                    color: "#08304b"
                  }
                },
                {
                  featureType: "subway",
                  elementType: "geometry",
                  stylers: {
                    lightness: -70
                  }
                },
                {
                  featureType: "building",
                  elementType: "geometry.fill",
                  stylers: {
                    color: "#000000"
                  }
                },
                {
                  featureType: "all",
                  elementType: "labels.text.fill",
                  stylers: {
                    color: "#857f7f"
                  }
                },
                {
                  featureType: "all",
                  elementType: "labels.text.stroke",
                  stylers: {
                    color: "#000000"
                  }
                },
                {
                  featureType: "building",
                  elementType: "geometry",
                  stylers: {
                    color: "#022338"
                  }
                },
                {
                  featureType: "green",
                  elementType: "geometry",
                  stylers: {
                    color: "#062032"
                  }
                },
                {
                  featureType: "boundary",
                  elementType: "all",
                  stylers: {
                    color: "#465b6c"
                  }
                },
                {
                  featureType: "manmade",
                  elementType: "all",
                  stylers: {
                    color: "#022338"
                  }
                },
                {
                  featureType: "label",
                  elementType: "all",
                  stylers: {
                    visibility: "off"
                  }
                }
              ]
            }
          },
          series: [
            {
              type: "lines",
              coordinateSystem: "bmap",
              polyline: true,
              data: busLines,
              silent: true,
              lineStyle: {
                normal: {
                  // color: '#c23531',
                  // color: 'rgb(200, 35, 45)',
                  opacity: 0.2,
                  width: 1
                }
              },
              progressiveThreshold: 500,
              progressive: 200
            },
            {
              type: "lines",
              coordinateSystem: "bmap",
              polyline: true,
              data: busLines,
              lineStyle: {
                normal: {
                  width: 0
                }
              },
              effect: {
                constantSpeed: 20,
                show: true,
                trailLength: 0.1,
                symbolSize: 1.5
              },
              zlevel: 1
            }
          ]
        })
      );

      var bmap = myChart
        .getModel()
        .getComponent("bmap")
        .getBMap();
      bmap.addControl(new BMap.MapTypeControl());
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
 .anchorBL{
  display: none !important;
}
 .BMap_cpyCtrl, .BMap_noprint, .anchorBL{
   display: none !important;
 }
</style>
