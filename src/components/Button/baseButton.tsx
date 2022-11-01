import React from "react";
import styles from "./baseButton.less";

export type baseButtonPropsType = {
  className?: string;
  children: string;
  type?: "default" | "gray" | "red" | "disabled" | "cancel";
  size?: "default" | "slim";
  onClick?: React.MouseEventHandler<HTMLElement>;
  style?: React.CSSProperties;
};

/**
 * description：按钮
 *
 * param:type:类型;size:大小;children：按钮文字
 *
 * return <BaseButton/>
 */

const BaseButton = (props: baseButtonPropsType) => {
  const {
    className,
    children,
    type = "default",
    size = "default",
    ...rest
  } = props;
  //类型样式
  let typeclasses = `button-${type}`;
  //大小样式
  const sizeclasses =
    size === "default" ? `${styles.button}` : `${styles["slim-button"]}`;

  if (!styles[typeclasses]) {
    typeclasses = `button-default`;
  }
  //添加外部样式
  const classname = className
    ? `${className} ${styles[typeclasses]} ${sizeclasses}`
    : `${styles[typeclasses]} ${sizeclasses}`;

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const { onClick } = props;
    if (type === "disabled") {
      e.preventDefault();
      return;
    }
    (
      onClick as React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>
    )?.(e);
  };

  return (
    <button
      {...(rest as any)}
      className={classname}
      onClick={handleClick}
      disabled={type === "disabled"}
    >
      {children}
    </button>
  );
};
export default BaseButton;
