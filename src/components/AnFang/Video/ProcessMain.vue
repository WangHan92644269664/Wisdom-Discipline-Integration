<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        警务人员信息列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="姓名:" >
            <el-input v-model="formInline.name" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item label="身份证号:">
            <el-input v-model="formInline.id" placeholder="请输入姓名"></el-input>
          </el-form-item>
          <el-form-item class="search">
            <el-button type="primary" size="small"><img :src="search" alt="" style="margin-right: 8px;">查询</el-button>
            <el-button type="primary" size="small"><img :src="add" alt="" class="add">添加</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
    <el-table
      :data="tableData"
      border
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        min-width="10%">
      </el-table-column>
      <el-table-column
        prop="nation"
        label="民族"
        min-width="10%"
      >
      </el-table-column>
      <el-table-column
        prop="date"
        label="出生日期"
        min-width="15%">
      </el-table-column>
      <el-table-column
        prop="photo"
        label="缩略图"
        min-width="16%">
        <template slot-scope="scope">
          <img :src="scope.row.photo" alt="" style="width: 50px;height: 30px;">
        </template>
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系电话"
        min-width="18%">
      </el-table-column>
      <el-table-column
        prop="dept"
        label="所属单位"
        min-width="20%">
      </el-table-column>
      <el-table-column
        prop="work"
        label="所属职务"
        min-width="12%">
      </el-table-column>
      <el-table-column
        prop="people"
        label="录入人"
        width="150">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        width="300">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)"size="small" >查看</el-button>
          <el-button @click="handleClick(scope.row)" size="small">编辑</el-button>
          <el-button @click="deleteRow(scope.$index,tableData)"size="small">移除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-row style="background: #fff;margin-top: 90px;">
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
        formInline: {
          id: '',
          name:''
        },
        currentPage4: 1,
        tableData: [
          {
            name:'张已',
            sex:'女',
            nation:'汉',
            date:'1995-01-21',
            photo:require('../../images/header.jpg'),
            phone:'15464245952',
            dept:'河南省郑州市缉毒司',
            work:'组长',
            people:'管理员'
          }, {
            name:'张已',
            sex:'女',
            nation:'汉',
            date:'1995-01-21',
            photo:require('../../images/header.jpg'),
            phone:'15464245952',
            dept:'河南省郑州市缉毒司',
            work:'组长',
            people:'管理员'
          }, {
            name:'张已',
            sex:'女',
            nation:'汉',
            date:'1995-01-21',
            photo:require('../../images/header.jpg'),
            phone:'15464245952',
            dept:'河南省郑州市缉毒司',
            work:'组长',
            people:'管理员'
          }, {
            name:'张已',
            sex:'女',
            nation:'汉',
            date:'1995-01-21',
            photo:require('../../images/header.jpg'),
            phone:'15464245952',
            dept:'河南省郑州市缉毒司',
            work:'组长',
            people:'管理员'
          },
          {
            name:'张已',
            sex:'女',
            nation:'汉',
            date:'1995-01-21',
            photo:require('../../images/header.jpg'),
            phone:'15464245952',
            dept:'河南省郑州市缉毒司',
            work:'组长',
            people:'管理员'
          },
          {
            name:'张已',
            sex:'女',
            nation:'汉',
            date:'1995-01-21',
            photo:require('../../images/header.jpg'),
            phone:'15464245952',
            dept:'河南省郑州市缉毒司',
            work:'组长',
            people:'管理员'
          },
        ],
      }
    },
    methods: {
      //查看当前所选中的一行
      selectRow(row) {
        console.log(row);
      },
      //编辑当前选中的一行
      editRow(row){
        console.log(row)
      },
      //删除所选中的一行
      deleteRow(index,rows){
        rows.splice(index,1)
      },
      //处理当前的页码数
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        this.currentRow=val;
        console.log(val)
      },
    },
  }
</script>
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
