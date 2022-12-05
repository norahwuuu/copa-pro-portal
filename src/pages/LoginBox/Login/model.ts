import { patientUrlObj } from "@/pages/Patient/patient.route";
import {
  forgotPasswordServer,
  getWithoutPrompt,
  queryLogin,
  resetPasswordServer,
} from "@/services/login";
import { authClient } from "@/utils/common";
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
      try {
        const { status, sessionToken } = yield call(queryLogin, payload);
        if (status === "SUCCESS") {
          const { tokens } = yield call(getWithoutPrompt, sessionToken);
          authClient.tokenManager.setTokens(tokens);
          localStorage.token = JSON.stringify(tokens.accessToken);
          localStorage.idToken = JSON.stringify(tokens.idToken);
          history.push({ pathname: patientUrlObj.patientList });
        } else if (status === "LOCKED_OUT") {
          yield put({
            type: "setData",
            payload: {
              isShowLoginError: true,
            },
          });
        } else {
          yield put({
            type: "setData",
            payload: {
              isShowLoginError: true,
            },
          });
        }
      } catch (err) {
        yield put({
          type: "setData",
          payload: {
            isShowLoginError: true,
          },
        });
        console.log(err);
      }
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
