import { Box } from "@mui/material";
import React from 'react';

const LoginBg = () => {
  return (
    <Box
      sx={{
        width: "calc(100% - 60px)",
        height: "calc(100% - 120px)",
        position: "absolute",
        margin: "30px",
        borderBottomRightRadius: "60%",
        borderBottomLeftRadius: "20%",
        backgroundColor: "#f6f6f6",
        // backgroundImage: `url(${login1680})`,
      }}
    ></Box>
  );
};
export default LoginBg;
