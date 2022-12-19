import React from 'react'
import LoginBg from "@/components/LoginBg/loginBg";
import { Box } from "@mui/material";
import { FC, ReactChildren } from "react";

const LoginBox: FC<{ children: ReactChildren }> = ({ children }) => {
  return (
    <Box sx={{
      width: '100%',
      //  minWidth: "1280px",
      display: 'flex', margin: 'auto', justifyContent: 'center', alignSelf: 'center',
      flex: "1"
    }}>
      <LoginBg>
        {children}
      </LoginBg>

    </Box>
  );
};

export default LoginBox;
