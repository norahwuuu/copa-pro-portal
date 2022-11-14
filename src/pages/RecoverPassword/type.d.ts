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

export interface recoverProps {
  resetPassword: (arg: resetPasswordParamsType) => void;
}
