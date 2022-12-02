import { defineConfig } from "umi";

export default defineConfig({
  define: {
    BASE_URL: "https://apis.qa.oemaligner.com",
    OKTA_URL: "https://qasec.ulabsystems.net",
    "process.env.UMI_ENV": "qa",
  },
});
