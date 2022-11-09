export const patientUrlObj = {
  createPatient: "/patient/new",
  overviewPatient: "/patient/overview",
  patientList: "/patient/list",
};

export default {
  path: "/patient",
  exact: false,
  component: "@/pages/Patient/patient",
  routes: [
    {
      path: patientUrlObj.patientList,
      component: "@/pages/Patient/List/list",
    },
    {
      path: patientUrlObj.createPatient,
      component: "@/pages/Patient/Create/create",
    },
    {
      path: patientUrlObj.overviewPatient,
      component: "@/pages/Patient/Overview/overview",
    },
  ],
};
