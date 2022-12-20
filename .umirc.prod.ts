import { defineConfig } from "umi";

export default defineConfig({
  define: {
    BASE_URL: "https://apis.oemaligner.com",
    OKTA_URL: "https://sec.ulabsystems.net",
    "process.env.UMI_ENV": "production",
    CLIENT_ID: "0oa6s60ztcLzLKNhT5d7",
    ISSUER: "https://ulab-ciam-dev.okta.com/oauth2/aus6exjzwihWqpfxl5d7",
  },
});
