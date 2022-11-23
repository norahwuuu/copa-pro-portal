/**
 *   CTable: Reneder Patient list in table
 *   @return
 *
 */

import ICons from "@/components/Icons/icons";
import Text from "@/components/Text/text";
import useWindowSize from "@/hooks/useWindowSize";
import { patientUrlObj } from "@/pages/Patient/patient.route";
import { ColumnCenterAlign, RowCenterAlign } from "@/theme/themen.util";
import {
  Box
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import React, { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { FormattedMessage, history } from "umi";
import CCell from "./cCell";
import CFilter from "./CFilter";
import CFilteredChips from "./cFilteredChips";
import CPagination from "./cPagination";
import CSearch from "./cSearch";
import mockData from "./mock";
import { IColumn } from "./table";
import { tableData, TABLE_CONFIG, TABLE_FILTER } from "./table.config";
import { StyledTableCell, StyledTableRow } from "./table.style";

const CTable: FC<{ tableAction: string }> = ({ tableAction }) => {
  const windowSize = useWindowSize();
  const tableRef = useRef(null);
  const [records, setRecords] = useState(mockData);
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);

  useLayoutEffect(() => {
    setWidth(tableRef.current.clientWidth);
    setHeight(tableRef.current.clientHeight);
  }, [tableRef]);

  useEffect(() => {
    if (
      tableAction === "records" ||
      tableAction === "filtering"
    ) {
      setRecords(mockData);
    } else {
      setRecords([]);
    }
  }, [tableAction])

  const [page, setPage] = useState<number>(0);
  const rowsPerPage =
    records.length > 0
      ? ["xl"].includes(windowSize.breakpoint)
        ? TABLE_CONFIG.NO_OF_ROWS_LARGE_DEVICE
        : TABLE_CONFIG.NO_OF_ROWS
      : TABLE_CONFIG.NO_OF_ROWS;
  const updatePage = (page: number) => {
    setPage(page);
  };

  const emptyRows = Math.max(0, (1 + page) * rowsPerPage - records.length);
  return (
    <Box component={"div"} sx={{ mb: 3, position: "relative" }}>
      <Box
        component={"div"}
        sx={{
          mb: 3,
          ...RowCenterAlign,
          justifyContent: "start",
          "> div": { mx: 1, alignSelf: "center" },
        }}
      >
        <CSearch />
        {Object.entries(TABLE_FILTER).map(([key, item]) => (
          <Box component={"div"} key={key}>
            <CFilter filter={item} />{" "}
          </Box>
        ))}
      </Box>
      <CFilteredChips />

      <Box component={"div"} sx={{ position: "absolute", width: "100%" }}>
        <TableContainer
          ref={tableRef}
          component={Paper}
          sx={{
            boxShadow: "0px 3px 6px #00000029",
            border: "1px solid #CCCCCC",
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
                    <FormattedMessage id={column.translate} />
                  </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {(rowsPerPage > 0
                ? records.slice(
                  page * rowsPerPage,
                  page * rowsPerPage + rowsPerPage
                )
                : records
              ).map((row) => (
                <StyledTableRow hover key={row.id} onClick={() => history.push(patientUrlObj.overviewPatient)}>
                  {tableData.columnDef.map((col: IColumn) => {
                    return (
                      <StyledTableCell key={col.id} sx={{ ...col.cell?.style }}>
                        <CCell
                          column={col}
                          row={row}
                          isLoading={tableAction === "filtering"}
                        />
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              ))}
              {!records.length && (
                <>
                  <StyledTableRow style={{ height: 40 * emptyRows }}>
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
        {records.length > 0 && tableAction === "records" && (
          <CPagination
            rowsPerPage={rowsPerPage}
            page={page}
            updatePage={updatePage}
            totalRecords={records.length}
          />
        )}
      </Box>
      {!records.length && (
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
          {tableAction === "norecords" && (
            <>
              <Text variant={"h6"}>
                <ICons
                  icon={"FolderOffIcon"}
                  fontSize={"large"}
                  sxProps={{ color: "gray.darken", fontSize: "xxx-large" }}
                />
              </Text>
              <Text variant={"h6"}>
                <FormattedMessage id="noPatients" />
              </Text>
            </>
          )}
          {tableAction === "filterempty" && (
            <>
              <Text variant={"h6"}>
                <ICons
                  icon={"ResultOffIcon"}
                  fontSize={"large"}
                  sxProps={{ color: "gray.darken", height: "60px" }}
                />
              </Text>
              <Text variant={"h6"}>
                <FormattedMessage id="patientSearchResultsEmpty" />
              </Text>
              <Text
                variant={"body1"}
                sxProp={{ fontWeight: 300, color: "gray.main", mt: 2 }}
              >
                <FormattedMessage id="patientSearchResultsEmptySubText" />
              </Text>
            </>
          )}
        </Box>
      )}
    </Box>
  );
};

export default CTable;
