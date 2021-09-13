<template>
  <div id="show" class="chart-show" ref="chart" />
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
    drawChart() {
      let that = this;
      this.myChart = echarts.init(document.getElementById("show"));

      window.addEventListener("resize", () => {
        that.myChart.resize();
      });
      // setTimeout(() => {
      //   that.myChart.resize({
      //     width: "600px",
      //     height: "400px",
      //   });
      // }, 5000);
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

<style lang="scss" scoped></style>
