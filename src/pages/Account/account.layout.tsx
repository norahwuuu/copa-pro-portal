import Header from "@/components/Header/header";
import Text from "@/components/Text/text";
import theme from "@/theme/theme";
import { Box, Grid, Link } from "@mui/material";
import { FC, ReactChildren } from "react";
import { FormattedMessage, Link as RouterLink, useLocation } from "umi";
import { accountUrlObj } from "./account.route";

const AccountHeader: FC = () => {
  return (
    <Text variant="h4" color="inherit">
      <FormattedMessage id={"myAccountHeader"} />
    </Text>
  );
};

const Account: FC<{ children: ReactChildren }> = ({ children }) => {
  const location = useLocation();
  const navItems = [
    {
      id: "monthlystatement",
      path: accountUrlObj.monthlyStatement,
      translate: "monthlyStatementMenu",
    },
    {
      id: "manageusers",
      path: accountUrlObj.manageUsers,
      translate: "manageUsersMenu",
    },
    {
      id: "shippingsettings",
      path: accountUrlObj.shippingSettings,
      translate: "shippingSettingsMenu",
    },
  ];
  return (
    <>
      <Header>
        <AccountHeader />
      </Header>
      <Box sx={{ my: 5 }}>
        <Box
          component={"div"}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.id}
              component={RouterLink}
              to={item.path}
              variant={"body1"}
              color={"inherit"}
              underline={"none"}
              sx={{
                fontWeight: "bold",
                my: 1,
                mx: 4,
                px: 1,
                py: 3,
                borderBottom:
                  location.pathname === item.path
                    ? `5px solid ${theme.palette.secondary.main}`
                    : "none",
                color:
                  location.pathname === item.path
                    ? theme.palette.gray?.main
                    : theme.palette.gray?.darken,
                "&:hover": {
                  color: theme.palette.gray?.main,
                },
              }}
            >
              <FormattedMessage id={item.translate} />
            </Link>
          ))}
        </Box>

        <Grid container sx={{ m: 1 }}>
          {children}
        </Grid>
      </Box>
    </>
  );
};

export default Account;
