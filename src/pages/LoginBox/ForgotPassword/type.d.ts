/**
 * description interface
 */

export interface ForgotPasswordParamsType {
  username: string;
}

export interface forgotPasswordProps {
  forgotPassword?: (arg: ForgotPasswordParamsType) => void;
}
export interface getResetInfoServerProps {
  recoveryToken: string;
}
