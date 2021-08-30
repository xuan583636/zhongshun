<template>
  <div class="main">
    <Chart class="singleChart" :setData="dataMap1" />
    <Chart class="singleChart" :setData="dataMap2" />
    <Chart class="singleChart" :setData="dataMap3" />
  </div>
</template>

<script>
import axios from "axios";
import Chart from "./../components/Chart.vue";
export default {
  name: "AllCharts",
  components: {
    Chart,
  },
  data() {
    return {
      option: "",
      test1: "",
      test2: "",
      test3: "",
    };
  },
  methods: {},
  computed: {
    dataMap1() {
      return this.test1;
    },
    dataMap2() {
      return this.test2;
    },
    dataMap3() {
      return this.test3;
    },
    optimSet() {
      let rawOption = this.option;
      let mapOption = null;
      if (rawOption) {
        let myTitle = rawOption.title ? rawOption.title : "测试图";
        let myLegend = {};
        rawOption.category
          .filter((val) => !val.hidden)
          .forEach((val) => (myLegend[val.name] = val.label));
        let myXAxis = {
          type: "category",
          data: [
            ...new Set(
              rawOption.series.filter((val) => !val.hidden).map((val) => val.id)
            ),
          ],
        };
        let myYAxis = {
          type: "value",
        };
        // let seriesArr = [...new Array(legend.length)];
        let mySeries = [];
        Object.keys(myLegend).map((tem) => {
          let label = myLegend[tem];
          let data = [];
          let type = rawOption.series.find((element) => {
            return element.name == tem;
          }).type;
          rawOption.dataset.source.forEach((element) => {
            let value = Object.values(element);
            let index = value.indexOf(tem);
            if (index !== -1) {
              value.splice(index, 1);
              data = [...value];
            }
            index !== -1 ? value.splice(index, 1) : null;
          });
          return mySeries.push({ name: label, data, type });
        });
        mapOption = {
          title: {
            text: myTitle,
          },
          tooltip: {
            trigger: "axis",
            textStyle: {
              align: "left",
            },
          },
          legend: { data: Object.values(myLegend) },
          xAxis: myXAxis,
          yAxis: myYAxis,
          series: mySeries,
        };
      }
      console.log(rawOption);
      return mapOption;
    },
  },

  methoe: {},
  mounted: function () {
    axios
      .get("/api/test1")
      .then((res) => {
        //get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致
        this.test1 = res.data.data.dataOption;
      })
      .catch(() => {});
    axios
      .get("/api/test2")
      .then((res) => {
        //get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致
        this.test2 = res.data.data.dataOption;
      })
      .catch(() => {});
    axios
      .get("/api/test3")
      .then((res) => {
        //get()中的参数要与mock.js文件中的Mock.mock()配置的路由保持一致
        this.test3 = res.data.data.dataOption;
      })
      .catch(() => {});
  },
};
</script>
<style lang="less" scoped>
.main {
  width: 100%;
  height: 600px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: flex-start;
  .singleChart {
    flex: 0 0 30%;
    height: 500px;
  }
}
</style>
