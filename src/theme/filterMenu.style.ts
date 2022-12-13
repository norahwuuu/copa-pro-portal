import styled from "@emotion/styled";
import { Button, ButtonProps, FormControlLabel, FormControlLabelProps, Menu, MenuProps } from "@mui/material";


export const StyledMenu = styled(Menu)<MenuProps>(
    ({ theme }) => ({
        "& .MuiPaper-root": {
            borderRadius: "13px",
            boxShadow: "none",
            border: "1px solid #777777 !important",
            marginTop: "-3px !important",
            "& .MuiList-root": {
                paddingRight: "5px",
                paddingLeft: "5px"
            },
            "& .MuiMenuItem-root": {
                ...theme.typography.body1,
                fontWeight: 300,
                color: theme.palette.gray?.main,
                "&:first-of-type:hover": {
                    backgroundColor: "transparent",
                },
                "&:not(:first-of-type):hover": {
                    backgroundColor: theme.palette.gray?.lighten1,
                },
            },
        },
    })
);


export const StyledMenuButton = styled(Button)<ButtonProps>(({ theme }) => ({
    ...theme.typography.body1,
    fontWeight: 300,
    color: theme.palette.gray?.main,
    border: "1px solid #777777",
    backgroundColor: theme.palette.common.white,
    borderRadius: "20px",
    textDecoration: "none",
    padding: "15px",
    height: 36,
    '> span': {
        alignSelf: "center"
    },
    '> svg': {
        alignSelf: "center"
    },
    '&:hover': {
        textDecoration: "none",
    },

}));


export const OptionLabel = styled(FormControlLabel)<FormControlLabelProps>(({ theme }) => ({
    "& .MuiFormControlLabel-root": {
        color: theme.palette.primary.main,

    },
    "& .MuiFormControlLabel-label": {
        ...theme.typography.body1,
        fontWeight: 300,
        color: "inherit",
    }
}))