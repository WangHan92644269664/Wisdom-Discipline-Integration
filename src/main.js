// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入highchart
import highcharts from 'highcharts'
import highcharts3d from 'highcharts/highcharts-3d'
highcharts3d(highcharts)
//引入echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
//引入particles
import VueParticles from 'vue-particles'
Vue.use(VueParticles)
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
