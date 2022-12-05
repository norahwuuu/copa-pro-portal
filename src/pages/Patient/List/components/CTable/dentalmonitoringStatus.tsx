/**
 *   DentalMonitoringStatus: Dental monitoringStatus status column render based on status in patient table list
 *   @param
 *     row: row data
 *   @return
 *
 */

import ICons from "@/components/Icons/icons";
import { Box, SxProps } from "@mui/material";
import { FC } from "react";
import { IRow } from "./table";
import { DENTAL_MONITORING_STATUS } from "./table.config";
import React from 'react';

type props = {
  icon: string
  sxProps: SxProps,
}

const DentalMonitoringStatus: FC<{ row: IRow, dataKey: string }> = ({ row, dataKey }) => {
  let obj: props = {} as props
  const input = row[dataKey as keyof typeof row]


  switch (input) {
    case DENTAL_MONITORING_STATUS.NOT_STARTED:
      obj = {
        icon: "NotStartedIcon",
        sxProps: { marginRight: "8px !important" },

      }
      break;
    case DENTAL_MONITORING_STATUS.TRACKING:
      obj = {
        icon: "ActiveIcon",
        sxProps: { color: "secondary.main", marginRight: "8px !important" }
      }
      break;
    case DENTAL_MONITORING_STATUS.NOT_TRACKING:
      obj = {
        icon: "WarningIcon",
        sxProps: { color: "warning.main", marginRight: "8px !important" },

      }
      break;
    default:
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
        " > img": { marginRight: 1 },
      }}
    >
      {obj && obj?.icon && <ICons icon={obj?.icon} sxProps={obj?.sxProps} />}
      {input}
    </Box>
  );
};

export default DentalMonitoringStatus;
