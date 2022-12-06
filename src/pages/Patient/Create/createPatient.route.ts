export const createPatientUrlObj = {
  createPatientInformation: "/patients/new/information",
  createPatinetClinicalInformation: "/patients/new/clinicalinformation",
  createPatinetScans: "/patients/new/scans",
  createPatinetPhotograph: "/patients/new/photograph",
};

export default {
  path: "/patients/new",
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
