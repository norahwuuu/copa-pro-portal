/**
 * description interface
 */

export interface ForgotPasswordParamsType {
  username: string;
}

export interface forgotPasswordProps {
  forgotPassword: (arg: ForgotPasswordParamsType) => void;
}
