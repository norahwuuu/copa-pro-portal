export const PATIENT_STATUS = {
  PROSPECTIVE: "Prospective",
  PENDING: "Pending",
  REJECTED: "Rejected",
  ACTIVE: "Active",
  COMPLETED: "Completed",
  ARCHIVED: "Archived",
};

export const CASE_DETAILS = {
  AWAITING_PATIENT_PAYMENT: "Awaiting patient payment",
  PATIENT_DECISION_PENDING: "Patient decision pending",
  TEMPORARY_HEALTH_ISSUE: "Temporary health issue",
  NEEDS_CLEANING: "Needs cleaning",
  AWAITING_DOCTOR_APPROVAL: "Awaiting doctor approval",
  UNDER_QUALITY_CHECK: "Under quality check",
  NEEDS_DOCTOR_REVIEW: "Needs doctor review",
  CASE_TOO_COMPLEX: "Case too complex",
  PATIENT_DECLINED: "Patient declined",
  PERMANENT_HEALTH_ISSUE: "Permanent health issue",
};

export const PATIENT_STATUS_CASE_MAP = {
  Prospective: [
    CASE_DETAILS.AWAITING_PATIENT_PAYMENT,
    CASE_DETAILS.PATIENT_DECISION_PENDING,
    CASE_DETAILS.TEMPORARY_HEALTH_ISSUE,
    CASE_DETAILS.NEEDS_CLEANING,
  ],
  Pending: [
    CASE_DETAILS.AWAITING_DOCTOR_APPROVAL,
    CASE_DETAILS.UNDER_QUALITY_CHECK,
    CASE_DETAILS.NEEDS_DOCTOR_REVIEW,
  ],
  Rejected: [
    CASE_DETAILS.CASE_TOO_COMPLEX,
    CASE_DETAILS.PATIENT_DECLINED,
    CASE_DETAILS.PERMANENT_HEALTH_ISSUE,
  ],
  Active: [],
  Completed: [],
  Archived: [],
};

export const columnKeys = {
  CASE_DETAILS: "caseDetails",
  PATIENT_STATUS: "patientStatus",
};

export const tableData = {
  columnDef: [
    {
      name: "id",
      id: "id",
    },
    {
      name: "Last name",
      id: "lastName",
      cell: {
        style: {
          fontWeight: "bold !important",
        },
      },
    },
    {
      name: "First name",
      id: "firstName",
      cell: {
        style: {
          fontWeight: "bold !important",
        },
      },
    },
    {
      name: "Date of birth",
      id: "dateOfBirth",
    },
    {
      name: "Patient Status",
      id: columnKeys.PATIENT_STATUS,
      cell: {
        style: {
          background: "#F8F8F8 0% 0% no-repeat padding-box",
        },
      },
    },
    {
      name: "Case Details",
      id: columnKeys.CASE_DETAILS,
      cell: {
        style: {
          background: "#F8F8F8 0% 0% no-repeat padding-box",
        },
      },
    },
    {
      name: "Order status",
      id: "orderSatus",
      cell: {
        style: {
          background: "#F8F8F8 0% 0% no-repeat padding-box",
        },
      },
    },
    {
      name: "Dental monitoring",
      id: "dentalMonitoring",
    },
    {
      name: "Last monitoring Scan",
      id: "lasMonitoringScan",
    },
  ],
};
