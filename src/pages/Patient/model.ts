import type { ReactElement } from "react";
import type { Effect, Reducer, Subscription } from "umi";

enum Type {
  ErrorIcon,
}
export interface AlertModelState {
  isAlert: boolean;
  method?: string;
  title?: { text: string; subText?: string; sxProps: object };
  content?: ReactElement | string;
  btnList?: Array<ReactElement>;
}
export interface AlertModelType {
  namespace: "alert";
  state: AlertModelState;
  effects: {
    setAlert: Effect;
  };
  reducers: {
    onSuccess: Reducer<AlertModelState>;
  };
  subscriptions: { setup: Subscription };
}
const AlertModel: AlertModelType = {
  namespace: "alert",
  state: {
    isAlert: false,
    method: Type[0],
    btnList: [],
    title: { text: "", sxProps: { color: "primary", variant: "h6" } },
    content: "",
  },
  effects: {
    *setAlert({ payload }, { put }) {
      yield put({
        type: "onSuccess",
        payload: { ...payload },
      });
    },
  },
  reducers: {
    onSuccess(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
  subscriptions: {
    setup({ dispatch, history }) {
      return history.listen(({ pathname }) => {
        dispatch({
          type: "setAlert",
          payload: {
            isAlert: false,
            btnList: [],
            text: "",
            method: Type[0],
          },
        });
      });
    },
  },
};
export default AlertModel;
