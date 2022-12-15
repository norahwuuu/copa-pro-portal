import {
  forgotPasswordServer,
  getResetInfoServer,
  getWithoutPrompt,
  queryLogin,
  resetPasswordServer,
} from "@/services/login";
import { authClient } from "@/utils/common";
import type { Effect, Reducer } from "umi";
import { history } from "umi";
import { LoginState } from "./type";

export interface LoginModelType {
  namespace: "loginSpace";
  state: LoginState;
  effects: {
    login: Effect;
    forgotPassword: Effect;
    resetPassword: Effect;
    getResetInfo: Effect;
  };
  reducers: {
    setData: Reducer<LoginState>;
  };
}

const MainModel: LoginModelType = {
  namespace: "loginSpace",
  state: {
    isShowLoginError: false,
    resetPasswordData: {
      stateToken: '',
      question: '',
      useId: '',
      usesname: '',
      errorSummary: ''
    }
  },

  effects: {
    * login({ payload, cb }, { call, put }) {
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
          cb();
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
    * forgotPassword({ payload }, { call }) {
      const { response_code } = yield call(forgotPasswordServer, payload);
      if (response_code === 200) {
        history.push("/login/forgotPasswordEmail");
      }
      return;
    },
    * resetPassword({ payload }, { call, put }) {
      try {
        const { response_code } = yield call(resetPasswordServer, payload);
        if (response_code === 200) {
          history.push("/");
        } else {
          yield put({
            type: "setData",
            payload: {
              resetPasswordData: {
                errorSummary: 'username, okta_user_id, state_token, answer and password has to be provided in request...'
              },
            },
          });
        }
      } catch (err) {
        console.log('err: ', err);
        yield put({
          type: "setData",
          payload: {
            resetPasswordData: {
              errorSummary: ''
            },
          },
        });
      }
      return;
    },
    *getResetInfo({ payload }, { call, put }) {
      try {
        const {
          stateToken,
          _embedded,
          status,
          errorSummary
        } =
          yield call(getResetInfoServer, payload)
        const question = _embedded.user.recovery_question.question
        const useId = _embedded.user.id
        const usesname = _embedded.user.profile.login
        if (status === "RECOVERY") {
          yield put({
            type: "setData",
            payload: {
              resetPasswordData: {
                stateToken,
                question,
                useId,
                usesname
              },
            },
          });
        } else {
          yield put({
            type: "setData",
            payload: {
              resetPasswordData: {
                errorSummary: 'You have accessed an account recovery link that has expired or been previously used.'
              },
            },
          });
        }
      } catch {
        yield put({
          type: "setData",
          payload: {
            resetPasswordData: {
              errorSummary: 'You have accessed an account recovery link that has expired or been previously used.'
            },
          },
        });
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