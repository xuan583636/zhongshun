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
          <span class="head-title">数据</span>
        </div>
        <div class="collapse-content inner">
          <el-collapse v-model="dataCollapse" class="inner-collapse">
            <el-collapse-item
              v-for="(item, index) in dataTempOption"
              :key="item.name"
              :name="index"
            >
              <div class="collapse-title" slot="title">
                <span class="head-title">{{ item.name }}</span>
                <div @click="stopProp">
                  <el-switch
                    v-model="item.show"
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
                  <span class="collapse-content-key">数据范围</span>
                  <el-select
                    v-model="item.range"
                    multiple
                    collapse-tags
                    placeholder="请选择"
                    class="collapse-content-value"
                    size="mini"
                    :disabled="!item.show"
                  >
                    <el-option
                      v-for="(ele, index) in item.allData"
                      :key="index"
                      :label="ele[0]"
                      :value="ele[0]"
                    >
                    </el-option>
                  </el-select>
                </div>
                <div class="collapse-content-row">
                  <span class="collapse-content-key">类型</span>
                  <el-select
                    v-model="item.type"
                    class="collapse-content-value"
                    size="mini"
                    :disabled="!item.show"
                  >
                    <el-option value="line" label="折线图"></el-option>
                    <el-option value="scatter" label="散点图"></el-option>
                    <el-option value="bar" label="柱状图"></el-option>
                    <el-option value="pie" label="饼形图"></el-option>
                  </el-select>
                </div>
                <template v-if="item.type == 'pie'">
                  <div class="collapse-content-row">
                    <span class="collapse-content-key">内半径</span>
                    <el-input-number
                      class="collapse-content-value"
                      v-model="item.radius[0]"
                      :disabled="!item.show"
                      size="mini"
                      :min="0"
                      label="饼图内半径"
                    ></el-input-number>
                  </div>
                  <div class="collapse-content-row">
                    <span class="collapse-content-key">外半径</span>
                    <el-input-number
                      class="collapse-content-value"
                      v-model="item.radius[1]"
                      :disabled="!item.show"
                      size="mini"
                      :min="0"
                      label="饼图内外径"
                    ></el-input-number>
                  </div>
                </template>
                <template v-else-if="item.type == 'line'">
                  <div class="collapse-content-row">
                    <span class="collapse-content-key">折线类型</span>
                    <el-select
                      v-model="item.lineStyle.type"
                      class="collapse-content-value"
                      size="mini"
                      :disabled="!item.show"
                    >
                      <el-option value="solid" label="实线"></el-option>
                      <el-option value="dashed" label="虚线"></el-option>
                      <el-option value="dotted" label="点划线"></el-option>
                    </el-select>
                  </div>
                  <div class="collapse-content-row">
                    <span class="collapse-content-key">折线宽度</span>
                    <el-input-number
                      class="collapse-content-value"
                      v-model="item.lineStyle.width"
                      :disabled="!item.show"
                      size="mini"
                      :min="0"
                      label="折线宽度"
                    ></el-input-number>
                  </div>
                  <div class="collapse-content-row">
                    <span class="collapse-content-key">标记类型</span>
                    <el-select
                      v-model="item.symbol"
                      class="collapse-content-value"
                      size="mini"
                      :disabled="!item.show"
                    >
                      <el-option value="circle" label="圆圈"></el-option>
                      <el-option value="rect" label="方形"></el-option>
                      <el-option value="roundRect" label="圆角方形"></el-option>
                      <el-option value="triangle" label="三角形"></el-option>
                      <el-option value="diamond" label="菱形"></el-option>
                    </el-select>
                  </div>
                  <div class="collapse-content-row">
                    <span class="collapse-content-key">标记大小</span>
                    <el-input-number
                      class="collapse-content-value"
                      v-model="item.symbolSize"
                      :disabled="!item.show"
                      size="mini"
                      :min="0"
                      label="折线宽度"
                    ></el-input-number>
                  </div>
                </template>
                <template v-else-if="item.type == 'scatter'">
                  <div class="collapse-content-row">
                    <span class="collapse-content-key">标记类型</span>
                    <el-select
                      v-model="item.symbol"
                      class="collapse-content-value"
                      size="mini"
                      :disabled="!item.show"
                    >
                      <el-option value="circle" label="圆圈"></el-option>
                      <el-option value="rect" label="方形"></el-option>
                      <el-option value="roundRect" label="圆角方形"></el-option>
                      <el-option value="triangle" label="三角形"></el-option>
                      <el-option value="diamond" label="菱形"></el-option>
                    </el-select>
                  </div>
                  <div class="collapse-content-row">
                    <span class="collapse-content-key">标记大小</span>
                    <el-input-number
                      class="collapse-content-value"
                      v-model="item.symbolSize"
                      :disabled="!item.show"
                      size="mini"
                      :min="0"
                      label="折线宽度"
                    ></el-input-number>
                  </div>
                </template>
              </div>
            </el-collapse-item>
          </el-collapse>
        </div>
      </el-collapse-item>
      <el-collapse-item name="4">
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
            <span class="collapse-content-key">坐标轴类型</span>
            <el-select
              v-model="layoutTempOption.xAxis.type"
              class="collapse-content-value"
              size="mini"
              :disabled="!layoutTempOption.xAxis.show"
            >
              <el-option value="value" label="数值"></el-option>
              <el-option value="category" label="类目"></el-option>
            </el-select>
          </div>
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
      <el-collapse-item name="5">
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
      <el-collapse-item name="6">
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
import bus from "./../bus";

