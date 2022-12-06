import ShadowBox from "@/pages/Components/shadowBox";
import { Box, Grid, useTheme } from "@mui/material";
import React, { FC } from "react";
import Text from "@/components/Text/text";

const PatientInformation: FC = () => {
  const theme = useTheme();

  return <Grid item xs={12} xl={12}>
    <ShadowBox sxProp={{
      paddingLeft: "30px",
      height: '372px',
      padding: '30px 0',
      [theme.breakpoints.up("xl")]: { padding: "50px 0", height: '408px' },

      flex: '1'
    }}>
      <Text
        variant={"h4"}
        color={"gray.main"}
        sxProp={{ display: "inline-block", marginBottom: "8px" }}
      >
        {"Patient Information"}
      </Text>
      <Grid container height={"100%"} >
        <Grid item sm={6}>1</Grid>
        <Grid item sm={6} sx={{ borderLeft: "1px solid #CCCCCC" }}>2</Grid>
      </Grid>
    </ShadowBox >
  </Grid >
};

export default PatientInformation;
