import {
  Box,
  Pagination,
  PaginationItem,
  PaginationRenderItemParams,
  styled,
  TablePagination,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow, { tableRowClasses } from "@mui/material/TableRow";
import { ChangeEvent, FC, MouseEvent, useEffect, useState } from "react";
import RowData from "../mock";
import { tableData } from "../table.config";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    opacity: 1,
    ...theme.typography.body2,
    color: "#464646", // have to check
    fontWeight: "bold",
    height: "40px",
  },
  [`&.${tableCellClasses.body}`]: {
    opacity: 1,
    ...theme.typography.body1,
    height: "40px",
    borderBottom: "0.5px solid #CCCCCC",
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  [`&.${tableRowClasses.root}`]: {
    opacity: 1,
  },
}));

interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}

function TablePaginationActions(props: TablePaginationActionsProps) {
  const { count, page, rowsPerPage, onPageChange } = props;
  console.log(count, page, rowsPerPage);

  const calculatePagesCount = (pageSize: number, totalCount: number) => {
    // we suppose that if we have 0 items we want 1 empty page
    return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
  };
  const handleChange = (
    event: MouseEvent<HTMLButtonElement>,
    value: number
  ) => {
    onPageChange(event, value - 1);
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2 }}>
      <Pagination
        count={calculatePagesCount(rowsPerPage, count)}
        size="small"
        shape="rounded"
        onChange={handleChange}
        sx={{
          ...(theme) => theme.typography.body2,
          fontWeight: 300,
          color: (theme) => theme.palette.gray?.main,
          opacity: 1,
        }}
        renderItem={(params: PaginationRenderItemParams) => {
          return (
            <PaginationItem
              components={{
                last: () => (
                  <Box component={"span"} sx={{ textDecoration: "underline" }}>
                    Last
                  </Box>
                ),
                next: () => (
                  <Box component={"span"} sx={{ textDecoration: "underline" }}>
                    Next
                  </Box>
                ),
                first: () => (
                  <Box component={"span"} sx={{ textDecoration: "underline" }}>
                    First
                  </Box>
                ),
                previous: () => (
                  <Box component={"span"} sx={{ textDecoration: "underline" }}>
                    Previous
                  </Box>
                ),
              }}
              {...params}
            />
          );
        }}
      />
    </Box>
  );
}

const CTable: FC = () => {
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(10);
  const [entries, setEntries] = useState<{ from: number; to: number }>({
    from: 0,
    to: 0,
  });

  useEffect(() => {
    const entry = (page + 1) * rowsPerPage;
    setEntries({
      from: page > 0 ? rowsPerPage * page + 1 : 1,
      to: entry > RowData.length ? RowData.length : entry,
    });
  }, [page, rowsPerPage]);

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
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
                <StyledTableCell key={column.name}>
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
            ).map((row) => (
              <StyledTableRow key={row.id}>
                {tableData.columnDef.map((c) => {
                  const value = row[c.id];
                  return <StyledTableCell key={c.id}>{value}</StyledTableCell>;
                })}
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box
        component={"div"}
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            ...(theme) => theme.typography.body2,
            fontWeight: 300,
            color: "#595655",
            opacity: 1,
          }}
        >
          {`Show ${entries?.from} of ${entries?.to} entries out of ${RowData.length}`}
        </Box>
        <Box>
          <TablePagination
            rowsPerPageOptions={[]} // rowsPerPageOptions={[10, 25, 100]}
            labelDisplayedRows={() => ""}
            component="div"
            count={RowData.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default CTable;
