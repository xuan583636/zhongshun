<template>
  <div>
    <el-table :data="tableData[0]" :show-header="true" min-height="150">
      <el-table-column fixed prop="id" label="字段" width="100" align="center">
      </el-table-column>
      <el-table-column prop="label" label="名称" width="120" align="center">
      </el-table-column>
      <el-table-column prop="show" label="是否显示" width="100" align="center">
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.show"
            active-color="#13ce66"
            inactive-color="#C0C4CC"
            @change="changeSwitch(scope.$index)"
          >
            >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column prop="value" label="值" width="100" align="center">
        <template slot-scope="scope">
          <el-input
            v-model="scope.row.value"
            :disabled="!scope.row.show"
          ></el-input>
        </template>
      </el-table-column>
      <el-table-column prop="label" label="配置类型" width="200" align="center">
        <template slot-scope="scope">
          <el-radio-group
            v-model="scope.row.complex"
            size="mini"
            :disabled="!scope.row.show"
          >
            <el-radio-button :label="false">基础配置</el-radio-button>
            <el-radio-button :label="true">高级配置</el-radio-button>
          </el-radio-group>
        </template>
      </el-table-column>
    </el-table>
    <ComplexConfig v-if="tableData[0][0].complex & tableData[0][0].show" />
  </div>
</template>

<script>
// import * as echarts from 'echarts'
/**
 * 组件描述: 此组件用于通用图表的配置项  基于echarts 5.x版本
 * 主要配置项
 *  category： 配置类别的展示，展示类型 颜色等
 * serires： 配置系列的展示
 * 扩展配置
 *   标题
 *   背景颜色
 *   图例
 *   等其它
 */
export default {
  name: "freeChart",
  data() {
    return {
      // 布局配置数据
      layoutB: {
        title: "",
        // 类别
        category: [],
        // 系列
        serires: [],
        // 等其它
      },
    };
  },
  methods: {
    loadData() {
      // 获取数据
      // 解析数据 并存放在dataBuffer
    },
    // 对父组件输出配置信息
    getConfig() {
      const config = {
        layoutConfig: {
          ...this.layoutConfig,
          //   itemList: this.$refs.itemList.getData(),
        },
      };
      return JSON.parse(JSON.stringify(config));
    },
  },
};
</script>

<script>
import ComplexConfig from "./complexConfig.vue";
export default {
  name: "ChartEditor",
  components: {
    ComplexConfig,
  },
  data() {
    return {
      tableData: [
        [
          {
            id: "title",
            label: "标题",
            show: true,
            value: "普陀区",
            complex: true,
          },
        ],
        [
          {
            id: "subheading",
            label: "副标题",
            show: false,
            value: "3433",
            complex: true,
          },
        ],
      ],
    };
  },
  methods: {
    changeSwitch(index) {
      this.tableData[index].complex = false;
    },
    mounted() {
      console.log("this.myChart", 112);
    },
  },
};
</script>

<style lang="scss" scoped>
.el-table::before {
  width: 0;
}
</style>
