import request from "@/utils/request";
export interface LoginParamsType {
  login: string;
  password: string;
}

export async function queryLogin(params: LoginParamsType) {
  return request("/api/v1/authn", {
    method: "POST",
    data: { ...params },
  });
}
