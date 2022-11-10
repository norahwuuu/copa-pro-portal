import { treatmentPlanUrlObj } from "./treatmentPlan.route";

export const navItems = [
  {
    id: "treatmentplanprepare",
    path: treatmentPlanUrlObj.prepare,
    translate: "treatmentPlanPrepareMenu",
  },
  {
    id: "treatmentplantreat",
    path: treatmentPlanUrlObj.treat,
    translate: "treatmentPlanTreatMenu",
  },
  {
    id: "treatmentplanorder",
    path: treatmentPlanUrlObj.order,
    translate: "treatmentPlanOrderMenu",
  },
];
