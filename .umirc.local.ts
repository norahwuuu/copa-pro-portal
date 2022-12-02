import { defineConfig } from "umi";

export default defineConfig({
  proxy: {
    "/api": {
      target: "http://127.0.0.1:8000", //"https://apis.dev.oemaligner.com",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
  define: {
    BASE_URL: "/api",
    OKTA_URL: "https://devsec.ulabsystems.net",
  },
});
