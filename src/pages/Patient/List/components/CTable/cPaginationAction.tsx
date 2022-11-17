import { Box, Pagination, PaginationRenderItemParams } from "@mui/material";
import { ChangeEvent, FC } from "react";
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
};

export default TablePaginationActions;
