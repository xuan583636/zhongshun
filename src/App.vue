<template>
  <div id="app">
    <Chart />
  </div>
</template>

<script>
// import Test from "./components/Test.vue";
import Chart from "./components/chart.vue";

export default {
  name: "App",
  components: {
    Chart,
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
