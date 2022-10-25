import { createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      light: "#df4d56",
      main: "#D1000D",
      dark: "#8e1f1d",
    },
    secondary: {
      light: "#9AD7DC",
      main: "#218389",
    },
    error: {
      main: "#D1000D",
      light: "#F8D9DB",
    },
    warning: {
      main: "#FF9650",
      light: "#FFE8D9",
    },
    info: {
      main: "#218389",
    },
    success: {
      main: "#36973A",
    },
  },
  //   typography: {
  //     fontFamily: [
  //       "-apple-system",
  //       "BlinkMacSystemFont",
  //       '"Segoe UI"',
  //       "Roboto",
  //       '"Helvetica Neue"',
  //       "Arial",
  //       "sans-serif",
  //       '"Apple Color Emoji"',
  //       '"Segoe UI Emoji"',
  //       '"Segoe UI Symbol"',
  //     ].join(","),
  //   },
});

export default theme;
