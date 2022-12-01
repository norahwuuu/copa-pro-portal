/**
 *   table config: Patinet table configuration
 *   @param
 *     row: row data
 *   @return
 *
 */

export const TABLE_CONFIG = {
  NO_OF_ROWS: 10,
  NO_OF_ROWS_LARGE_DEVICE: 15,
  SORT_BY_DEFAULT: ["lastModifiedDate"]
};

export const PATIENT_STATUS = {
  PROSPECTIVE: "Prospective",
  PENDING: "Pending",
  REJECTED: "Rejected",
  ACTIVE: "Active",
  COMPLETED: "Completed",
  ARCHIVED: "Archived",
};

export const ORDER_STATUS = {
  IN_PRODUCTION: "In production",
  SHIPPED: "Shipped",
  DELIVERED: "Delivered",
  RETAINERS_SENT: "Retainers sent",
};

export const DENTAL_MONITORING_STATUS = {
  NOT_STARTED: "Not started",
  TRACKING: "Tracking",
  NOT_TRACKING: "Not tracking",
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


export const TABLE_FILTER = {
  "patientStatus": {
    id: "patientStatus",
    name: "Patient Staus",
    type: "filter",
    styleProps: {
      minWidth: "160px"
    },
    options: [{
      id: "all",
      text: "View all"
    }, {
      id: "active",
      text: "Active"
    }, {
      id: "completed",
      text: "Completed"
    }, {
      id: "prospective",
      text: "Prospective"
    }, {
      id: "pending",
      text: "Pending"
    }, {
      id: "rejected",
      text: "Rejected"
    }, {
      id: "archived",
      text: "Archived"
    }]

  },
  "caseDetails": {
    id: "caseDetails",
    name: "Case details",
    type: "filter",
    styleProps: {
      minWidth: "210px"
    },
    options: [{
      id: "all",
      text: "View all"
    }, {
      id: "awaitingDoctorApproval",
      text: "Awaiting doctor approval"
    }, {
      id: "awaitingPayment",
      text: "Awaiting payment"
    }, {
      id: "decisionPending",
      text: "Decision pending"
    }, {
      id: "needsDoctorReview",
      text: "Needs doctor review"
    }, {
      id: "patientDeclined",
      text: "Patient declined"
    }, {
      id: "tooComplex",
      text: "Too complex"
    }, {
      id: "underQualityCheck",
      text: "Under quality check"
    }]
  },
  "orderStatus": {
    id: "orderStatus",
    type: "filter",
    name: "Order status",
    styleProps: {
      minWidth: "160px"
    },
    options: [{
      id: "all",
      text: "View all"
    }, {
      id: "delivered",
      text: "Delivered"
    }, {
      id: "inProduction",
      text: "In Production"
    }, {
      id: "retainersSent",
      text: "Retainers sent"
    }, {
      id: "shipped",
      text: "Shipped"
    }]

  },
  "dentalMonitoring": {
    id: "dentalMonitoring",
    type: "filter",
    name: "Dental monitoring",
    styleProps: {
      minWidth: "195px"
    },
    options: [{
      id: "all",
      text: "View all"
    }, {
      id: "notTracking",
      text: "Not tracking"
    }, {
      id: "notStarted",
      text: "Not started"
    }, {
      id: "tracking",
      text: "Tracking"
    }],
  },
  "sortBy": {
    id: "sortBy",
    name: "Sort by",
    type: "sort",
    styleProps: {
      minWidth: "175px"
    },
    options: [{
      id: "lastModifiedDate",
      text: "Last modified date"
    }, {
      id: "lastName",
      text: "Last name (A-Z)"
    }, {
      id: "firstName",
      text: "First name (A-Z)"
    }, {
      id: "DateOfBirth",
      text: "Date of birth"
    }, {
      id: "lastMonitoringScan",
      text: "Last monitoring scan"
    }]
  }
}

export const columnKeys = {
  CASE_DETAILS: "caseDetails",
  PATIENT_STATUS: "patientStatus",
  ORDER_STATUS: "orderSatus",
  DENTAL_MONITORING: "dentalMonitoring",
  LAST_MONITORING_SCAN: "lastMonitoringScan",
  LAST_NAME: "lastName",
  FIRST_NAME: "firstName",
};

export const tableData = {
  columnDef: [
    {
      name: "Last name",
      id: "lastName",
      translate: "lastName",
      cell: {
        style: {
          fontWeight: "bold !important",
          maxWidth: 150,
          textOverflow: "ellipsis",
          overflow: "hidden",
        },
      },
    },
    {
      name: "First name",
      id: "firstName",
      translate: "firstName",
      cell: {
        style: {
          fontWeight: "bold !important",
          maxWidth: 100,
        },
      },
    },
    {
      name: "Date of birth",
      id: "dateOfBirth",
      translate: "dateOfBirth",
    },
    {
      name: "Patient Status",
      id: columnKeys.PATIENT_STATUS,
      translate: "patientStatus",
      cell: {
        style: {
          background: "#F8F8F8 0% 0% no-repeat padding-box",
        },
      },
    },
    {
      name: "Case Details",
      id: columnKeys.CASE_DETAILS,
      translate: "caseDetails",
      cell: {
        style: {
          background: "#F8F8F8 0% 0% no-repeat padding-box",
          width: 225,
        },
      },
    },
    {
      name: "Order status",
      id: columnKeys.ORDER_STATUS,
      translate: "orderStatus",
      cell: {
        style: {
          background: "#F8F8F8 0% 0% no-repeat padding-box",
        },
      },
    },
    {
      name: "Dental monitoring®",
      translate: "dentalMonitoring",
      id: columnKeys.DENTAL_MONITORING,
    },
    {
      name: "Last monitoring Scan",
      id: "lastMonitoringScan",
      translate: "lastMonitoringScan",
    },
  ],
};
