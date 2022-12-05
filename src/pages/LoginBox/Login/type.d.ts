/**
 * description interface
 */
import { DefaultRootState } from "react-redux";
export interface LoginParamsType {
  username: string;
  password: string;
}
export interface LoginState {
  isShowLoginError: boolean;
}
export interface loginProps {
  loginUser: (arg: LoginParamsType) => void;
  isShowLoginError?: boolean;
}
export interface StoreProps extends DefaultRootState {
  loginSpace: LoginState;
}
