/**
 *   RecordCard: overview userinfo/record card container
 *   @param
 *   topChildren: Contents of the top section
 *   sxProp: card style
 *   footChildren: bottom content
 *   @return
 *
 */
import { Box, Container, Divider } from "@mui/material";
import { FC } from "react";
import { RecordCardProps } from "./type";

const boxStyle = {
  width: "100%",
  height: "100%",
  background: "#FFFFFF 0 % 0 % no - repeat padding - box",
  borderRadius: 4,
};
const footerStyle = {
  width: "100%",
  height: "25%",
  display: "flex",
  alignItems: "center",
};
const RecordCard: FC<RecordCardProps> = ({
  sxProp,
  footChildren,
  topChildren,
}) => {
  return (
    <Box sx={{ ...boxStyle, ...sxProp }}>
      <Container sx={{ width: "100%", height: "75%" }}>{topChildren}</Container>
      <Divider />
      <Container sx={{ ...footerStyle }}>{footChildren}</Container>
    </Box>
  );
};

export default RecordCard;
