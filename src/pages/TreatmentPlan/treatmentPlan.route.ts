export const treatmentPlanUrlObj = {
  prepare: "/treatmentplan/prepare",
  treat: "/treatmentplan/treat",
  order: "/treatmentplan/order",
};

export default {
  path: "/treatmentplan",
  component: "@/pages/TreatmentPlan/treatmentPlan.layout",
  routes: [
    {
      path: treatmentPlanUrlObj.prepare,
      component: "@/pages/TreatmentPlan/Prepare/prepare",
    },
    {
      path: treatmentPlanUrlObj.treat,
      component: "@/pages/TreatmentPlan/Treat/treat",
    },
    {
      path: treatmentPlanUrlObj.order,
      component: "@/pages/TreatmentPlan/Order/order",
    },
    {
      path: "**", //No match redirect to default route
      redirect: treatmentPlanUrlObj.prepare,
    },
  ],
};
