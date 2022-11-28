/**
 *   DentalMonitoringStatus: Dental monitoringStatus status column render based on status in patient table list
 *   @param
 *     row: row data
 *   @return
 *
 */

import ICons from "@/components/Icons/icons";
import { Box } from "@mui/material";
import { FC } from "react";
import { IRow } from "./table";
import { DENTAL_MONITORING_STATUS } from "./table.config";
import React from 'react';

const DentalMonitoringStatus: FC<{ row: IRow }> = ({ row }) => {
  let template;

  switch (row.dentalMonitoring) {
    case DENTAL_MONITORING_STATUS.NOT_STARTED:
      template = (
        <>
          <ICons icon={"NotStartedIcon"} />
          {row.dentalMonitoring}
        </>
      );
      break;
    case DENTAL_MONITORING_STATUS.TRACKING:
      template = (
        <>
          <ICons icon={"ActiveIcon"} sxProps={{ color: "secondary.main" }} />
          {row.dentalMonitoring}
        </>
      );
      break;
    case DENTAL_MONITORING_STATUS.NOT_TRACKING:
      template = (
        <>
          <ICons icon={"WarningIcon"} sxProps={{ color: "warning.main" }} />
          {row.dentalMonitoring}
        </>
      );
      break;
    default:
      template = row.dentalMonitoring;
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
      {template}
    </Box>
  );
};

export default DentalMonitoringStatus;
