import { SxProps, Theme } from "@mui/material";
import { ReactNode } from "react";
export interface RecordCardProps {
  topChildren?: ReactNode;
  sxProp?: SxProps<Theme>;
  footChildren?: ReactNode;
}
