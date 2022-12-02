import LinkText from "@/components/Button/linkText";
import ICons from "@/components/Icons/icons";
import Text from "@/components/Text/text";
import ShadowBox from "@/pages/Components/shadowBox";
import { OpenInNew } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Grid, Link, useTheme } from "@mui/material";
import { FC, useEffect, useState } from "react";
import Item from "./components/gridItem";
import Records from "./components/records";
import Btn from "@/components/Button/button";
import UserInfo from "./components/userInfo";
import testPng from "@/assets/images/test.jpg";
import testAnterior from '@/assets/images/test2.png';
import React from 'react';
import { AlertModelState, connect } from "umi";
import { PatientOverviewProps } from "./type";
import Treatment from "./components/treatment";
import Monitoring from "./components/monitoring";
import Order from "./components/order";




export const PatientOverview: FC<PatientOverviewProps> = ({ treatmentData, dentalData, orderData, setAlert }) => {
  const theme = useTheme();

  function popupFunc() {
    setAlert({
      isAlert: true,
      method: "ErrorIcon",
      btnList: [
        <Btn variant={"outlined"} btnLabel={"Got it!"} onClickHandler={() => setAlert({ isAlert: false })} />,
      ],
      content: <Grid container direction={'column'} component={"div"} >
        <Text variant="body1" color={"gray.main"}>
          {"This patient's treatment plan has been reviewed and some changes have been made."}
        </Text>
        <Text variant="body1" color={"gray.main"} sxProp={{ fontWeight: "bold", marginTop: '20px' }}>
          {"Comment from our reviewer:"}
        </Text>
        <Text variant="body1" color={"gray.main"} >
          {"We have changed …"}
        </Text>
        <Text variant="h6" color={"gray.main"} sxProp={{ marginTop: '20px' }}>
          {" Please review Tx plan and approve changes."}
        </Text>
        <Text variant="body1" color={"gray.main"} sxProp={{ marginTop: '20px' }}>
          {"If you have further questions, call 1-123-456-7890"}
        </Text>
      </Grid>,
      title: 'This case need your attention.'
    })
  }


  return (
    <>

      <Box
        sx={{
          margin: "auto",
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.up("xl")]: { width: "1560px", paddingTop: "71px" },
          [theme.breakpoints.down("xl")]: {
            width: "1184px",
            paddingTop: "23px",
          },
          height: "100%",
        }}
      >
        <Link
          variant={"h6"}
          sx={{
            fontWeight: "Bold",
            marginBottom: "13px",
            display: "flex",
            zIndex: "999",
          }}
          href="login"
          color={"gray.main"}
          underline="hover"
        >
          {
            <ArrowBackIcon
              sx={{
                fontSize: "17px",
                fontWeight: "inherit",
                alignSelf: "center",
                marginRight: "5px",
              }}
            />
          }
          {"Back"}
        </Link>
        <Box>
          <Grid
            sx={{ flexGrow: 1 }}
            container
            rowSpacing={{ sm: 3, md: 6, lg: 6, xl: 9 }}
            columnSpacing={{ sm: 3, md: 3, lg: 3, xl: 9 }}
          >
            <Grid item xs={6} xl={6}>
              <ShadowBox
                sxProp={{
                  [theme.breakpoints.up("xl")]: { height: "300px" },
                  [theme.breakpoints.down("xl")]: { height: "275px" },
                }}
              >
                <UserInfo patientName="Monkey D Luffy" avatar={testPng} address="East sea" email="luffy@123.com" mobile="luffy 123 456" birthDate="05/05/1994" achiveStatus={2} />
              </ShadowBox>
            </Grid>
            <Grid item xs={6} xl={6}>
              <ShadowBox
                sxProp={{
                  [theme.breakpoints.up("xl")]: { height: "300px" },
                  [theme.breakpoints.down("xl")]: { height: "275px" },
                }}
              >
                <Records anterior={testAnterior} isEdit={true} />
              </ShadowBox>
            </Grid>

            <Grid item xs={12} xl={12}>
              <ShadowBox>
                <Treatment stages={treatmentData.stages} retainerDate={treatmentData.retainerDate} endDate={treatmentData.endDate} />
              </ShadowBox>
            </Grid>
            <Grid item xs={6} xl={6}>
              <ShadowBox>
                <Monitoring status={dentalData.status} date={dentalData.date} />
              </ShadowBox>
            </Grid>
            <Grid item xs={6} xl={6} >
              <ShadowBox>
                <Order status={orderData.status} date={orderData.date} />
              </ShadowBox>
            </Grid>
          </Grid>
        </Box>
      </Box >

    </>
  );
};

export default connect(
  () => {
    return { treatmentData: { stages: 18, retainerDate: '12/14/2023', endDate: '12/14/2023' }, dentalData: { status: 'Tracking', date: '12/14/2023' }, orderData: { status: 'Delivered', date: '12/14/2023' } };
  },
  (dispatch) => ({
    setAlert: (payload: AlertModelState) => {
      dispatch({
        type: `alert/setAlert`,
        payload,
      });
    },
  })
)(PatientOverview);
