import React from 'react'
import LoginBg from "@/components/LoginBg/loginBg";
import { Box } from "@mui/material";
import { FC, ReactChildren } from "react";

const LoginBox: FC<{ children: ReactChildren }> = ({ children }) => {
  return (
    <Box sx={{ width: '100%', minWidth: "1280px", height: 'calc(100% - 60px)', display: 'flex', justifyContent: 'center' }}>
      <LoginBg>
        {children}
      </LoginBg>

    </Box>
  );
};

export default LoginBox;
