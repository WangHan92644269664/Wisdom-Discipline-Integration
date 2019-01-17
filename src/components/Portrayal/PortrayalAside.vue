<template>
  <el-menu  class="submenu"   :default-active="activeIndex" unique-opened router>
    <el-menu-item index="#" class="leftTitle">人员画像平台</el-menu-item>
    <el-submenu index="/personal/drug">
      <template slot="title">戒毒人员信息管理</template>
      <el-menu-item-group>
        <el-menu-item index="/personal/drug/info">人员信息管理</el-menu-item>
      </el-menu-item-group>
    </el-submenu>
    <el-submenu index="/personal/health">
      <template slot="title">医疗卫生信息资源管理</template>
      <el-submenu index="/personal/health/HIS">
        <template slot="title">医疗HIS系统</template>
        <el-menu-item-group>
          <el-menu-item index="/personal/health/HIS/patient">患者管理</el-menu-item>
          <el-menu-item index="#/personal/health/HIS/operate">经营管理</el-menu-item>
          <el-menu-item index="/personal/health/HIS/prove">诊断证明</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="/personal/police">警务人员信息管理</el-menu-item>
  </el-menu>
</template>

<script>
    export default {
        name: "ContainerAside",
      data(){
          return {
            activeIndex:'/personal/health/HIS/patient',
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
