/**
 *   CaseDeatilsColumn:  case details column render based on status in patient table list
 *   @param
 *     row: row data
 *   @return
 *
 */
import React from 'react';
import ICons from "@/components/Icons/icons";
import {
  Box,
  styled,
  SxProps,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import { FC } from "react";
import { useIntl } from "umi";
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

type props = {
  icon: string
  sxProps: SxProps,
  translatekey: string
}


const CaseDeatilsColumn: FC<{ row: IRow, dataKey: string }> = ({ row, dataKey }) => {
  const translate = useIntl()
  let obj: props = {} as props
  const input = row[dataKey as keyof typeof row]

  switch (input) {
    case CASE_DETAILS.CASE_TOO_COMPLEX:
      obj = {
        icon: "FailureIcon",
        sxProps: { color: "gray.darken" },
        translatekey: "caseTooComplexTooltip"

      }
      break;
    case CASE_DETAILS.PATIENT_DECLINED:
      obj = {
        icon: "MisuseIcon",
        sxProps: { color: "gray.darken" },
        translatekey: "patientDeclinedTooltip"
      }

      break;
    case CASE_DETAILS.PATIENT_DECISION_PENDING:
      obj = {
        icon: "PendingIcon",
        sxProps: { color: "secondary.main" },
        translatekey: "patientDecisionPendingTooltip"
      }
      break;
    case CASE_DETAILS.AWAITING_PATIENT_PAYMENT:
      obj = {
        icon: "InCompleteIcon",
        sxProps: { color: "secondary.main", marginRight: "8px !important" },
        translatekey: "awaitingPatientPaymentTooltip"

      }
      break;
    case CASE_DETAILS.AWAITING_DOCTOR_APPROVAL:
      obj = {
        icon: "InProgressIcon",
        sxProps: { color: "secondary.main", marginRight: "8px !important" },
        translatekey: "awaitingDoctorDpprovalTooltip"
      }
      break;
    case CASE_DETAILS.UNDER_QUALITY_CHECK:
      obj = {
        icon: "UnderReviewIcon",
        sxProps: { color: "secondary.main", marginRight: "8px !important" },
        translatekey: "underQualityCheckTooltip"
      }
      break;
    case CASE_DETAILS.NEEDS_DOCTOR_REVIEW:
      obj = {
        icon: "WarningIcon",
        sxProps: { color: "warning.main", marginRight: "8px !important" },
        translatekey: "needsDoctorReviewTooltip"

      }
      break;
    case CASE_DETAILS.NEEDS_CLEANING:
      obj = {
        icon: "WarningIcon",
        sxProps: { color: "warning.main", marginRight: "8px !important" }
      }
      break;
    case CASE_DETAILS.TEMPORARY_HEALTH_ISSUE:
      obj = {
        icon: "PendingIcon",
        sxProps: { color: "secondary.main" }
      }
      break;
    case CASE_DETAILS.PERMANENT_HEALTH_ISSUE:
      obj = {
        icon: "MisuseIcon",
        sxProps: { color: "gray.darken" }
      }
      break;
    default:
      break;
  }

  return (
    <>
      {input && (<CTooltip title={obj && obj.translatekey && translate.formatMessage({ id: obj.translatekey }) || ""}>
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
          {obj && obj?.icon && <ICons icon={obj?.icon} sxProps={obj?.sxProps} />}
          {input}

        </Box>
      </CTooltip>)
      }

    </>
  )
};

export default CaseDeatilsColumn;
