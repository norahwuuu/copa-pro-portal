import styles from "./centerRectangle.less";
import React from 'react';

export interface propsType {
  width?: string | number;
  className?: string;
  children?: React.ReactNode;
  mainTitle?: string; //第一行标题
  subtitle?: string; //第二行标题
}

/**
 * description：水平盒子
 *
 * param:width?:盒子宽度默认409px;className?: 样式;children?: 盒子内容;mainTitle?:一级标题;subtitle:二级标题
 *
 * return <CenterRectangle/>
 */

const CenterRectangle = ({
  width,
  className,
  children,
  subtitle,
  mainTitle,
}: propsType) => {
  const classname = className
    ? `${className} ${styles.centerRectangle}`
    : styles.centerRectangle;
  const Style = {
    width: width || 409,
  };
  return (
    <div style={Style} className={classname}>
      <div className={styles.title}>
        {mainTitle && <div>{mainTitle}</div>}
        {subtitle && <div>{subtitle}</div>}
      </div>

      {children}
    </div>
  );
};
export default CenterRectangle;
