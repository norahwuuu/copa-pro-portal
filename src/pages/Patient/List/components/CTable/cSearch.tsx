import { TextField, styled, TextFieldProps, Box, IconButton } from "@mui/material"
import React, { Dispatch, FC, SetStateAction } from "react"
import SearchIcon from '@mui/icons-material/Search';
import ICons from "@/components/Icons/icons";



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
        color: theme.palette.gray?.main,
    },
    "&:hover fieldset": {
        borderColor: theme.palette.gray?.main,
    },
    "& .MuiOutlinedInput-root": {
        "&.Mui-focused": {
            "& fieldset": {
                borderColor: `${theme.palette.gray?.main} !important `,
                borderWidth: "1px",
                color: theme.palette.gray?.main,
            }
        },
    },
}))

const CSearch: FC<{ search: string, updateSearch: Dispatch<SetStateAction<string>> }> = ({ search, updateSearch }) => {
    return (
        <Box component={"div"}>
            <OutlinedTextField
                size={"small"}
                fullWidth
                id="input-with-icon-textfield"
                value={search}
                label={"Search"}
                InputProps={{
                    startAdornment: <SearchIcon />,
                    endAdornment: search && (
                        <IconButton
                            aria-label="search"
                            onClick={() => updateSearch("")}
                            sx={{ "&:hover": { backgroundColor: "transparent" } }}
                        ><ICons icon={"CloseIcon"} sxProps={{ color: "primary.main", fontSize: "15px" }} /> </IconButton>
                    )

                }}
                onChange={(e) => updateSearch(e.target.value)}

            />
        </Box>
    )
}



export default CSearch