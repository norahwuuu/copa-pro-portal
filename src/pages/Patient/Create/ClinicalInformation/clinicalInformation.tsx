import React, { FC } from "react";
import { Box, Grid, useTheme, Divider, Button, List, ListItem, Checkbox, FormControlLabel, TextField } from "@mui/material";
import { useIntl } from 'umi';
import ShadowBox from "@/pages/Components/shadowBox";
import Text from "@/components/Text/text";
import { conditions } from "./column";
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
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
              <Box sx={{ width: '100%', marginBottom: "25px" }}>
                <Text color="gray.main" sxProp={{ fontSize: '14px' }} variant="h5">
                  {translate.formatMessage({ id: "clinical.selectYN.title" })}
                </Text>
                <Button variant="shade" sx={{
                  color: "gray.main",
                  borderRadius: '4px',
                  fontSize: "14px",
                  padding: "4px 7px",
                  minWidth: "auto",
                  border: '1px solid',
                  borderColor: "gray.lighten2",
                  margin: "0 30px",
                  "&:hover": {
                    borderColor: "gray.darken"
                  },
                  "&:focus": {
                    color: "common.white",
                    backgroundColor: "secondary.main",
                    borderColor: "secondary.main"
                  }
                }} >No</Button>
                <Button variant="shade" sx={{
                  color: "gray.main",
                  borderRadius: '4px',
                  fontSize: "14px",
                  padding: "4px 7px",
                  minWidth: "auto",
                  border: '1px solid',
                  borderColor: "gray.lighten2",
                  "&:hover": {
                    borderColor: "gray.darken"
                  },
                  "&:focus": {
                    color: "common.white",
                    backgroundColor: "secondary.main",
                    borderColor: "secondary.main"
                  }
                }} >Yes</Button>
              </Box>
              <Box sx={{ width: "100%", paddingLeft: '8px' }}>
                <List sx={{ padding: "0" }}>
                  {
                    conditions.map((i) => {
                      return (
                        <ListItem sx={{
                          padding: "0",
                          height: "18px",
                          marginBottom: "14px",
                          lineHeight: "18px",
                          color: "gray.main",
                          fontSize: "14px",
                          display: "flex",
                          alignItems: "center"
                        }} key={i.name}>
                          <Box sx={{ width: "10px", height: "10px", borderRadius: "5px", backgroundColor: "gray.darken", marginRight: "10px" }} />
                          {i.name}
                        </ListItem>
                      )
                    })
                  }
                </List>
                {/* <Box sx={{ width: "100%" }}>
                  <Text variant="body1" sxProp={{ display: "block", color: "gray.main", fontSize: "14px", marginBottom: "10px" }}>{translate.formatMessage({ id: "clinical.select.title" })}</Text>
                  <List sx={{ padding: "0", marginBottom: "22px" }}>
                    {
                      conditions.map((i) => {
                        return (
                          <ListItem sx={{
                            padding: "0",
                            height: "18px",
                            marginBottom: "14px",
                            lineHeight: "18px",
                            color: "gray.main",
                            fontSize: "14px",
                            display: "flex",
                            alignItems: "center"
                          }} key={i.name}>
                            <FormControlLabel label={i.name} control={
                              <Checkbox
                                icon={<CheckBoxOutlineBlankOutlinedIcon sx={{ color: "#777" }} />}
                                inputProps={{
                                  'aria-label': i.name,
                                }}
                                name={i.name}
                              />
                            } />

                          </ListItem>
                        )
                      })
                    }
                  </List>
                  <Button variant="contained" sx={{ height: "30px" }}>Submit</Button>
                </Box> */}
              </Box>
            </Grid>
            <Divider sx={{ width: '2px', left: "50%", marginLeft: '-1px', backgroundColor: "#ccc" }} absolute orientation="vertical" />
            <Grid item sm={6} sx={{
              paddingLeft: '50px',
              [theme.breakpoints.up(1920)]: {
                paddingLeft: '54px'
              }
            }}>
              <Text color="gray.main" sxProp={{ fontSize: '16px', fontWeight: "bold", marginBottom: "6px", display: "block" }} variant="h5">
                {translate.formatMessage({ id: "clinical.note.optional" })}
              </Text>
              <textarea placeholder="Write your note here…" style={{ width: "478px", height: "132px", paddingTop: "12px", borderColor: "#999", borderRadius: "4px", textIndent: "12px" }}></textarea>
            </Grid>
          </Grid>
        </>
      </ShadowBox>
    </Grid>
    <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "30px" }}>
      <Button sx={{ marginRight: "30px" }}>Cancel</Button>
      <Button variant="contained">Next</Button>
    </Box>
  </Grid>;
};

export default PatientClinicalInformation;
