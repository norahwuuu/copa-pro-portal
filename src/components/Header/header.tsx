import { AppBar, Box, CssBaseline, Toolbar } from "@mui/material";
import { FC, ReactNode } from "react";
import CustomizedMenus from "./menu";

import Logo from "../../assets/images/COLGATE_SMILE_LOGO.svg";

const HEADER: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        color="primary"
        elevation={0}
        sx={{
          position: "relative",
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
          height: "60px",
        }}
      >
        <Toolbar>
          <Box component={"span"} sx={{ flexGrow: 1 }}>
            <img src={Logo} alt={"logo"} loading="lazy" />
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
