import { Box } from "@mui/material";
import { FC } from "react";
import { ImageViewProps } from "./type";

const ImageView: FC<ImageViewProps> = ({ sxProp }) => {
  return <Box sx={{ border: "1px solid #ccc", ...sxProp }}>111</Box>;
};

export default ImageView;
