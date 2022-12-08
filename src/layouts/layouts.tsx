import React from 'react';
import Footer from "@/components/Footer/footer";
import theme from "@/theme/theme";
import { Paper, ThemeProvider } from "@mui/material";
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
      <Paper elevation={0} sx={{ overflowY: "auto", height: "90%", p: 0, borderRadius: "0px" }}>
        {children}
      </Paper>
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
