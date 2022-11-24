import Button from "@/components/Button/button";
import ICons from "@/components/Icons/icons";
import { DialogContentText } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import * as React from "react";
import Text from "@/components/Text/text";

export interface DialogTitleProps {
    open: boolean;
    title: string;
    content: React.ReactNode,
    btns: React.ReactNode
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
    "& .MuiDialogActions-root": {
        padding: 0,
        paddingTop: '38px',
        display: 'flex',
        justifyContent: 'center'
    },
}));

export default function AlertDialog({ open, title = 'Title', content = '', btns }: DialogTitleProps) {

    return (
        <>
            <BootstrapDialog
                open={open}
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
                    <DialogContentText id="alert-dialog-description">
                        {content}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {btns}
                </DialogActions>
            </BootstrapDialog>
        </>
    );
}
