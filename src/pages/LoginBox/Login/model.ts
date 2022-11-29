import {
  forgotPasswordServer,
  queryLogin,
  resetPasswordServer,
} from "@/services/login";
import type { Effect, Reducer } from "umi";
import { history } from "umi";

export interface LoginState {
  isShowLoginError: boolean;
}
export interface LoginModelType {
  namespace: "loginSpace";
  state: LoginState;
  effects: {
    login: Effect;
    forgotPassword: Effect;
    resetPassword: Effect;
  };
  reducers: {
    setData: Reducer<LoginState>;
  };
}

const MainModel: LoginModelType = {
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
        history.push("/patient/list");
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
    *forgotPassword({ payload }, { call }) {
      const { response_code } = yield call(forgotPasswordServer, payload);
      if (response_code === 200) {
        history.push("/login/forgotPasswordEmail");
      }
      return;
    },
    *resetPassword({ payload }, { call }) {
      const { response_code } = yield call(resetPasswordServer, payload);
      if (response_code === 200) {
        history.push("/");
      }
      return;
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
