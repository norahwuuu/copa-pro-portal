declare module "@mui/material/styles" {
  interface Palette {
    gray?: Palette["primary"];
    ruby?: Palette["primary"];
    red?: Palette["primary"];
    orange?: Palette["primary"];
    teal?: Palette["primary"];
  }
  interface PaletteOptions {
    gray?: PaletteOptions["primary"];
    ruby?: PaletteOptions["primary"];
    red?: PaletteOptions["primary"];
    orange?: PaletteOptions["primary"];
    teal?: PaletteOptions["primary"];
  }

  interface PaletteColor {
    lighten?: string;
    lighten1?: string;
    lighten2?: string;
    lighten3?: string;
    darken?: string;
    darken1?: string;
    darken2?: string;
    darken3?: string;
    darken4?: string;
    ruby1?: string;
    ruby2?: string;
    ruby3?: string;
    red1?: string;
    red2?: string;
    red3?: string;
    orange1?: string;
    orange2?: string;
    orange3?: string;
    teal1?: string;
    teal2?: string;
    teal3?: string;
  }
  interface SimplePaletteColorOptions {
    lighten?: string;
    lighten1?: string;
    lighten2?: string;
    lighten3?: string;
    darken?: string;
    darken1?: string;
    darken2?: string;
    darken3?: string;
    darken4?: string;
    ruby1?: string;
    ruby2?: string;
    ruby3?: string;
    red1?: string;
    red2?: string;
    red3?: string;
    orange1?: string;
    orange2?: string;
    orange3?: string;
    teal1?: string;
    teal2?: string;
    teal3?: string;
  }
}

declare module "@mui/material/styles/createTypography" {
  interface Typography {
    opacity: number;
    body3?: React.CSSProperties;
    h7?: React.CSSProperties;
  }

  // allow configuration using `createMuiTheme`
  interface TypographyOptions {
    opacity: number;
    body3?: React.CSSProperties;
    h7?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    body3: true;
    h7: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsVariantOverrides {
    text: true;
    outlined: true;
    contained: true;
    shade: true;
  }
}

export default {};
