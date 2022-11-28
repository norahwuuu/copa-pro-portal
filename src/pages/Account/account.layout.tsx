import Header from "@/components/Header/header";
import Text from "@/components/Text/text";
import { RowCenterAlign } from "@/theme/themen.util";
import { Box, Grid, Link } from "@mui/material";
import { FC, ReactChildren } from "react";
import { FormattedMessage, Link as RouterLink, useLocation } from "umi";
import { navItems } from "./account.config";
import React from 'react'

const AccountHeader: FC = () => {
  return (
    <Text variant="h4" color="inherit">
      <FormattedMessage id={"myAccountHeader"} />
    </Text>
  );
};

const Account: FC<{ children: ReactChildren }> = ({ children }) => {
  const location = useLocation();

  return (
    <>
      <Header>
        <AccountHeader />
      </Header>
      <Box sx={{ my: 5 }}>
        <Box
          component={"div"}
          sx={{
            ...RowCenterAlign,
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
                borderBottom: (theme) =>
                  location.pathname === item.path
                    ? `5px solid ${theme.palette.secondary.main}`
                    : "none",
                color: (theme) =>
                  location.pathname === item.path
                    ? theme.palette.gray?.main
                    : theme.palette.gray?.darken,
                "&:hover": {
                  color: (theme) => theme.palette.gray?.main,
                  borderBottom: (theme) =>
                    `5px solid ${theme.palette.secondary.main}`,
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
