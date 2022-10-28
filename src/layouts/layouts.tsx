import theme from "@/theme/theme";
import { ThemeProvider } from "@mui/material";
import { ReactChildren } from "react";

export default function Layout({ children }: { children: ReactChildren }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
