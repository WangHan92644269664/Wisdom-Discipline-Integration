<template>
  <el-menu  class="submenu"   :default-active="active" unique-opened router>
    <el-menu-item index="#" class="leftTitle">{{title}}</el-menu-item>
    <template v-for="(list,index) in lists">
      <template v-if="list.childs">
        <el-submenu :index="list.index">
          <template slot="title">{{list.name}}</template>
          <el-menu-item-group>
            <template v-for="(child,index) in list.childs">
              <el-menu-item :index="child.index">{{child.name}}</el-menu-item>
            </template>
          </el-menu-item-group>
        </el-submenu>
      </template>
      <template v-else>
        <el-menu-item :index="list.index">{{list.name}}</el-menu-item>
      </template>
    </template>
  </el-menu>
</template>

<script>
  export default {
    name: "ContainerAside",
    data(){
      return {


      }
    },
    props:{
      active:String,
      title:String,
      lists:Array
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
