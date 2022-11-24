import RecordCard from "@/components/RecordCard/recordCard";
import Text from "@/components/Text/text";
import EditIcon from "@mui/icons-material/Edit";
import NoPhotographyOutlinedIcon from "@mui/icons-material/NoPhotographyOutlined";
import { Box, Button, Container, Grid, SvgIcon } from "@mui/material";
import { FC } from "react";
import { useIntl } from "umi";
import InfoItem from "./infoItem";
import React from 'react';

const UserInfo: FC = () => {
  const translate = useIntl();
  const birthData = [
    {
      name: "Date of birth",
      value: (
        <Text
          variant={"body1"}
          color={"gray.main"}
          sxProp={{ fontWeight: "normal" }}
        >
          {"10/14/1986"}
        </Text>
      ),
    },
  ];
  const EmailData = [
    {
      name: "Email",
      value: (
        <Text
          variant={"body1"}
          color={"gray.main"}
          sxProp={{ fontWeight: "normal" }}
        >
          {"tom@gmail.com"}
        </Text>
      ),
    },
  ];
  const MobileData = [
    {
      name: "Mobile",
      value: (
        <Text
          variant={"body1"}
          color={"gray.main"}
          sxProp={{ fontWeight: "normal" }}
        >
          {"(514) 345-6789"}
        </Text>
      ),
    },
  ];
  const AddressData = [
    {
      name: "Address",
      value: (
        <Text
          variant={"body1"}
          color={"gray.main"}
          sxProp={{ fontWeight: "normal" }}
        >
          {"123, ABC Street, Cityville, AB 12390 United States"}
        </Text>
      ),
    },
  ];
  return (
    <RecordCard
      topChildren={
        <>
          <Container sx={{ position: "relative", height: "25px" }}>
            <Box
              fontWeight={"300"}
              sx={{
                position: "absolute",
                lineHeight: "25px",
                right: "-15px",
                top: "0",
                height: "100%",
                padding: "0 10px",
                fontSize: "14px",
                color: "secondary.main",
                border: "1px dashed",
                borderColor: "secondary.main",
              }}
            >
              {translate.formatMessage({ id: "userInfo.Prospective" })}
            </Box>
            {/* <Box fontWeight={'300'} fontSize={'14px'} sx={{ position: "absolute", color: "#fff", lineHeight: "25px", right: "-15px", top: "0", height: "100%", padding: "0 10px", fontSize: "14px", backgroundColor: "gray.darken" }} color={"secondary.main"}>{translate.formatMessage({ id: "userInfo.archived" })}</Box> */}
          </Container>
          <Text
            component={"p"}
            variant="h7"
            sxProp={{
              fontSize: "18px",
              fontWeight: "bold ",
              color: "primary.main",
              marginBottom: "10px",
              paddingTop: "10px",
            }}
          >
            Julianne Garcia
          </Text>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            // alignItems="center"
            sx={{ paddingRight: "20px" }}
          >
            <Grid item sm={4}>
              <Box
                title='avatar'
                sx={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  border: "1px solid #ccc",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                {/* <Avatar variant="circular" sx={{ width: "100px", height: "100px" }} src={testPng} /> */}
                <NoPhotographyOutlinedIcon
                  sx={{ fontSize: "40px", color: "gray.darken" }}
                />
              </Box>
            </Grid>
            <Grid item sm={4}>
              <InfoItem dataSource={birthData} />
              <InfoItem dataSource={EmailData} />
            </Grid>
            <Grid item sm={4}>
              <InfoItem dataSource={MobileData} />
              <InfoItem dataSource={AddressData} />
            </Grid>
          </Grid>
        </>
      }
      footChildren={
        <>
          <Button
            sx={{ marginRight: "30px" }}
            variant="outlined"
            startIcon={<EditIcon sx={{ width: "18px", height: "18px" }} />}
          >
            {translate.formatMessage({ id: "userInfo.edit" })}
          </Button>
          <Button
            id="archive"
            sx={{ fontSize: "16px" }}
            variant="outlined"
            startIcon={
              <SvgIcon
                sx={{ width: "14px", height: "14px" }}
                id="Icon_material-archive"
                data-name="Icon material-archive"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 18 18"
              >
                <path
                  d="M22.04,6.73,20.65,5.05A1.451,1.451,0,0,0,19.5,4.5H7.5a1.486,1.486,0,0,0-1.16.55L4.96,6.73A1.958,1.958,0,0,0,4.5,8V20.5a2.006,2.006,0,0,0,2,2h14a2.006,2.006,0,0,0,2-2V8a1.958,1.958,0,0,0-.46-1.27ZM13.5,19,8,13.5h3.5v-2h4v2H19ZM6.62,6.5l.81-1h12l.94,1Z"
                  transform="translate(-4.5 -4.5)"
                />
              </SvgIcon>
            }
          >
            {translate.formatMessage({ id: "userInfo.Unarchive" })}
          </Button>
        </>
      }
    />
  );
};

export default UserInfo;
