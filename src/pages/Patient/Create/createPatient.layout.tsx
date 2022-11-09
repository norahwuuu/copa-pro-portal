import Text from "@/components/Text/text";
import theme from "@/theme/theme";
import { Box, Grid, Link } from "@mui/material";
import { FC, ReactChildren } from "react";
import { FormattedMessage, Link as RouterLink, useLocation } from "umi";
import { createPatientUrlObj } from "./createPatient.route";

const PatientCreate: FC<{ children: ReactChildren }> = ({ children }) => {
  const location = useLocation();
  const navItems = [
    {
      id: "patientinformation",
      path: createPatientUrlObj.createPatientInformation,
      translate: "patientInformationMenu",
    },
    {
      id: "clinicalinformation",
      path: createPatientUrlObj.createPatinetClinicalInformation,
      translate: "clinicalInformationMenu",
    },
    {
      id: "scans",
      path: createPatientUrlObj.createPatinetScans,
      translate: "scanMenu",
    },
    {
      id: "photograph",
      path: createPatientUrlObj.createPatinetPhotograph,
      translate: "radiographAndPhotographMenu",
    },
  ];

  return (
    <Box sx={{ my: 2 }}>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box component={"div"} sx={{ mb: 5 }}>
          <Text
            variant={"body2"}
            sxProp={{ fontStyle: "italic" }}
            color={"gray.main"}
          >
            {"* Required information"}
          </Text>
        </Box>
        <Box component={"div"}>
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
      </Box>
      <Grid container sx={{ m: 1, my: 5 }}>
        {children}
      </Grid>
    </Box>
  );
};

export default PatientCreate;
