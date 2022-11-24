import LinkText from "@/components/Button/linkText";
import ICons from "@/components/Icons/icons";
import Text from "@/components/Text/text";
import ShadowBox from "@/pages/Components/shadowBox";
import { OpenInNew } from "@mui/icons-material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Box, Button, Grid, Link, useTheme } from "@mui/material";
import { FC, useState } from "react";
import AlertDialog from "./components/bootstrapDialogt";
import Item from "./components/gridItem";
import Records from "./components/records";
import Btn from "@/components/Button/button";
import UserInfo from "./components/userInfo";
import React from 'react';

const PatientOverview: FC = () => {
  const theme = useTheme();
  const [alertOpen, setAlertOpen] = useState(false)
  const DentalData = [
    {
      name: "Status",
      value: (
        <Box component={"div"} sx={{ display: "flex" }}>
          <Text
            variant={"body1"}
            color={"gray.main"}
            sxProp={{ fontWeight: "normal" }}
          >
            {"Tracking"}
          </Text>
          <ICons
            icon="ActiveIcon"
            sxProps={{ color: "secondary.main", marginLeft: "5px" }}
          />
        </Box>
      ),
    },
    {
      name: "Last monitoring date",
      value: (
        <Text
          variant={"body1"}
          color={"gray.main"}
          sxProp={{ fontWeight: "normal" }}
        >
          {"12/14/2023"}
        </Text>
      ),
    },

    {
      name: "More info",
      value: (
        <LinkText
          to={"/auth/login"}
          linkText={"View details"}
          icon={
            <OpenInNew
              sx={{
                fontSize: "inherit",
                fontWeight: "inherit",
                alignSelf: "center",
                marginLeft: "5px",
              }}
            />
          }
        />
      ),
    },
  ];
  const OrderData = [
    {
      name: "Status",
      value: (
        <Text
          variant={"body1"}
          color={"gray.main"}
          sxProp={{ fontWeight: "normal" }}
        >
          {"Delivered"}
        </Text>
      ),
    },
    {
      name: "date",
      value: (
        <Text
          variant={"body1"}
          color={"gray.main"}
          sxProp={{ fontWeight: "normal" }}
        >
          {"12/14/2023"}
        </Text>
      ),
    },

    {
      name: "Tracking #",
      value: (
        <Link
          variant={"body1"}
          sx={{ fontWeight: "900" }}
          href="#"
          color={"secondary.main"}
          underline="hover"
        >
          {"4567890"}
        </Link>
      ),
    },
  ];
  const TreatmentData = [
    {
      name: "Number of stages",
      value: (
        <Text
          variant={"body1"}
          color={"gray.main"}
          sxProp={{ fontWeight: "normal" }}
        >
          {"18"}
        </Text>
      ),
    },
    {
      name: "Retainer shipment date",
      value: (
        <Text
          variant={"body1"}
          color={"gray.main"}
          sxProp={{ fontWeight: "normal" }}
        >
          {"12/14/2023"}
        </Text>
      ),
    },

    {
      name: "End of treatment date",
      value: (
        <Text
          variant={"body1"}
          color={"gray.main"}
          sxProp={{ fontWeight: "normal" }}
        >
          {"12/14/2023"}
        </Text>
      ),
    },
    {
      name: ` `,
      value: (
        <Link
          variant={"body1"}
          sx={{ fontWeight: "900" }}
          href="#"
          color={"secondary.main"}
          underline="hover"
        >
          {"View treatment plan"}
        </Link>
      ),
    },
    {
      name: ` `,
      value: (
        <Link
          variant={"body1"}
          sx={{ fontWeight: "900" }}
          href="#"
          color={"secondary.main"}
          underline="hover"
        >
          {"View notes"}
        </Link>
      ),
    },
    {
      value: (
        <Button
          variant="outlined"
          startIcon={
            <ICons icon="PdfIcon" sxProps={{ width: "14px", height: "14px" }} />
          }
          sx={{ width: "260px", right: "30px" }}
        >
          IPR and attachment report
        </Button>
      ),
    },
  ];

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
                <UserInfo />
              </ShadowBox>
            </Grid>
            <Grid item xs={6} xl={6}>
              <ShadowBox
                sxProp={{
                  [theme.breakpoints.up("xl")]: { height: "300px" },
                  [theme.breakpoints.down("xl")]: { height: "275px" },
                }}
              >
                <Records />
              </ShadowBox>
            </Grid>
            <Grid item xs={12} xl={12}>
              <ShadowBox>
                <Item
                  title={"Treatment plan"}
                  dataSource={TreatmentData}
                  status={null}
                ></Item>
              </ShadowBox>
            </Grid>
            <Grid item xs={6} xl={6}>
              <ShadowBox>
                <Item
                  title={"Dental monitoring ®"}
                  dataSource={DentalData}
                ></Item>
              </ShadowBox>
            </Grid>
            <Grid item xs={6} xl={6}>
              <ShadowBox>
                <Item title={"Order tracking"} dataSource={OrderData}></Item>
              </ShadowBox>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <AlertDialog open={alertOpen} title={'This case need your attention.'} content={
        <Grid container direction={'column'} >
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
        </Grid>

      } btns={
        <Btn variant={"outlined"} btnLabel={"Got it!"} onClickHandler={() => setAlertOpen(false)} />
      } />
    </>
  );
};

export default PatientOverview;