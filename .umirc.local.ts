import { defineConfig } from "umi";

export default defineConfig({
  proxy: {
    "/api": {
      target: "https://apis.qa.oemaligner.com",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
    "/sss": {
      target: "https://qasec.ulabsystems.net",
      changeOrigin: true,
      pathRewrite: { "^/sss": "" },
    },
  },
  define: {
    BASE_URL: "/api",
    OKTA_URL: "/sss",
  },
});
