import { Grid, Icon, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import logoSvg from "../../assets/svgs/COLGATE_SMILE_LOGO_REV_RGB.svg";
import Text from "../Text/text";
import styles from "./centerRectangle.less";


export type centerRectanglePropsType = {
  width?: string | number;
  className?: string;
  children?: React.ReactNode;
  mainTitle?: string; // First-line title
  subtitle?: string; // Second-line title
  LogoIconMt?: number; //LogoIconMt marginbottom
  sxProp?: SxProps<Theme>;
  headerInfo?: {
    show: boolean;
    type: "error";
    info: string;
  };
};

/**
 * description: Horizontal box
 *
 * param: width?: box width, default 409px; className?: styles; children?: box content; mainTitle?: primary title; subtitle: secondary title; headerInfo: banner at the top of the box, show: whether to display, type: type, info: text;
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
        <Icon
          sx={{
            display: "block",
            width: "250px",
            height: "30px",
            margin: `0 0 ${LogoIconMt}px 30px`,
          }}
        >
          <img src={logoSvg} />
        </Icon>

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
