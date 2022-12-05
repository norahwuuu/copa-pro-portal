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

export type caseStatusType = "temp" | "inProgress" | "review" | "archived";
interface treatmentDataProps {
  stages: number;
  retainerDate: string;
  endDate: string;
}
interface treatmentProps extends treatmentDataProps {
  caseStatus: caseStatusType;
  notePopup: Function;
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
  caseStatus: caseStatusType;
}
