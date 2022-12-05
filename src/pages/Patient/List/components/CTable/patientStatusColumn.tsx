/**
 *   PatientStatusColumn: Patient status column render based on status in patient table list
 *   @param
 *     row: row data
 *   @return
 *
 */

import { Box, SxProps } from "@mui/material";
import React, { FC } from "react";
import { IRow } from "./table";
import { PATIENT_STATUS } from "./table.config";

const PatientStatusColumn: FC<{ row: IRow, dataKey: string }> = ({ row, dataKey }) => {
  let sxProp: SxProps;
  const input = row[dataKey as keyof typeof row]

  switch (input) {
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
      {input}
    </Box>
  );
};

export default PatientStatusColumn;
