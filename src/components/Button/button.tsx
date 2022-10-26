import React from "react";
import styles from "./button.less";

export interface propsType {
  className?: string;
  children: string;
  type?: "default" | "gray" | "red" | "disabled" | "cancel";
  size?: "default" | "slim";
  onClick?: React.MouseEventHandler<HTMLElement>;
}

/**
 * description：按钮
 *
 * param:type:类型;children：按钮文字
 *
 * return <Button/>
 */

const Button = (props: propsType) => {
  const { className, children, type = "default", size = "default" } = props;
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
      className={classname}
      onClick={handleClick}
      disabled={type === "disabled"}
    >
      {children}
    </button>
  );
};
export default Button;
