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
    rowsPerPage: number
}

export interface PatientListModelType {
    namespace: "patientListModal";
    state: PatientListState;
    effects: {
        fetchPatientList: Effect;
    };
    reducers: {
        setPatientList: Reducer<PatientListState>;
    };
    subscriptions: {
        setup: Subscription
    }

}

export interface PatientListProps {
    patientListState: PatientListState;
    fetchPatients: (payload: PatientListParams) => void
}

