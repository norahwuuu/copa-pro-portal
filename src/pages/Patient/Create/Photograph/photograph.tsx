import React, { useEffect, useState } from "react";
import ShadowBox from "@/pages/Components/shadowBox";
import Text from "@/components/Text/text";

import { Box, Container, Grid } from "@mui/material";
import { FC } from "react";
import { RowCenterAlign } from "@/theme/themen.util";
import Btn from "@/components/Button/button";
import ImageBox from "./components/imageBox";
import { connect, useIntl } from "umi";
import { PatientRadiographProps, PatientRadiographState } from "./type";

export const PatientPhotograph: FC<PatientRadiographProps> = ({ patientRadiographState, updatePatientRadiograph }) => {
  const translate = useIntl();
  const [panorexImg, setPanorexImg] = useState<string | File>("");
  const [fullFaceImg, setFullfaceImg] = useState<string | File>("");
  const [retractedSmileImg, setRetractedSmileImg] = useState<string | File>("")
  const [panorexImgRequired, setPanorexImgRequired] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  //TODO: once API Ready we can implement 
  useEffect(() => {
    console.log("updated", patientRadiographState)
  }, [patientRadiographState])


  useEffect(() => {
    if (panorexImg) {
      setIsSubmitted(false)
      setPanorexImgRequired(false)
    }
    if (isSubmitted && !panorexImg) {
      setPanorexImgRequired(true)
    }
  }, [panorexImg])

  const goNext = () => {
    setIsSubmitted(true)
    if (!panorexImg) {
      setPanorexImgRequired(true)
    } else {
      const payload = {
        panorex: panorexImg
      } as PatientRadiographState

      if (fullFaceImg) {
        payload['full_face'] = fullFaceImg
      }
      if (retractedSmileImg) {
        payload['retracted_smile'] = retractedSmileImg
      }
      updatePatientRadiograph(payload)
    }
  }

  return (<Grid container>
    <ShadowBox sxProp={{
      flex: '1',
      p: 5,
      minHeight: "372px"
    }}>
      <Grid container spacing={3} >
        <Grid sm={6} md={6} item>
          <Text variant={"h6"} color={"gray.main"} sxProp={{ mb: 2 }}>{translate.formatMessage({ id: "radiograph.title" })}</Text>
          <Grid container sx={{ mt: 2 }}>
            <Container maxWidth={"md"} sx={{ paddingLeft: "0 !important" }}>
              <ImageBox title={"Panorex"} imgBoxSxProps={{
                objectFit: "contain",
                width: "560px",
                height: "240px",
              }} imgPath={panorexImg} updateImagePath={setPanorexImg} isImageRequired={panorexImgRequired} />
            </Container>
          </Grid>
        </Grid>
        <Grid sm={6} md={6} item>
          <Text variant={"h6"} color={"gray.main"} sxProp={{ mb: 2 }}>{translate.formatMessage({ id: "radiograph.photograph" })}</Text>
          <Grid container sx={{ mt: 2 }}>
            <Grid item sm={5} md={6} >
              <Container maxWidth={"sm"} sx={{ paddingLeft: "0 !important" }}>
                <ImageBox title={translate.formatMessage({ id: "radiograph.fullface" })} imgBoxSxProps={{
                  objectFit: "contain",
                  width: "178px",
                  height: "237px"
                }} imgPath={fullFaceImg} updateImagePath={setFullfaceImg} />
              </Container>
            </Grid>
            <Grid item sm={5}>
              <Container maxWidth={"sm"} sx={{ paddingLeft: "0 !important" }}>
                <ImageBox title={translate.formatMessage({ id: "radiograph.retractedsmile" })} imgBoxSxProps={{
                  objectFit: "contain",
                  width: "237px",
                  height: "178px"
                }} imgPath={retractedSmileImg} updateImagePath={setRetractedSmileImg} />
              </Container>
            </Grid>
          </Grid>
        </Grid>
      </Grid >

    </ShadowBox >

    <Grid item xs={12}>
      <Box sx={{ ...RowCenterAlign, mt: 6 }}>
        <Btn
          variant={"text"}
          btnLabel={"Cancel"}
          sxProp={{
            mr: 6
          }}
        />
        <Btn
          variant={"contained"}
          btnLabel={"Next"}
          onClickHandler={goNext}
        />
      </Box>
    </Grid>
  </Grid>

  )
};

const mapStateToProps = (state) => ({ PatientRadiographState: state.patientRadiographModel })


const mapDispatchToProps = (dispatch) => {
  return {
    updatePatientRadiograph: (payload) => dispatch({
      type: `patientRadiographModel/updatePatientRadiograph`,
      payload,
    })
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatientPhotograph);


