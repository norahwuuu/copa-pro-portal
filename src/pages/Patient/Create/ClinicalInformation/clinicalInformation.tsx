import React, { FC, useEffect, useState } from "react";
import { Box, Grid, useTheme, Divider, Button, List, ListItem, Checkbox, FormControlLabel, SvgIcon, Radio, RadioGroup, DialogTitle, DialogContent, DialogContentText } from "@mui/material";
import { useIntl, connect } from 'umi';
import ShadowBox from "@/pages/Components/shadowBox";
import Text from "@/components/Text/text";
import { conditions, monthBtns, YNbtns } from "./column";
import { ReactComponent as unchecked } from '@/assets/svgs/checkBox-unchecked.svg';
import { ReactComponent as checked } from '@/assets/svgs/checkBox-checked.svg';
import { ReactComponent as radioUnchecked } from '@/assets/svgs/radio-unchecked.svg';
import { ReactComponent as radioError } from '@/assets/svgs/radio-error.svg';
import { ReactComponent as radioChecked } from '@/assets/svgs/radioChecked.svg';
import styles from './clinicalInformation.less';
import { AlertModelState } from "@/pages/Patient/model";
import { BootstrapDialog } from "@/components/Alert/alert";
import ICons from "@/components/Icons/icons";
import { ClinicalTypes } from "./type";

