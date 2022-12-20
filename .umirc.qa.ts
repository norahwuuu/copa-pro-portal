import { defineConfig } from "umi";

export default defineConfig({
  define: {
    BASE_URL: "https://apis.qa.oemaligner.com",
    OKTA_URL: "https://qasec.ulabsystems.net",
    "process.env.UMI_ENV": "qa",
    CLIENT_ID: "0oa7p5n9qiKu9aHvh5d7",
    ISSUER: "https://ulab-ciam-qa.okta.com/oauth2/aus7dp6fltAVehQvH5d7",
  },
});
