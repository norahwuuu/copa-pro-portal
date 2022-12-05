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
import { useEffect } from "react";
/* 
example:  
setAlert({
      isAlert: true,
      method: "ErrorIcon",
      title: 'This case need your attention.',
      btnList: [
        <Btn variant={"outlined"} btnLabel={"Got it!"} onClickHandler={() => setAlert({ isAlert: false })} />,
      ],
      content: <Grid container direction={'column'} component={"div"} >
        <Text variant="body1" color={"gray.main"}>
          {"This patient's treatment plan has been reviewed and some changes have been made."}
        </Text>
        <Text variant="body1" color={"gray.main"} sxProp={{ fontWeight: "bold", marginTop: '20px' }}>
          {"Comment from our reviewer:"}
        </Text>
        <Text variant="body1" color={"gray.main"} >
          {"We have changed …"}
        </Text>
        <Text variant="h6" color={"gray.main"} sxProp={{ marginTop: '20px' }}>
          {" Please review Tx plan and approve changes."}
        </Text>
        <Text variant="body1" color={"gray.main"} sxProp={{ marginTop: '20px' }}>
          {"If you have further questions, call 1-123-456-7890"}
        </Text>
      </Grid>,
    })
      
*/
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
    paddingRight: '30px',
    display: 'flex',
    alignItems: 'center',


  },
  "& .MuiDialogContent-root": {
    margin: '0 auto',
    padding: 0,
    marginTop: '30px',
    letterSpacing: '-0.5px',
    position: 'relative',
    left: '11px',
    fontWeight: 'normal'
  },

}));

export default function AlertDialog({ isAlert, method, title, content, btnList, setAlert, ...props }: AlertProps) {

  useEffect(() => {

    return () => {
      setAlert({
        isAlert: false,
        method: 'ErrorIcon',
        btnList: [],
        title: { text: "", sxProps: { color: "primary", variant: "h6" } },
        content: "",
      })
    }
  }, [])

  return (
    <>
      <BootstrapDialog
        open={isAlert}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ paddingLeft: '30px', }} id="alert-dialog-title" color={'gray.main'}>
          {method && <ICons icon={method || 'ErrorIcon'}
            sxProps={{ width: '30px', height: '25px', marginRight: '11px' }} />}
          <Text variant={'h6'} color={'primary'} sxProp={{ fontWeight: 'normal', ...title.sxProps }}>
            {title.text}
          </Text>
        </DialogTitle>
        {content && <DialogContent >
          <DialogContentText id="alert-dialog-description" component={"div"} color={'gray.main'}>
            {content}
          </DialogContentText>
        </DialogContent>}
        <Grid textAlign={'center'} marginTop={'31px'} container direction={'column'} spacing={2}>
          {btnList && btnList.length > 0 && btnList.map((item: React.ReactNode, index) => {
            return <Grid item key={index}>
              {item}
            </Grid>

          })}
        </Grid>

      </BootstrapDialog>
    </>
  );
}
