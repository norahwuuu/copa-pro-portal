export type statusDotType =
  | "ActiveIcon"
  | "ArchivedIcon"
  | "FailureIcon"
  | "PendingIcon"
  | "InCompleteIcon"
  | "InProgressIcon"
  | "WarningIcon"
  | "MisuseIcon"
  | "UnderReviewIcon"
  | "NotStartedIcon"
  | "UserIcon"
  | "ArrowUpIcon"
  | "ArrowDownIcon";

interface treatmentDataProps {
  stages: number;
  retainerDate: string;
  endDate: string;
}
interface dentalDataProps {
  status: string;
  date: string;
}
interface orderDataProps {
  status: string;
  date: string;
}

export interface PatientOverviewProps {
  treatmentData: treatmentDataProps;
  dentalData: dentalDataProps;
  orderData: orderDataProps;
  setAlert: Function;
}
