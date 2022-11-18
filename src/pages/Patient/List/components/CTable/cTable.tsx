import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { FC, useState } from "react";
import CaseDeatilsColumn from "./caseDeatilsColumn";
import CPagination from "./cPagination";
import DentalMonitoringStatus from "./dentalmonitoringStatus";
import mockData from "./mock";
import OrderStatusColumn from "./orderStatusColumn";
import PatientStatusColumn from "./patientStatusColumn";
import { IColumn, IRow } from "./table";
import { columnKeys, tableData } from "./table.config";
import { StyledTableCell, StyledTableRow } from "./table.style";

const CTable: FC = () => {
  const RowData: IRow[] = mockData;
  const [page, setPage] = useState<number>(0);
  const rowsPerPage = 15;
  const updatePage = (page: number) => {
    setPage(page);
  };

  const renderCell = (column: IColumn, row: IRow) => {
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
  return (
    <Box component={"div"} sx={{ mb: 3 }}>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "0px 3px 6px #00000029",
          border: "1px solid #CCCCCC",
          maxHeight: 600,
          opacity: 1,
          background: "#FFFFFF 0% 0% no-repeat padding-box",
        }}
      >
        <Table stickyHeader aria-label="Patient list table" size={"small"}>
          <TableHead>
            <StyledTableRow>
              {tableData.columnDef.map((column) => (
                <StyledTableCell
                  key={column.name}
                  sx={{ ...column.cell?.style }}
                >
                  {column.name}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? RowData.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
              : RowData
            ).map((row: IRow) => (
              <StyledTableRow key={row.id}>
                {tableData.columnDef.map((col: IColumn) => {
                  return (
                    <StyledTableCell key={col.id} sx={{ ...col.cell?.style }}>
                      {renderCell(col, row)}{" "}
                    </StyledTableCell>
                  );
                })}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <CPagination
        rowsPerPage={rowsPerPage}
        page={page}
        updatePage={updatePage}
        totalRecords={RowData.length}
      />
    </Box>
  );
};

export default CTable;
