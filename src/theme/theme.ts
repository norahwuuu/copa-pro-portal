import { createTheme } from "@mui/material/styles";
import { palette } from "./palette";

const theme = createTheme({
  palette: {
    ...palette,
  },
  typography: {
    fontFamily: "Colgate Ready",
  },
});

export default theme;
