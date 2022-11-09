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
        component: "@/pages/ForgotUsername/forgotUsername",
      },
      {
        name: "forgotPassword",
        path: "/login/forgotPassword",
        component: "@/pages/ForgotPassword/forgotPassword",
      },
      {
        name: "forgotPasswordEmail",
        path: "/login/forgotPasswordEmail",
        component: "@/pages/ForgotPassword/forgotPasswordEmail",
      },
      {
        name: "recoverPassword",
        path: "/login/recoverPassword",
        component: "@/pages/RecoverPassword/recoverPassword",
      },
      {
        name: "changePassword",
        path: "/login/changePassword",
        component: "@/pages/ChangePassword/changePassword",
      },
      { ...patientRoute },
      {
        path: "/example",
        component: "@/pages/Components/components",
      },
    ],
  },
];
