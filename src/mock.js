//引入mockjs
const Mock = require("mockjs");
import * as test2 from "./utils/test2";
import * as test1 from "./utils/test1";
import * as test3 from "./utils/test3";

// 获取 mock.Random 对象

//使用mockjs模拟数据
Mock.mock("/api/test1", () => {
  //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
  return {
    data: test1,
  };
});
Mock.mock("/api/test2", () => {
  //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
  return {
    data: test2,
  };
});
Mock.mock("/api/test3", () => {
  //当post或get请求到/api/data路由时Mock会拦截请求并返回上面的数据
  return {
    data: test3,
  };
});
