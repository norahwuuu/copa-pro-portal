/**
 *   Icons:  In this file we have maintaining all icons at on place 
 *   @param
 *     fontSize: icon size
 *     icon: icon type
 *     sxProps: icons style props
 *   @return
 *
 */
import React from 'react'
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import FolderOffOutlinedIcon from "@mui/icons-material/FolderOffOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { FC } from "react";

import { mdiCircleSlice3, mdiFilter, mdiFilePdfBox, mdiCheckBold } from "@mdi/js";
import {
  AccountCircle,
  ArrowDropDown,
  ArrowDropUp,
  ErrorOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Logout,
  Visibility,
} from "@mui/icons-material";
import WarningIcon from '@mui/icons-material/Warning';

import { Box, SvgIcon, SxProps } from "@mui/material";

import SortIcon from "@mui/icons-material/Sort";
import incompleteSvg from "../../assets/svgs/icons/incomplete.svg";
import notStartedSvg from "../../assets/svgs/icons/not_started.svg";
import resultsOffSvg from "../../assets/svgs/icons/results_off.svg";

interface IConsProps {
  fontSize?: "small" | "inherit" | "large" | "medium" | undefined;
  sxProps?: SxProps;
  icon: string;
}

const ICons: FC<IConsProps> = ({ icon, fontSize, sxProps }) => {
  switch (icon) {
    case "ActiveIcon":
      return <CheckCircleIcon fontSize={fontSize} sx={sxProps} />;
    case "ArchivedIcon":
      return <CircleIcon fontSize={fontSize} sx={sxProps} />;
    case "FailureIcon":
      return (
        <RemoveCircleOutlineIcon
          fontSize={fontSize}
          sx={{ transform: "rotate(45deg)", ...sxProps }}
        />
      );
    case "NotStartedIcon":
      return (
        <Box
          component="img"
          src={notStartedSvg}
          alt={"Not Started Icon"}
          loading="lazy"
          sx={{ height: "16px", ...sxProps }}
        />
      );
    case "PendingIcon":
      return <PendingOutlinedIcon fontSize={fontSize} sx={sxProps} />;
    case "InCompleteIcon":
      return (
        <Box
          component="img"
          src={incompleteSvg}
          alt={"In Complete Icon"}
          loading="lazy"
          sx={{ height: "16px", ...sxProps }}
        />
      );
    case "InProgressIcon":
      return (
        <SvgIcon fontSize={fontSize} sx={sxProps}>
          <path d={mdiCircleSlice3} />
        </SvgIcon>
      );
    case "PdfIcon":
      return (
        <SvgIcon fontSize={fontSize} sx={sxProps}>
          <path d={mdiFilePdfBox} />
        </SvgIcon>
      );
    case "WarningIcon":
      return <ErrorOutlined fontSize={fontSize} sx={sxProps} />;
    case "UnderReviewIcon":
      return <Visibility fontSize={fontSize} sx={sxProps} />;
    case "MisuseIcon":
      return <HighlightOffIcon fontSize={fontSize} sx={sxProps} />;
    case "UserIcon":
      return <AccountCircle fontSize={fontSize} sx={sxProps} />;
    case "ArrowUpIcon":
      return <ArrowDropUp fontSize={fontSize} sx={sxProps} />;
    case "ArrowDownIcon":
      return <ArrowDropDown fontSize={fontSize} sx={sxProps} />;
    case "KeyboardArrowUpIcon":
      return <KeyboardArrowUp fontSize={fontSize} sx={sxProps} />;
    case "KeyboardArrowDownIcon":
      return <KeyboardArrowDown fontSize={fontSize} sx={sxProps} />;
    case "LogoutIcon":
      return <Logout fontSize={fontSize} sx={sxProps} />;
    case "FolderOffIcon":
      return <FolderOffOutlinedIcon fontSize={fontSize} sx={sxProps} />;
    case "ErrorIcon":
      return <WarningIcon fontSize={fontSize} sx={{ color: '#FF9C00', ...sxProps }} />;
    case "FilterAltIcon":
      return (
        <SvgIcon fontSize={fontSize} sx={sxProps}>
          <path d={mdiFilter} />
        </SvgIcon>
      );
    case "SortIcon":
      return <SortIcon fontSize={fontSize} sx={sxProps} />;
    case "ResultOffIcon":
      return (
        <Box
          component="img"
          src={resultsOffSvg}
          alt={"result empty icon"}
          loading="lazy"
          sx={{ height: "16px", ...sxProps }}
        />
      );
    case "CheckedIcon":
      return (
        <SvgIcon fontSize={fontSize} sx={sxProps}>
          <path d={mdiCheckBold} />
        </SvgIcon>
      );
    default:
      return <Visibility fontSize={fontSize} sx={sxProps} />;
  }
};

ICons.defaultProps = {
  fontSize: "small",
  sxProps: {
    color: "gray.darken",
  },
};

export default ICons;
