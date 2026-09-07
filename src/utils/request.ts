/**
 * request: network request utility
 * See the API docs for details: https://github.com/umijs/umi-request
 */
// import { notification } from "antd";
import { history } from "umi";
import { extend } from "umi-request";

export interface ReponseMessage<T> {
    //   code: number;
    //   msg: string;
    data: T;
}

const codeMessage = {
    200: "The server successfully returned the requested data.",
    201: "Successfully created or modified data.",
    202: "A request has entered the background queue (asynchronous task).",
    204: "Data deleted successfully.",
    400: "There was an error in the request sent. The server did not create or modify data.",
    401: "The user does not have permission (wrong token, user name and password).",
    403: "The user is authorized, but access is prohibited.",
    404: "The request was made for a non-existent record, and the server did not operate.",
    406: "The requested format is not available.",
    410: "The requested resource is permanently deleted and will not be obtained again.",
    422: "A validation error occurred while creating an object.",
    500: "An error occurred on the server. Please check the server.",
    502: "Gateway error.",
    503: "The service is unavailable, and the server is temporarily overloaded or maintained.",
    504: "Gateway timed out.",
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
 * Exception handler
 */
const errorHandler = ({ response }) => {
    if (response && response.status !== 200) {
        const errorText =
            codeMessage[response.status as mapCode] || response.statusText;
        const { status, url } = response;
        if (status === 401 || status === 403 || status === 503) {
            localStorage.clear()
            //redirect to login page 
            history.push("/")
        }
        // if (url.indexOf('/file') !== -1) {
        //   message.error(errorText);
        // }
        // notification.error({
        //   message: `Request error ${status}: ${url}`,
        //   description: errorText,
        // });
        return false;
    }
    if (!response) {
        // notification.error({
        //   description: "A network exception occurred. Unable to connect to the server.",
        //   message: "Network exception",
        // });
        return false;
    }
    return response;
};

/**
 * Default parameters when configuring the request
 */
let eRequest = extend({
    prefix: BASE_URL,
    errorHandler, // default error handler
    credentials: "include", // whether to include cookies by default
});

// Get token
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

    //   // refresh token expired
    //   if (
    //     (onlineTime > refreshExpiration && refreshExpiration !== 0) ||
    //     (refreshExpiration === 0 && onlineTime > accessExpiration)
    //   ) {
    //     return false;
    //   }

    //   // if minute is greater than 0, a check is required
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
    //   // follow the normal path with no timeout restriction
    //   if (onlineTime > accessExpiration) {
    //     const newToken = await getRefreshToken(refreshToken);
    //     return newToken;
    //   }

    //   return accessToken;
};

async function request<T>(
    url: string,
    options = {},
    isPrefix = true
): Promise<ReponseMessage<T>> {
    // const accessToken = await getToken(url);

    if (isPrefix) {
        eRequest = extend({
            prefix: BASE_URL, //"https://apis.dev.oemaligner.com",
            errorHandler, // default error handler
        });
    } else {
        eRequest = extend({
            prefix: OKTA_URL, //"https://devsec.ulabsystems.net",
            errorHandler, // default error handler
            credentials: "include", // whether to include cookies by default
        });
    }
    return eRequest(url, {
        ...options,
        // headers: {
        //   "access-token": accessToken,
        // },
    });
}

// request interceptor, change url or options.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
eRequest.interceptors.request.use(async (url, options) => {
    const token = await localStorage.getItem("token") || null;
    if (token && url.includes("patient-mgmt/")) {
        const { accessToken } = JSON.parse(token)
        options.headers = {
            "Authorization": `Bearer ${accessToken}`
        }
    }
});


// // response interceptor, handle response
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
