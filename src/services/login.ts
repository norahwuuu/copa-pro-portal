import request from "@/utils/request";
import { LoginParamsType } from "./type";

export async function queryLogin(params: LoginParamsType) {
  return request("/api/v1/authn", {
    method: "POST",
    data: { ...params },
  });
}
