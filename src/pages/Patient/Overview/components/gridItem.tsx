import Text from "@/components/Text/text";
import { Box, Grid } from "@mui/material";
import { FC } from "react";
import {
  AdaptionLowerBox,
  AdaptionrBox,
  AdaptionUpperBox,
} from "./overview.style";

const Item: FC<ItemProps> = ({ title, dataSource }) => {
  return (
    <AdaptionrBox>
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
    </AdaptionrBox>
  );
};
export default Item;
