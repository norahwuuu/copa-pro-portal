import { fetchPatientList } from "@/services/patient.service";
import { constructQueryParams } from "./list.config";
import { PatientListModelType, PatientQueryparams } from "./type";

const PatientListModel: PatientListModelType = {
  namespace: "patientListModal",
  state: {
    lists: [],
    resultType: "noRecords",
    totalRecords: 0,
  },
  effects: {
    *fetchPatientList({ payload }, { call, put }) {
      let filterCount = 0;
      if (payload.filters) {
        Object.keys((payload.filters)).map((k) => {
          filterCount += payload.filters[k].length
        })
      }

      yield put({
        type: "setPatientList",
        payload: {
          resultType: "fetching",
          lists: [],
          totalRecords: 0,
        },
      });
      const userObj = localStorage.getItem("user");
      const { ulab_orgId } = JSON.parse(userObj)
      const params: PatientQueryparams = constructQueryParams(payload)
      try {
        const { result, paging } = yield call(fetchPatientList, params, ulab_orgId);
        if (result && result.length > 0) {
          yield put({
            type: "setPatientList",
            payload: {
              resultType: "records",
              lists: result,
              totalRecords: paging.total_count
            },
          });

        } else {
          if (filterCount > 1) {
            yield put({
              type: "setPatientList",
              payload: {
                resultType: "filterEmpty",
                lists: [],
                totalRecords: 0
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
  }
};

export default PatientListModel;
