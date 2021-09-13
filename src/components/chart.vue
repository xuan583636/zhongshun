<template>
  <div id="chart-parent">
    <div id="show" class="chart-show" ref="chart" />
  </div>
</template>

<script>
import * as echarts from "echarts";
import bus from "./../bus";

export default {
  name: "Chart",
  data() {
    return {
      myChart: null,
      option: {},
    };
  },
  watch: {
    option: {
      handler: function (val) {
        this.myChart.setOption(val, true);
      },
      deep: true,
    },
  },
  methods: {
    chartSize(container, charts) {
      function getStyle(el) {
        if (window.getComputedStyle) {
          return window.getComputedStyle(el, null);
        } else {
          return el.currentStyle;
        }
      }
      const hi = getStyle(container, "height").height;
      console.log(hi);
      charts.style.height = hi;
    },
    drawChart() {
      let that = this;
      let myChartId = document.getElementById("show");

      this.myChart = echarts.init(myChartId);

      window.addEventListener("resize", () => {
        that.myChart.resize();
      });
    },
  },
  mounted() {
    bus.$on("sendMessage", (data) => {
      this.option = data;
    });
    this.drawChart();
  },
};
</script>

<style lang="scss" scoped>
#chart-parent {
  overflow: hidden;
}
</style>
