import React from 'react';
import Footer from "@/components/Footer/footer";
import theme from "@/theme/theme";
import { Box, ThemeProvider } from "@mui/material";
import { ReactChildren } from "react";

export default function Layout({ children }: { children: ReactChildren }) {
  return (
    <ThemeProvider theme={theme}>
      <Box>{children}</Box>
      <Footer />
    </ThemeProvider>
  );
}
