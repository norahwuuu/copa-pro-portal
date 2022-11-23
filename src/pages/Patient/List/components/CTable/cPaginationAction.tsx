/**
 *   TablePaginationActions: Previous, Next action handled for patient table list
 *   @param
 *     count: number of record
 *     rowsPerPage: number for rows per page
 *     onPageChange: action  for on page change
 *   @return
 *
 */

import { Box, Pagination, PaginationRenderItemParams } from "@mui/material";
import { ChangeEvent, FC } from "react";
import { FormattedMessage } from "umi";
import { ITablePaginationActionsProps } from "./table";
import { CPaginationItem } from "./table.style";

const TablePaginationActions: FC<ITablePaginationActionsProps> = ({
  count,
  rowsPerPage,
  onPageChange,
}) => {
  const calculatePagesCount = (pageSize: number, totalCount: number) => {
    // we suppose that if we have 0 items we want 1 empty page
    return totalCount < pageSize ? 1 : Math.ceil(totalCount / pageSize);
  };
  const handleChange = (
    event: ChangeEvent<HTMLButtonElement | unknown>,
    value: number
  ) => {
    onPageChange(event, value - 1);
  };

  const BtnTemplate = (key: string) => (
    <Box component={"span"} sx={{ textDecoration: "underline" }}>
      <FormattedMessage id={key} />
    </Box>
  );

  return (
    <Box sx={{ flexShrink: 0, ml: 2 }}>
      <Pagination
        count={calculatePagesCount(rowsPerPage, count)}
        size="small"
        variant="outlined"
        shape="rounded"
        onChange={handleChange}
        renderItem={(params: PaginationRenderItemParams) => {
          return (
            <CPaginationItem
              components={{
                last: () => BtnTemplate("lastPagination"),
                next: () => BtnTemplate("nextPagination"),
                first: () => BtnTemplate("firstPagination"),
                previous: () => BtnTemplate("previousPagination"),
              }}
              {...params}
            />
          );
        }}
      />
    </Box>
  );
};

export default TablePaginationActions;
