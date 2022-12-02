import { fetchPatientList } from "@/services/patient.service";
import { TABLE_CONFIG, TABLE_FILTER } from "./components/CTable/table.config";
import { PatientListModelType } from "./type";

const PatientListModel: PatientListModelType = {
  namespace: "patientListModal",
  state: {
    lists: [],
    resultType: "noRecords",
    totalRecords: 0,
    filters: {}

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
    updateFilter(state, { payload: { filters } }) {
      state.filters = { ...state.filters, ...filters }
      return { ...state };

    },
    resetFilter(state) {
      Object.keys(TABLE_FILTER).map((f) => {
        state.filters[f] = [] as string[]
        if (f === "sortBy") {
          state.filters[f] = [...TABLE_CONFIG.SORT_BY_DEFAULT];
        }
      })
      return { ...state };
    },
    setPatientList(state, { payload: { resultType, lists, totalRecords } }) {
      return { ...state, lists, totalRecords, resultType };
    },
  },
  //TODO: to be removed after api integartion
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname, query }) => {
        console.log("pathname....", pathname);
        console.log("query....", query);
      });
    },
  },
};

export default PatientListModel;
