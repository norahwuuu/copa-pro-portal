import React from 'react'
import LoginBg from "@/components/LoginBg/loginBg";
import { Box } from "@mui/material";
import { FC, ReactChildren } from "react";

const LoginBox: FC<{ children: ReactChildren }> = ({ children }) => {
  return (
    <>
      <Box>
        <LoginBg>
          {children}
        </LoginBg>

      </Box>
    </>
  );
};

export default LoginBox;
