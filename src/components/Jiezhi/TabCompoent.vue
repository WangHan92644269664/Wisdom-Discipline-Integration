<template>
  <div id="record-hl">
    <el-table
      :data="tableData"
      border
      style="width: 100%;height:100%;overflow:auto;"
      :header-cell-style="getRowClass"
      :row-style="tableRowStyle"
    >
      <el-table-column prop="date" label="日期" width="100px"></el-table-column>
      <el-table-column prop="name" label="护士姓名" width="100px"></el-table-column>
      <el-table-column prop="address" label="信息"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "10月2日",
          name: "赵护士",
          address: "葡萄500ml"
        },
        {
          date: "10月3日",
          name: "张护士",
          address: "青霉素1针"
        },
        {
          date: "10月3日",
          name: "李护士",
          address: "无异常"
        },
        {
          date: "10月4日",
          name: "赵护士",
          address: "板蓝根25克"
        },
        {
          date: "10月5日",
          name: "张护士",
          address: "头孢两粒"
        },
        {
          date: "10月6日",
          name: "李护士",
          address: "板蓝根25克"
        },
        {
          date: "10月7日",
          name: "陈护士",
          address: "安定10ml"
        }
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
      return "background-color: #1f2359";
    }
  }
};
</script>
<style>
#record-hl .el-table--border td, #record-hl .el-table--border th {
  border:1px solid #000 !important;
}
#record-hl .el-table--border,
.el-table--group {
  border: none;
}
#record-hl .el-table{
  color:#fff;
}
#record-hl .el-table thead {
  color: #fdd600;
}
#record-hl .el-table th,
.el-table tr {
  background: #1e2357;
}
#record-hl .el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #040c19;
}
#record-hl .el-table--border td,
.el-table--border th,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: 1px solid #040c19;
}
#record-hl .el-table--border,
.el-table--group {
  border: none;
}
#record-hl .el-table--border::after,
.el-table--group::after,
.el-table::before {
  background: #1e2357;
}
#record-hl .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #212e3e !important;
}
#record-hl table tr td:nth-of-type(1),#record-hl table tr td:nth-of-type(2){
  color:#0AB9D3;
}
</style>
<style scoped>
.el-table {
  /* background:; */
}
</style>

