import Text from "@/components//Text/text";
import Header from "@/components/Header/header";
import { FC, ReactChildren } from "react";
import { useIntl, useLocation } from "umi";
import { patientUrlObj } from "./patient.route";

const PatientHeader: FC = () => {
  let title = "";
  const translate = useIntl();
  const location = useLocation();

  switch (location.pathname) {
    case patientUrlObj.createPatient: {
      title = translate.formatMessage({ id: "newPatientHeader" });
      break;
    }
    case patientUrlObj.overviewPatient: {
      title = translate.formatMessage({ id: "overviewPatientHeader" });
      break;
    }
    case patientUrlObj.patientList: {
      title = translate.formatMessage({ id: "patientListHeader" });
      break;
    }
  }

  return (
    <Text variant="h3" color="inherit" sxProp={{ flexGrow: 1 }}>
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
