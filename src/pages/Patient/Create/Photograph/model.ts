import { PatientRadiographModelType } from "./type";


const PatientRadiographModel: PatientRadiographModelType = {
    namespace: "patientRadiographModel",
    state: {
        panorex: "",
        full_face: "",
        retracted_smile: ""
    },
    effects: {
        //TODO: Once API ready  we can integarte 
        *fetchPatientRadiograph({ payload }, { call, put }) {
            yield put({
                type: "setPatientRadiograph",
                payload: {
                    panorex: "",
                    full_face: "",
                    retracted_smile: ""
                },
            });
            console.log("Can Enable once API Ready", payload);
        },
        //TODO: Once API ready  we can integarte 
        *updatePatientRadiograph({ payload }, { call, put }) {
            yield put({
                type: "setPatientRadiograph",
                payload: {
                    panorex: "",
                    full_face: "",
                    retracted_smile: ""
                },
            });
            console.log("Can Enable once API Ready", payload);
            yield put({
                type: "setPatientRadiograph",
                payload: {
                    panorex: "",
                    full_face: "",
                    retracted_smile: ""
                },
            });

        }
    },
    reducers: {
        setPatientRadiograph(state, { payload: { panorex, full_face, retracted_smile } }) {
            return { ...state, panorex, full_face, retracted_smile };
        },
    }
};

export default PatientRadiographModel;
