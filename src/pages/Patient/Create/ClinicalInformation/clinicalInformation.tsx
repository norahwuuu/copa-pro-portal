import React, { FC, useEffect } from "react";
import { Box, Grid, useTheme, Divider, Button, List, ListItem, Checkbox, FormControlLabel, SvgIcon } from "@mui/material";
import { useIntl, connect } from 'umi';
import ShadowBox from "@/pages/Components/shadowBox";
import Text from "@/components/Text/text";
import { conditions } from "./column";
import { ReactComponent as unchecked } from '@/assets/svgs/checkBox-unchecked.svg';
import { ReactComponent as checked } from '@/assets/svgs/checkBox-checked.svg';
import styles from './clinicalInformation.less';
import { AlertModelState } from "@/pages/Patient/model";
export const PatientClinicalInformation: FC = ({ setAlert }) => {
  const translate = useIntl();
  const theme = useTheme();
  // check applies Implants/Bridges/Primary tooth will show
  const IBPappliesModel = () => {
    setAlert({
      isAlert: true,
      method: "ErrorIcon",
      title: {
        text: translate.formatMessage({ id: "clinical.pop.sorryTitle" }),
        sxProps: { color: 'gray.main', fontSize: '14px' },
      },
      content: <Box sx={{ width: "100%" }}>
        <Text color="gray.main" sxProp={{ fontSize: '16px', fontWeight: "bold", marginBottom: "6px", display: "block" }} variant="h5">
          {translate.formatMessage({ id: "clinical.note.optional" })}
        </Text>
        <textarea style={{ width: "390px", height: "102px" }} className={styles.area} placeholder="Write your note here…"></textarea>
      </Box>,
      btnList: [
        <Button sx={{ height: "40px" }} key={'ok'} variant={"outlined"} onClick={() => setAlert({ isAlert: false })}>{`Ok,save and close`}</Button>,
        < Button sx={{ height: "40px" }} key={'cancel'} variant={"text"} onClick={() => setAlert({ isAlert: false })}>{`Cancel`}</Button>,
      ],

    })
  }
  // check Excessive will show
  const ExcessiveModel = () => {
    setAlert({
      isAlert: true,
      method: "ErrorIcon",
      title: {
        text: translate.formatMessage({ id: "clinical.pop.sorryTitle" }),
        sxProps: { color: 'gray.main', fontSize: '14px' },
        subText: translate.formatMessage({ id: "clinical.pop.clean" })
      },
      content: <Box sx={{ width: "100%" }}>
        <Text color="gray.main" sxProp={{ fontSize: '16px', fontWeight: "bold", marginBottom: "6px", display: "block" }} variant="h5">
          {translate.formatMessage({ id: "clinical.note.optional" })}
        </Text>
        <textarea style={{ width: "390px", height: "102px" }} className={styles.area} placeholder="Write your note here…"></textarea>
      </Box>,
      btnList: [
        <Button sx={{ height: "40px" }} key={'ok'} variant={"outlined"} onClick={() => setAlert({ isAlert: false })}>{`Ok,save and close`}</Button>,
        < Button sx={{ height: "40px" }} key={'cancel'} variant={"text"} onClick={() => setAlert({ isAlert: false })}>{`Cancel`}</Button>,
      ],

    })
  }
  useEffect(() => {
    // IBPappliesModel();
    // ExcessiveModel()
  }, [])
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
                            alignItems: "center",
                          }} key={i.name}>
                            <FormControlLabel sx={{
                              marginLeft: "2px",
                              marginTop: "2px",
                              marginRight: "0",
                              height: "18px",
                              '& .MuiCheckbox-root': {
                                width: "18px",
                                height: "18px"
                              },
                              "& .MuiTypography-root": {
                                marginTop: "-5px",
                                marginLeft: "4px"
                              }
                            }} label={i.name} control={
                              <Checkbox
                                sx={{
                                  padding: "0",

                                }}
                                icon={
                                  <SvgIcon sx={{ width: "24px", height: "24px" }} component={unchecked} />

                                }
                                checkedIcon={
                                  <SvgIcon sx={{ width: "24px", height: "24px" }} component={checked} />

                                }

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
              <textarea className={styles.area} placeholder="Write your note here…"></textarea>
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

export default connect(
  (store) => {
    return store
  },
  (dispatch) => ({
    setAlert: (payload: AlertModelState) => {
      dispatch({
        type: `alert/setAlert`,
        payload,
      });
    },
  })
)(PatientClinicalInformation);
