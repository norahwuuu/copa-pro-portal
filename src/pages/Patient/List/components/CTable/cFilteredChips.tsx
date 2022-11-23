import { Grid, Chip, styled, ChipProps } from "@mui/material";
import React, { FC } from "react";



const ChipTag = styled(Chip)<ChipProps>(({ theme }) => ({
    "&.MuiChip-root": {
        background: "#FFFFFF 0% 0% no-repeat padding-box",
        border: `1px solid ${theme.palette.secondary.main}`,
        borderRadius: "20px",
        opacity: 1,
        "& .MuiChip-label": {
            ...theme.typography.body1,
            opacity: 1,
            color: theme.palette.gray?.main
        },
        "& .MuiSvgIcon-root": {
            color: theme.palette.gray?.main
        }
    }
}))


const CFilteredChips: FC = () => {
    const handleDelete = () => {
        console.info('You clicked the delete icon.');
    };

    return (
        <Grid container spacing={2} sx={{ px: 2 }}>
            <ChipTag label="Prospective" variant="outlined" onDelete={handleDelete} sx={{ m: 1 }} />
            <ChipTag label="Awaiting doctor approval" variant="outlined" onDelete={handleDelete} sx={{ m: 1 }} />
            <ChipTag label="Active" variant="outlined" onDelete={handleDelete} sx={{ m: 1 }} />
            <ChipTag label="Not tracking" variant="outlined" onDelete={handleDelete} sx={{ m: 1 }} />
            <ChipTag label="Rejected" variant="outlined" onDelete={handleDelete} sx={{ m: 1 }} />
            <ChipTag label="Awaiting payment" variant="outlined" onDelete={handleDelete} sx={{ m: 1 }} />
            <ChipTag label="Shipped" variant="outlined" onDelete={handleDelete} sx={{ m: 1 }} />
            <ChipTag label="Under quality check" variant="outlined" onDelete={handleDelete} sx={{ m: 1 }} />
            <ChipTag label="Decision pending" variant="outlined" onDelete={handleDelete} sx={{ m: 1 }} />
            <ChipTag label="In production" variant="outlined" onDelete={handleDelete} sx={{ m: 1 }} />
            <ChipTag label="Deletable" variant="outlined" onDelete={handleDelete} sx={{ m: 1 }} />


        </Grid>
    )
}


export default CFilteredChips