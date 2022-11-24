import Text from "@/components/Text/text";
import { Box, Grid } from "@mui/material";
import { FC } from "react";
import { InfoLowerBox } from "./overview.style";
import React from 'react';

const InfoItem: FC<InfoItemProps> = ({ dataSource }) => {
  return (
    <InfoLowerBox sx={{ marginBottom: "20px" }}>
      <Grid container spacing={2}>
        {dataSource.map(
          (item: { name?: string; value: React.ReactNode }, index: number) => (
            <Grid item md xs key={index + (item?.name || "")}>
              <Box sx={{ flexGrow: 1 }}>
                {item.name && (
                  <Text
                    variant={"body1"}
                    color={"gray.main"}
                    sxProp={{
                      display: "inline-block",
                      height: "18px",
                      marginBottom: "5px",
                      fontWeight: "bold",
                    }}
                  >
                    {item.name}
                  </Text>
                )}
                <Box>{item.value}</Box>
              </Box>
            </Grid>
          )
        )}
      </Grid>
    </InfoLowerBox>
  );
};
export default InfoItem;
