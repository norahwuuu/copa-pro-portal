import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CircleIcon from "@mui/icons-material/Circle";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import { FC } from "react";

import { mdiCircleSlice3, mdiCircleSlice4, mdiDotsCircle } from "@mdi/js";
import {
  AccountCircle,
  ArrowDropDown,
  ArrowDropUp,
  ErrorOutlined,
  Logout,
  Visibility,
} from "@mui/icons-material";
import { SvgIcon, SxProps } from "@mui/material";

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
        <SvgIcon fontSize={fontSize} sx={sxProps}>
          <path d={mdiDotsCircle} />{" "}
        </SvgIcon>
      );
    case "PendingIcon":
      return <PendingOutlinedIcon fontSize={fontSize} sx={sxProps} />;
    case "InCompleteIcon":
      return (
        <SvgIcon
          fontSize={fontSize}
          sx={{ transform: "rotate(180deg)", ...sxProps }}
        >
          <path d={mdiCircleSlice4} />{" "}
        </SvgIcon>
      );
    case "InProgressIcon":
      return (
        <SvgIcon fontSize={fontSize} sx={sxProps}>
          <path d={mdiCircleSlice3} />{" "}
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
    case "LogoutIcon":
      return <Logout fontSize={fontSize} sx={sxProps} />;
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
