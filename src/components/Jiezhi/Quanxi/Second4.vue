<template>
  <div id="quanxi">
    <el-table
      :data="tableData"
      border
      style="width: 100%;height:100%;overflow:auto;"
      :header-cell-style="getRowClass"
      :row-style="tableRowStyle"
    >
      <el-table-column prop="date" label="日期" min-width="30%"></el-table-column>
      <el-table-column prop="info" label="信息记录" min-width="60%"></el-table-column>
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
        return "color:#ffd800;background:#1f2359;border:border:1px solid #040c18";
      } else {
        return "color:#ffd800;background:#1f2359;border:border:1px solid #040c18";
      }
    },
    tableRowStyle({ row, rowIndex }) {
      return "background-color:#1f2359";
    }
  }
};
</script>
<style>
  #quanxi .el-table--border td, #record-hz .el-table--border th {
    border:1px solid #000 !important;
  }
  #quanxi  .el-table--border,
  .el-table--group {
    border: none;
  }
  #quanxi  .el-table {
    color: #fff;
  }
  #quanxi  .el-table thead {
    color: #fdd600;
  }
  #quanxi  .el-table th,
  .el-table tr {
    background: #1e2357;
  }
  #quanxi  .el-table td,
  .el-table th.is-leaf {
    border-bottom: 1px solid #040c19;
  }
  #quanxi  .el-table--border td,
  .el-table--border th,
  .el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
    border-right: 1px solid #040c19;
  }
  #quanxi  .el-table--border,
  .el-table--group {
    border: none;
  }
  #quanxi  .el-table--border::after,
  .el-table--group::after,
  .el-table::before {
    background: #1e2357;
  }
  #quanxi  .el-table--enable-row-hover .el-table__body tr:hover > td {
    background-color: #212e3e !important;
  }
  #quanxi  table tr td:nth-of-type(1){
    color: #0ab9d3;
  }
</style>
<style scoped>
</style>

