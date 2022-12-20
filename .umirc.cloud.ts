import { defineConfig } from "umi";

export default defineConfig({
  define: {
    "process.env.UMI_ENV": "cloud",
    BASE_URL: "https://apis.dev.oemaligner.com",
    OKTA_URL: "https://devsec.ulabsystems.net",
    CLIENT_ID: "0oa6s60ztcLzLKNhT5d7",
    ISSUER: "https://ulab-ciam-dev.okta.com/oauth2/aus6exjzwihWqpfxl5d7",
  },
});
