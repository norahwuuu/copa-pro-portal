import accountRoute from "./src/pages/Account/account.route";
import loginLayoutRoute from "./src/pages/LoginBox/loginBox.route";
import patientRoute from "./src/pages/Patient/patient.route";
import treatmentPlanRoute from "./src/pages/TreatmentPlan/treatmentPlan.route";
export default [
  {
    path: "/",
    component: "@/layouts/layouts",
    routes: [
      { ...loginLayoutRoute },
      // { path: "/patients", component: "@/pages/Patients/patients" },

      { ...patientRoute },
      { ...treatmentPlanRoute },
      { ...accountRoute },
      {
        path: "/example",
        component: "@/pages/Components/components",
      },
      {
        path: "**", //No match redirect to default route
        redirect: "/login",
      },
    ],
  },
];
