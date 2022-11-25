import { Link, SxProps, Theme } from "@mui/material";
import React, { FC, ReactNode } from "react";
import { Link as RouterLink } from "umi";
import * as React from 'react';

interface ILinkTextProps {
  to: string;
  icon?: ReactNode | null;
  linkText: string;
  sxProp?: SxProps<Theme>;
}

const LinkText: FC<ILinkTextProps> = ({ to, icon, linkText, sxProp }) => {
  return (
    <Link
      component={RouterLink}
      to={to}
      variant={"body1"}
      color={"secondary"}
      underline={"hover"}
      sx={{ fontWeight: "bold", display: "flex", ...sxProp }}
    >
      {linkText} {icon || ""}
    </Link>
  );
};

LinkText.defaultProps = {
  sxProp: undefined,
  icon: null,
};

export default LinkText;
