import { PaletteOptions } from "@mui/material";

export type PaletteType =
  | "primary"
  | "secondary"
  | "error"
  | "info"
  | "warning"
  | "gray"
  | "red"
  | "orange"
  | "ruby"
  | "teal";

export const colorObj = {
  primary: {
    main: "#D1000D",
    lighten: "#DF4D56",
    lighten1: "#DF4D56",
    lighten2: "#F8D9DB",
    lighten3: "#FCF2F3",
    darken: "#8E1F1D",
  },
  secondary: {
    main: "#218389",
    lighten1: "#9AD7DC",
    lighten2: "#D9F0F2",
  },
  error: {
    main: "#D1000D",
    lighten: "#F8D9DB",
  },
  info: {
    main: "#218389",
  },
  success: {
    main: "#36973A",
  },
  warning: {
    main: "#FF9650",
    lighten: "#FFE8D9",
  },
  gray: {
    main: "#595655",
    lighten: "#F6F6F6",
    lighten1: "#F3F3F3",
    lighten2: "#EEEEEE",
    lighten3: "#D6D6D6",
    darken: "#999999",
    darken1: "#959392",
    darken2: "#888888",
    darken3: "#5C5C5C",
    darken4: "#333333",
  },
  red: {
    main: "#D2010D",
    red1: "#F8D9DB",
    red2: "#ED999E",
    red3: "#DF4D56",
  },
  ruby: {
    main: "#8F1F1D",
    ruby1: "#EEDDDD",
    ruby2: "#D2A5A5",
    ruby3: "#B16261",
  },
  orange: {
    main: "#FF6905",
    orange1: "#FFE8D9",
    orange2: "#FFC39B",
    orange3: "#FF9650",
  },
  teal: {
    main: "#009CA6",
    teal1: "#D9F0F2",
    teal2: "#99D7DB",
    teal3: "#4CBAC1",
  },
  common: {
    white: "#FFFFFF",
  },
};

const customPalette: PaletteOptions = {
  mode: "light",
  ...colorObj,
};

export default customPalette;

// --color-primary: #D1000D;
// --color-primary-lighten: #DF4D56;
// --color-primary-lighten1: #ED999E;
// --color-primary-lighten2: #F8D9DB;
// --color-primary-lighten3: #FCF2F3;
// --color-primary-darken: #8E1F1D;
// --color-secondary: #218389;
// --color-secondary-lighten1: #9AD7DC;
// --color-secondary-lighten2: ##D9F0F2;
// --color-white: #FFFFFF;
// --color-grey: #595655;
// --color-grey-lighten: #F6F6F6;
// --color-grey-lighten1: #F3F3F3;
// --color-grey-lighten2: #EEEEEE;
// --color-grey-lighten3: #D6D6D6;
// --color-grey-darken: #999999;
// --color-grey-darken1: #959392;
// --color-grey-darken2: #888888;
// --color-grey-darken3: #5C5C5C;
// --color-grey-darken4: #333333;
// --color-error: #D1000D;
// --color-error-lighten: #F8D9DB;
// --color-info: #218389;
// --color-success: #36973A;
// --color-warning: #FF9650;
// --color-warning-lighten: #FFE8D9;
// --color-brand-red: #D2010D;
// --color-brand-ruby: #8F1F1D;
// --color-brand-orange: #FF6905;
// --color-brand-teal: #009CA6;
// --color-brand-gray4: #595655;
// --color-brand-red3: #DF4D56;
// --color-brand-red2: #ED999E;
// --color-brand-red1: #F8D9DB;
// --color-brand-orange3: #FF9650;
// --color-brand-orange2: #FFC39B;
// --color-brand-orange1: #FFE8D9;
// --color-brand-ruby3: #B16261;
// --color-brand-ruby2: #D2A5A5;
// --color-brand-ruby1: #EEDDDD;
// --color-brand-teal3: #4CBAC1;
// --color-brand-teal2: #99D7DB;
// --color-brand-teal1: #D9F0F2;
// --color-brand-gray3: #959392;
// --color-brand-gray2: #D6D6D6;
// --color-brand-gray1: #F3F3F3;
