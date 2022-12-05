import { caseStatusType } from "../type";

interface ItemProps {
  title: string;
  dataSource:
    | any
    | Array<{
        name?: string;
        value: React.ReactNode | Element;
      }>;
  status?: caseStatusType;
}
interface InfoItemProps {
  dataSource: Array<{
    name?: string;
    value: React.ReactNode | Element;
  }>;
}
export const enum AchiveEnum {
  No = 1,
  Prospective = 2,
  Archived = 3,
}
interface PatientInfoProps {
  patientName: string;
  birthDate?: string;
  mobile?: string;
  email?: string;
  address?: string;
  avatar?: string;
  achiveStatus: AchiveEnum;
}

interface RecordsProps {
  isEdit: boolean;
  upper?: string;
  lower?: string;
  anterior?: string;
  xRay?: string;
  other?: string;
}
