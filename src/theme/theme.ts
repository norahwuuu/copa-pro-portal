import { createTheme, ThemeOptions } from "@mui/material/styles";

// import { buttonStyle } from "./button.style"
import customPalette, { colorObj } from "./customPalette";

export const fontProps = (
  fsize: string,
  fweight: string | number,
  lheight: string,
  fStyle = "normal"
) => {
  return {
    fontSize: fsize,
    fontWeight: fweight,
    lineHeight: lheight,
    fontStyle: fStyle,
    opacity: 1,
    letterSpacing: "0px",
  };
};

const customThemeOptions: ThemeOptions = {
  spacing: [0, 5, 10, 15, 20, 25, 30],
  palette: customPalette,
  typography: {
    fontFamily: "Colgate Ready",
    opacity: 1,
    h1: { ...fontProps("54px", "bold", "71px") },
    h2: fontProps("54px", 200, "71px"),
    h3: fontProps("24px", "bold", "32px"),
    h4: fontProps("18px", "bold", "24px"),
    h5: fontProps("18px", 300, "24px"),
    h6: fontProps("16px", "bold", "21px"),
    h7: fontProps("16px", 300, "21px"),
    button: {
      ...fontProps("16px", "normal", "22px", "italic"),
      textTransform: "none",
    },
    body1: fontProps("14px", "normal", "18px"),
    body2: fontProps("12px", "normal", "16px"),
    body3: fontProps("10px", "normal", "13px"),
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          opacity: 1,
          borderRadius: "300px 3px 300px 300px",
          boxShadow: "none",
          "&.Mui-disabled": {
            background: "#D6D6D6 0% 0% no-repeat padding-box",
            border: "1px solid #D6D6D6",
          },
        },
        contained: {
          "&:hover": {
            backgroundColor: colorObj.red.red2,
            boxShadow: "none",
          },
        },
        outlined: {
          border: "1px solid #707070",
          backgroundColor: "#FFFFFF",
          "&:hover": {
            color: "#FFFFFF",
            backgroundColor: colorObj.secondary.main,
            boxShadow: "none",
            borderColor: "inherit",
          },
        },
        text: {
          color: colorObj.gray.darken4,
          textDecoration: "underline",
          "&:hover": {
            textDecoration: "underline",
            backgroundColor: "#FFFFFF",
            border: "1px solid #707070",
          },
        },
        sizeMedium: {
          padding: "10px 20px",
        },
        sizeSmall: {
          padding: "5px 20px",
          ...fontProps("16px", "normal", "16px", "italic"),
        },
      },
      variants: [
        {
          props: { variant: "shade" },
          style: {
            borderColor: "inherit",
            background: colorObj.gray.lighten1,
            color: colorObj.primary.main,
            "&:hover": {
              color: colorObj.primary.darken,
              backgroundColor: colorObj.gray.lighten2,
            },
          },
        },
      ],
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          ...fontProps("14px", 300, "18px"),
          opacity: 1,
          color: colorObj.gray.main,
          "&.Mui-focused": {
            color: colorObj.gray.darken4,
            "&.Mui-error": {
              color: colorObj.error.main,
            },
          },
        },
      },
    },
  },
};

const theme = createTheme(customThemeOptions);

export default theme;
