import { ForgotPasswordParamsType, LoginParamsType } from "@/pages/Login/type";
import request from "@/utils/request";

export async function queryLogin(params: LoginParamsType) {
  return request("/api/v1/authn", {
    method: "POST",
    data: { ...params },
  });
}
export async function forgotPasswordServer(params: ForgotPasswordParamsType) {
  return request("/user-management/v1/forgot-password", {
    method: "PUT",
    data: { ...params },
  });
}
