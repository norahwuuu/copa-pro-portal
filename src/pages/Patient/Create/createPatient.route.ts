export const createPatientUrlObj = {
  createPatientInformation: "/patient/new/information",
  createPatinetClinicalInformation: "/patient/new/clinicalinformation",
  createPatinetScans: "/patient/new/scans",
  createPatinetPhotograph: "/patient/new/photograph",
};

export default {
  path: "/patient/new",
  component: "@/pages/Patient/Create/createPatient.layout",
  routes: [
    {
      path: createPatientUrlObj.createPatientInformation,
      component: "@/pages/Patient/Create/PatientInformation/patientInformation",
    },
    {
      path: createPatientUrlObj.createPatinetClinicalInformation,
      component:
        "@/pages/Patient/Create/ClinicalInformation/clinicalInformation",
    },
    {
      path: createPatientUrlObj.createPatinetScans,
      component: "@/pages/Patient/Create/Scans/scans",
    },
    {
      path: createPatientUrlObj.createPatinetPhotograph,
      component: "@/pages/Patient/Create/Photograph/photograph",
    },
    {
      path: "**",
      redirect: createPatientUrlObj.createPatientInformation,
    },
  ],
};
