import Vue from "vue";
import App from "./App.vue";
import ECharts from "vue-echarts";
import { use } from "echarts/core";
import { THEME_KEY } from "vue-echarts";
// 手动引入 ECharts 各模块来减小打包体积

import { CanvasRenderer } from "echarts/renderers";
import { BarChart, PieChart } from "echarts/charts";
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
  GridComponent,
  TooltipComponent,
]);

// 全局注册组件（也可以使用局部注册）
Vue.component("v-chart", ECharts);

Vue.config.productionTip = false;

new Vue({
  THEME_KEY,
  ECharts,
  render: (h) => h(App),
}).$mount("#app");
