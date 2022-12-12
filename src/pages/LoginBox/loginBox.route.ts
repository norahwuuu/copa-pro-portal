export const loginUrlObj = {
  login: "/login",
  forgotUsername: "/login/forgotUsername",
  forgotPassword: "/login/forgotPassword",
  forgotPasswordEmail: "/login/forgotPasswordEmail",
  recoverPassword: `/login/recoverPassword/:token`,
  changePassword: "/login/changePassword",
};

export default {
  path: "/login",
  component: "@/pages/LoginBox/loginBox.layout",
  routes: [
    {
      path: loginUrlObj.login,
      component: "@/pages/LoginBox/Login/login",
    },
    {
      path: loginUrlObj.forgotUsername,
      component: "@/pages/LoginBox/ForgotUsername/forgotUsername",
    },
    {
      path: loginUrlObj.forgotPassword,
      component: "@/pages/LoginBox/ForgotPassword/forgotPassword",
    },
    {
      path: loginUrlObj.forgotPasswordEmail,
      component: "@/pages/LoginBox/ForgotPassword/forgotPasswordEmail",
    },
    {
      path: loginUrlObj.recoverPassword,
      component: "@/pages/LoginBox/RecoverPassword/recoverPassword",
      exact: false
    },
    {
      path: loginUrlObj.changePassword,
      component: "@/pages/LoginBox/ChangePassword/changePassword",
    },

    // {
    //   path: "**", //No match redirect to default route
    //   redirect: "/",
    // },
  ],
};
