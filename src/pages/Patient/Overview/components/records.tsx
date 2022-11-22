import testPng from "@/assets/images/login1680.png";
import Btn from "@/components/Button/button";
import ImageView from "@/components/ImageView/imageView";
import RecordCard from "@/components/RecordCard/recordCard";
import Text from "@/components/Text/text";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Grid } from "@mui/material";
import { FC } from "react";
import { useIntl } from "umi";
const Records: FC = () => {
  const translate = useIntl();
  return (
    <RecordCard
      topChildren={
        <>
          <Text
            component={"p"}
            variant="h7"
            sxProp={{
              fontSize: "18px",
              fontWeight: "bold ",
              color: "gray.main",
              paddingTop: "10px",
              marginBottom: "10px",
            }}
          >
            Records
          </Text>
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ paddingRight: "20px" }}
          >
            <Grid item>
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Text
                        variant="body1"
                        component={"div"}
                        sxProp={{
                          fontSize: "14px",
                          width: "42px",
                          height: "65px",
                          textAlign: "center",
                          lineHeight: "65px",
                          marginRight: "20px",
                          color: "gray.main",
                        }}
                      >
                        Upper
                      </Text>
                    </Grid>
                    <Grid item>
                      <ImageView src={testPng} />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                  >
                    <Grid item>
                      <Text
                        variant="body1"
                        component={"div"}
                        sxProp={{
                          fontSize: "14px",
                          width: "42px",
                          height: "65px",
                          textAlign: "center",
                          lineHeight: "65px",
                          marginRight: "20px",
                          color: "gray.main",
                        }}
                      >
                        Lower
                      </Text>
                    </Grid>
                    <Grid item>
                      <ImageView />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <ImageView sxProp={{ width: 190, height: 140 }} />
            </Grid>
            <Grid item>
              <Grid
                container
                spacing={2}
                direction="column"
                justifyContent="space-between"
                alignItems="center"
              >
                <Grid item>
                  <ImageView />
                </Grid>
                <Grid item>
                  <ImageView />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      }
      footChildren={
        <Btn
          isDisabled
          variant="shade"
          startIcon={<CloudUploadIcon />}
          btnLabel={translate.formatMessage({ id: "uploadRecords" })}
        ></Btn>
      }
    />
  );
};

export default Records;
