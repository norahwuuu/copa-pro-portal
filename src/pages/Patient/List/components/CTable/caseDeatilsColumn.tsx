import { mdiCircleSlice3, mdiCircleSlice4 } from "@mdi/js";
import { ErrorOutlined, Visibility } from "@mui/icons-material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import PendingOutlinedIcon from "@mui/icons-material/PendingOutlined";
import { Box, SvgIcon, SxProps } from "@mui/material";
import { FC } from "react";
import { IRow } from "./table";
import { CASE_DETAILS } from "./table.config";

const CustomIcon: FC<{
  fontSize?: "small" | "inherit" | "large" | "medium" | undefined;
  mdiIcon: string;
  sxProp: SxProps;
}> = ({ fontSize, mdiIcon, sxProp }) => {
  return (
    <SvgIcon fontSize={fontSize} sx={sxProp}>
      <path d={mdiIcon} />
    </SvgIcon>
  );
};

const CaseDeatilsColumn: FC<{ input: string; row: IRow }> = ({
  input,
  row,
}) => {
  let template;
  switch (row?.caseDetails) {
    case CASE_DETAILS.CASE_TOO_COMPLEX:
      template = (
        <>
          {" "}
          <HighlightOffIcon
            sx={{ color: (theme) => theme.palette.gray?.darken }}
            fontSize={"small"}
          />{" "}
          {input}{" "}
        </>
      );
      break;
    case CASE_DETAILS.PATIENT_DECLINED:
      template = (
        <>
          {" "}
          <HighlightOffIcon
            fontSize={"small"}
            sx={{ color: (theme) => theme.palette.gray?.darken }}
          />{" "}
          {input}{" "}
        </>
      );
      break;
    case CASE_DETAILS.PATIENT_DECISION_PENDING:
      template = (
        <>
          {" "}
          <PendingOutlinedIcon
            fontSize={"small"}
            sx={{ color: (theme) => theme.palette.secondary.main }}
          />{" "}
          {input}{" "}
        </>
      );
      break;
    case CASE_DETAILS.AWAITING_PATIENT_PAYMENT:
      template = (
        <>
          {" "}
          <CustomIcon
            fontSize={"small"}
            mdiIcon={mdiCircleSlice4}
            sxProp={{ color: "secondary.main", transform: "rotate(180deg)" }}
          />{" "}
          {input}{" "}
        </>
      );
      break;
    case CASE_DETAILS.AWAITING_DOCTOR_APPROVAL:
      template = (
        <>
          {" "}
          <CustomIcon
            fontSize={"small"}
            mdiIcon={mdiCircleSlice3}
            sxProp={{ color: "secondary.main" }}
          />{" "}
          {input}{" "}
        </>
      );
      break;
    case CASE_DETAILS.UNDER_QUALITY_CHECK:
      template = (
        <>
          {" "}
          <Visibility
            fontSize={"small"}
            sx={{ color: (theme) => theme.palette.secondary.main }}
          />{" "}
          {input}{" "}
        </>
      );
      break;
    case CASE_DETAILS.NEEDS_DOCTOR_REVIEW:
      template = (
        <>
          {" "}
          <ErrorOutlined
            fontSize={"small"}
            sx={{ color: (theme) => theme.palette.warning.main }}
          />{" "}
          {input}{" "}
        </>
      );
      break;
    case CASE_DETAILS.NEEDS_CLEANING:
      template = (
        <>
          {" "}
          <ErrorOutlined
            fontSize={"small"}
            sx={{ color: (theme) => theme.palette.warning.main }}
          />{" "}
          {input}{" "}
        </>
      );
      break;
    case CASE_DETAILS.TEMPORARY_HEALTH_ISSUE:
      template = (
        <>
          {" "}
          <PendingOutlinedIcon
            fontSize={"small"}
            sx={{ color: (theme) => theme.palette.secondary.main }}
          />{" "}
          {input}{" "}
        </>
      );
      break;
    case CASE_DETAILS.PERMANENT_HEALTH_ISSUE:
      template = (
        <>
          {" "}
          <HighlightOffIcon
            fontSize={"small"}
            sx={{ color: (theme) => theme.palette.gray?.darken }}
          />{" "}
          {input}{" "}
        </>
      );
      break;
    default:
      template = input;
      break;
  }

  return (
    <Box
      component={"span"}
      sx={{
        fontWeight: 300,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        " > svg": { marginRight: 1 },
      }}
    >
      {template}
    </Box>
  );
};

export default CaseDeatilsColumn;
