import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";
import Typography from "@mui/material/Typography";
import { ElementType, FC, ReactNode } from "react";

interface TitleProps {
  variant: Variant | "h7" | "body1" | "body2" | "body3";
  color?: string | "inherit";
  children?: ReactNode;
  sxProp?: SxProps<Theme>;
  component?: ElementType;
}

const Text: FC<TitleProps> = ({
  variant,
  color,
  sxProp,
  component = "span",
  children,
}) => {
  return (
    <Typography
      component={component}
      variant={variant}
      color={color}
      sx={{ ...sxProp, opacity: 1 }}
    >
      {children}
    </Typography>
  );
};

Text.defaultProps = {
  sxProp: undefined,
  color: "inherit",
};

export default Text;
