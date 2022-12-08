import { defineConfig } from "umi";

export default defineConfig({
  define: {
    BASE_URL: "https://apis.oemaligner.com",
    OKTA_URL: "https://sec.ulabsystems.net",
    "process.env.UMI_ENV": "production",
  },
});
