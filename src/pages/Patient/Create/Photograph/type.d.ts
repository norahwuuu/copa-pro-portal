import { SxProps, Theme } from "@mui/material";
import { Effect, Reducer } from "umi";




export interface IImageBoxProps {
    id: string;
    title: string;
    imgBoxSxProps: SxProps<Theme>;
    isImageRequired?: boolean;
    imgPath: string | File;
    updateImagePath: React.Dispatch<React.SetStateAction<string | File>>;
}

export interface PatientRadiographProps {
    patientRadiographState: PatientRadiographState;
    updatePatientRadiograph: (payload: PatientRadiographState) => void
}

export type PatientRadiographState = {
    panorex: File | string,
    full_face: File | string,
    retracted_smile: File | string
}

export type PatientRadiographModelType = {
    namespace: "patientRadiographModel",
    state: PatientRadiographState;
    effects: {
        fetchPatientRadiograph: Effect
        updatePatientRadiograph: Effect
    };
    reducers: {
        setPatientRadiograph: Reducer<PatientRadiographState>,
    };
}