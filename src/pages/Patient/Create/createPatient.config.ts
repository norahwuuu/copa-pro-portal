import { createPatientUrlObj } from "./createPatient.route";

export const navItems = [
  {
    id: "patientinformation",
    path: createPatientUrlObj.createPatientInformation,
    translate: "patientInformationMenu",
  },
  {
    id: "clinicalinformation",
    path: createPatientUrlObj.createPatinetClinicalInformation,
    translate: "clinicalInformationMenu",
  },
  {
    id: "scans",
    path: createPatientUrlObj.createPatinetScans,
    translate: "scanMenu",
  },
  {
    id: "photograph",
    path: createPatientUrlObj.createPatinetPhotograph,
    translate: "radiographAndPhotographMenu",
  },
];
