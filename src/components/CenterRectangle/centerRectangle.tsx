import {
  Grid,
  Icon,
  IconClasses,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { CommonProps } from "@mui/material/OverridableComponent";
import React from "react";
import logoSvg from "../../assets/svgs/COLGATE_SMILE_LOGO_REV_RGB.svg";
import Text from "../Text/text";
import styles from "./centerRectangle.less";
export type centerRectanglePropsType = {
  width?: string | number;
  className?: string;
  children?: React.ReactNode;
  mainTitle?: string; //第一行标题
  subtitle?: string; //第二行标题
  LogoIconMt?: number; //LogoIconMt marginbottom
  sxProp?: SxProps<Theme>;
  headerInfo?: {
    show: boolean;
    type: "error";
    info: string;
  };
};
function LogoIcon(
  props: JSX.IntrinsicAttributes & { component: React.ElementType } & {
    baseClassName?: string | undefined;
    children?: React.ReactNode;
    classes?: Partial<IconClasses> | undefined;
    color?:
      | "error"
      | "info"
      | "success"
      | "inherit"
      | "disabled"
      | "action"
      | "primary"
      | "secondary"
      | "warning"
      | undefined;
    fontSize?: "small" | "inherit" | "medium" | "large" | undefined;
    sx?: SxProps<Theme> | undefined;
  } & CommonProps &
    Omit<
      any,
      | "children"
      | "color"
      | "fontSize"
      | keyof CommonProps
      | "sx"
      | "baseClassName"
    >
) {
  return (
    <Icon {...props}>
      <img src={logoSvg} />
    </Icon>
  );
}

/**
 * description：水平盒子
 *
 * param:width?:盒子宽度默认409px;className?: 样式;children?: 盒子内容;mainTitle?:一级标题;subtitle:二级标题;headerInfo：盒子顶部提示语，show:是否开启，type：类型,info：文字；
 *
 * return <CenterRectangle/>
 */

const CenterRectangle = ({
  width,
  className = "",
  children,
  subtitle,
  mainTitle,
  LogoIconMt = 25, //logoSvg marginbottom px
  headerInfo = {
    show: false,
    type: "error",
    info: "",
  },
  sxProp,
}: centerRectanglePropsType) => {
  return (
    <Grid
      sx={{
        zIndex: 1,
        backgroundColor: "primary.main",
        width: width || 409,
        borderBottomRightRadius: headerInfo.show ? 0 : 20,
        ...sxProp,
      }}
      className={`${styles.centerRectangle} ${className}`}
    >
      {headerInfo.show && (
        <Grid color="primary.main" className={styles.headerInfo}>
          <Grid className={styles.icon} />
          <Grid className={styles.text}>
            <Text variant={"body3"}>{headerInfo?.info}</Text>
          </Grid>
        </Grid>
      )}
      <Grid color="white" whiteSpace="pre-wrap">
        <LogoIcon
          sx={{
            display: "block",
            width: "250px",
            height: "30px",
            margin: `0 0 ${LogoIconMt}px 30px`,
          }}
        />
        {mainTitle && (
          <Typography variant="h3" align="center" fontWeight="200">
            {mainTitle}
          </Typography>
        )}
        {subtitle && (
          <Typography variant="body2" align="center" fontWeight="200">
            {subtitle}
          </Typography>
        )}
      </Grid>
      {children}
    </Grid>
  );
};
export default React.memo(CenterRectangle);
