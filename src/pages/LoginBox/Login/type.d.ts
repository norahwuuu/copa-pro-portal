/**
 * description interface
 */
export interface LoginParamsType {
  username: string;
  password: string;
}
export interface LoginState {
  isShowLoginError: boolean;
}
export interface loginProps {
  loginUser?: (arg: LoginParamsType) => void;
  isShowLoginError?: boolean;
}
export interface ForgotPasswordParamsType {
  username: string;
}
