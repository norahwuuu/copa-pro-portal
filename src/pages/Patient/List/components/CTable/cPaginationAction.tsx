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
import { useIntl } from "umi";
import { ITablePaginationActionsProps } from "./table";
import { CPaginationItem } from "./table.style";
import React from 'react';

const TablePaginationActions: FC<ITablePaginationActionsProps> = ({
  count,
  page,
  rowsPerPage,
  onPageChange,
}) => {
  const translate = useIntl()
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

  const BtnTemplate = (btnText: string) => (
    <Box component={"span"} sx={{ textDecoration: "underline" }}>
      {btnText}
    </Box>
  );

  return (
    <Box sx={{ flexShrink: 0, ml: 2 }}>
      <Pagination
        count={calculatePagesCount(rowsPerPage, count)}
        size={"small"}
        variant={"outlined"}
        shape={"rounded"}
        page={page + 1}
        onChange={handleChange}
        renderItem={(params: PaginationRenderItemParams) => {
          return (
            <CPaginationItem
              components={{
                next: () => BtnTemplate(translate.formatMessage({ id: "nextPagination" })),
                previous: () => BtnTemplate(translate.formatMessage({ id: "previousPagination" })),
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
