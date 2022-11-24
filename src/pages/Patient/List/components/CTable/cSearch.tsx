import { TextField, styled, TextFieldProps, Box } from "@mui/material"
import React, { FC } from "react"
import SearchIcon from '@mui/icons-material/Search';



const OutlinedTextField = styled(TextField)<TextFieldProps>(({ theme }) => ({
    "& label": {
        ...theme.typography.body1,
        letterSpacing: "0px",
        color: theme.palette.gray?.darken1,
        opacity: 1,
        "&.Mui-focused": {
            color: theme.palette.gray?.main,
        },
    },
    "& .MuiOutlinedInput-input": {
        color: theme.palette.gray?.main,
        opacity: 1,
    },
    "& fieldset": {
        ...theme.typography.body1,
        fontWeight: 300,
        border: `1px solid ${theme.palette.gray?.darken}`,
        borderRadius: "18px",
        // height: "36px",
        color: theme.palette.gray?.main,
    },
    "&:hover fieldset": {
        borderColor: theme.palette.gray?.main,
    },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
        borderColor: theme.palette.gray?.main,
        borderWidth: "1px",
        color: theme.palette.gray?.main,
    },
    "&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline": {
        borderColor: `${theme.palette.error.main} !important`,
        borderWidth: "1px",
    },
}))

const CSearch: FC = () => {
    return (
        <Box component={"div"}>
            <OutlinedTextField
                size={"small"}
                id="input-with-icon-textfield"
                label={"Search"}
                InputProps={{
                    startAdornment: <SearchIcon />
                }}

            />
        </Box>
    )
}



export default CSearch