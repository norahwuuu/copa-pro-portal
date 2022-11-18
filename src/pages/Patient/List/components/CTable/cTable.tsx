import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { FC, useState } from "react";
import CaseDeatilsColumn from "./caseDeatilsColumn";
import CPagination from "./cPagination";
import mockData from "./mock";
import PatientStatusColumn from "./patientStatusColumn";
import { IColumn, IRow } from "./table";
import { columnKeys, tableData } from "./table.config";
import { StyledTableCell, StyledTableRow } from "./table.style";

const CTable: FC = () => {
  const RowData: IRow[] = mockData;
  const [page, setPage] = useState<number>(0);
  const rowsPerPage = 10;
  const updatePage = (page: number) => {
    setPage(page);
  };

  const renderCell = (column: IColumn, row: IRow) => {
    const value = row[column.id];
    if (columnKeys.CASE_DETAILS === column.id) {
      return <CaseDeatilsColumn input={value} row={row} />;
    }
    if (columnKeys.PATIENT_STATUS === column.id) {
      return <PatientStatusColumn row={row} />;
    }
    return value;
  };
  return (
    <Box component={"div"}>
      <TableContainer
        component={Paper}
        sx={{
          boxShadow: "0px 3px 6px #00000029",
          border: "1px solid #CCCCCC",
          maxHeight: 600,
        }}
      >
        <Table stickyHeader aria-label="Patient list table">
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
