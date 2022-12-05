import React, { FC } from "react";
import { Box, Grid, Link, useTheme } from "@mui/material";
import ShadowBox from "@/pages/Components/shadowBox";
const PatientClinicalInformation: FC = () => {
  const theme = useTheme();
  return <Grid container>
    <Grid item xs={12} xl={12}>
      <ShadowBox sxProp={{
        height: '372px',
        padding: '30px 0',
        [theme.breakpoints.up('xl')]: {
          height: '408px',
          padding: '50px 0'
        }
      }}>
        <Grid container sx={{ width: '100%', height: "100%", margin: "0" }}>
          <Grid item sm={6}>1</Grid>
          <Grid item sm={6}>2</Grid>
        </Grid>
      </ShadowBox>
    </Grid>
  </Grid>;
};

export default PatientClinicalInformation;
