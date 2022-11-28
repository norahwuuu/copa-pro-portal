import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";

export interface ImageViewProps {
  sxProp?: SxProps<Theme>;
  src?: string | undefined;
  testId?: string;
}
