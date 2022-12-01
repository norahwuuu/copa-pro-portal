import React, { useEffect, useMemo, useState } from 'react';
import { Grid, Chip, styled, ChipProps, Link } from "@mui/material";
import { FC } from "react";
import { TABLE_FILTER } from './table.config';
import { IFilterChips, IFilterOption, ITableFilterChips } from './table';



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


const CFilteredChips: FC<ITableFilterChips> = ({ chips, updateFilters, resetFilter }) => {
    const [list, setList] = useState<IFilterChips>({})

    useEffect(() => {
        if (chips["sortBy"]) {
            delete chips["sortBy"]
        }
        setList(chips)
    }, [chips])

    const enableClearFilter = useMemo(() => {
        let length = 0;
        Object.keys(list).map((key: string) => {
            length += list[key].length
        })
        return length;

    }, [list])

    const handleDelete = (type: string, key: string) => {
        list[type] = list[type].filter((c) => c !== key)
        list[type] = list[type].filter((c) => c !== 'all')
        setList({ ...list })
        updateFilters({ ...list })
    }

    const getFilterTextById = (type: string, key: string) => {
        const result = TABLE_FILTER[type].options.find((obj: IFilterOption) => obj.id === key)
        return <ChipTag key={key} label={result.text} variant={"outlined"} size={"small"} onClick={() => handleDelete(type, key)} onDelete={() => handleDelete(type, key)} sx={{ m: 1 }} />
    }

    return (
        <Grid container spacing={2} sx={{ px: 2 }}>
            {list && Object.keys(list).map((item) => (
                list[item].map((chip: string) => chip !== "all" && getFilterTextById(item, chip))
            ))}
            {list && enableClearFilter > 0 &&
                <Link
                    component="button"
                    variant="body1"
                    color={"secondary"}
                    sx={{
                        fontWeight: 300, marginTop: "10px",
                        marginLeft: "5px"
                    }}
                    onClick={() => {
                        resetFilter()
                    }}
                >
                    Clear all
                </Link>
            }

        </Grid>
    )
}


export default CFilteredChips