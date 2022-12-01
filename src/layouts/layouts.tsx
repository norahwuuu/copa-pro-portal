import React from 'react';
import Footer from "@/components/Footer/footer";
import theme from "@/theme/theme";
import { Box, ThemeProvider } from "@mui/material";
import { ReactChildren } from "react";
import Alert from '@/components/Alert/alert';
import { AlertModelState, connect } from 'umi';
interface propsType {
  children: React.ReactNode;
  alertProps: AlertModelState;
  setAlert: (payload: object) => void;
}
function Layout({ children, setAlert, alertProps }: propsType) {

  return (
    <ThemeProvider theme={theme}>
      <Alert setAlert={setAlert} {...alertProps} />
      {children}
      <Footer />
    </ThemeProvider>
  );
}
export default connect(
  ({ alert }: { alert: AlertModelState }) => {

    return { alertProps: alert };
  },
  (dispatch) => ({
    setAlert: (payload: any) => {
      dispatch({
        type: 'alert/setAlert',
        payload,
      });
    },
  }),
)(Layout);
