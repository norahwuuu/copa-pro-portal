import { accountUrlObj } from "@/pages/Account/account.route";
import theme from "@/theme/theme";
import {
  AccountCircle,
  ArrowDropDown,
  ArrowDropUp,
  Logout,
} from "@mui/icons-material";
import { Button, Menu, MenuItem, MenuProps, styled } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { FormattedMessage, history } from "umi";
import Text from "../Text/text";

const StyledMenu = styled((props: MenuProps) => <Menu {...props} />)(
  ({ theme }) => ({
    "& .MuiPaper-root": {
      borderRadius: "0px 0px 20px 20px",
      boxShadow: "none",
      border: "1px solid #777777 !important",
      borderTop: `1px solid #EEEEEE !important`,
      minWidth: 179,
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

const CustomizedMenus: FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const redirectTo = useCallback((path: string) => {
    setAnchorEl(null);
    history.push(path);
  }, []);

  return (
    <>
      <Button
        id="user-menu-button"
        aria-controls={open ? "user-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{
          ...theme.typography.body1,
          fontWeight: 300,
          color: theme.palette.gray?.main,
          height: 36,
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
          p: 1,
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
          {"Brenda Smith"}
        </Text>
        <AccountCircle fontSize={"small"} sx={{ alignSelf: "center" }} />
        {open && <ArrowDropUp sx={{ alignSelf: "center", color: "inherit" }} />}
        {!open && (
          <ArrowDropDown sx={{ alignSelf: "center", color: "inherit" }} />
        )}
      </Button>

      <StyledMenu
        id="user-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={0}
        MenuListProps={{
          "aria-labelledby": "user-menu-button",
        }}
      >
        <MenuItem
          disableRipple
          onClick={() => redirectTo(accountUrlObj.monthlyStatement)}
        >
          <FormattedMessage id="myAccountMenu" />
        </MenuItem>
        <MenuItem disableRipple onClick={handleClose}>
          <FormattedMessage id="changePasswordMenu" />
        </MenuItem>
        <MenuItem
          disableRipple
          onClick={handleClose}
          sx={{ "> svg": { marginLeft: 2 } }}
        >
          <FormattedMessage id="logoutMenu" />{" "}
          <Logout fontSize={"small"} sx={{ color: "inherit" }} />
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default CustomizedMenus;
