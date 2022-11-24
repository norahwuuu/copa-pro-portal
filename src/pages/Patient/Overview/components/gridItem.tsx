import * as React from "react";

import Text from "@/components/Text/text";
import { Box, Grid, useTheme } from "@mui/material";
import { FC } from "react";
import {
  AdaptionLowerBox,
  AdaptionBox,
  AdaptionUpperBox,
} from "./overview.style";

const Item: FC<ItemProps> = ({ title, dataSource, status }) => {
  const theme = useTheme();

  const statusColumn = {
    temp: { text: 'Temporary health issue', color: theme.palette.primary.darken },
    inProgress: { text: 'Awaiting patient payment', color: theme.palette.secondary.main },
    review: { text: 'Needs doctor review', color: `${theme.palette.warning.main}` }
  }
  return (
    <AdaptionBox sx={{ position: 'relative' }}>
      {status && status !== 'review' &&
        <Box sx={{ textAlign: 'right', position: 'absolute', right: 0, top: '4px' }}>
          <Text variant="body1" sxProp={{
            color: statusColumn[status].color,
            border: `1px solid ${statusColumn[status].color}`,
            padding: '4px 10px',
            borderRadius: "4px",
          }}> {statusColumn[status].text}</Text>
        </Box>}
      {status && status === 'review' &&
        < Box sx={{ textAlign: 'right', position: 'absolute', right: 0, top: '4px' }}>
          <Text variant="body1" sxProp={{
            color: 'white',
            backgroundColor: `${statusColumn[status].color}`,
            padding: '4px 10px',
            borderRadius: "4px",
          }}> {statusColumn[status].text}</Text>
        </Box>}
      <AdaptionUpperBox
        borderColor={"gray.lighten2"}
        sx={{ borderBottomStyle: "solid", borderBottomWidth: "1px" }}
      >
        <Text
          variant={"h4"}
          color={"gray.main"}
          sxProp={{ display: "inline-block", marginBottom: "8px" }}
        >
          {title}
        </Text>
      </AdaptionUpperBox>
      <AdaptionLowerBox>
        <Grid container spacing={2}>
          {dataSource.map(
            (
              item: { name?: string; value: React.ReactNode },
              index: number
            ) => (
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
      </AdaptionLowerBox>
    </AdaptionBox >
  );
};
export default Item;
