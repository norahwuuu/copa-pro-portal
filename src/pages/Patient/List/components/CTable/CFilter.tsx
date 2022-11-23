import ICons from "@/components/Icons/icons";
import Text from "@/components/Text/text";
import { RowCenterAlign } from "@/theme/themen.util";

import { Box, Button, ButtonProps, Checkbox, FormControlLabel, Menu, MenuItem, MenuProps, styled, SxProps } from "@mui/material";
import React, { FC } from "react";
import { IFilter, IFilterOption } from "./table";


const StyledMenu = styled((props: MenuProps) => <Menu {...props} anchorOrigin={{
  vertical: "top",
  horizontal: "left",
}}
  transformOrigin={{
    vertical: "top",
    horizontal: "left",
  }} />)(
    ({ theme }) => ({
      "& .MuiPaper-root": {
        borderRadius: "18px",
        boxShadow: "none",
        border: "1px solid #777777 !important",
      },
      "& .MuiMenuItem-root": {
        ...theme.typography.body1,
        fontWeight: 300,
        color: theme.palette.gray?.main,
        "&:hover": {
          backgroundColor: theme.palette.gray?.lighten1,
        },
      },
    })
  );


const StyledMenuButton = styled(Button)<ButtonProps>(({ theme }) => ({
  ...theme.typography.body1,
  fontWeight: 300,
  color: theme.palette.gray?.main,
  border: "1px solid #777777",
  backgroundColor: theme.palette.common.white,
  borderRadius: "20px",
  textDecoration: "none",
  padding: "10px",
  height: 35,
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
            icon="ArrowUpIcon"
            sxProps={{ color: "#C02820" }}
          />
        )}

        {!isOpen && (
          <ICons
            icon="ArrowDownIcon"
            sxProps={{ alignSelf: "center", color: "#C02820" }}
          />
        )}
      </Box>
    </>
  )
}

const FItemCheckbox: FC<{ label: string }> = ({ label }) => {
  return (
    <FormControlLabel sx={{ width: "100%", mx: 0 }} control={<Checkbox color={"secondary"}
      sx={{ '& .MuiSvgIcon-root': { fontSize: 18, } }} />} label={label} />
  )
}

const CFilter2: FC<{ filter: IFilter }> = ({ filter }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledMenuButton
        id="demo-positioned-button"
        aria-controls={open ? "demo-positioned-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{

        }}
      >
        <FTitle label={filter.name} isOpen={open} sxProps={filter.styleProps} type={filter.type} />
      </StyledMenuButton>

      <StyledMenu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}

      >
        <MenuItem onClick={handleClose} sx={{ borderBottom: "1px solid #EEEEEE", padding: "2px 10px", }} >
          <FTitle label={filter.name} isOpen={open} sxProps={filter.styleProps} type={filter.type} />
        </MenuItem>
        {filter.options.map((option: IFilterOption) => (
          <MenuItem sx={{ p: 0 }} key={option.id}>
            <FItemCheckbox label={option.text} />
          </MenuItem>
        ))}


      </StyledMenu>
    </>
  );
};

export default CFilter2;
