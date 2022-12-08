import { accountUrlObj } from "@/pages/Account/account.route";
import { loginUrlObj } from "@/pages/LoginBox/loginBox.route";
import { StyledMenu, StyledMenuButton } from "@/theme/filterMenu.style";
import { RowCenterAlign } from "@/theme/themen.util";
import { Box, MenuItem, SxProps } from "@mui/material";
import React, { FC, useCallback, useState } from "react";
import { FormattedMessage, history } from "umi";
import ICons from "../Icons/icons";
import Text from "../Text/text";



const FTitle: FC<{ label: string, isOpen: boolean, sxProps: SxProps }> = ({ label, isOpen, sxProps }) => {
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
          {label}

        </Text>
        <Box sx={{ ...RowCenterAlign, alignSelf: "center" }}>
          <ICons
            icon="UserIcon"
            fontSize={"small"}
            sxProps={{ alignSelf: "center" }}
          />
          {isOpen && (
            <ICons
              icon="ArrowUpIcon"
              sxProps={{ alignSelf: "center", color: "inherit" }}
            />
          )}
          {!isOpen && (
            <ICons
              icon="ArrowDownIcon"
              sxProps={{ alignSelf: "center", color: "inherit" }}
            />
          )}
        </Box>

      </Box>
    </>
  )
}

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
      <StyledMenuButton
        id="user-button"
        aria-controls={open ? "user-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        sx={{ height: open ? "32px !important" : "inherit" }}
      >
        <FTitle label={"Brenda Smith"} isOpen={open} sxProps={{ minWidth: "170px" }} />

      </StyledMenuButton>

      <StyledMenu
        id="user-menu"
        aria-labelledby="user-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        transitionDuration={50}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ borderRadius: "13px", }}
      >
        <MenuItem onClick={handleClose} sx={{ borderBottom: "1px solid #EEEEEE", padding: "0px 10px 5px 10px", mb: 3 }} >
          <FTitle label={"Brenda Smith"} isOpen={open} sxProps={{ minWidth: "170px" }} />
        </MenuItem>
        <MenuItem
          disableRipple
          onClick={() => redirectTo(accountUrlObj.monthlyStatement)}
        >
          <FormattedMessage id="myAccountMenu" />
        </MenuItem>
        <MenuItem disableRipple onClick={() => redirectTo(loginUrlObj.changePassword)}>
          <FormattedMessage id="changePasswordMenu" />
        </MenuItem>
        <MenuItem
          disableRipple
          onClick={handleClose}
          sx={{ "> svg": { marginLeft: 2 } }}
        >
          <FormattedMessage id="logoutMenu" />
          <ICons icon={"LogoutIcon"} sxProps={{ color: "inherit" }} />
        </MenuItem>
      </StyledMenu>
    </>
  );
};

export default CustomizedMenus;