export const PatientClinicalInformation: FC<ClinicalTypes> = ({ setAlert }) => {
  const translate = useIntl();
  const theme = useTheme();
  // should show Select an option to continue error tips up of No and Yes button(显示没有选中Yes或者No按钮错误开关)
  const [isOptionError, setIsOptionError] = useState<boolean>(false);
  // should show Periodontal model error（显示Periodontal弹窗的错误开关）
  const [isPeriodontalError, setIsPeriodontalError] = useState<boolean>(false);

  // check Yes or No value （选中的是Yes\No）
  const [checkYN, setCheckYN] = useState<string>('Default');//Default/No/Yes/Error
  // check 0-3\3-6\6+moths value( 选中时间月份)
  const [checkMonth, setCheckMonth] = useState<string>('Default');//Default/0-3/3-6/6+
  // chose checkbox applies (选中的checkBox数组)
  const [checkBoxArr, setCheckArr] = useState<Array<string>>([]);
  // Periodontal Model show boolean（显示选中Periodontal的弹窗开关）
  const [isPeriodontalShow, setIsPeriodontalShow] = useState<boolean>(false);
  // chose temporary or permanent radio（选中的radio---   temporary/permanent）
  const [radioVal, setRadioVal] = useState<string>('Default');//Default/temporary/permanent
  // check applies Implants/Bridges/Primary tooth will show (选中前三个 Implants/Bridges/Primary 的弹窗调用方法)
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
        <Button sx={{ height: "40px" }} key={'ok'} variant={"outlined"} onClick={() => setAlert({ isAlert: false })}>{translate.formatMessage({ id: "clinical.btn.okSave" })}</Button>,
        < Button sx={{ height: "40px" }} key={'cancel'} variant={"text"} onClick={() => setAlert({ isAlert: false })}>{translate.formatMessage({ id: "btnCancel" })}</Button>,
      ],

    })
  }
  // check Excessive will show (选中Excessive 的弹窗调用方法)
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
        <Button sx={{ height: "40px" }} key={'ok'} variant={"outlined"} onClick={() => setAlert({ isAlert: false })}>{translate.formatMessage({ id: "clinical.btn.okSave" })}</Button>,
        < Button sx={{ height: "40px" }} key={'cancel'} variant={"text"} onClick={() => setAlert({ isAlert: false })}>{translate.formatMessage({ id: "btnCancel" })}</Button>,
      ],

    })
  }
  // click No or Yes button event （点击yes、no的方法）
  const clickNoOrYes = (type: string) => {
    if (isOptionError) {
      setIsOptionError(false);
    }
    if (checkYN === type) {
      setCheckYN('Default');
    } else {
      setCheckYN(type)
    }
  }

  // checkBox event （选中checkbox的方法）
  const handleCheckBox = (name: string) => {
    const arr = checkBoxArr.concat();
    if (arr.includes(name)) {
      arr.splice(arr.findIndex(item => item === name), 1);
    } else {
      arr.push(name);
    }
    setCheckArr(arr);
  }
  const changeRadio = (v: string) => {
    setRadioVal(v);
    setIsPeriodontalError(false);
  }
  // click submit button of applies event （点击applies checkbox的submit按钮的方法）
  const submitApplies = () => {
    if (checkBoxArr.length) {
      if (checkBoxArr.includes('Implants') || checkBoxArr.includes('Bridges') || checkBoxArr.includes('Primary tooth (teeth)')) {
        IBPappliesModel();
      } else if (checkBoxArr.includes('Periodontal disease')) {
        setIsPeriodontalShow(true);
      } else if (checkBoxArr.includes('Excessive calculus')) {
        ExcessiveModel();
      }
    } else {
      setCheckYN("Default");
      setIsOptionError(true);
    }
  }
  // click months button event （点击月份时间的方法）
  const clickMonth = (val: string) => {
    if (isPeriodontalError) {
      setIsPeriodontalError(false);
    }
    if (checkMonth === val) {
      setCheckMonth('Default');
    } else {
      setCheckMonth(val);
    }
  }
  // click Ok,save button of Peridontal （点击Peridontal 弹窗里面的Ok,save方法）
  const okPeridontalClick = () => {
    if (radioVal === 'Default') {
      setIsPeriodontalError(true);
    } else if (radioVal === 'temporary') {
      if (checkMonth === "Default") {
        setIsPeriodontalError(true);
      } else {
        setIsPeriodontalShow(false)
      }
    } else {

      setIsPeriodontalShow(false);
    }
  }
  //click close button of Peridontal （点击Peridontal 弹窗里面的cancel方法）
  const cancelPeridontalClick = () => {
    if (radioVal !== "Default") {
      setRadioVal('Default');
    }
    if (checkMonth !== "Default") {
      setCheckMonth('Default');
    }
    if (isPeriodontalError) {
      setIsPeriodontalError(false);
    }
    setIsPeriodontalShow(false);
  }
  // click next button （点击next按钮）
  const nextClick = () => {
    if (checkYN === "Default") {
      setIsOptionError(true);
    } else if (checkYN === "Yes") {
      submitApplies();
    }
  }
  useEffect(() => {
    // IBPappliesModel();
    // ExcessiveModel();
  }, []);

  return (
    <>
      <Grid container sx={{ width: '100%' }}>
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
                  <Text data-testid="leftTitle" color="gray.main" sxProp={{ fontSize: '16px', fontWeight: "bold", marginBottom: "20px", display: "block" }} variant="h5">
                    {translate.formatMessage({ id: "clinical.leftTitle" })}
                  </Text>
                  <Text data-testid="optionError" color="error.main" sxProp={{ fontSize: '14px', fontWeight: "normal", display: isOptionError ? "block" : "none", marginTop: "-10px" }} variant="body1">
                    {translate.formatMessage({ id: "clinical.selectYN.error" })}
                  </Text>
                  <Box sx={{ width: '100%', marginBottom: "25px" }}>
                    <Text color="gray.main" sxProp={{ fontSize: '14px' }} variant="h5">
                      {translate.formatMessage({ id: "clinical.selectYN.title" })}
                    </Text>
                    {
                      YNbtns.map((i, j) => {
                        return (
                          <Button variant="shade"
                            key={i.name}
                            sx={{
                              margin: j === 0 ? "0 30px" : "",
                              color: isOptionError ? "gray.darken4" : (checkYN === i.name ? "common.white" : "gray.main"),
                              borderRadius: '4px',
                              fontSize: "14px",
                              padding: "4px 7px",
                              minWidth: "auto",
                              border: '1px solid',
                              borderColor: isOptionError ? "error.main" : (checkYN === i.name ? "secondary.main" : "gray.lighten2"),
                              backgroundColor: isOptionError ? "common.white" : (checkYN === i.name ? "secondary.main" : "gray.lighten1"),
                              "&:hover": {
                                borderColor: checkYN === i.name ? "secondary.main" : "gray.darken",
                                backgroundColor: checkYN === i.name ? "secondary.main" : "",
                                color: checkYN === i.name ? "common.white" : ""
                              },
                            }}
                            onClick={() => { clickNoOrYes(i.name) }}
                          >{i.label}</Button>
                        )
                      })
                    }
                  </Box>
                  <Box sx={{ width: "100%", paddingLeft: '8px' }}>
                    {
                      checkYN !== 'Yes' ? (
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
                      ) : (
                        <Box sx={{ width: "100%" }}>
                          <Text data-testid="selectTitle" variant="body1" sxProp={{ display: "block", color: "gray.main", fontSize: "14px", marginBottom: "10px" }}>{translate.formatMessage({ id: "clinical.select.title" })}</Text>
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
                                        marginLeft: "4px",
                                        userSelect: "none"
                                      }
                                    }} label={i.name} control={
                                      <Checkbox
                                        onChange={() => { handleCheckBox(i.name) }}
                                        checked={checkBoxArr.includes(i.name)}
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
                          <Button onClick={() => { submitApplies() }} variant="contained" sx={{ height: "30px" }}>Submit</Button>
                        </Box>
                      )
                    }

                  </Box>
                </Grid>
                <Divider sx={{ width: '2px', left: "50%", marginLeft: '-1px', backgroundColor: "#ccc" }} absolute orientation="vertical" />
                <Grid item sm={6} sx={{
                  paddingLeft: '50px',
                  [theme.breakpoints.up(1920)]: {
                    paddingLeft: '54px'
                  }
                }}>
                  <Text color="gray.main" data-testid={'noteOptional'} sxProp={{ fontSize: '16px', fontWeight: "bold", marginBottom: "6px", display: "block" }} variant="h5">
                    {translate.formatMessage({ id: "clinical.note.optional" })}
                  </Text>
                  <textarea data-testid="leftArea" className={styles.area} placeholder="Write your note here…"></textarea>
                </Grid>
              </Grid>
            </>
          </ShadowBox>
        </Grid>
        <Box sx={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "30px" }}>
          <Button sx={{ marginRight: "30px" }}>Cancel</Button>
          <Button onClick={() => { nextClick() }} variant="contained">Next</Button>
        </Box>

      </Grid>
      <BootstrapDialog
        open={isPeriodontalShow}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ paddingLeft: '30px', }} id="alert-dialog-title" color={'gray.main'}>
          <ICons icon={'ErrorIcon'}
            sxProps={{ width: '30px', height: '25px', marginRight: '11px' }} />
          <Text variant={'h6'} color={'primary'} sxProp={{ fontWeight: 'normal', display: "block", color: 'gray.main', fontSize: '14px' }}>
            {translate.formatMessage({ id: "clinical.pop.sorryLongTitle" })}
          </Text>

        </DialogTitle>
        <DialogContent sx={{ marginTop: '10px!important' }} >
          <DialogContentText id="alert-dialog-description" component={"div"} color={'gray.main'}>
            <Box sx={{ width: "100%" }}>
              <Box sx={{ widtt: "100%", paddingLeft: "40px" }}>
                <Text color="error.main" data-testid="periodontalError" sxProp={{ fontSize: '14px', fontWeight: "normal", display: isPeriodontalError ? "block" : "none" }} variant="body1">
                  {translate.formatMessage({ id: "clinical.selectYN.error" })}
                </Text>
                <Text data-testid="radioTitle" color="gray.main" sxProp={{ fontSize: '14px', height: "14px", lineHeight: "14px", display: "block", marginBottom: "20px" }} variant="h5">
                  {translate.formatMessage({ id: "clinical.choseRadio.title" })}
                </Text>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    data-testid="temporary"
                    sx={{
                      color: isPeriodontalError ? "error.main" : "gray.main",
                      fontSize: "14px",
                      marginBottom: "20px",
                      alignItems: "start",
                    }}
                    value="temporary"
                    control={
                      <Radio
                        icon={<SvgIcon component={isPeriodontalError ? radioError : radioUnchecked} />}
                        checkedIcon={<SvgIcon component={radioChecked} />}
                        onChange={(v) => {
                          changeRadio(v.target.value)
                        }}
                        sx={{
                          "&.MuiButtonBase-root": {
                            padding: "0",
                            margin: "0 9px"
                          }
                        }}
                        size="small"
                        color="secondary"
                      />}
                    label={translate.formatMessage({ id: "clinical.radio.temporary" })}
                  />


                  <Box data-testid="monthBox" sx={{ width: "100%", marginBottom: "20px", marginTop: "-10px", display: radioVal === "temporary" ? "block" : "none" }}>
                    {
                      monthBtns.map((i, j) => {
                        return (
                          <Button key={i.name} variant="shade" sx={{
                            margin: j === 1 ? "0 15px" : "",
                            width: "94px",
                            height: "28px",
                            borderRadius: '4px',
                            fontSize: "14px",
                            padding: "0",
                            minWidth: "auto",
                            border: '1px solid',
                            color: isPeriodontalError ? "gray.darken4" : (checkMonth === i.name ? "common.white" : "gray.main"),
                            borderColor: isPeriodontalError ? "error.main" : (checkMonth === i.name ? "secondary.main" : "gray.lighten2"),
                            backgroundColor: isPeriodontalError ? "common.white" : (checkMonth === i.name ? "secondary.main" : "gray.lighten1"),
                            "&:hover": {
                              borderColor: checkMonth === i.name ? "secondary.main" : "gray.darken",
                              backgroundColor: checkMonth === i.name ? "secondary.main" : "",
                              color: checkMonth === i.name ? "common.white" : ""
                            },

                          }}
                            onClick={() => { clickMonth(i.name) }}
                          >{i.label}</Button>
                        )
                      })
                    }
                  </Box>
                  <FormControlLabel
                    data-testid="permanent"
                    sx={{
                      color: isPeriodontalError ? "error.main" : "gray.main",
                      fontSize: "14px",
                      marginBottom: "20px",
                      alignItems: "start"
                    }}
                    value="permanent"
                    control={
                      <Radio
                        icon={<SvgIcon component={isPeriodontalError ? radioError : radioUnchecked} />}
                        checkedIcon={<SvgIcon component={radioChecked} />}
                        onChange={(v) => {
                          changeRadio(v.target.value)
                        }}
                        sx={{
                          "&.MuiButtonBase-root":
                          {
                            padding: "0",
                            margin: "0 9px"
                          }
                        }}
                        size="small"
                        color="secondary"
                      />}
                    label={translate.formatMessage({ id: "clinical.radio.permanent" })}
                  />
                </RadioGroup>
              </Box>
              <Text data-testid="perNoteTitle" color="gray.main" sxProp={{ fontSize: '16px', fontWeight: "bold", marginBottom: "6px", display: "block" }} variant="h5">
                {translate.formatMessage({ id: "clinical.note.optional" })}
              </Text>
              <textarea data-testid="perArea" style={{ width: "390px", height: "102px" }} className={styles.area} placeholder="Write your note here…"></textarea>
            </Box>
          </DialogContentText>
        </DialogContent>
        <Grid textAlign={'center'} marginTop={'31px'} container direction={'column'} spacing={2}>
          <Grid item>
            <Button data-testid="periodontalOk" sx={{ height: "40px" }} key={'ok'} variant={"outlined"} onClick={() => okPeridontalClick()}>{translate.formatMessage({ id: "clinical.btn.okSave" })}</Button>
          </Grid>
          <Grid item >
            < Button sx={{ height: "40px" }} key={'cancel'} variant={"text"} onClick={() => cancelPeridontalClick()}>{translate.formatMessage({ id: "btnCancel" })}</Button>
          </Grid>
        </Grid>
      </BootstrapDialog>
    </>
  )
    ;
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
