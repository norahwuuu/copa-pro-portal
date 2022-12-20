import React from 'react';
import Header from "@/components/Header/header";
import { Box, Link, } from "@mui/material";
import { FC, ReactChildren } from "react";
import { FormattedMessage, Link as RouterLink, useLocation } from "umi";
import { navItems } from "./treatmentPlan.config";

const TretmentPlanHeader: FC = () => {
  const location = useLocation();

  return (
    <Box>
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
            mx: 4,
            p: 4,
            display: "inline-block",
            borderBottom: (theme) =>
              location.pathname === item.path
                ? `5px solid ${theme.palette.secondary.main}`
                : "none",
            color: 'white',
            "&:hover": {
              borderBottom: (theme) =>
                `5px solid ${theme.palette.secondary.main}`,
            },
          }}
        >
          <FormattedMessage id={item.translate} />
        </Link>
      ))}
    </Box>
  );
};

const TretmentPlan: FC<{ children: ReactChildren }> = ({ children }) => {
  return (
    <>
      <Header>
        <Box sx={{}}>
          <TretmentPlanHeader />
        </Box>
      </Header>
      {children}
    </>
  );
};

export default TretmentPlan;
