import styles from "./centerRectangle.less";

export type propsType = {
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
 * param:width?:盒子宽度默认409px;className?: 样式;children?: 盒子内容;mainTitle?:一级标题;subtitle:二级标题
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
}: propsType) => {
  const classname = className ? "" : styles.centerRectangle;
  const Style = {
    width: width || 409,
    borderTopLeftRadius: headerInfo.show ? 0 : 20,
    borderTopRightRadius: headerInfo.show ? 0 : 20,
  };
  return (
    <div style={Style} className={`${styles.centerRectangle} ${className}`}>
      {headerInfo.show && (
        <div className={styles.headerInfo}>
          <div className={styles.icon} /> {headerInfo?.info}
        </div>
      )}
      <div className={styles.title}>
        {mainTitle && <div>{mainTitle}</div>}
        {subtitle && <div>{subtitle}</div>}
      </div>

      {children}
    </div>
  );
};
export default CenterRectangle;
