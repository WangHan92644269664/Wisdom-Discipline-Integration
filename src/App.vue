<template>
  <div id="app">
    <Header v-show="$route.meta.showHeader"></Header>
    <router-view/>
  </div>
</template>

<script>
  import Header from '@/components/Header'
  export default {
    name: 'App',
    components:{
      Header
    }
  }
</script>

<style>
  .el-button--small{
    font-size: 14px!important;
  }

  .sel,.add,.res{
    margin-right: 8px;
    vertical-align: middle;
  }
  #app {
    text-align: center;
    background: #e7e7e7;
  }
  .el-main{
    background:#fff;
    box-shadow:1px 1px 20px rgba(76,76,76,.2);
    border:none;
    padding: 0 !important;
    margin: 35px 35px 0 35px!important;
  }
  .home {
    margin: 0!important;
  }
  .el-table thead{
    color:#6e6e6e;
  }
  .el-form-item__label{
    color: #222222 !important;
  }
  .el-input__inner{
    border:1px solid #e2e2e2;
    height: 30px;
    border-radius: 0;
  }
  .el-main .el-table th {
    text-align: center;
    padding: 5px 0;
    background: #e2e2e2;
  }
  .el-main .el-table td{
    text-align: center;
  }
  .el-main .search .el-button--primary {
    background-color: #4200ff !important;
    border-color:  #4200ff !important;
    border-radius: 0;
  }
  .el-main .search .add{
    margin-right: 8px;
  }
  .block {
    text-align: center!important;
  }
  .el-pager li.active {
    background: #007eff!important;
    color: #fff;
  }
  .el-pager li{
    min-width: 28px;
    height: 28px;
  }
  .el-pagination{
    color:#bbb;
    font-weight: 500;
  }
  .el-button--small, .el-button--small.is-round{
    padding: 6px 10px;
  }
  .el-button--info {
    background-color: #fff!important;
    border: 1px solid #FF6400 !important;
    color: #FF6400 !important;
  }
  .el-pagination__total {
    margin-left: 10px;
  }
  .el-main .el-table {
    background: #fff;
    border: 1px solid #e2e2e2;
    color:#666
  }

  .el-main .info {
    background-color: #fff;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    padding: 0 15px;
    height: 40px;
    line-height: 40px;
    color: #ababab;
  }
  .mainRight {
    background: #fff;
  }

  .mainRight .borderBottom {
    border-bottom: 1px solid #e2e2e2;
    text-align: left;
    line-height:50px;
    height: 50px;
    font-size: 14px;
    padding-left: 30px;
    color: #9b9b9b;
    letter-spacing: 0.1em;
  }
  .el-menu-item-group__title{
    padding: 0!important;
  }
  .el-aside{
     background:#fff;
   }
  .el-aside .el-submenu__title,.el-aside. el-menu-item, .el-submenu__title{
    color:#333;
    font-weight: bolder;
    font-size:14px;
    height: 59px;
    line-height: 59px;
  }
  .el-aside .el-menu-item-group .el-menu-item{
    color:#333!important;
    line-height: 34px!important;
    height: 34px!important;
    font-weight: normal!important;
  }
  .el-aside .el-submenu .el-menu-item{
    min-width: 200px;
  }
  /*左侧侧边栏的标题*/
  .el-aside .submenu li.leftTitle{
    background: #4200ff;
    color:#fff;
    text-align: center!important;
    border:none!important;
    height: 70px;
    line-height: 70px;
    font-size: 20px;
    font-weight: bolder;
  }
  .el-aside .submenu li:nth-of-type(1){
    text-align: center;
  }
  #login .el-input__inner{
    height: 30px!important;
    line-height: 30px!important;
    background-color:transparent !important;
    border:1px solid transparent!important;
    position: relative!important;
    top:-5px!important;
  }
  #login .el-form-item{
    margin-bottom: 8px!important;
  }
  #login input:-ms-input-placeholder{
    color: #676565!important;
  }

  #login input::-webkit-input-placeholder{
    color: #676565!important;
  }

  .quanxi{
    background-image: url("./assets/images/jiezhi/quanxi/bg.png")!important;
    background-position: center center!important;
    background-size: 100% 100%!important;
  }

</style>
