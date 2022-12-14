import React from 'react';
import Text from "@/components/Text/text";
import { ColumnCenterAlign } from "@/theme/themen.util";
import { Box, Container, Grid, Link, useTheme } from "@mui/material";
import { FC, ReactChildren } from "react";
import { FormattedMessage, Link as RouterLink, useLocation } from "umi";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { navItems } from "./createPatient.config";

const PatientCreate: FC<{ children: ReactChildren }> = ({ children }) => {
  const location = useLocation();
  const theme = useTheme();
  return (
    <Container disableGutters maxWidth={"md"}>

      <Box sx={{
        // my: 2,
        px: 1,
        display: "flex",
        flexDirection: "column",


        height: "100%",
      }}>
        <Box
          component={"div"}
          sx={{
            ...ColumnCenterAlign,
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
                  display: "inline-block",
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
        </Box>
        <Link
          variant={"h6"}
          sx={{
            fontWeight: "Bold",
            marginBottom: "10px",
            display: "flex",
            zIndex: "999",
            marginTop: '4px',
            [theme.breakpoints.up('xl')]: {
              marginTop: '87px'
            }
          }}
          href=""
          color={"gray.main"}
          underline="hover"
        >
          {
            <ArrowBackIcon
              sx={{
                fontSize: "20px",
                fontWeight: "blod",
                alignSelf: "center",
                marginRight: "5px",
                color: "gray.main"
              }}
            />
          }
          {"Back"}
        </Link>
        <Grid container>
          {children}
        </Grid>
      </Box>
    </Container>
  );
};

export default PatientCreate;
