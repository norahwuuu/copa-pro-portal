import React, { useState } from "react";
import ShadowBox from "@/pages/Components/shadowBox";
import Text from "@/components/Text/text";

import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { RowCenterAlign } from "@/theme/themen.util";
import Btn from "@/components/Button/button";
import ImageBox from "./components/imageBox";

const PatientPhotograph: FC = () => {
  const [panorexImg, setPanorexImg] = useState<string | File>("");
  const [fullFaceImg, setFullfaceImg] = useState<string | File>("");
  const [retractedSmileImg, setRetractedSmileImg] = useState<string | File>("")
  const [panorexImgRequired, setPanorexImgRequired] = useState<boolean>(false);

  const goNext = () => {
    if (!panorexImg) {
      setPanorexImgRequired(true)
    }
  }

  return (<Grid container>
    <ShadowBox sxProp={{
      flex: '1',
      p: 5,
      minHeight: "372px"
    }}>
      <Grid container >
        <Grid sm={12} lg={6} item>
          <Text variant={"h6"} color={"gray.main"} sxProp={{ mb: 2 }}>{"Radiograph *"}</Text>
          <Grid container width={"sm"} sx={{ mt: 2 }}>
            <ImageBox title={"Panorex"} imgBoxSxProps={{
              width: "560px",
              height: "240px"
            }} imgPath={panorexImg} updateImagePath={setPanorexImg} isImageRequired={panorexImgRequired} />
          </Grid>
        </Grid>
        <Grid sm={12} lg={6} item>
          <Text variant={"h6"} color={"gray.main"} sxProp={{ mb: 2 }}>{"Photographs (optional)"}</Text>
          <Grid container sx={{ mt: 2 }}>
            <Grid item sm={6} >
              <ImageBox title={"Full face"} imgBoxSxProps={{
                width: "178px",
                height: "237px"
              }} imgPath={fullFaceImg} updateImagePath={setFullfaceImg} />
            </Grid>
            <Grid item sm={6}>
              <ImageBox title={"Retracted smile"} imgBoxSxProps={{
                width: "237px",
                height: "178px"
              }} imgPath={retractedSmileImg} updateImagePath={setRetractedSmileImg} />
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

export default PatientPhotograph;
