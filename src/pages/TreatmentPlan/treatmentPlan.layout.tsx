import Header from "@/components/Header/header";
import { Box, Link } from "@mui/material";
import { FC, ReactChildren } from "react";
import { FormattedMessage, Link as RouterLink, useLocation } from "umi";
import { navItems } from "./treatmentPlan.config";

const TretmentPlanHeader: FC = () => {
  const location = useLocation();

  return (
    <>
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
            p: 3,
            borderBottom:
              location.pathname === item.path ? "5px solid #FFFFFF" : "none",
            "&:hover": {
              borderBottom: "5px solid #FFFFFF",
            },
          }}
        >
          <FormattedMessage id={item.translate} />
        </Link>
      ))}
    </>
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
