import Button from "@/components/Button/button";
import ICons from "@/components/Icons/icons";
import { Box, DialogContentText, Grid } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Text from "@/components/Text/text";
import { AlertModelState } from "@/pages/Patient/model";

interface AlertProps extends AlertModelState {
  setAlert: Function;
}

const BootstrapDialog = styled(Dialog)(({ theme }) => ({

  "& .MuiDialog-paper": {
    border: "1px solid gray.light3",
    borderTopLeftRadius: '60px',
    borderBottomRightRadius: '60px',
    paddingTop: '50px',
    paddingBottom: '30px',
    width: '450px'
  },
  "& .MuiDialogTitle-root": {
    padding: 0,
    paddingLeft: '30px',
    marginBottom: '30px',
    display: 'flex',
    alignItems: 'center',


  },
  "& .MuiDialogContent-root": {
    width: '333px',
    margin: '0 auto',
    padding: 0

  },

}));

export default function AlertDialog({ isAlert = false, method, title = 'Title', content = '', btnList = [], setAlert, ...props }: AlertProps) {
  return (
    <>
      <BootstrapDialog
        open={isAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ paddingLeft: '30px' }} id="alert-dialog-title">
          <ICons icon="ErrorIcon"
            sxProps={{ width: '30px', height: '25px' }} />
          <Text variant={"h6"} color={"primary"} sxProp={{ fontWeight: 300, paddingLeft: '11px' }}>
            {title}
          </Text>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description" component={"div"}>
            {content}
          </DialogContentText>
        </DialogContent>
        <Grid textAlign={'center'} marginTop={'31px'} container direction={'column'} spacing={2}>
          {btnList.length > 0 && btnList && btnList.map((item: React.ReactNode, index) => {
            return <Grid item key={index}>
              {item}
            </Grid>

          })}
        </Grid>

      </BootstrapDialog>
    </>
  );
}
