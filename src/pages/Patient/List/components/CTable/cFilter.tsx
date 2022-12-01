import ICons from "@/components/Icons/icons";
import Text from "@/components/Text/text";
import { OptionLabel, StyledMenu, StyledMenuButton } from "@/theme/filterMenu.style";
import { RowCenterAlign } from "@/theme/themen.util";

import { Box, Checkbox, MenuItem, SxProps } from "@mui/material";
import React, { FC, ReactElement, useEffect, useState } from "react";



const FTitle: FC<{ label: string, isOpen: boolean, type: "sort" | "filter", sxProps: SxProps }> = ({ label, isOpen, type, sxProps }) => {
  return (
    <>
      <Box component={"div"} sx={{
        ...RowCenterAlign,
        ...sxProps,
        justifyContent: "space-between",

      }}>
        <Text
          variant={"body1"}
          sxProp={{
            fontWeight: 300, display: "flex",
            alignItems: "center",
            justifyContent: "start",
            color: "inherit"
          }}
        >
          {type === 'filter' && <ICons icon="FilterAltIcon" sxProps={{ color: "inherit", fontSize: "18px", marginRight: "5px" }} />}
          {type === 'sort' && <ICons icon="SortIcon" sxProps={{ color: "inherit", fontSize: "18px", marginRight: "5px" }} />}

          {label}
        </Text>

        {isOpen && (
          <ICons
            icon={"KeyboardArrowUpIcon"}
            sxProps={{ color: "#C02820" }}
          />
        )}

        {!isOpen && (
          <ICons
            icon={"KeyboardArrowDownIcon"}
            sxProps={{ alignSelf: "center", color: "#C02820" }}
          />
        )}
      </Box>
    </>
  )
}

interface IFilterItemProps {
  option: IFilterOption,
  type: "filter" | "sort",
  updateFilter: (key: string) => void,
  selectedItems: string[]
}

const FItem: FC<IFilterItemProps> = ({ option, type, selectedItems, updateFilter }) => {
  const [checked, setChecked] = useState<boolean>(selectedItems.includes(option.id) || selectedItems.includes("all"));
  let actionTemplate: ReactElement;

  useEffect(() => {
    setChecked(selectedItems.includes(option.id) || (selectedItems.includes("all") && selectedItems.includes("archived")))
  }, [selectedItems])
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
    updateFilter(option.id);
  };

  if (type === "sort") {
    actionTemplate = <Checkbox
      size={"small"}
      sx={{ py: 1 }}
      icon={<ICons icon={"CheckedIcon"} sxProps={{ color: "gray.lighten" }} />}
      checkedIcon={<ICons icon={"CheckedIcon"} sxProps={{ color: "secondary.main" }} />}
      checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled', 'data-testid': option.id }} />

  } else {
    actionTemplate = <Checkbox color={"secondary"} size={"small"} sx={{ py: 1 }} checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled', 'data-testid': option.id }} />
  }
  return (
    <OptionLabel sx={{ width: "100%", mx: 0, }} control={actionTemplate} label={option.text} />
  )
}

const CFilter: FC<ITableFilter> = ({ filter, filters, updateFilters }) => {
  const filterKey = filter.id;
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const patientStatusFilterStyle = (isLast: boolean) => {
    if (isLast && filterKey === "patientStatus") {
      return { "> label": { borderTop: "1px solid #EEEEEE", py: 1 } }
    }
    return {};
  }


  const updateFilter = (key: string) => {
    const index = filters[filterKey].indexOf(key)
    //we can able to sort by atleast one condtion 
    if (filterKey === "sortBy") {
      filters[filterKey] = [key]
    } else {
      if (index !== -1) {
        if (key === 'all') {
          filters[filterKey] = []
        } else {
          filters[filterKey] = filters[filterKey].filter(a => a !== key);
          filters[filterKey] = filters[filterKey].filter(a => a !== "all");
        }
      } else {
        if (key === 'all') {
          const result = filter.options.map((o: IFilterOption) => o.id);
          filters[filterKey] = result.filter(a => a !== 'archived')
        } else {
          filters[filterKey] = [...filters[filterKey], key]
        }
      }
    }
    updateFilters(filters)
  }

  return (
    <>
      <StyledMenuButton
        id={`${filter.id}-button`}
        aria-controls={open ? `${filter.id}-menu` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FTitle label={filter.name} isOpen={open} sxProps={filter.styleProps} type={filter.type} />
      </StyledMenuButton>

      <StyledMenu
        id={`${filter.id}-menu`}
        aria-labelledby={`${filter.id}-button`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}

      >
        <MenuItem onClick={handleClose} sx={{ borderBottom: "1px solid #EEEEEE", padding: "2px 10px", mb: 3 }} >
          <FTitle label={filter.name} isOpen={open} sxProps={{ ...filter.styleProps }} type={filter.type} />
        </MenuItem>
        {filter.options.map((option: IFilterOption, index: number) => (
          <MenuItem sx={{ p: 0, ...patientStatusFilterStyle(filter.options.length === index + 1) }} key={option.id}>
            <FItem type={filter.type} selectedItems={filters[filterKey]} option={option} updateFilter={updateFilter} />
          </MenuItem>
        ))}


      </StyledMenu>
    </>
  );
};

export default CFilter;
