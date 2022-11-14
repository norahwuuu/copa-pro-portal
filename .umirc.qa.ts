import { defineConfig } from "umi";

export default defineConfig({
  define: {
    BASE_URL: "https://apis.dev.oemaligner.com",
    OKTA_URL: "https://devsec.ulabsystems.net",
    "process.env.UMI_ENV": "qa",
  },
});
