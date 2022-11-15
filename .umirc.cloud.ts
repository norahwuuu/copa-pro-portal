import { defineConfig } from "umi";

export default defineConfig({
  define: {
    "process.env.UMI_ENV": "cloud",
    BASE_URL: "https://apis.dev.oemaligner.com",
    OKTA_URL: "https://devsec.ulabsystems.net",
  },
});
