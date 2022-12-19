/**
 * description interface
 */

export interface resetPasswordParamsType {
  username: string;
  reset_password_token: string;
  okta_user_id: string;
  password: string;
  answer: string;
  state_token: string;
}
export interface resetInfoParamsType {
  stateToken: string,
  question: string,
  useId: string,
  usesname: string
  errorSummary?: String;
}

export interface recoverProps {
  resetPassword?: (arg: resetPasswordParamsType) => void;
  resetPasswordData: resetInfoParamsType
  getResetInfo: any
}
