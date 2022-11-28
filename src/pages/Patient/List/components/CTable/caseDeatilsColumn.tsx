/**
 *   CaseDeatilsColumn:  case details column render based on status in patient table list
 *   @param
 *     row: row data
 *   @return
 *
 */
import ICons from "@/components/Icons/icons";
import {
  Box,
  styled,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import React, { FC } from "react";
import { FormattedMessage, useIntl } from "umi";
import { IRow } from "./table";
import { CASE_DETAILS } from "./table.config";

const CTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} disableInteractive />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    ...theme.typography.body1,
    fontWeight: 300,
    color: theme.palette.gray?.main,
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    boxShadow: "0px 3px 6px #00000029",
    border: `1px solid ${theme.palette.gray?.lighten3}`,
    borderRadius: "20px 0px",
    maxWidth: 196,
    padding: "18px",
    opacity: 1,
  },
  "&.MuiTooltip-popper": {
    paddingLeft: "80px",
  },
}));

const CaseDeatilsColumn: FC<{ row: IRow }> = ({ row }) => {
  const translate = useIntl()
  let template = null;
  let translatekey = "";
  switch (row?.caseDetails) {
    case CASE_DETAILS.CASE_TOO_COMPLEX:
      translatekey = "caseTooComplexTooltip";
      template = (
        <>
          <ICons icon={"FailureIcon"} sxProps={{ color: "gray.darken" }} />
          {row?.caseDetails}
        </>
      );
      break;
    case CASE_DETAILS.PATIENT_DECLINED:
      translatekey = "patientDeclinedTooltip";
      template = (
        <>
          <ICons icon={"MisuseIcon"} sxProps={{ color: "gray.darken" }} />
          {row?.caseDetails}
        </>
      );
      break;
    case CASE_DETAILS.PATIENT_DECISION_PENDING:
      translatekey = "patientDecisionPendingTooltip";

      template = (
        <>
          <ICons icon={"PendingIcon"} sxProps={{ color: "secondary.main" }} />
          {row?.caseDetails}
        </>
      );
      break;
    case CASE_DETAILS.AWAITING_PATIENT_PAYMENT:
      translatekey = "awaitingPatientPaymentTooltip";
      template = (
        <>
          <ICons
            icon={"InCompleteIcon"}
            sxProps={{ color: "secondary.main", marginRight: "7px !important" }}
          />
          {row?.caseDetails}
        </>
      );
      break;
    case CASE_DETAILS.AWAITING_DOCTOR_APPROVAL:
      translatekey = "awaitingDoctorDpprovalTooltip";

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
      translatekey = "underQualityCheckTooltip";

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
      translatekey = "needsDoctorReviewTooltip";

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
    <CTooltip title={translatekey && translate.formatMessage({ id: translatekey }) || ""}>
      <Box
        component={"span"}
        sx={{
          fontWeight: 300,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          " > svg": { marginRight: 1 },
          " > img": { marginRight: 1 },
        }}
      >
        {template}
      </Box>
    </CTooltip>
  );
};

export default CaseDeatilsColumn;
