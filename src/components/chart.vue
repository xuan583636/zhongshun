<template>
  <div class="my-chart">
    <ChartEditor class="chart-editor" />
    <div id="show" class="chart-show" ref="chart" />
  </div>
</template>

<script>
import * as echarts from "echarts";
import ChartEditor from "./chartEditor.vue";

export default {
  name: "Chart",
  components: {
    ChartEditor,
  },
  data() {
    return {
      myChart: null,

      option: {
        title: {
          text: "ECharts Introductory example",
        },
        tooltip: {},
        legend: {
          top: "6%",
          data: ["Sales volume"],
        },
        xAxis: {
          data: [
            "shirt",
            "Cardigan",
            "Chiffon shirt",
            "trousers",
            "High-heeled shoes",
            "Socks",
          ],
        },
        yAxis: {},
        series: [
          {
            name: "Sales volume",
            type: "bar",
            data: [5, 20, 36, 10, 10, 20],
          },
        ],
      },
    };
  },
  methods: {
    drawChart() {
      this.myChart = echarts.init(document.getElementById("show"));
      this.myChart.setOption(this.option);

      // setTimeout(() => {
      //   that.myChart.resize({
      //     width: "600px",
      //     height: "400px",
      //   });
      // }, 5000);
    },
  },
  mounted() {
    this.drawChart();
  },
};
</script>

<style lang="scss" scoped>
.my-chart {
  overflow: hidden;
  height: 500px;

  .chart-editor {
    float: left;
    width: 700px;
    height: 100%;
  }
  .chart-show {
    overflow: hidden;
    height: 100%;
  }
}
</style>
