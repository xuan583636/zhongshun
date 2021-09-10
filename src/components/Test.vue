<template>
  <div id="app">
    <div id="main" style="width: 600px; height: 400px"></div>
  </div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "Test",
  methods: {
    drawChart() {
      //Initialize the echarts instance based on the prepared dom
      let myChart = echarts.init(document.getElementById("main"));
      //Specify configuration items and data for the chart
      let option = {
        title: {
          text: "ECharts Introductory example",
        },
        tooltip: {},
        legend: {
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
      };
      //Use the configuration items and data just specified to display the chart.
      myChart.setOption(option);
    },
  },
  mounted() {
    this.drawChart();
    console.log("this.myChart", 142);
  },
};
</script>
