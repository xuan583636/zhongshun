<template>
  <el-table
    :data="complexTableData"
    :show-header="false"
    min-height="150"
    :row-style="style"
  >
    <el-table-column fixed prop="id" label="字段" width="100" align="right">
    </el-table-column>
    <el-table-column prop="label" label="名称" width="120" align="right">
    </el-table-column>
    <el-table-column prop="show" label="是否显示" width="100" align="right">
      <template slot-scope="scope">
        <el-switch
          v-model="scope.row.show"
          active-color="#13ce66"
          inactive-color="#C0C4CC"
        >
          >
        </el-switch>
      </template>
    </el-table-column>
    <el-table-column prop="value" label="值" width="100" align="right">
      <template slot-scope="scope">
        <el-input
          v-model="scope.row.value"
          :disabled="!scope.row.show"
          size="mini"
        ></el-input>
      </template>
    </el-table-column>
    <el-table-column width="200"> </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "ComplexConfig",
  data() {
    return {
      style: {
        "background-color": "#fafafa",
      },
      complexTableData: [
        {
          id: "vice-title",
          label: "副标题",
          show: false,
          value: "3433",
          complex: true,
        },
      ],
    };
  },
  methods: {},
};
</script>
