<template>
  <div id="app">
    <ChartEditor class="chart-editor" />
    <div class="chart-parent">
      <Chart class="chart-show" />
    </div>
  </div>
</template>

<script>
// import Test from "./components/Test.vue";
import Chart from "./components/chart.vue";
import ChartEditor from "./components/chartEditor.vue";

export default {
  name: "App",
  components: {
    Chart,
    ChartEditor,
  },
};
</script>

<style lang="scss">
#app {
  margin-top: 60px;
  overflow: hidden;
  height: 100%;
  .chart-editor {
    float: left;
    width: 300px;
    height: 500px;
    overflow: auto;
  }

  .chart-parent {
    overflow: hidden;
    .chart-show {
      height: 400px;
    }
  }
}
</style>
