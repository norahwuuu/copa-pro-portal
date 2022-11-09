import { queryLogin } from "@/services/login";
import type { Effect, Reducer } from "umi";

export interface loginObj {
  username?: string;
  password?: string;
}
export interface LoginState {
  isShowLoginError: boolean;
}
export interface MainModelType {
  namespace: "loginSpace";
  state: LoginState;
  effects: {
    login: Effect;
  };
  reducers: {
    setData: Reducer<LoginState>;
  };
}

const MainModel: MainModelType = {
  namespace: "loginSpace",
  state: {
    isShowLoginError: false,
  },

  effects: {
    *login({ payload }, { call, put }) {
      yield put({
        type: "setData",
        payload: {
          isShowLoginError: false,
        },
      });
      const { status, expiresAt, sessionToken, _embedded, _links } = yield call(
        queryLogin,
        payload
      );
      if (status === "SUCCESS") {
        alert("login success!");
      } else {
        yield put({
          type: "setData",
          payload: {
            isShowLoginError: true,
          },
        });
      }
      return { status, expiresAt, sessionToken, _embedded, _links };
    },
  },
  reducers: {
    setData(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default MainModel;
