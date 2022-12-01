/**
 *   CPagination: Each column render based on coulmn type in patient table list
 *   @param
 *     Row: row data
 *   @return
 *
 */

import { RowCenterAlign } from "@/theme/themen.util";
import { Box, TablePagination } from "@mui/material";
import { FC, MouseEvent, useEffect, useState } from "react";
import TablePaginationActions from "./cPaginationAction";
import { IPaginationProps } from "./table";
import React from 'react';

const CPagination: FC<IPaginationProps> = ({
  rowsPerPage,
  totalRecords,
  page,
  updatePage,
}) => {
  const [entries, setEntries] = useState<{ from: number; to: number }>({
    from: 0,
    to: 0,
  });

  useEffect(() => {
    const entry = (page + 1) * rowsPerPage;
    setEntries({
      from: page > 0 ? rowsPerPage * page + 1 : 1,
      to: entry > totalRecords ? totalRecords : entry,
    });
  }, [page, rowsPerPage]);

  const handleChangePage = (
    event: MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    page = newPage
    updatePage(newPage);
  };

  return (
    <Box
      component={"div"}
      sx={{
        ...RowCenterAlign,
        justifyContent: "space-between",
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
        {`Show ${entries?.from} of ${entries?.to} entries out of ${totalRecords}`}
      </Box>
      <Box>
        <TablePagination
          rowsPerPageOptions={[]} // rowsPerPageOptions={[10, 25, 100]}
          labelDisplayedRows={() => ""}
          component="div"
          count={totalRecords}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          ActionsComponent={TablePaginationActions}
        />
      </Box>
    </Box>
  );
};

export default CPagination;
