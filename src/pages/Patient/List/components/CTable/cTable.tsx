import ICons from "@/components/Icons/icons";
import Text from "@/components/Text/text";
import { ColumnCenterAlign } from "@/theme/themen.util";
import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import { FC, useLayoutEffect, useRef, useState } from "react";
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
  const tableRef = useRef(null);

  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);

  useLayoutEffect(() => {
    setWidth(tableRef.current.clientWidth);
    setHeight(tableRef.current.clientHeight);
  }, [tableRef]);

  const [page, setPage] = useState<number>(0);
  const rowsPerPage = RowData.length > 0 ? 15 : 10;
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

  const emptyRows = Math.max(0, (1 + page) * rowsPerPage - RowData.length);
  return (
    <Box component={"div"} sx={{ mb: 3, position: "relative" }}>
      <Box component={"div"} sx={{ position: "absolute", width: "100%" }}>
        <TableContainer
          ref={tableRef}
          component={Paper}
          sx={{
            boxShadow: "0px 3px 6px #00000029",
            border: "1px solid #CCCCCC",
            maxHeight: 600,
            minHeight: 600,
            opacity: 1,
            background: "#FFFFFF 0% 0% no-repeat padding-box",
            width: "100%",
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
                <StyledTableRow hover key={row.id}>
                  {tableData.columnDef.map((col: IColumn) => {
                    return (
                      <StyledTableCell key={col.id} sx={{ ...col.cell?.style }}>
                        {renderCell(col, row)}{" "}
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              ))}
              {!RowData.length && (
                <>
                  <StyledTableRow style={{ height: 60 * emptyRows }}>
                    {tableData.columnDef.map((col: IColumn) => {
                      return (
                        <StyledTableCell
                          key={col.id}
                          sx={{ ...col.cell?.style }}
                        />
                      );
                    })}
                  </StyledTableRow>
                </>
              )}
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

      {!RowData.length && (
        <Box
          component={"div"}
          sx={{
            position: "absolute",
            opacity: 1,
            width: width,
            height: height,
            color: (theme) => theme.palette.gray?.main,
            ...ColumnCenterAlign,
          }}
        >
          <Text variant={"h6"}>
            {" "}
            <ICons
              icon={"FolderOffIcon"}
              fontSize={"large"}
              sxProps={{ color: "inherit" }}
            />{" "}
          </Text>
          <Text variant={"h6"}> {"There are no patients yet."}</Text>
          <Text variant={"h6"}>
            {" "}
            <ICons
              icon={"FolderOffIcon"}
              fontSize={"large"}
              sxProps={{ color: "gray.darken" }}
            />{" "}
          </Text>
          <Text variant={"h6"}>
            {" "}
            {"No patient match the specific search term(s)."}
          </Text>
          <Text
            variant={"body1"}
            sxProp={{ fontWeight: 300, color: "#464646" }}
          >
            {" "}
            {"Check the spelling or try other words."}
          </Text>
        </Box>
      )}
    </Box>
  );
};

export default CTable;
