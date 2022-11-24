import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import React, { FC, ReactNode } from "react";
import CustomizedMenus from "./menu";

import Logo from "../../assets/images/COLGATE_SMILE_LOGO.svg";

const HEADER: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="relative"
        color="primary"
        elevation={0}
        sx={{
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
          height: "60px",
        }}
      >
        <Toolbar
          sx={{
            height: "60px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Box component={"div"} sx={{ flexGrow: 1, height: "30px" }}>
            <Box component="img" src={Logo} alt={"logo"} loading="lazy" />
          </Box>
          <Box component={"div"} sx={{ flexGrow: 1 }}>
            {children}
          </Box>
          <CustomizedMenus />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HEADER;
