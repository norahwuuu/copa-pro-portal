import { SxProps, Theme } from "@mui/material";
import { ElementType, ReactNode } from "react";
export interface RecordCardProps {
  topChildren?: ReactNode;
  sxProp?: SxProps<Theme>;
  component?: ElementType;
  footChildren?: ReactNode;
}
