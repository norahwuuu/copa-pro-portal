/**
 *   PatientStatusColumn: Patient status column render based on status in patient table list
 *   @param
 *     row: row data
 *   @return
 *
 */

import { Box, SxProps } from "@mui/material";
import { FC } from "react";
import { IRow } from "./table";
import { PATIENT_STATUS, PATIENT_STATUS_CASE_MAP } from "./table.config";

const findPatientStatus = (obj: { [key: string]: string[] }, value: string) => {
  return Object.keys(obj).find((key) => obj[key].includes(value));
};

const PatientStatusColumn: FC<{ row: IRow }> = ({ row }) => {
  let status = findPatientStatus(PATIENT_STATUS_CASE_MAP, row.caseDetails);
  let sxProp: SxProps;

  if (!status) {
    status = PATIENT_STATUS.COMPLETED;
  }

  switch (status) {
    case PATIENT_STATUS.REJECTED:
      sxProp = {
        color: "gray.darken",
      };
      break;
    case PATIENT_STATUS.PROSPECTIVE:
      sxProp = {
        color: "inherit",
      };
      break;
    case PATIENT_STATUS.PENDING:
      sxProp = {
        color: "inherit",
      };
      break;
    case PATIENT_STATUS.ACTIVE:
      sxProp = {
        fontWeight: 300,
        color: "inherit",
      };
      break;

    case PATIENT_STATUS.COMPLETED:
      sxProp = {
        color: "gray.darken",
      };
      break;

    default:
      sxProp = {
        color: "inherit",
      };
      break;
  }

  return (
    <Box component={"span"} sx={sxProp}>
      {status}
    </Box>
  );
};

export default PatientStatusColumn;
