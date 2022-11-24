import { ForgotPasswordParamsType } from "@/pages/LoginBox/ForgotPassword/type";
import { LoginParamsType } from "@/pages/LoginBox/Login/type";
import request from "@/utils/request";

export async function queryLogin(params: LoginParamsType) {
  return request(
    "/api/v1/authn",
    {
      method: "POST",
      data: { ...params },
    },
    false
  );
}
export async function forgotPasswordServer(params: ForgotPasswordParamsType) {
  return request("/user-mgmt/v1/authn/forgot-password/", {
    method: "PUT",
    data: { ...params },
  });
}
export async function resetPasswordServer(params: ForgotPasswordParamsType) {
  return request("/user-mgmt/v1/authn/reset-password/", {
    method: "PUT",
    data: { ...params },
  });
}
