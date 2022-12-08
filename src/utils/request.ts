import { history } from "umi";
import { extend, RequestInterceptor, RequestOptionsInit, ResponseError } from "umi-request";



//TODO: We can enable in future

// const codeMessage = {
//     200: "The server successfully returned the requested data.", //服务器成功返回请求的数据。
//     201: "Successfully created or modified data.", //新建或修改数据成功。
//     202: "A request has entered the background queue (asynchronous task).", //一个请求已经进入后台排队（异步任务）。
//     204: "Data deleted successfully.", //删除数据成功。
//     400: "There was an error in the request sent. The server did not create or modify data.", //发出的请求有错误，服务器没有进行新建或修改数据的操作。
//     401: "The user does not have permission (wrong token, user name and password).", //用户没有权限（令牌、用户名、密码错误）。
//     403: "The user is authorized, but access is prohibited.", //用户得到授权，但是访问是被禁止的。
//     404: "The request was made for a non-existent record, and the server did not operate.", //发出的请求针对的是不存在的记录，服务器没有进行操作。
//     406: "The requested format is not available.", //请求的格式不可得。
//     410: "The requested resource is permanently deleted and will not be obtained again.", //请求的资源被永久删除，且不会再得到的。
//     422: "A validation error occurred while creating an object.", //当创建一个对象时，发生一个验证错误。
//     500: "An error occurred on the server. Please check the server.", //服务器发生错误，请检查服务器。
//     502: "Gateway error.", //网关错误。
//     503: "The service is unavailable, and the server is temporarily overloaded or maintained.", //服务不可用，服务器暂时过载或维护。
//     504: "Gateway timed out.", //网关超时。
//   };
//   type mapCode =
//     | 200
//     | 201
//     | 202
//     | 204
//     | 400
//     | 401
//     | 403
//     | 404
//     | 406
//     | 410
//     | 422
//     | 500
//     | 502
//     | 503
//     | 504;

/**
 * 异常处理程序
 */
const errorHandler = (error: ResponseError) => {
    if (error.response) {
        const { status } = error.response;
        if (status === 401 || status === 403) {
            localStorage.clear()
            //redirect to login page 
            history.push("/")
        }

        //TODO we can remove console logs later 
        console.error(error.response.status);
        console.error(error.response.headers);
        console.error(error.data);
        console.error(error.request);
    } else {
        console.error(error.message);
    }

    throw error;
};


const requestInterceptorHandler = async (url: string, options: RequestOptionsInit) => {
    const token = await localStorage.getItem("token") || null;
    if (token && url.includes("/api/patient-mgmt/")) {
        const { accessToken } = JSON.parse(token)
        options.headers = {
            "Authorization": `Bearer ${accessToken}`
        }
    }
}

let eRequest = extend({
    prefix: BASE_URL,
    errorHandler, // 默认错误处理
    credentials: "include", // 默认请求是否带上cookie
});


eRequest.interceptors.request.use(requestInterceptorHandler as RequestInterceptor);

// response拦截器, 处理response
// eRequest.interceptors.response.use((response, options) => {
//   const { url } = response;
//   if (url.indexOf('/token/error') !== -1) {
//     history.replace('/login');
//     return;
//   }
//   // eslint-disable-next-line consistent-return
//   return response;
// });

const request = (url: string,
    options = {},
    isPrefix = true) => {

    if (isPrefix) {
        eRequest = extend({ prefix: BASE_URL, errorHandler });
    } else {
        eRequest = extend({ prefix: OKTA_URL, errorHandler });
    }
    return eRequest(url, { ...options, });
}



export default request;