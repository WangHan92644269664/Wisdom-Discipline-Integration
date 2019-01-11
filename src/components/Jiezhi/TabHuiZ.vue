<template>
  <div id="record-hz">
    <el-table
      :data="tableData1"
      border
      style="width: 100%;height:100%;overflow:auto;"
      :header-cell-style="getRowClass"
      :row-style="tableRowStyle"
    >
      <el-table-column prop="name" label="医师姓名" width="100px"></el-table-column>
      <el-table-column prop="address" label="住院记录"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData1: [
        {
          name: "李医师",
          address: "现患者生命体征稳定，神智清醒，言语含糊不清。"
        },
        {
          name: "张护士",
          address: "心率89次/分，律齐，心音可；肝脾未扪及。"
        },
        {
          name: "李护士",
          address: "肌张力稍高，左侧膝反射亢进、Babinski征阳性，肝脏无异常。"
        },
        {
          name: "赵护士",
          address: "患者神志清楚，言语含糊不清，无恶心。适合针灸疗法。"
        },
        {
          name: "张护士",
          address: "呕吐，久病脾虚气弱，胃功能时常，建议调理脾胃，忌辛辣食物。"
        },
        {
          name: "李护士",
          address:
            "由于心率波动产生少许错层，冠状动脉分布显优势型，双侧冠状动脉管壁欠光滑，左侧冠状动脉前降支近段及中段见多发混合斑块，形成管腔轻易中度狭窄，其余分支管腔尚可。"
        },
        {
          name: "陈护士",
          address:
            "双侧冠状动脉管壁欠光滑，符合动脉硬化改变，左侧冠状动脉前降近段及中段管腔多发轻一中度狭窄，左侧冠状动脉回旋之管腔多发轻度狭窄。右侧冠状动脉主干近段，管腔显示轻度狭窄。"
        }
      ]
    };
  },
  methods: {
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
    //方法
    //设置表格第一行的颜色
  }
};
</script>
<style>
#record-hz .el-table--border td, #record-hz .el-table--border th {
  border:1px solid #000 !important;
}
#record-hz .el-table--border,
.el-table--group {
  border: none;
}
#record-hz .el-table {
  color: #fff;
}
#record-hz .el-table thead {
  color: #fdd600;
}
#record-hz .el-table th,
.el-table tr {
  background: #1e2357;
}
#record-hz .el-table td,
.el-table th.is-leaf {
  border-bottom: 1px solid #040c19;
}
#record-hz .el-table--border td,
.el-table--border th,
.el-table__body-wrapper .el-table--border.is-scrolling-left ~ .el-table__fixed {
  border-right: 1px solid #040c19;
}
#record-hz .el-table--border,
.el-table--group {
  border: none;
}
#record-hz .el-table--border::after,
.el-table--group::after,
.el-table::before {
  background: #1e2357;
}
#record-hz .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #212e3e !important;
}
#record-hz table tr td:nth-of-type(1),
#record-hl table tr td:nth-of-type(2) {
  color: #0ab9d3;
}
</style>

<style scoped>
</style>

