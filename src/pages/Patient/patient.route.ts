import newPatientRoute from "./Create/createPatient.route";

export const patientUrlObj = {
  createPatient: "/patients/new",
  overviewPatient: "/patients/overview",
  patientList: "/patients",
};

export default {
  path: "/patients",
  component: "@/pages/Patient/patient.layout",
  wrappers: [
    '@/wrappers/auth',
  ],
  routes: [
    {
      path: patientUrlObj.patientList,
      component: "@/pages/Patient/List/list",
    },
    { ...newPatientRoute },
    {
      path: patientUrlObj.overviewPatient,
      component: "@/pages/Patient/Overview/overview",
    },
    {
      path: "**", //No match redirect to default route
      redirect: patientUrlObj.patientList,
    },
  ],
};
