<template>
  <el-menu  class="submenu"   :default-active="activeIndex" unique-opened router>
    <el-menu-item index="#" class="leftTitle">日常办公平台</el-menu-item>
    <el-submenu index="/daily/advertise">
      <template slot="title">宣传管理</template>
      <el-menu-item-group>
        <el-menu-item index="/daily/advertise/essay">文章管理</el-menu-item>
        <el-menu-item index="/daily/essay/column">文章栏目管理</el-menu-item>
        <el-menu-item index="/daily/essay/carousel">轮播图管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/daily/logmanage">
      <template slot="title">日志管理</template>
      <el-menu-item-group>
        <el-menu-item index="/daily/logmanage/log">工作日志</el-menu-item>
        <el-menu-item index="/daily/logmanage/audit">日志审核</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/daily/plan">
      <template slot="title">工作计划</template>
      <el-menu-item-group>
        <el-menu-item index="/daily/plan/my">我的工作计划</el-menu-item>
        <el-menu-item index="/daily/plan/undo">我安排的工作</el-menu-item>
        <el-menu-item index="/daily/plan/dept">部门工作计划</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-menu-item index="/daily/notice">公告管理</el-menu-item>

  </el-menu>
</template>

<script>
    export default {
        name: "ContainerAside",
      data(){
          return {
            activeIndex:'/daily/plan/dept'
          }
      }
    }
</script>
<style>

</style>
<style scoped>
  ul{
    position: absolute;
    top: 70px;
    width: 200px;
    left: 0;
    background: #f5f5f5;
  }
  .el-menu-item.is-active {
    color: #4200ff!important;
    background:#d5d5d5;
    font-weight: bolder;
    border-left: 4px solid #4200ff;
  }
  .submenu>li{
    text-align: left!important;
    border-bottom: 1px solid #bbb;
  }
  .submenu>li:last-child{
    text-align: left!important;
    border-bottom:none;
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background:#d5d5d5;
  }
</style>
