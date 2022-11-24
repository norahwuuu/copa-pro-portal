import styled from "@emotion/styled";
import { Button, ButtonProps, Menu, MenuProps } from "@mui/material";


export const StyledMenu = styled(Menu)<MenuProps>(
    ({ theme }) => ({
        "& .MuiPaper-root": {
            borderRadius: "18px",
            boxShadow: "none",
            border: "1px solid #777777 !important",
            "& .MuiMenuItem-root": {
                ...theme.typography.body1,
                fontWeight: 300,
                color: theme.palette.gray?.main,

                "&:first-child:hover": {
                    backgroundColor: "transparent",
                },
                "&:not(:first-child):hover": {
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
    padding: "10px",
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