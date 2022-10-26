import theme from "@/theme";
import { ThemeProvider } from "@mui/material";

export default function Layout({ children }: { children: any }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
