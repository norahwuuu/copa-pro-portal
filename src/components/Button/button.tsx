import { Theme } from "@emotion/react";
import { SxProps } from "@mui/material";
import { FC, ReactNode } from "react";

import FilledButton from "../../theme/button.style";
import React from 'react';
interface IButtonProps {
  variant: "text" | "outlined" | "contained" | "shade";
  btnLabel: string;
  sxProp?: SxProps<Theme>;
  onClickHandler?: React.MouseEventHandler<HTMLElement>;
  btnType?: "button" | "submit";
  startIcon?: ReactNode | null;
  size?: "small" | "medium" | "large";
  isDisabled?: boolean;
}

const Btn: FC<IButtonProps> = ({
  variant,
  btnLabel,
  size,
  onClickHandler,
  btnType,
  sxProp,
  startIcon,
  isDisabled,
}) => {
  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    (
      onClickHandler as React.MouseEventHandler<
        HTMLButtonElement | HTMLAnchorElement
      >
    )?.(e);
  };

  return (
    <>
      <FilledButton
        variant={variant}
        size={size}
        disabled={isDisabled}
        type={btnType}
        sx={{ ...sxProp }}
        onClick={handleClick}
        startIcon={startIcon}
      >
        {btnLabel}
      </FilledButton>
    </>
  );
};

Btn.defaultProps = {
  sxProp: undefined,
  btnType: "button",
  startIcon: null,
  size: "medium",
  isDisabled: false,
};

export default Btn;
