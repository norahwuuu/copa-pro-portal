import { ChangeEvent } from "react";

export type IRow = {
  id: number;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  patientStatus: string;
  caseDetails: string;
  orderSatus: string;
  dentalMonitoring: string;
  lasMonitoringScan: string;
};

export type IColumn = {
  name: string;
  translate: string;
  id: string;
  cell?: {
    [key: string]: unknown;
  };
};

export type IPaginationProps = {
  rowsPerPage: number;
  totalRecords: number;
  page: number;
  updatePage: (value: number) => void;
};

export type ITablePaginationActionsProps = {
  count: number;
  rowsPerPage: number;
  onPageChange: (
    event: ChangeEvent<HTMLButtonElement | unknown>,
    newPage: number
  ) => void;
};
