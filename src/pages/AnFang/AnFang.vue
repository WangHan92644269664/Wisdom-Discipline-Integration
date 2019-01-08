<template>
  <el-container>
    <!--主体内容的侧边栏-->
    <el-aside width="200px">
      <!--左侧侧边栏组件-->
     <Aside></Aside>
    </el-aside>
    <el-container style="margin:35px;height: 790px;">
      <!--子路由显示的地方-->
      <router-view/>
    </el-container>
  </el-container>
</template>

<script>

  import Aside from '../../components/AnFang/AnFangAside'
  export default {
    data() {
      return {
      }
    },
    components: {
      Aside
    },
    methods: {
    }
  }
</script>
<style scoped>

</style>
