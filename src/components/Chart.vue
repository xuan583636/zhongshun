<template>
  <div>
    <v-chart class="chart" :option="optimSet"></v-chart>
  </div>
</template>

<script>
export default {
  name: "Chart",
  props: ["setData"],
  computed: {
    optimSet() {
      let rawOption = this.setData;
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
            left: "center",
          },
          tooltip: {
            trigger: "axis",
            textStyle: {
              align: "left",
            },
          },
          legend: {
            top: "30px",
            left: "center",
            data: Object.values(myLegend),
          },
          grid: {
            top: "80px",
            containLabel: true,
          },
          xAxis: myXAxis,
          yAxis: myYAxis,
          series: mySeries,
        };
      }
      console.log(rawOption);
      return mapOption;
    },
  },
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.chart {
  height: 100%;
  width: 100%;
}
</style>
