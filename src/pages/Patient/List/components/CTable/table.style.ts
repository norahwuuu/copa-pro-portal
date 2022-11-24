/**
 *   Table Style: Patient table styles
 *   @return
 *
 */

import {
  PaginationItem,
  styled,
  TableCell,
  tableCellClasses,
  TableRow,
  tableRowClasses,
} from "@mui/material";

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    opacity: 1,
    ...theme.typography.body2,
    color: theme.palette.gray?.main, // have to check
    fontWeight: "bold",
    height: "40px",
  },
  [`&.${tableCellClasses.body}`]: {
    opacity: 1,
    ...theme.typography.body1,
    height: "40px",
    borderBottom: "0.5px solid #CCCCCC",
    color: theme.palette.gray?.main,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ({
  [`&.${tableRowClasses.root}`]: {
    opacity: 1,
    height: "40px",
  },
  "&.MuiTableRow-hover": {
    ":hover": {
      backgroundColor: theme.palette.gray?.lighten,
      cursor: "pointer",
    },
  },
}));

export const CPaginationItem = styled(PaginationItem)(({ theme }) => ({
  "&.MuiPaginationItem-root": {
    color: theme.palette.gray?.main,
    opacity: 1,
    background: `${theme.palette.gray?.lighten1} 0% 0% no-repeat padding-box`,
    borderRadius: "4px",
    ...theme.typography.body2,
    fontWeight: 300,
    border: "none",
    minWidth: "18px",
    height: "20px",
  },
  "&.Mui-selected": {
    background: `${theme.palette.secondary.lighten2} 0% 0% no-repeat padding-box`,
  },
  "&.MuiPaginationItem-previousNext": {
    background: "none",
    height: "auto",
    width: "auto",
    marginRight: "10px !important",
    marginLeft: "10px !important",
  },
  "&.Mui-disabled": {
    color: theme.palette.gray?.darken,
  },
}));


