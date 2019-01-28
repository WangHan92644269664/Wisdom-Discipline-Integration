<template>
  <div>
    <el-row  class="mainRight">
      <el-col :span="24" class="borderBottom">
        轮播图列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="选择日期:">
            <el-col :span="24">
              <el-form-item prop="date">
                <el-date-picker type="date" placeholder="请选择" v-model="formInline.date"
                                style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="关键字:">
            <el-select v-model="formInline.key" placeholder="标题或操作人">
              <el-option label="超级管理员" value="超级管理员"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" size="small"><img :src="search" alt="" class="sel">查询</el-button>
            <el-button type="primary" size="small"><img :src="reset" alt="" class="res">重置</el-button>
            <el-button type="primary" size="small"><img :src="add" alt="" class="add">添加</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
      stripe
      style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection"
        min-width="5%">
      </el-table-column>
      <el-table-column
        sortable
        prop="id"
        label="编号"
        min-width="7%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称"
        min-width="13%">
      </el-table-column>
      <el-table-column
        prop="address"
        label="位置简介"
        min-width="14%">
      </el-table-column>
      <el-table-column
        prop="people"
        label="操作人"
        min-width="11%">
      </el-table-column>
      <el-table-column
        prop="date"
        label="操作时间"
        min-width="14%">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        min-width="20%">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >详情</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;padding-bottom:40px;margin-top: 350px;">
      <el-col :span="24">
        <div class="block">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage4"
            :page-sizes="[5,10]"
            :page-size="10"
            :page-count="2"
            layout="prev, pager,next, jumper, total, sizes"
            :total="12">
          </el-pagination>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        search:require('../../images/search.png'),
        add:require('../../images/add.png'),
        reset:require('../../images/reset.png'),
        formInline: {
         date:'',
          key:''
        },
        currentPage4: 1,
        tableData: [
          {
            id:'44',
            name: '2018-12-01 工作总结',
            address:'党建动态左侧轮播图',
            people:'超级管理员',
            date: '2018-11-17 11:34:16',
            title: '护路护线功能模块开发',
          },{
            id:'44',
            name: '2018-12-01 工作总结',
            address:'首页中间广告位置',
            people:'超级管理员',
            date: '2018-11-17 11:34:16',
            title: '护路护线功能模块开发',
          },{
            id:'44',
            name: '2018-12-01 工作总结',
            address:'左侧轮播图',
            people:'超级管理员',
            date: '2018-11-17 11:34:16',
            title: '护路护线功能模块开发',
          }
        ],
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      },
      handleClick(row) {
        console.log(row);
      },
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      //删除所选中的一行
      deleteRow(index,rows){
        rows.splice(index,1)
      },
    },
  }
</script>
<style>

</style>
<style scoped>
 .cell .el-button:first-child{
    background: none;
   border:1px solid #999
  }
 .cell .el-button:nth-child(2){
   background: none;
   border:1px solid #ff813d;
   color:#ff813d
 }
 .cell .el-button:nth-child(3){
   background: none;
   border:1px solid #008aff;
   color:#008aff;
 }
</style>
