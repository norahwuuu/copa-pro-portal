import Btn from "@/components/Button/button";
import ImageView from "@/components/ImageView/imageView";
import RecordCard from "@/components/RecordCard/recordCard";
import Text from "@/components/Text/text";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { Grid } from "@mui/material";
import { FC } from "react"; import { useIntl } from "umi";
import { RecordsProps } from "./type";
import React from 'react';

const Records: FC<RecordsProps> = ({ isEdit = true, upper, lower, anterior, xRay, other }) => {
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
                      <ImageView testId="upper" src={upper} />
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
                      <ImageView testId="lower" src={lower} />
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <ImageView testId="anterior" src={anterior} sxProp={{ width: 190, height: 140 }} />
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
                  <ImageView testId="xRay" src={xRay} />
                </Grid>
                <Grid item>
                  <ImageView testId="other" src={other} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      }
      footChildren={
        <Btn
          isDisabled={!isEdit}
          onClickHandler={() => { console.log('click upload new record') }}
          variant="outlined"
          startIcon={<CloudUploadIcon />}
          btnLabel={translate.formatMessage({ id: "uploadRecords" })}
        ></Btn>
      }
    />
  );
};

export default Records;
