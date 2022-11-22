import { Box, Skeleton } from "@mui/material";
import { FC } from "react";
import CaseDeatilsColumn from "./caseDeatilsColumn";
import DentalMonitoringStatus from "./dentalmonitoringStatus";
import OrderStatusColumn from "./orderStatusColumn";
import PatientStatusColumn from "./patientStatusColumn";
import { IColumn, IRow } from "./table";
import { columnKeys } from "./table.config";

const CCell: FC<{ column: IColumn; row: IRow; isLoading?: boolean }> = ({
  column,
  row,
  isLoading,
}) => {
  if (isLoading) {
    return (
      <Skeleton
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
  if (columnKeys.CASE_DETAILS === column.id) {
    return <CaseDeatilsColumn row={row} />;
  }
  if (columnKeys.PATIENT_STATUS === column.id) {
    return <PatientStatusColumn row={row} />;
  }
  if (columnKeys.ORDER_STATUS === column.id) {
    return <OrderStatusColumn row={row} />;
  }
  if (columnKeys.DENTAL_MONITORING === column.id) {
    return <DentalMonitoringStatus row={row} />;
  }
  if (columnKeys.LAST_MONITORING_SCAN === column.id) {
    return (
      <Box component={"span"} sx={{ fontWeight: 300 }}>
        {row[column.id]}
      </Box>
    );
  }
  return row[column.id];
};

CCell.defaultProps = {
  isLoading: false,
};

export default CCell;
