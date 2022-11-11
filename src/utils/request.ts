/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
// import { notification } from "antd";
import { extend } from "umi-request";

export interface ReponseMessage<T> {
  //   code: number;
  //   msg: string;
  data: T;
}

const codeMessage = {
  200: "The server successfully returned the requested data.", //服务器成功返回请求的数据。
  201: "Successfully created or modified data.", //新建或修改数据成功。
  202: "A request has entered the background queue (asynchronous task).", //一个请求已经进入后台排队（异步任务）。
  204: "Data deleted successfully.", //删除数据成功。
  400: "There was an error in the request sent. The server did not create or modify data.", //发出的请求有错误，服务器没有进行新建或修改数据的操作。
  401: "The user does not have permission (wrong token, user name and password).", //用户没有权限（令牌、用户名、密码错误）。
  403: "The user is authorized, but access is prohibited.", //用户得到授权，但是访问是被禁止的。
  404: "The request was made for a non-existent record, and the server did not operate.", //发出的请求针对的是不存在的记录，服务器没有进行操作。
  406: "The requested format is not available.", //请求的格式不可得。
  410: "The requested resource is permanently deleted and will not be obtained again.", //请求的资源被永久删除，且不会再得到的。
  422: "A validation error occurred while creating an object.", //当创建一个对象时，发生一个验证错误。
  500: "An error occurred on the server. Please check the server.", //服务器发生错误，请检查服务器。
  502: "Gateway error.", //网关错误。
  503: "The service is unavailable, and the server is temporarily overloaded or maintained.", //服务不可用，服务器暂时过载或维护。
  504: "Gateway timed out.", //网关超时。
};
type mapCode =
  | 200
  | 201
  | 202
  | 204
  | 400
  | 401
  | 403
  | 404
  | 406
  | 410
  | 422
  | 500
  | 502
  | 503
  | 504;

const requestWhite = [
  "/api/v1/authn",
  "/api/user-management/v1/forgot-password",
];
/**
 * 异常处理程序
 */
const errorHandler = ({ response }) => {
  if (response && response.status !== 200) {
    const errorText =
      codeMessage[response.status as mapCode] || response.statusText;
    const { status, url } = response;
    // if (url.indexOf('/file') !== -1) {
    //   message.error(errorText);
    // }
    // notification.error({
    //   message: `请求错误 ${status}: ${url}`,
    //   description: errorText,
    // });
    return false;
  }
  if (!response) {
    // notification.error({
    //   description: "您的网络发生异常，无法连接服务器",
    //   message: "网络异常",
    // });
    return false;
  }
  return response;
};

/**
 * 配置request请求时的默认参数
 */
let eRequest = extend({
  prefix: BASE_URL,
  errorHandler, // 默认错误处理
  credentials: "include", // 默认请求是否带上cookie
});

// 获取token
const getToken = async (url: string) => {
  if (requestWhite.indexOf(url) !== -1) {
    return true;
  }

  //   const token: API.TokenParams = JSON.parse(
  //     localStorage.getItem("token") || "{}"
  //   );
  //   if (token === {}) {
  //     return false;
  //   }
  //   const {
  //     accessToken,
  //     accessExpiration = 0,
  //     creatTime = 0,
  //     refreshExpiration = 0,
  //     refreshToken = "",
  //   } = token;
  //   const onlineTime = new Date().getTime() - creatTime;

  //   //  refresh token 过期
  //   if (
  //     (onlineTime > refreshExpiration && refreshExpiration !== 0) ||
  //     (refreshExpiration === 0 && onlineTime > accessExpiration)
  //   ) {
  //     return false;
  //   }

  //   // minute 大于0则需要进行一个判断
  //   if (minute) {
  //     const minuteStamp = minute * 60000;
  //     if (minuteStamp < onlineTime) {
  //       return false;
  //     }
  //     if (onlineTime > accessExpiration) {
  //       const newToken = await getRefreshToken(refreshToken);
  //       return newToken;
  //     }
  //   }
  //   // 走正常路线，并无超时限制
  //   if (onlineTime > accessExpiration) {
  //     const newToken = await getRefreshToken(refreshToken);
  //     return newToken;
  //   }

  //   return accessToken;
};

async function request<T>(
  url: string,
  options = {},
  urlPrefix = ""
): Promise<ReponseMessage<T>> {
  // const accessToken = await getToken(url);

  // if (!accessToken) {
  //   // history.push({ pathname: "/login" });
  //   // notification.error({
  //   //   message: getIntl().formatMessage({ id: "request.loginAgain" }),
  //   // });
  //   return false as never;
  // }
  if (!urlPrefix) {
    eRequest = extend({
      prefix: OKTA_URL,
      errorHandler, // 默认错误处理
    });
  } else {
    eRequest = extend({
      prefix: BASE_URL,
      errorHandler, // 默认错误处理
      credentials: "include", // 默认请求是否带上cookie
    });
  }
  return eRequest(url, {
    ...options,
    // headers: {
    //   "access-token": accessToken,
    // },
  });
}

// request拦截器, 改变url 或 options.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// eRequest.interceptors.request.use(async (url, options) => {});

// // response拦截器, 处理response
// eRequest.interceptors.response.use((response, options) => {
//   const { url } = response;
//   if (url.indexOf('/token/error') !== -1) {
//     history.replace('/login');
//     return;
//   }
//   // eslint-disable-next-line consistent-return
//   return response;
// });

export default request;
