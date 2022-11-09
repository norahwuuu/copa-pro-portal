import accountRoute from "./src/pages/Account/account.route";
import patientRoute from "./src/pages/Patient/patient.route";
import treatmentPlanRoute from "./src/pages/TreatmentPlan/treatmentPlan.route";
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
      { ...treatmentPlanRoute },
      { ...accountRoute },
      {
        path: "/example",
        component: "@/pages/Components/components",
      },
      {
        path: "**", //No match redirect to default route
        redirect: "/",
      },
    ],
  },
];
