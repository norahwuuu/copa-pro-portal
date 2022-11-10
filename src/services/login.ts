import { LoginParamsType } from "@/pages/Login/type";
import request from "@/utils/request";
export async function queryLogin(params: LoginParamsType) {
  return request("/api/v1/authn", {
    method: "POST",
    data: { ...params },
  });
}
