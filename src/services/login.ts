import { ForgotPasswordParamsType, getResetInfoServerProps } from "@/pages/LoginBox/ForgotPassword/type";
import { LoginParamsType } from "@/pages/LoginBox/Login/type";
import { authClient } from "@/utils/common";
import request from "@/utils/request";

export async function queryLogin(params: LoginParamsType) {
  return authClient.signInWithCredentials({ ...params });
}
export async function getWithoutPrompt(sessionToken: string) {
  return authClient.token.getWithoutPrompt({
    clientId: authClient.options.clientId,
    responseType: ["id_token", "token"],
    sessionToken: sessionToken,
    redirectUri: authClient.options.redirectUri,
  });
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
export async function getResetInfoServer(params: getResetInfoServerProps) {
  return request("/api/v1/authn/recovery/token", {
    method: "POST",
    data: { ...params },
  }, false
  );
}
