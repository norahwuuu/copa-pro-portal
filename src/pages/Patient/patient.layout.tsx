import Header from "@/components/Header/header";
import Text from "@/components/Text/text";
import { FC, ReactChildren } from "react";
import { history, useIntl, useLocation } from "umi";
import { createPatientUrlObj } from "./Create/createPatient.route";
import { patientUrlObj } from "./patient.route";

const PatientHeader: FC = () => {
  let title = "";
  const translate = useIntl();
  const location = useLocation();

  if (location.pathname.includes(patientUrlObj.createPatient)) {
    title = translate.formatMessage({ id: "newPatientHeader" });
    if (location.pathname === patientUrlObj.createPatient) {
      history.push(createPatientUrlObj.createPatientInformation);
    }
  } else if (location.pathname.includes(patientUrlObj.overviewPatient)) {
    title = translate.formatMessage({ id: "overviewPatientHeader" });
  } else if (location.pathname.includes(patientUrlObj.patientList)) {
    title = translate.formatMessage({ id: "patientListHeader" });
  }

  return (
    <Text variant="h3" color="inherit">
      {title}
    </Text>
  );
};

const Patient: FC<{ children: ReactChildren }> = ({ children }) => {
  return (
    <>
      <Header>
        <PatientHeader />
      </Header>
      {children}
    </>
  );
};

export default Patient;
