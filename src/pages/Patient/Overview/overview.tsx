import Text from "@/components/Text/text";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Grid } from "@mui/material";
import { FC } from "react";
import Records from "./components/records";
const PatientOverview: FC = () => {
  return (
    <>
      <Grid container sx={{ cursor: "pointer" }}>
        <ArrowBackIcon />
        <Text component={"p"} sxProp={{ lineHeight: "24px" }} variant="body1">
          Back
        </Text>
      </Grid>
      <Grid
        container
        direction="row"
        // justifyContent="space-around"
        // alignItems="center"
      >
        <Grid item>
          <Records />
        </Grid>
      </Grid>
    </>
  );
};

export default PatientOverview;
