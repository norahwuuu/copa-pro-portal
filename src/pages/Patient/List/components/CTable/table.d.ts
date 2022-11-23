import { ChangeEvent } from "react";

export type IKeyValue = {
  [key: string]: string
}

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

export type IFilterOption = {
  id: string,
  text: string
}

export type IFilter = {
  name: string;
  id: string;
  type: "filter" | "sort";
  styleProps?: IKeyValue;
  options: IFilterOption[];
};