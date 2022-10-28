import { defineConfig } from "umi";
import routes from "./routes";

export default defineConfig({
  nodeModulesTransform: {
    type: "none",
  },
  history: { type: "hash" },
  hash: true,
  dynamicImport: {},
  metas: [],
  lessLoader: {
    javascriptEnabled: true,
  },
  cssLoader: {
    localsConvention: "camelCase",
  },
  chainWebpack: (config) => {
    // 源文件编译opt文件
    config.module
      .rule("otf")
      .test(/\.otf$/i)
      .use("otf-with-file-loader")
      .loader("file-loader");
  },
  routes,
  fastRefresh: {},
  webpack5: {},
});
