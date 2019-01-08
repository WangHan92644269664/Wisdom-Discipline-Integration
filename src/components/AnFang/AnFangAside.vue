<template>
  <el-menu  class="submenu"   :default-active="activeIndex" unique-opened router>
    <el-menu-item index="#" class="leftTitle">安防平台</el-menu-item>
    <el-submenu index="/anFang/video">
      <template slot="title">视频探视系统</template>
      <el-menu-item-group>
        <el-menu-item index="/anFang/video/record">会见探访记录</el-menu-item>
        <el-menu-item index="#/anFang/video/remote">戒毒远程视频医疗系统</el-menu-item>
        <el-menu-item index="#/anFang/video/process">会见流程</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
    export default {
        name: "ContainerAside",
      data(){
          return {
            activeIndex:'/anFang/video/record'
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
    /*text-align: left!important;*/
    border-bottom:none;
  }
  .el-menu-item:focus, .el-menu-item:hover{
    background:#d5d5d5;
  }
</style>
