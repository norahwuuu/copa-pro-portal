import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "./centerRectangle.less";
export type centerRectanglePropsType = {
  width?: string | number;
  className?: string;
  children?: React.ReactNode;
  mainTitle?: string; //第一行标题
  subtitle?: string; //第二行标题
  headerInfo?: {
    show: boolean;
    type: "error";
    info: string;
  };
};

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
  headerInfo = {
    show: false,
    type: "error",
    info: "",
  },
}: centerRectanglePropsType) => {
  return (
    <Grid
      sx={{
        backgroundColor: "primary.main",
        width: width || 409,
        borderBottomRightRadius: headerInfo.show ? 0 : 20,
      }}
      className={`${styles.centerRectangle} ${className}`}
    >
      {headerInfo.show && (
        <Grid color="primary.main">
          <Grid className={styles.icon} />
          <Grid className={styles.text}>{headerInfo?.info}</Grid>
        </Grid>
      )}
      <Grid color="white" whiteSpace="pre-wrap">
        {mainTitle && (
          <Typography
            variant="h5"
            align="center"
            fontFamily="ColgateReady-ExtraLight"
          >
            {mainTitle}
          </Typography>
        )}
        {subtitle && (
          <Typography
            variant="body2"
            align="center"
            fontFamily="ColgateReady-Regular"
          >
            {subtitle}
          </Typography>
        )}
      </Grid>

      {children}
    </Grid>
  );
};
export default React.memo(CenterRectangle);
