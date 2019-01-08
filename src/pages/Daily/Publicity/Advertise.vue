<template>
  <el-container>
    <ConMainAside :name="name" :data="data" ></ConMainAside>
    <el-main>
        <!--主体内容的右边的内容组件-->
        <MainRight :rightTitle="rightTitle"></MainRight>
    </el-main>
    </el-container>
</template>

<script>
  import ConMainAside from '../../../components/ConMainAside'
  import MainRight from '../../../components/Daily/Publicity/AdvertiseEssayMain'

  export default {
    data() {
      return {
        name: '栏目管理',
        rightTitle:'文章管理列表',
        data: [
          {
            label: '新闻资讯',
            children:[
              { label: '新闻资讯',}
            ]
          }, {
            label: '政务公开',
            children:[
              {
                label: '政务公开',
              }
            ]
          }, {
            label: '政策法规',
            children:[
              {
                label: '政务公开',
              }
            ]
          },
          {
            label: '智慧大厅简介',
            children:[
              {
                label: '政务公开',
              }
            ]
          },
          {
            label: '使用说明',
            children:[
              {
                label: '政务公开',
              }
            ]
          },
          {
            label: '关于我们',
            children:[
              {
                label: '政务公开',
              }
            ]
          },
          {
            label: '谷渡街道办事处简介',
            children:[
              {
                label: '政务公开',
              }
            ]
          },
          {
            label: '党建服务中心简介',
            children:[
              {
                label: '政务公开',
              }
            ]
          },
          {
            label: '社区简介',
            children:[
              {
                label: '政务公开',
              }
            ]
          },
          {
            label: '智慧党建',
            children:[
              {
                label: '政务公开',
              }
            ]
          },
          {
            label: '居民业务查询',
            children:[
              {
                label: '政务公开',
              }
            ]
          },
          ],
      }
    },
    components: {
      ConMainAside,
      MainRight
    },
  }
</script>

<style scoped>
</style>
