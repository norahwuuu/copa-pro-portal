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
    CLIENT_ID: "0oa6s60ztcLzLKNhT5d7",
    ISSUER: "https://ulab-ciam-dev.okta.com/oauth2/aus6exjzwihWqpfxl5d7",
  },
});
