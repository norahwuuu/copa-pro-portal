import patientRoute from "./src/pages/Patient/patient.route";
export default [
  {
    path: "/",
    component: "@/layouts/layouts",
    routes: [
      { path: "/", component: "@/pages/Login/login" },
      // { path: "/patients", component: "@/pages/Patients/patients" },
      {
        name: "forgotUsername",
        path: "/login/forgotUsername",
        component: "@/pages/Login/ForgotUsername/forgotUsername",
      },
      {
        name: "forgotPassword",
        path: "/login/forgotPassword",
        component: "@/pages/Login/ForgotPassword/forgotPassword",
      },
      {
        name: "forgotPasswordEmail",
        path: "/login/forgotPasswordEmail",
        component: "@/pages/Login/ForgotPassword/forgotPasswordEmail",
      },
      {
        name: "recoverPassword",
        path: "/login/recoverPassword",
        component: "@/pages/Login/RecoverPassword/recoverPassword",
      },
      {
        name: "changePassword",
        path: "/login/changePassword",
        component: "@/pages/Login/ChangePassword/changePassword",
      },
      { ...patientRoute },
      {
        path: "/example",
        component: "@/pages/Components/components",
      },
    ],
  },
];
