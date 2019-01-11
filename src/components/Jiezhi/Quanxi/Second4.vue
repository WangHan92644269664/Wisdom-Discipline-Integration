<template>
  <div id="quanxi">
    <el-table
      :data="tableData"
      border
      style="width: 100%;height:100%;overflow:auto;"
      :header-cell-style="getRowClass"
      :row-style="tableRowStyle"
    >
      <el-table-column prop="date" label="日期" width="100px"></el-table-column>
      <el-table-column prop="info" label="信息记录" width="442px"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "10月6日",
         info:'生活作息异常,晚上不睡,白天不起。'
        },
        {
          date: "10月5日",
          info:'异常的兴奋暴走。'
        },
        {
          date: "10月4日",
          info:'与同寝学员发生争吵,易怒,脾气暴躁,偏执,不讲道理。'
        },
        {
          date: "10月3日",
          info:'抓挠其胸部头部持续1小时,锤墙。'
        },
        {
          date: "10月2日",
          info:'上厕所1小时6次,一天仅进食一餐。'
        },
      ]
    };
  },
  methods: {
    //方法
    //设置表格第一行的颜色
    getRowClass({ row, column, rowIndex, columnIndex }) {
      if (rowIndex === 0) {
        return "color:#ffd800;background:#141738;border:border:1px solid #000";
      } else {
        return "color:#ffd800;background:#141738;border:border:1px solid #000";
      }
    },
    tableRowStyle({ row, rowIndex }) {
      return "background-color: #141738";
    }
  }
};
</script>
<style>
  #quanxi .el-table--border{
    border:none!important;
  }
  #quanxi table{
    font-size: 16px!important;
    color:#fff!important;
  }
  #quanxi table tr td:nth-of-type(1){
    color:#0AB9D3!important;
    font-size: 18px;
  }
  #quanxi .el-table--border td,#quanxi .el-table--border td,  #quanxi .el-table--border th{
    border:1px solid #000!important;
  }

</style>
<style scoped>
.el-table {
  /* background:; */
}
</style>