export default {
  name: "ChartEditor",

  data() {
    return {
      basicCollapse: [],
      dataCollapse: [],
      layoutTempOption: {
        title: {
          name: "title",
          label: "标题",
          show: false,
          value: "",
          color: "rgba(0, 0, 0, 1)",
          fontSize: 10,
        },
        viceTitle: {
          name: "viceTitle",
          label: "副标题",
          show: true,
          value: "",
          color: "rgba(0, 0, 0, 1)",
          fontSize: 10,
        },
        others: {
          name: "others",
          label: "其他配置",
          show: true,
          backgroundColor: "rgba(0, 0, 0, 0)",
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
          type: "category",
          showName: "",
          nameLocation: "end",
          nameGap: 15,
          nameRotate: 0,
          data: [],
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
      dataTempOption: [],
    };
  },
  computed: {
    layoutOption: function () {
      return {
        title: {
          show: this.layoutTempOption.title.show,
          text: this.layoutTempOption.title.value,
          textStyle: {
            color: this.layoutTempOption.title.color
              ? this.layoutTempOption.title.color
              : "rgba(0, 0, 0, 1)",
            fontSize: this.layoutTempOption.title.fontSize,
          },
          subtext: this.layoutTempOption.viceTitle.show
            ? this.layoutTempOption.viceTitle.value
            : "",
          subtextStyle: this.layoutTempOption.viceTitle.show
            ? {
                color: this.layoutTempOption.viceTitle.color
                  ? this.layoutTempOption.viceTitle.color
                  : "rgba(0, 0, 0, 1)",
                fontSize: this.layoutTempOption.viceTitle.fontSize,
              }
            : {},
        },

        backgroundColor: this.layoutTempOption.others.show
          ? this.layoutTempOption.others.backgroundColor
            ? this.layoutTempOption.others.backgroundColor
            : "transparent"
          : "transparent",
        toolbox: {
          show: this.layoutTempOption.others.show,
          feature: this.layoutTempOption.others.feature,
        },
        xAxis: {
          show: this.layoutTempOption.xAxis.show,
          type: this.layoutTempOption.xAxis.type,
          position: this.layoutTempOption.xAxis.position,
          name: this.layoutTempOption.xAxis.showName,
          nameLocation: this.layoutTempOption.xAxis.nameLocation,
          nameGap: this.layoutTempOption.xAxis.nameGap,
          nameRotate: this.layoutTempOption.xAxis.nameRotate,
          data: this.layoutTempOption.xAxis.data,
          axisLabel: {
            show: this.layoutTempOption.xAxis.axisLabel.show,
            rotate: this.layoutTempOption.xAxis.axisLabel.rotate,
            margin: this.layoutTempOption.xAxis.axisLabel.margin,
          },
        },
        yAxis: {
          show: this.layoutTempOption.yAxis.show,
          position: this.layoutTempOption.yAxis.position,
          name: this.layoutTempOption.yAxis.showName,
          nameLocation: this.layoutTempOption.yAxis.nameLocation,
          nameGap: this.layoutTempOption.yAxis.nameGap,
          nameRotate: this.layoutTempOption.yAxis.nameRotate,
          axisLabel: {
            show: this.layoutTempOption.yAxis.axisLabel.show,
            rotate: this.layoutTempOption.yAxis.axisLabel.rotate,
            margin: this.layoutTempOption.yAxis.axisLabel.margin,
          },
        },
        tooltip: {},
      };
    },
    dataOption: function () {
      let val = this.dataTempOption;
      for (let i = 0; i < val.length; i++) {
        val[i].data = [];
        if (val[i].show) {
          if (val[i].type == "pie") {
            val[i].allData.forEach((ele) => {
              if (val[i].range.indexOf(ele[0]) != -1) {
                val[i].data.push({ value: ele[1], name: ele[0] });
              }
            });
          } else {
            val[i].allData.forEach((ele) => {
              if (val[i].range.indexOf(ele[0]) != -1) {
                val[i].data.push(ele);
              }
            });
          }
        } else {
          if (val[i].type == "pie") {
            //
          }
        }
      }

      return val;
    },
    setOption: function () {
      let layout = this.layoutOption;
      let dataTemp = this.dataOption;
      let legendData = [];
      let data = [];
      for (let i = 0; i < dataTemp.length; i++) {
        if (dataTemp[i].show) {
          legendData.push(dataTemp[i].name);

          data.push(dataTemp[i]);
        }
      }
      let allOption = Object.assign(
        {},
        layout,
        { series: data },
        {
          legend: { data: legendData, selectedMode: false },
        }
      );
      bus.$emit("sendMessage", allOption);

      return allOption;
    },
  },
  watch: {
    dataBuffer: {
      handler: function (val, oldVal) {
        if (val !== oldVal) {
          let { category, dataList } = { ...val };
          let dataConfig = category.map((item) => {
            return {
              name: item["id"],
              show: true,
              type: "line",
              symbol: "circle",
              symbolSize: 6,
              lineStyle: { width: 2, type: "dashed" },
              radius: [30, 0],
              range: this.dataBuffer.serires.map((item) => item["id"]),
              data: [],
              label: {
                show: false,
              },
              labelLine: {
                show: false,
              },
              showEmptyCircle: false,
            };
          });

          for (let i in dataList) {
            for (let j = 0; j < dataConfig.length; j++) {
              if (dataConfig[j]["name"] == i) {
                dataConfig[j]["allData"] = Object.entries(dataList[i]);
                dataConfig[j]["data"] = JSON.parse(
                  JSON.stringify(dataConfig[j]["allData"])
                );
              }
            }
          }

          this.dataTempOption = dataConfig;
        }
      },
      deep: true,
    },
    dataOption: {
      handler: function () {},
      deep: true,
    },
    setOption: {
      handler: function () {},
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
    selectDataRange(e) {
      console.log(e, 99);
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
          {
            id: "2018",
          },
          {
            id: "2019",
          },
        ],
        // 数据
        dataList: {
          a: { 2015: 43.3, 2016: 85.8, 2017: 93.7, 2018: 22, 2019: 76 },
          b: { 2015: 53.3, 2016: 57.8, 2017: 11.7, 2018: 82, 2019: 26 },
          c: { 2015: 85.4, 2016: 15.8, 2017: 38.7, 2018: 20, 2019: 6 },
        },
      };
      this.dataBuffer = dataBuffer;
      this.layoutTempOption.xAxis.data = dataBuffer.serires.map(
        (item) => item["id"]
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
          width: 130px;
        }
      }
      &.inner {
        align-items: flex-end;
        .inner-collapse {
          width: 280px;
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
