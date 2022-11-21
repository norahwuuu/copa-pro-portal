import ICons from "@/components/Icons/icons";
import { Box } from "@mui/material";
import { FC } from "react";
import { IRow } from "./table";
import { CASE_DETAILS } from "./table.config";

const CaseDeatilsColumn: FC<{ row: IRow }> = ({ row }) => {
  let template;
  switch (row?.caseDetails) {
    case CASE_DETAILS.CASE_TOO_COMPLEX:
      template = (
        <>
          <ICons icon={"MisuseIcon"} sxProps={{ color: "gray.darken" }} />
          {row?.caseDetails}
        </>
      );
      break;
    case CASE_DETAILS.PATIENT_DECLINED:
      template = (
        <>
          <ICons icon={"MisuseIcon"} sxProps={{ color: "gray.darken" }} />
          {row?.caseDetails}
        </>
      );
      break;
    case CASE_DETAILS.PATIENT_DECISION_PENDING:
      template = (
        <>
          <ICons icon={"PendingIcon"} sxProps={{ color: "secondary.main" }} />
          {row?.caseDetails}
        </>
      );
      break;
    case CASE_DETAILS.AWAITING_PATIENT_PAYMENT:
      template = (
        <>
          <ICons
            icon={"InCompleteIcon"}
            sxProps={{ color: "secondary.main" }}
          />
          {row?.caseDetails}
        </>
      );
      break;
    case CASE_DETAILS.AWAITING_DOCTOR_APPROVAL:
      template = (
        <>
          <ICons
            icon={"InProgressIcon"}
            sxProps={{ color: "secondary.main" }}
          />
          {row?.caseDetails}
        </>
      );
      break;
    case CASE_DETAILS.UNDER_QUALITY_CHECK:
      template = (
        <>
          <ICons
            icon={"UnderReviewIcon"}
            sxProps={{ color: "secondary.main" }}
          />
          {row?.caseDetails}
        </>
      );
      break;
    case CASE_DETAILS.NEEDS_DOCTOR_REVIEW:
      template = (
        <>
          <ICons icon={"WarningIcon"} sxProps={{ color: "warning.main" }} />
          {row?.caseDetails}
        </>
      );
      break;
    case CASE_DETAILS.NEEDS_CLEANING:
      template = (
        <>
          <ICons icon={"WarningIcon"} sxProps={{ color: "warning.main" }} />
          {row?.caseDetails}
        </>
      );
      break;
    case CASE_DETAILS.TEMPORARY_HEALTH_ISSUE:
      template = (
        <>
          <ICons icon={"PendingIcon"} sxProps={{ color: "secondary.main" }} />
          {row?.caseDetails}
        </>
      );
      break;
    case CASE_DETAILS.PERMANENT_HEALTH_ISSUE:
      template = (
        <>
          <ICons icon={"MisuseIcon"} sxProps={{ color: "gray.darken" }} />
          {row?.caseDetails}
        </>
      );
      break;
    default:
      template = row?.caseDetails;
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
