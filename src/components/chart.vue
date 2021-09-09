<template>
  <div>
    <div class="my-chart" ref="chart" />
  </div>
</template>

<script>
// import { color } from "echarts";
// import * as echarts from 'echarts'
/**
 * 组件描述: 此组件用于通用图表展示 基于echarts 5.x版本
 * 功能：图标编辑器生成的配置信息，结合后台返回数据，绘制图谱
 * 设计需求
 * 1.页面加载的时候绘制图谱
 * 2.更改layoutConfig 图表配置时重绘图谱
 */
export default {
  name: "freeChart",
  props: {
    layoutConfig: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      // echarts实例
      chart: null,
      // 布局配置数据
      layoutBuffer: {
        // 类别
        category: [],
        // 系列
        serires: [],
      },
      // 后端解析数据
      dataBuffer: {
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
          2016,
          2017,
        ],
        // 数据
        dataList: {
          a: { 2015: 43.3, 2016: 85.8, 2017: 93.7 },
          b: { 2015: 43.3, 2016: 85.8, 2017: 93.7 },
          c: { 2015: 43.3, 2016: 85.8, 2017: 93.7 },
        },
      },
    };
  },
  watch: {
    layoutConfig() {
      this.loadConfig();
      this.layout();
      // this.setConfig(val)
    },
  },
  mounted() {
    // 初始化echarts实例
    this.init();
  },
  methods: {
    init() {
      this.loadData();
      this.loadConfig();
      this.layout();
    },
    loadConfig() {
      // 获取配置
      // 解析配置
    },
    loadData() {
      // 获取数据
      // 解析数据 并存放在dataBuffer
    },
    // 布局生成渲染数据
    layout() {
      // 根据layoutBuffer和dataBuffer 构建绘图配置
      // const options
      // 根据options信息和dataList 构建 绘图数据
      // const data
      // 绘制图谱
    },
  },
};
</script>

<style lang="scss" scoped></style>
