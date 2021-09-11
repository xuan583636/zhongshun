<template>
  <div>
    <el-collapse v-model="basicCollapse" class="out-collapse">
      <el-collapse-item name="1">
        <div class="collapse-title" slot="title">
          <span class="head-title">{{ configData.title.label }}</span>
          <div @click="stopProp">
            <el-switch
              v-model="configData.title.show"
              class="head-switch"
              active-color="#13ce66"
              inactive-color="#C0C4CC"
            >
              >
            </el-switch>
          </div>
        </div>
        <div class="collapse-content">
          <div class="collapse-content-row">
            <span class="collapse-content-key">内容</span>
            <el-input
              class="collapse-content-value"
              placeholder="请输入标题"
              size="mini"
              v-model="configData.title.value"
              :disabled="!configData.title.show"
            >
            </el-input>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">大小</span>
            <el-input-number
              class="collapse-content-value"
              v-model="configData.title.fontSize"
              :disabled="!configData.title.show"
              size="mini"
              :min="15"
              :max="30"
              label="字体大小"
            ></el-input-number>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">字体颜色</span>
            <div class="collapse-content-value">
              <el-color-picker
                v-model="configData.title.color"
                :disabled="!configData.title.show"
                show-alpha
              ></el-color-picker>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <div class="collapse-title" slot="title">
          <span class="head-title">{{ configData.viceTitle.label }}</span>
          <div @click="stopProp">
            <el-switch
              v-model="configData.viceTitle.show"
              class="head-switch"
              active-color="#13ce66"
              inactive-color="#C0C4CC"
            >
              >
            </el-switch>
          </div>
        </div>
        <div class="collapse-content">
          <div class="collapse-content-row">
            <span class="collapse-content-key">内容</span>
            <el-input
              class="collapse-content-value"
              placeholder="请输入标题"
              size="mini"
              v-model="configData.viceTitle.value"
              :disabled="!configData.viceTitle.show"
            >
            </el-input>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">大小</span>
            <el-input-number
              class="collapse-content-value"
              v-model="configData.viceTitle.fontSize"
              :disabled="!configData.viceTitle.show"
              size="mini"
              :min="15"
              :max="30"
              label="字体大小"
            ></el-input-number>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">字体颜色</span>
            <div class="collapse-content-value">
              <el-color-picker
                v-model="configData.viceTitle.color"
                :disabled="!configData.viceTitle.show"
                show-alpha
              ></el-color-picker>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <div class="collapse-title" slot="title">
          <span class="head-title">{{ configData.legend.label }}</span>
          <div @click="stopProp">
            <el-switch
              v-model="configData.legend.show"
              class="head-switch"
              active-color="#13ce66"
              inactive-color="#C0C4CC"
            >
              >
            </el-switch>
          </div>
        </div>
        <div class="collapse-content">
          <div class="collapse-content-row">
            <span class="collapse-content-key">类型</span>
            <el-select
              v-model="configData.legend.type"
              class="collapse-content-value"
              size="mini"
              :disabled="!configData.legend.show"
            >
              <el-option value="plain" label="普通"></el-option>
              <el-option value="scroll" label="翻页"></el-option>
            </el-select>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">布局方式</span>
            <el-select
              v-model="configData.legend.orient"
              :disabled="!configData.legend.show"
              placeholder="请选择"
              class="collapse-content-value"
              size="mini"
            >
              <el-option label="水平" value="horizontal"> </el-option>
              <el-option label="垂直" value="vertical"> </el-option>
            </el-select>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">布局位置</span>
            <el-select
              v-model="configData.legend.position"
              :disabled="!configData.legend.show"
              placeholder="请选择"
              class="collapse-content-value"
              size="mini"
            >
              <el-option
                v-for="item in legendPositionOption"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              >
              </el-option>
            </el-select>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">X轴偏移</span>
            <el-input-number
              class="collapse-content-value"
              v-model="configData.legend.X"
              controls-position="right"
              :disabled="!configData.legend.show"
              size="mini"
              :min="15"
              :max="30"
              label="X轴偏移"
            ></el-input-number>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">Y轴偏移</span>
            <el-input-number
              class="collapse-content-value"
              v-model="configData.legend.Y"
              controls-position="right"
              :disabled="!configData.legend.show"
              size="mini"
              :min="15"
              :max="30"
              label="Y轴偏移"
            ></el-input-number>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
        <div class="collapse-title" slot="title">
          <span class="head-title">数据</span>
        </div>
        <div class="collapse-content inner">
          <el-collapse v-model="dataCollapse" class="inner-collapse">
            <el-collapse-item name="1">
              <div class="collapse-title" slot="title">
                <span class="head-title">{{ configData.title.label }}</span>
                <div @click="stopProp">
                  <el-switch
                    v-model="configData.title.show"
                    class="head-switch"
                    active-color="#13ce66"
                    inactive-color="#C0C4CC"
                  >
                    >
                  </el-switch>
                </div>
              </div>
              <div class="collapse-content">
                <div class="collapse-content-row">
                  <span class="collapse-content-key">内容</span>
                  <el-input
                    class="collapse-content-value"
                    placeholder="请输入标题"
                    size="mini"
                    v-model="configData.title.value"
                    :disabled="!configData.title.show"
                  >
                  </el-input>
                </div>
                <div class="collapse-content-row">
                  <span class="collapse-content-key">大小</span>
                  <el-input-number
                    class="collapse-content-value"
                    v-model="configData.title.fontSize"
                    :disabled="!configData.title.show"
                    size="mini"
                    :min="15"
                    :max="30"
                    label="字体大小"
                  ></el-input-number>
                </div>
                <div class="collapse-content-row">
                  <span class="collapse-content-key">字体颜色</span>
                  <div class="collapse-content-value">
                    <el-color-picker
                      v-model="configData.title.color"
                      :disabled="!configData.title.show"
                      show-alpha
                    ></el-color-picker>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item name="2">
              <div class="collapse-title" slot="title">
                <span class="head-title">{{ configData.title.label }}</span>
                <div @click="stopProp">
                  <el-switch
                    v-model="configData.title.show"
                    class="head-switch"
                    active-color="#13ce66"
                    inactive-color="#C0C4CC"
                  >
                    >
                  </el-switch>
                </div>
              </div>
              <div class="collapse-content">
                <div class="collapse-content-row">
                  <span class="collapse-content-key">内容</span>
                  <el-input
                    class="collapse-content-value"
                    placeholder="请输入标题"
                    size="mini"
                    v-model="configData.title.value"
                    :disabled="!configData.title.show"
                  >
                  </el-input>
                </div>
                <div class="collapse-content-row">
                  <span class="collapse-content-key">大小</span>
                  <el-input-number
                    class="collapse-content-value"
                    v-model="configData.title.fontSize"
                    :disabled="!configData.title.show"
                    size="mini"
                    :min="15"
                    :max="30"
                    label="字体大小"
                  ></el-input-number>
                </div>
                <div class="collapse-content-row">
                  <span class="collapse-content-key">字体颜色</span>
                  <div class="collapse-content-value">
                    <el-color-picker
                      v-model="configData.title.color"
                      :disabled="!configData.title.show"
                      show-alpha
                    ></el-color-picker>
                  </div>
                </div>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-collapse-item>
      <el-collapse-item name="5">
        <div class="collapse-title" slot="title">
          <span class="head-title">{{ configData.others.label }}</span>
          <div @click="stopProp">
            <el-switch
              v-model="configData.others.show"
              class="head-switch"
              active-color="#13ce66"
              inactive-color="#C0C4CC"
            >
              >
            </el-switch>
          </div>
        </div>
        <div class="collapse-content">
          <div class="collapse-content-row">
            <span class="collapse-content-key">背景颜色</span>
            <div class="collapse-content-value">
              <el-color-picker
                v-model="configData.others.backgroundColor"
                :disabled="!configData.others.show"
                show-alpha
              ></el-color-picker>
            </div>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">工具栏</span>
            <el-switch
              v-model="configData.others.toolbox.show"
              :disabled="!configData.others.show"
              class="collapse-content-value"
              style="justify-content: center"
              active-color="#13ce66"
              inactive-color="#C0C4CC"
            >
              >
            </el-switch>
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
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
export default {
  name: "ChartEditor",

  data() {
    return {
      basicCollapse: ["1"],
      dataCollapse: ["1"],
      legendPositionOption: [
        {
          value: "top",
          label: "上方",
        },
        {
          value: "bottom",
          label: "下方",
        },
        {
          value: "left",
          label: "左方",
        },
        {
          value: "right",
          label: "右方",
        },
      ],
      configData: {
        title: {
          name: "title",
          label: "标题",
          show: false,
          value: "",
          color: "rgba(19, 206, 102, 0.8)",
          fontSize: 10,
        },
        viceTitle: {
          name: "viceTitle",
          label: "副标题",
          show: true,
          value: "",
          color: "rgba(19, 206, 102, 0.8)",
          fontSize: 10,
        },
        legend: {
          name: "legend",
          label: "图例",
          show: true,
          type: "plain",
          orient: "horizontal",
          position: "",
        },
        others: {
          name: "others",
          label: "其他配置",
          show: true,
          backgroundColor: "rgba(19, 206, 102, 0.8)",
          toolbox: {
            show: true,
            feature: {
              saveAsImage: {},
              dataView: {},
            },
          },
        },
      },
      dataBuffer: [],
      dataConfig: [],
    };
  },
  computed: {
    layoutOption: function () {
      return {
        title: {
          show: this.layoutOption.title.show,
          text: this.layoutOption.title.value,
          textStyle: {
            color: this.layoutOption.title.color,
            fontSize: this.layoutOption.title.fontSize,
          },
          subtext: this.layoutOption.viceTitle.show
            ? this.layoutOption.viceTitle.value
            : "",
          subtextStyle: this.layoutOption.viceTitle.show
            ? {
                color: this.layoutOption.viceTitle.color,
                fontSize: this.layoutOption.viceTitle.fontSize,
              }
            : {},
        },
        legend: {
          show: this.layoutOption.legend.show,
          type: this.layoutOption.legend.type,
          orient: this.layoutOption.legend.orient,
        },
        backgroundColor: this.layoutOption.others.show
          ? this.layoutOption.others.backgroundColor
          : "transparent",
        toolbox: {
          show: this.layoutOption.others.show,
          feature: this.layoutOption.others.feature,
        },
      };
    },
  },
  watch: {
    dataBuffer: {
      handler: function (val, oldVal) {
        if (val !== oldVal) {
          let { category, serires, dataList } = { ...val };

          console.log(dataList, 11);
        }
      },
      deep: true,
    },
  },
  methods: {
    changeSwitch(index) {
      this.tableData[index].complex = false;
    },
    stopProp(e) {
      e.stopPropagation();
    },
    loadData() {
      // 获取数据
      // 解析数据 并存放在dataBuffer
      let dataBuffer = {
        // 类别
        category: [
          {
            id: "a",
          },
          {
            id: "c",
          },
          {
            id: "b",
          },
        ],
        // 系列
        serires: [
          {
            id: "2015",
          },
          {
            id: "2016",
          },
          {
            id: "2017",
          },
        ],
        // 数据
        dataList: {
          a: { 2015: 43.3, 2016: 85.8, 2017: 93.7 },
          b: { 2015: 53.3, 2016: 57.8, 2017: 11.7 },
          c: { 2015: 85.4, 2016: 15.8, 2017: 38.7 },
        },
      };
      this.dataBuffer = dataBuffer;
    },
  },
  mounted() {
    this.loadData();
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-collapse-item {
  .el-collapse-item__header {
    .collapse-title {
      display: flex;
      flex: 1 0 90%;
      order: 1;
      text-align: left;
      justify-content: space-between;
      align-items: center;
    }
  }

  .el-collapse-item__wrap {
    background-color: #fafafa;
    .collapse-content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .collapse-content-row {
        display: flex;
        flex-basis: 100%;
        padding: 10px 0;
        justify-content: space-between;
        align-items: center;
        .collapse-content-key {
          display: inline-block;
          width: 100px;
        }
        .collapse-content-value {
          width: 100px;
        }
      }
      &.inner {
        align-items: flex-end;
        .inner-collapse {
          width: 250px;
          border: 0px;
          .el-collapse-item {
            .el-collapse-item__header {
              background-color: #fafafa;
            }
            &:last-child {
              .el-collapse-item__header {
                border: 0px;
              }
              .el-collapse-item__wrap {
                border: 0px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
