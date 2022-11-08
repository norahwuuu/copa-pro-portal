import theme from "@/theme/theme";
import {
  AccountCircle,
  ArrowDropDown,
  ArrowDropUp,
  Logout,
} from "@mui/icons-material";
import { Button, Menu, MenuItem, MenuProps, styled } from "@mui/material";
import React, { FC } from "react";
import Text from "../Text/text";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: "0px 0px 20px 20px",
    minWidth: 179,
    boxShadow: "none",
    border: "1px solid #777777 !important",
    borderTop: `1px solid${theme.palette.gray?.lighten2}!important`,
  },
  "& .MuiMenuItem-root": {
    ...theme.typography.body1,
    fontWeight: 300,
    color: theme.palette.gray?.main,
  },
}));

const CustomizedMenus: FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          ...theme.typography.body1,
          fontWeight: 300,
          color: theme.palette.gray?.main,
          height: 30,
          border: open ? "1px solid #777777" : "inherit",
          borderBottom: open ? "none" : "inherit",
          backgroundColor: theme.palette.common.white,
          borderRadius: open ? "20px 20px 0px 0px" : "20px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          textDecoration: "none",
          minWidth: 180,
          p: 0,
          "> span": {
            mr: 3,
          },
          "&:hover": {
            border: "none",
            textDecoration: "none",
          },
        }}
      >
        <Text
          variant={"body1"}
          sxProp={{ alignSelf: "center", fontWeight: 300 }}
        >
          {" "}
          Brenda Smith{" "}
        </Text>
        <AccountCircle fontSize={"small"} sx={{ alignSelf: "center" }} />
        {open && <ArrowDropUp sx={{ alignSelf: "center" }} />}
        {!open && <ArrowDropDown sx={{ alignSelf: "center" }} />}
      </Button>

      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={0}
      >
        <MenuItem disableRipple onClick={handleClose}>
          My account
        </MenuItem>
        <MenuItem disableRipple onClick={handleClose}>
          Change password
        </MenuItem>
        <MenuItem
          disableRipple
          onClick={handleClose}
          sx={{ "> svg": { marginLeft: 2 } }}
        >
          Logout <Logout fontSize={"inherit"} />{" "}
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default CustomizedMenus;
