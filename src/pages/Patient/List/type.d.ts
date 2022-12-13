import { Effect, Reducer, Subscription } from "umi";
import { IRow } from "./components/CTable/table";


export type ResultType = 'noRecords' | "filterEmpty" | "fetching" | "records";

export interface PatientListState {
    lists: IRow[],
    resultType: ResultType,
    totalRecords: number
}

export interface PatientListParams {
    page: number,
    rowsPerPage: number,
    filters: {
        [key: string]: string[]
    },
    search?: string


}

export interface PatientListModelType {
    namespace: "patientListModal",
    state: PatientListState;
    effects: {
        fetchPatientList: Effect
    };
    reducers: {
        setPatientList: Reducer<PatientListState>,
    };
}

export interface PatientListProps {
    patientListState: PatientListState;
    fetchPatients: (payload: PatientListParams) => void
    updateFilter: (payload: PatientListParams) => void
    resetFilter: () => void
}


export interface PatientQueryparams {
    sort_by?: string,
    sort_type?: string,
    order_status?: string,
    dental_monitoring?: string,
    case_detail?: string,
    status?: string,
    page: number,
    page_size: number,
    search: string
}
