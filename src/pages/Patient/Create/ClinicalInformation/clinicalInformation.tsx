import React, { FC } from "react";
import { Box, Grid, useTheme, Divider } from "@mui/material";
import { useIntl } from 'umi';
import ShadowBox from "@/pages/Components/shadowBox";
import Text from "@/components/Text/text";
const PatientClinicalInformation: FC = () => {
  const translate = useIntl();
  const theme = useTheme();
  return <Grid container sx={{ width: '100%' }}>
    <Grid item xs={12} xl={12}>
      <ShadowBox sxProp={{
        height: '372px',
        padding: '30px 0',
        [theme.breakpoints.up('xl')]: {
          height: '408px',
          padding: '50px 0'
        }
      }}>
        <>

          <Grid container sx={{ width: '100%', height: "100%", margin: "0", position: "relative", }}>
            <Grid item sm={6} sx={{
              paddingLeft: '30px',
              [theme.breakpoints.up(1920)]: {
                paddingLeft: '50px'
              }
            }} >
              <Text color="gray.main" sxProp={{ fontSize: '16px', fontWeight: "bold", marginBottom: "20px", display: "block" }} variant="h5">
                {translate.formatMessage({ id: "clinical.leftTitle" })}
              </Text>
              {/* <Text color="error.main" sxProp={{ fontSize: '14px', fontWeight: "normal", display: "block" }} variant="body1">
                {translate.formatMessage({ id: "clinical.selectYN.error" })}
              </Text> */}
              <Box sx={{ width: '100%' }}>234</Box>
            </Grid>
            <Divider sx={{ width: '2px', left: "50%", marginLeft: '-1px', backgroundColor: "#ccc" }} absolute orientation="vertical" />
            <Grid item sm={6} sx={{
              paddingLeft: '50px',
              [theme.breakpoints.up(1920)]: {
                paddingLeft: '54px'
              }
            }}>2</Grid>
          </Grid>
        </>
      </ShadowBox>
    </Grid>
  </Grid>;
};

export default PatientClinicalInformation;
