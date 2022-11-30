import { fetchPatientList } from "@/services/patient.service";
import { PatientListModelType } from "./type";


const PatientListModel: PatientListModelType = {
    namespace: "patientListModal",
    state: {
        lists: [],
        resultType: "noRecords",
        totalRecords: 0,
    },
    effects: {
        *fetchPatientList({ payload }, { call, put }) {
            yield put({
                type: "setPatientList",
                payload: {
                    resultType: "fetching",
                    lists: [],
                    totalRecords: 0,
                },
            });
            try {
                const { totalRecords, data } = yield call(fetchPatientList, payload);
                if (totalRecords > 0) {
                    yield put({
                        type: "setPatientList",
                        payload: {
                            resultType: "records",
                            lists: data,
                            totalRecords
                        },
                    });

                } else {
                    yield put({
                        type: "setPatientList",
                        payload: {
                            resultType: "noRecords",
                            lists: [],
                            totalRecords: 0
                        },
                    });
                }
            } catch (e) {
                console.log(".catch error ", e)
            }

        }
    },
    reducers: {
        setPatientList(state, { payload: { resultType, lists, totalRecords } }) {
            return { ...state, lists, totalRecords, resultType };
        },
    },
    //TODO: to be removed after api integartion
    subscriptions: {
        setup({ dispatch, history }) {
            return history.listen(({ pathname, query }) => {
                console.log("pathname....", pathname)
                console.log("query....", query)

            });
        },
    },


}



export default PatientListModel;