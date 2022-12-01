/**
 *   CCell: Each column render based on coulmn type in patient table list
 *   @param
 *     Coulmn: table column object
 *     row: table row data
 *   isLoading: loading boolean flag for triger skeleton UI
 *   @return
 *
 */
import { Box, Skeleton } from "@mui/material";
import { FC } from "react";
import CaseDeatilsColumn from "./caseDeatilsColumn";
import DentalMonitoringStatus from "./dentalmonitoringStatus";
import OrderStatusColumn from "./orderStatusColumn";
import PatientStatusColumn from "./patientStatusColumn";
import { IColumn, IRow } from "./table";
import { columnKeys } from "./table.config";
import React from 'react';

const CCell: FC<{ column: IColumn; row?: IRow; isLoading?: boolean }> = ({
  column,
  row,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <Skeleton
        data-testid="skeleton"
        height={30}
        width={columnKeys.FIRST_NAME === column.id ? "20px" : "inherit"}
        sx={{
          background: (theme) =>
            `${theme.palette.gray?.lighten3} 0% 0% no-repeat padding-box`,
          borderRadius: "4px",
          opacity: 1,
        }}
      />
    );
  }
  if (row) {
    if (columnKeys.CASE_DETAILS === column.id && row.caseDetails) {
      return <CaseDeatilsColumn row={row} />;
    }
    if (columnKeys.PATIENT_STATUS === column.id && row.patientStatus) {
      return <PatientStatusColumn row={row} />;
    }
    if (columnKeys.ORDER_STATUS === column.id && row.orderSatus) {
      return <OrderStatusColumn row={row} />;
    }
    if (columnKeys.DENTAL_MONITORING === column.id && row.dentalMonitoring) {
      return <DentalMonitoringStatus row={row} />;
    }
    if (columnKeys.LAST_MONITORING_SCAN === column.id && row.lasMonitoringScan) {
      return (
        <Box component={"span"} sx={{ fontWeight: 300 }}>
          {row[column.id]}
        </Box>
      );
    }
    return row[column.id] || "";
  }
  return "";
};

CCell.defaultProps = {
  isLoading: false,
};

export default CCell;
