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
          minHeight: "60px",
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Box component={"div"} sx={{ flexGrow: 1, paddingTop: "7px" }}>
            <Box component="img" src={Logo} alt={"logo"} loading="lazy" sx={{ height: "21px" }} />
          </Box>
          <Box component={"div"} sx={{ flexGrow: 1 }}>
            {children}
          </Box>
          <Box component={"div"} >
            <CustomizedMenus />
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default HEADER;
