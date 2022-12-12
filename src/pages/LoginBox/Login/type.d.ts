/**
 * description interface
 */
import { DefaultRootState } from "react-redux";
import { resetInfoParamsType } from "../RecoverPassword/type";
export interface LoginParamsType {
  username: string;
  password: string;
}
export interface LoginState {
  isShowLoginError: boolean;
  resetPasswordData: resetInfoParamsType
}
export interface loginProps {
  loginUser: (arg: LoginParamsType) => void;
  isShowLoginError?: boolean;
}
export interface StoreProps extends DefaultRootState {
  loginSpace: LoginState;
}
