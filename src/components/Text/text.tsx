import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import Typography from "@mui/material/Typography";
import { ElementType, FC, ReactNode } from "react";
import * as React from 'react';

interface TitleProps {
  variant: Variant | "h7" | "body1" | "body2" | "body3";
  color?: string | "inherit";
  children?: ReactNode;
  sxProp?: SxProps<Theme>;
  noWrap?: boolean;
  component?: ElementType;
}

const Text: FC<TitleProps> = ({
  variant,
  color,
  sxProp,
  noWrap,
  component = "span",
  children,
}) => {
  return (
    <Typography
      component={component}
      variant={variant}
      color={color}
      noWrap={noWrap}
      sx={{ ...sxProp, opacity: 1 }}
    >
      {children}
    </Typography>
  );
};

Text.defaultProps = {
  sxProp: undefined,
  color: "inherit",
  noWrap: false,
};

export default Text;
