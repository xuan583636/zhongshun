<template>
  <div>
    <el-collapse v-model="basicCollapse" class="out-collapse">
      <el-collapse-item name="1">
        <div class="collapse-title" slot="title">
          <span class="head-title">{{ layoutTempOption.title.label }}</span>
          <div @click="stopProp">
            <el-switch
              v-model="layoutTempOption.title.show"
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
              v-model="layoutTempOption.title.value"
              :disabled="!layoutTempOption.title.show"
            >
            </el-input>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">大小</span>
            <el-input-number
              class="collapse-content-value"
              v-model="layoutTempOption.title.fontSize"
              :disabled="!layoutTempOption.title.show"
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
                v-model="layoutTempOption.title.color"
                :disabled="!layoutTempOption.title.show"
                show-alpha
              ></el-color-picker>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="2">
        <div class="collapse-title" slot="title">
          <span class="head-title">{{ layoutTempOption.viceTitle.label }}</span>
          <div @click="stopProp">
            <el-switch
              v-model="layoutTempOption.viceTitle.show"
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
              v-model="layoutTempOption.viceTitle.value"
              :disabled="!layoutTempOption.viceTitle.show"
            >
            </el-input>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">大小</span>
            <el-input-number
              class="collapse-content-value"
              v-model="layoutTempOption.viceTitle.fontSize"
              :disabled="!layoutTempOption.viceTitle.show"
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
                v-model="layoutTempOption.viceTitle.color"
                :disabled="!layoutTempOption.viceTitle.show"
                show-alpha
              ></el-color-picker>
            </div>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="3">
        <div class="collapse-title" slot="title">
          <span class="head-title">{{ layoutTempOption.legend.label }}</span>
          <div @click="stopProp">
            <el-switch
              v-model="layoutTempOption.legend.show"
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
              v-model="layoutTempOption.legend.type"
              class="collapse-content-value"
              size="mini"
              :disabled="!layoutTempOption.legend.show"
            >
              <el-option value="plain" label="普通"></el-option>
              <el-option value="scroll" label="翻页"></el-option>
            </el-select>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">布局方式</span>
            <el-select
              v-model="layoutTempOption.legend.orient"
              :disabled="!layoutTempOption.legend.show"
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
              v-model="layoutTempOption.legend.position"
              :disabled="!layoutTempOption.legend.show"
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
              v-model="layoutTempOption.legend.X"
              controls-position="right"
              :disabled="!layoutTempOption.legend.show"
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
              v-model="layoutTempOption.legend.Y"
              controls-position="right"
              :disabled="!layoutTempOption.legend.show"
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
                <span class="head-title">{{
                  layoutTempOption.title.label
                }}</span>
                <div @click="stopProp">
                  <el-switch
                    v-model="layoutTempOption.title.show"
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
                    v-model="layoutTempOption.title.value"
                    :disabled="!layoutTempOption.title.show"
                  >
                  </el-input>
                </div>
                <div class="collapse-content-row">
                  <span class="collapse-content-key">大小</span>
                  <el-input-number
                    class="collapse-content-value"
                    v-model="layoutTempOption.title.fontSize"
                    :disabled="!layoutTempOption.title.show"
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
                      v-model="layoutTempOption.title.color"
                      :disabled="!layoutTempOption.title.show"
                      show-alpha
                    ></el-color-picker>
                  </div>
                </div>
              </div>
            </el-collapse-item>
            <el-collapse-item name="2">
              <div class="collapse-title" slot="title">
                <span class="head-title">{{
                  layoutTempOption.title.label
                }}</span>
                <div @click="stopProp">
                  <el-switch
                    v-model="layoutTempOption.title.show"
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
                    v-model="layoutTempOption.title.value"
                    :disabled="!layoutTempOption.title.show"
                  >
                  </el-input>
                </div>
                <div class="collapse-content-row">
                  <span class="collapse-content-key">大小</span>
                  <el-input-number
                    class="collapse-content-value"
                    v-model="layoutTempOption.title.fontSize"
                    :disabled="!layoutTempOption.title.show"
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
                      v-model="layoutTempOption.title.color"
                      :disabled="!layoutTempOption.title.show"
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
          <span class="head-title">{{ layoutTempOption.xAxis.label }}</span>
          <div @click="stopProp">
            <el-switch
              v-model="layoutTempOption.xAxis.show"
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
            <span class="collapse-content-key">坐标轴位置</span>
            <el-select
              v-model="layoutTempOption.xAxis.position"
              class="collapse-content-value"
              size="mini"
              :disabled="!layoutTempOption.xAxis.show"
            >
              <el-option value="top" label="上方"></el-option>
              <el-option value="bottom" label="下方"></el-option>
            </el-select>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">坐标轴名称</span>
            <el-input
              class="collapse-content-value"
              placeholder="请输入坐标轴名称"
              size="mini"
              v-model="layoutTempOption.xAxis.showName"
              :disabled="!layoutTempOption.xAxis.show"
            >
            </el-input>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">轴名称显示位置</span>
            <el-select
              v-model="layoutTempOption.xAxis.nameLocation"
              class="collapse-content-value"
              size="mini"
              :disabled="!layoutTempOption.xAxis.show"
            >
              <el-option value="start" label="轴前方"></el-option>
              <el-option value="center" label="轴中间"></el-option>
              <el-option value="end" label="轴后方"></el-option>
            </el-select>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">名称与轴线距离</span>
            <el-input-number
              class="collapse-content-value"
              v-model="layoutTempOption.xAxis.nameGap"
              :disabled="!layoutTempOption.xAxis.show"
              size="mini"
              label="距离"
            ></el-input-number>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">名称旋转角度</span>
            <el-input-number
              class="collapse-content-value"
              v-model="layoutTempOption.xAxis.nameRotate"
              :disabled="!layoutTempOption.xAxis.show"
              :min="-90"
              :max="90"
              size="mini"
              label="角度"
            ></el-input-number>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">是否显示轴刻度</span>
            <el-switch
              v-model="layoutTempOption.xAxis.axisLabel.show"
              :disabled="!layoutTempOption.xAxis.show"
              class="collapse-content-value"
              style="justify-content: center"
              active-color="#13ce66"
              inactive-color="#C0C4CC"
            >
              >
            </el-switch>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">刻度旋转角度</span>
            <el-input-number
              class="collapse-content-value"
              v-model="layoutTempOption.xAxis.axisLabel.rotate"
              :disabled="
                !layoutTempOption.xAxis.show ||
                !layoutTempOption.xAxis.axisLabel.show
              "
              :min="-90"
              :max="90"
              size="mini"
              label="角度"
            ></el-input-number>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">刻度与轴间距</span>
            <el-input-number
              class="collapse-content-value"
              v-model="layoutTempOption.xAxis.axisLabel.margin"
              :disabled="
                !layoutTempOption.xAxis.show ||
                !layoutTempOption.xAxis.axisLabel.show
              "
              size="mini"
              label="间距"
            ></el-input-number>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="6">
        <div class="collapse-title" slot="title">
          <span class="head-title">{{ layoutTempOption.yAxis.label }}</span>
          <div @click="stopProp">
            <el-switch
              v-model="layoutTempOption.yAxis.show"
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
            <span class="collapse-content-key">坐标轴位置</span>
            <el-select
              v-model="layoutTempOption.yAxis.position"
              class="collapse-content-value"
              size="mini"
              :disabled="!layoutTempOption.yAxis.show"
            >
              <el-option value="left" label="左边"></el-option>
              <el-option value="right" label="右边"></el-option>
            </el-select>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">坐标轴名称</span>
            <el-input
              class="collapse-content-value"
              placeholder="请输入坐标轴名称"
              size="mini"
              v-model="layoutTempOption.yAxis.showName"
              :disabled="!layoutTempOption.yAxis.show"
            >
            </el-input>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">轴名称显示位置</span>
            <el-select
              v-model="layoutTempOption.yAxis.nameLocation"
              class="collapse-content-value"
              size="mini"
              :disabled="!layoutTempOption.yAxis.show"
            >
              <el-option value="start" label="轴前方"></el-option>
              <el-option value="center" label="轴中间"></el-option>
              <el-option value="end" label="轴后方"></el-option>
            </el-select>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">名称与轴线距离</span>
            <el-input-number
              class="collapse-content-value"
              v-model="layoutTempOption.yAxis.nameGap"
              :disabled="!layoutTempOption.yAxis.show"
              size="mini"
              label="距离"
            ></el-input-number>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">名称旋转角度</span>
            <el-input-number
              class="collapse-content-value"
              v-model="layoutTempOption.yAxis.nameRotate"
              :disabled="!layoutTempOption.yAxis.show"
              :min="-90"
              :max="90"
              size="mini"
              label="角度"
            ></el-input-number>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">是否显示轴刻度</span>
            <el-switch
              v-model="layoutTempOption.yAxis.axisLabel.show"
              :disabled="!layoutTempOption.yAxis.show"
              class="collapse-content-value"
              style="justify-content: center"
              active-color="#13ce66"
              inactive-color="#C0C4CC"
            >
              >
            </el-switch>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">刻度旋转角度</span>
            <el-input-number
              class="collapse-content-value"
              v-model="layoutTempOption.yAxis.axisLabel.rotate"
              :disabled="
                !layoutTempOption.yAxis.show ||
                !layoutTempOption.yAxis.axisLabel.show
              "
              :min="-90"
              :max="90"
              size="mini"
              label="角度"
            ></el-input-number>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">刻度与轴间距</span>
            <el-input-number
              class="collapse-content-value"
              v-model="layoutTempOption.yAxis.axisLabel.margin"
              :disabled="
                !layoutTempOption.yAxis.show ||
                !layoutTempOption.yAxis.axisLabel.show
              "
              size="mini"
              label="间距"
            ></el-input-number>
          </div>
        </div>
      </el-collapse-item>
      <el-collapse-item name="7">
        <div class="collapse-title" slot="title">
          <span class="head-title">{{ layoutTempOption.others.label }}</span>
          <div @click="stopProp">
            <el-switch
              v-model="layoutTempOption.others.show"
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
                v-model="layoutTempOption.others.backgroundColor"
                :disabled="!layoutTempOption.others.show"
                show-alpha
              ></el-color-picker>
            </div>
          </div>
          <div class="collapse-content-row">
            <span class="collapse-content-key">工具栏</span>
            <el-switch
              v-model="layoutTempOption.others.toolbox.show"
              :disabled="!layoutTempOption.others.show"
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
      layoutTempOption: {
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
        xAxis: {
          name: "xAxis",
          label: "横坐标",
          show: true,
          position: "bottom",
          showName: "",
          nameLocation: "end",
          nameGap: 15,
          nameRotate: 0,
          axisLabel: {
            show: true,
            rotate: 0,
            margin: 10,
          },
        },
        yAxis: {
          name: "yAxis",
          label: "纵坐标",
          show: true,
          position: "left",
          showName: "",
          nameLocation: "end",
          nameGap: 15,
          nameRotate: 0,
          axisLabel: {
            show: true,
            rotate: 0,
            margin: 10,
          },
        },
      },
      dataBuffer: [],
      dataOption: [],
    };
  },
  computed: {
    layoutOption: function () {
      return {
        title: {
          show: this.layoutTempOption.title.show,
          text: this.layoutTempOption.title.value,
          textStyle: {
            color: this.layoutTempOption.title.color,
            fontSize: this.layoutTempOption.title.fontSize,
          },
          subtext: this.layoutTempOption.viceTitle.show
            ? this.layoutTempOption.viceTitle.value
            : "",
          subtextStyle: this.layoutTempOption.viceTitle.show
            ? {
                color: this.layoutTempOption.viceTitle.color,
                fontSize: this.layoutTempOption.viceTitle.fontSize,
              }
            : {},
        },
        legend: {
          show: this.layoutTempOption.legend.show,
          type: this.layoutTempOption.legend.type,
          orient: this.layoutTempOption.legend.orient,
        },
        backgroundColor: this.layoutTempOption.others.show
          ? this.layoutTempOption.others.backgroundColor
          : "transparent",
        toolbox: {
          show: this.layoutTempOption.others.show,
          feature: this.layoutTempOption.others.feature,
        },
        yAxis: {
          show: this.layoutTempOption.yAxis.show,
          type: this.layoutTempOption.yAxis.type,
        },
        xAxis: {
          show: this.layoutTempOption.xAxis.show,
          position: this.layoutTempOption.xAxis.position,
          name: this.layoutTempOption.xAxis.showName,
          nameLocation: this.layoutTempOption.xAxis.nameLocation,
          nameGap: this.layoutTempOption.xAxis.nameGap,
          nameRotate: this.layoutTempOption.xAxis.nameRotate,
          axisLabel: {
            show: this.layoutTempOption.xAxis.axisLabel.show,
            rotate: this.layoutTempOption.xAxis.axisLabel.rotate,
            margin: this.layoutTempOption.xAxis.axisLabel.margin,
          },
        },
      };
    },
  },
  watch: {
    dataBuffer: {
      handler: function (val, oldVal) {
        if (val !== oldVal) {
          let { category, serires, dataList } = { ...val };
          let dataConfig = category.map((item, index) => {
            return {
              name: item["id"],
              show: true,
              type: "line",
              symbol: "circle",
              symbolSize: 6,
              lineStyle: { width: 2, type: "dashed" },
              radius: [30, 0],
            };
          });

          Object.keys(dataList).forEach((item, index, array) => {
            if (dataConfig[index]["name"] == item) {
              dataConfig[index]["data"] = Object.entries(dataList[item]);
            }
          });
          this.dataOption = dataConfig;
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
      this.layoutTempOption.xAxis.data = dataBuffer.serires.map(
        (item, index) => item["id"]
      );
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
