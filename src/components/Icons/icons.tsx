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
import CircleIcon from "@mui/icons-material/Circle";
import FolderOffOutlinedIcon from "@mui/icons-material/FolderOffOutlined";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { FC } from "react";

import { mdiFilter, mdiFilePdfBox, mdiCheckBold } from "@mdi/js";
import {
  AccountCircle,
  ArrowDropDown,
  ArrowDropUp,
  KeyboardArrowDown,
  KeyboardArrowUp,
  Logout,
  Visibility,
} from "@mui/icons-material";
import WarningIcon from '@mui/icons-material/Warning';

import { Box, SvgIcon, SxProps } from "@mui/material";

import SortIcon from "@mui/icons-material/Sort";
import incompleteSvg from "../../assets/svgs/icons/incomplete.svg";
import notStartedSvg from "../../assets/svgs/icons/notstarted.svg";
import resultsOffSvg from "../../assets/svgs/icons/resultsoff.svg";
import activeSvg from "../../assets/svgs/icons/active.svg";
import inProgressSvg from "../../assets/svgs/icons/inprogress.svg";
import warningSvg from "../../assets/svgs/icons/warning.svg";
import underReviewSvg from "../../assets/svgs/icons/underreview.svg";


interface IConsProps {
  fontSize?: "small" | "inherit" | "large" | "medium" | undefined;
  sxProps?: SxProps;
  icon: string;
}

const ICons: FC<IConsProps> = ({ icon, fontSize, sxProps }) => {
  switch (icon) {
    case "ActiveIcon":
      return <Box
        component="img"
        src={activeSvg}
        alt={"active icon"}
        loading="lazy"
        sx={{ height: "16px", ...sxProps }}
      />
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
        <Box
          component="img"
          src={inProgressSvg}
          alt={"in progress icon"}
          loading="lazy"
          sx={{ height: "16px", ...sxProps }}
        />
      );
    case "PdfIcon":
      return (
        <SvgIcon fontSize={fontSize} sx={sxProps}>
          <path d={mdiFilePdfBox} />
        </SvgIcon>
      );
    case "WarningIcon":
      return (
        <Box
          component="img"
          src={warningSvg}
          alt={"warning"}
          loading="lazy"
          sx={{ height: "16px", ...sxProps }}
        />
      )
    case "UnderReviewIcon":
      return (
        <Box
          component="img"
          src={underReviewSvg}
          alt={"under Review"}
          loading="lazy"
          sx={{ height: "16px", ...sxProps }}
        />
      )
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
