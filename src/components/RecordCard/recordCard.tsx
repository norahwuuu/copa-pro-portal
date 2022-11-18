import { Box, Container, Divider } from "@mui/material";
import { FC } from "react";
import { RecordCardProps } from "./type";

const boxStyle = {
  width: 584,
  height: 275,
  background: "#FFFFFF 0 % 0 % no - repeat padding - box",
  boxShadow: "0px 3px 6px #00000029",
  border: "1px solid #EEEEEE",
  borderRadius: 4,
};
const footerStyle = {
  width: "100%",
  height: "70px",
  padding: "15px 20px",
};
const RecordCard: FC<RecordCardProps> = ({
  sxProp,
  footChildren,
  topChildren,
}) => {
  return (
    <Box sx={{ ...boxStyle, ...sxProp }}>
      <Container sx={{ width: "100%", height: "205px" }}>
        {topChildren}
      </Container>
      <Divider />
      <Container sx={{ ...footerStyle }}>{footChildren}</Container>
    </Box>
  );
};

export default RecordCard;
