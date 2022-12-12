import { defineConfig } from "umi";

export default defineConfig({
  proxy: {
    "/api": {
      target: "https://apis.dev.oemaligner.com",
      changeOrigin: true,
      pathRewrite: { "^/api": "" },
    },
  },
  define: {
    BASE_URL: "/api",
    OKTA_URL: "https://devsec.ulabsystems.net",
  },
});
