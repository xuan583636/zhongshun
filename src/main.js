import Vue from "vue";
import App from "./App.vue";
import ECharts from "vue-echarts";
import { use } from "echarts/core";

// 引入mock数据
require("./mock");

// 手动引入 ECharts 各模块来减小打包体积
import { CanvasRenderer } from "echarts/renderers";
import { BarChart, PieChart, LineChart, ScatterChart } from "echarts/charts";
import {
  LegendComponent,
  TitleComponent,
  GridComponent,
  TooltipComponent,
} from "echarts/components";

use([
  LegendComponent,
  TitleComponent,
  CanvasRenderer,
  BarChart,
  PieChart,
  LineChart,
  ScatterChart,
  GridComponent,
  TooltipComponent,
]);

// 全局注册组件（也可以使用局部注册）
Vue.component("v-chart", ECharts);

Vue.config.productionTip = false;

new Vue({
  ECharts,
  render: (h) => h(App),
}).$mount("#app");
