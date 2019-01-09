<template>
  <div>
    <el-table
      :data="tableData1"
      border
      style="width: 100%;height:100%;overflow:auto;"
      :header-cell-style="getRowClass" :row-style="tableRowStyle"
    >
      
      <el-table-column prop="name" label="医师姓名" width="100px"></el-table-column>
      <el-table-column prop="address" label="信息"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData1: [
        {
          name: "赵护士",
          address: "葡萄500ml"
        },
        {

          name: "张护士",
          address: "青霉素1针"
        },
        {
          
          name: "李护士",
          address: "无异常"
        },
        {
         
          name: "赵护士",
          address: "板蓝根25克"
        },
        {
          
          name: "张护士",
          address: "头孢两粒"
        },
        {
         
          name: "李护士",
          address: "板蓝根25克"
        },
        {
         
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
      return 'background-color: #1f2359'
    },
  }
};
</script>
<style scoped>
.el-table  {
  /* background:; */
}
</style>

