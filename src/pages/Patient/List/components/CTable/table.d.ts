import { ChangeEvent } from "react";
import { PatientListParams, ResultType } from "../../type";

export type IKeyValue = {
  [key: string]: string
}

export type IRow = {
  id: number;
  first_name: string;
  last_name: string;
  patient_dob: string;
  status: string;
  case_detail: string;
  order_status: string;
  dental_monitoring: string;
  last_monitoring: string;
};

export type IColumn = {
  name: string;
  translate: string;
  id: string;
  dataKey: string,
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
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: ChangeEvent<HTMLButtonElement | unknown>,
    newPage: number
  ) => void;
};

export type IFilterOption = {
  id: string,
  text: string,
}

export type IFilterChips = {
  [key: string]: string[]
}

export type IFilter = {
  name: string;
  id: string;
  type: "filter" | "sort";
  styleProps?: IKeyValue;
  options: IFilterOption[];
};

export type ITableParams = {
  lists: IRow[],
  updatePatientList: (payload: PatientListParams) => void,
  updateFilter: (payload: IFilterChips) => void,
  resetFilter: () => void,
  props: {
    resultType: ResultType;
    totalRecords: number;
    filters: IFilterChips
  }
}

export type ITableFilter = {
  filter: IFilter, filters: IFilterChips, updateFilters: (filter: IFilterChips) => void
}

export type ITableFilterChips = {
  chips: IFilterChips, resetFilter: () => void, updateFilters: (filter: IFilterChips) => void
}