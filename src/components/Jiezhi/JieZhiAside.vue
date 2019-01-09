<template>
  <el-menu class="submenu" :default-active="activeIndex" unique-opened router>
    <el-menu-item index="#" class="leftTitle">戒治综合平台</el-menu-item>
    <el-menu-item index="/zongzhi/bingli">人员电子病历</el-menu-item>
    <el-menu-item index="/zongzhi/guanxi">人员社会关系</el-menu-item>
    <el-menu-item index="/zongzhi/quanxi">人员全息档案</el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: "ContainerAside",
  data() {
    return {
      activeIndex: "/zongzhi/bingli"
    };
  }
};
</script>
<style>
</style>
<style scoped>
ul {
  position: absolute;
  top: 70px;
  width: 200px;
  left: 0;
  background: #191d43;
  color: #fff !important;
}
.el-menu-item.is-active {
  color: #fff !important;
  background: #0f152f;
  font-weight: bolder;
  border-left: 4px solid #4200ff;
}
.submenu > li {
  text-align: left !important;
  border-bottom: 1px solid #040c19;
}
.submenu > li:last-child {
  /*text-align: left!important;*/
  border-bottom: none;
}
.el-menu-item:focus,
.el-menu-item:hover {
  background: #0f152f;
}
.el-aside .el-menu-item-group .el-menu-item {
  line-height: 50px !important;
  height: 50px !important;
}
.el-aside .el-submenu__title,
.el-menu-item,
.el-submenu__title {
  color: #fff !important;
}
</style>
