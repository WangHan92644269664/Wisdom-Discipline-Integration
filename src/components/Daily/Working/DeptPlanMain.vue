<template>
  <div>
    <el-row class="mainRight">
      <el-col :span="24" class="borderBottom">
        部门工作计划列表
      </el-col>
    </el-row>
    <el-row style="padding-left: 30px;padding-top: 20px;background: #fff;">
      <el-col :span="24" style="text-align: left;">
        <el-form :inline="true" :model="formInline" class="demo-form-inline">
          <el-form-item label="部门列表:">
            <el-select v-model="formInline.dept" placeholder="请选择">
              <el-option label="开发部" value="开发部"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="执行人:">
            <el-select v-model="formInline.exec" placeholder="请选择">
              <el-option label="王晗" value="王晗"></el-option>
              <el-option label="梦露" value="梦露"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="审核人:">
            <el-select v-model="formInline.admin" placeholder="请选择">
              <el-option label="超级管理员" value="超级管理员"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="完成程度:">
            <el-select v-model="formInline.finish" placeholder="请选择">
              <el-option label="未审核" value="未审核"></el-option>
              <el-option label="正在进行" value="正在进行"></el-option>
              <el-option label="还未开始" value="还未开始"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="时间类型:">
            <el-col :span="24">
              <el-time-picker type="fixed-time" placeholder="请选择" v-model="formInline.date2"
                              style="width: 100%;"></el-time-picker>
            </el-col>
          </el-form-item>
          <el-form-item label="日期:">
            <el-col :span="24">
              <el-form-item prop="date">
                <el-date-picker type="date" placeholder="请选择" v-model="formInline.date"
                                style="width: 100%;"></el-date-picker>
              </el-form-item>
            </el-col>
          </el-form-item>
          <el-form-item label="计划标题" prop="name">
            <el-input v-model="formInline.name" placeholder="请输入"></el-input>
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
      highlight-current-row
      @current-change="handleCurrentChange"
      style="width:96%;margin:0 auto"
    >
      <el-table-column
        type="selection"
        min-width="5%">
      </el-table-column>
      <el-table-column
        fixed
        prop="id"
        sortable
        label="编号"
        min-width="7%">
      </el-table-column>
      <el-table-column
        prop="name"
        label="计划标题"
        min-width="14%">
      </el-table-column>
      <el-table-column
        prop="people"
        sortable
        label="审核人"
        min-width="12%">
      </el-table-column>
        <el-table-column
          prop="tag"
          label="完成程度"
          min-width="11%"
          column-key="tag"
          :filters="[{text:'未审核',value:'未审核'},{text:'正在进行',value:'正在进行'},{text:'还未开始',value:'还未开始'}]"
          align="center"
        >
          <template slot-scope="scope">
            <span :class="{red:scope.row.tag==='还未开始',blue:scope.row.tag==='正在进行'}">
              {{scope.row.tag}}
            </span>
          </template>
        </el-table-column>
      <el-table-column
        prop="before"
        label="开始时间"
        column-key="tag"
        min-width="14%">
        <template slot-scope="scope">
          <span :class="{red:scope.row.tag==='还未开始'}">
            {{scope.row.before}}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        prop="end"
        label="完成时间"
        column-key="tag"
        min-width="14%">
        <template slot-scope="scope">
          <span :class="{red:scope.row.tag==='还未开始',blue:scope.row.tag==='正在进行'}">
            {{scope.row.end}}
          </span>
        </template>
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
        column-key="tag"
        min-width="20%">
        <template slot-scope="scope">
          <template v-if="scope.row.tag==='未审核'">
            <el-button @click="selectRow(scope.row)"size="small" class="selectUndo">查看</el-button>
          </template>
         <template v-else>
           <el-button @click="editRow(scope.$index,tableData)"size="small" class="selectUndo">待审核</el-button>
         </template>
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
        reset:require('../../images/reset.png'),
        formInline: {
          dept:'',
          exec: '',
          admin: '',
          finish:'',
          date: '',
          title: '',
          date2: '',
          name: '',
        },
        currentPage4: 1,
        tableData: [
          {
          id: '11',
          name: '护路护线功能模块开发',
          people: '超级管理员',
          tag: '未审核',
          before: '2018-11-17 11:34:16',
          end: '2018-11-19 11:34:16',
        }, {
          id: '8',
          name: '部件管理模块开发',
          people: '超级管理员',
          tag: '还未开始',
          before: '2018-11-17 11:34:16',
          end: '2018-11-24 11:34:16',
        }, {
          id: '4',
          name: '户籍管理模块开发',
          people: '超级管理员',
          tag: '正在进行',
          before: '2018-11-17 11:34:16',
          end: '2018-11-24 11:34:16',
        }, {
          id: '10',
          name: '校园安全功能模块开发',
          people: '超级管理员',
          tag: '正在进行',
          before: '2018-11-17 11:34:16',
          end: '2018-11-24 11:34:16',
        },
          {
            id: '5',
            name: '实有人口功能模块开发',
            people: '超级管理员',
            tag: '还未开始',
            before: '2018-11-17 11:34:16',
            end: '2018-11-24 11:34:16',
          },
          {
            id: '7',
            name: '社区民意模块开发',
            people: '超级管理员',
            tag: '还未开始',
            before: '2018-11-17 11:34:16',
            end: '2018-11-24 11:34:16',
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
  .red{
    color:red
  }
  .blue{
    color:#01b160;
  }
  .selectUndo{
    background: none;
    border:1px solid #999
  }
  .selectDoing{
    background: none;
    border:1px solid #01b160;
    color:#01b160;
  }
</style>
