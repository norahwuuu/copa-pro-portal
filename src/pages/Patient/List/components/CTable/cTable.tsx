/**
 *   CTable: Reneder Patient list in table
 *   @return
 *
 */
import React from 'react';
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
import { FC, useEffect, useLayoutEffect, useRef, useState } from "react";
import { history, useIntl } from "umi";
import CCell from "./cCell";
import CFilter from "./cFilter";
import CFilteredChips from "./cFilteredChips";
import CPagination from "./cPagination";
import CSearch from "./cSearch";
import { IColumn, IFilterChips, IRow, ITableParams } from "./table";
import { tableData, TABLE_CONFIG, TABLE_FILTER } from "./table.config";
import { StyledTableCell, StyledTableRow } from "./table.style";


const CTable: FC<ITableParams> = ({ props, lists, updatePatientList, updateFilter, resetFilter }) => {
  const translate = useIntl()
  const windowSize = useWindowSize();
  const tableRef = useRef(null);
  const [width, setWidth] = useState(1);
  const [height, setHeight] = useState(1);
  const [page, setPage] = useState<number>(0);
  const rowsPerPage = ["xl"].includes(windowSize.breakpoint) ? TABLE_CONFIG.NO_OF_ROWS_LARGE_DEVICE : TABLE_CONFIG.NO_OF_ROWS

  useEffect(() => {
    updatePatientList({ page, rowsPerPage })
  }, [page])

  useLayoutEffect(() => {
    setWidth(tableRef.current.clientWidth);
    setHeight(tableRef.current.clientHeight);
  }, [tableRef]);

  const updatePage = (page: number) => {
    setPage(page);
    updatePatientList({ page, rowsPerPage })

  };

  const updateFilterChpis = (obj: IFilterChips) => {
    updateFilter({ filters: { ...obj } })
  }

  const emptyRows = Math.max(0, (1 + page) * rowsPerPage - props.totalRecords);


  return (
    <Box component={"div"} sx={{ mb: 3, position: "relative" }}>
      <Box
        component={"div"}
        sx={{
          mb: 3,
          ...RowCenterAlign,
          justifyContent: "start",
          flexWrap: "wrap",
          "> div": { mx: 1, alignSelf: "center" },
        }}
      >
        <CSearch />
        {Object.entries(TABLE_FILTER).map(([key, item]) => (
          <Box component={"div"} sx={{ my: 1 }} key={key}>
            <CFilter filter={item} filters={props.filters} updateFilters={updateFilterChpis} />
          </Box>
        ))}
      </Box>

      <CFilteredChips chips={{ ...props.filters }} updateFilters={updateFilterChpis} resetFilter={resetFilter} />

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
                  < StyledTableCell key={column.name} sx={{ ...column.cell?.style }} > {translate.formatMessage({ id: column.translate })} </StyledTableCell>
                ))}
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {lists.map((row, index) => (
                <StyledTableRow hover key={`${row.id}${index}`} onClick={() => history.push(patientUrlObj.overviewPatient)}>
                  {tableData.columnDef.map((col: IColumn) => {
                    return (
                      <StyledTableCell key={col.id} sx={{ ...col.cell?.style }}>
                        <CCell
                          column={col}
                          row={row}
                          isLoading={props.resultType === "fetching"}
                        />
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              ))}

              {props.resultType === "fetching" && Array(rowsPerPage).fill({} as IRow).map((row, index) => (
                <StyledTableRow key={index}>
                  {tableData.columnDef.map((col: IColumn) => {
                    return (
                      <StyledTableCell key={col.id}>
                        <CCell
                          column={col}
                          isLoading={props.resultType === "fetching"}
                        />
                      </StyledTableCell>
                    );
                  })}
                </StyledTableRow>
              ))}
              {!props.totalRecords && (props.resultType === "noRecords" || props.resultType === "filterEmpty") && (
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
        {props.totalRecords > 0 && props.resultType === "records" && (
          <CPagination
            rowsPerPage={rowsPerPage}
            page={page}
            updatePage={updatePage}
            totalRecords={props.totalRecords}
          />
        )}
      </Box>
      {
        !props.totalRecords && (
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
            {props.resultType === "noRecords" && (
              <>
                <Text variant={"h6"}>
                  <ICons
                    icon={"FolderOffIcon"}
                    fontSize={"large"}
                    sxProps={{ color: "gray.darken", fontSize: "xxx-large" }}
                  />
                </Text>
                <Text variant={"h6"}>
                  {translate.formatMessage({ id: "noPatients" })}
                </Text>
              </>
            )}
            {props.resultType === "filterEmpty" && (
              <>
                <Text variant={"h6"}>
                  <ICons
                    icon={"ResultOffIcon"}
                    fontSize={"large"}
                    sxProps={{ color: "gray.darken", height: "60px" }}
                  />
                </Text>
                <Text variant={"h6"}>
                  {translate.formatMessage({ id: "patientSearchResultsEmpty" })}
                </Text>
                <Text
                  variant={"body1"}
                  sxProp={{ fontWeight: 300, color: "gray.main", mt: 2 }}
                >
                  {translate.formatMessage({ id: "patientSearchResultsEmptySubText" })}

                </Text>
              </>
            )}
          </Box>
        )
      }
    </Box >
  );
};

export default CTable;
