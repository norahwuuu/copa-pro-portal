export const accountUrlObj = {
  monthlyStatement: "/account/monthlystatement",
  manageUsers: "/account/manageusers",
  shippingSettings: "/account/shippingsettings",
};

export default {
  path: "/account",
  component: "@/pages/Account/account.layout",
  routes: [
    {
      path: accountUrlObj.monthlyStatement,
      component: "@/pages/Account/MonthlyStatement/monthlyStatement",
    },
    {
      path: accountUrlObj.manageUsers,
      component: "@/pages/Account/ManageUsers/manageUsers",
    },
    {
      path: accountUrlObj.shippingSettings,
      component: "@/pages/Account/ShippingSettings/shippingSettings",
    },
    {
      path: "**", //No match redirect to default route
      redirect: accountUrlObj.monthlyStatement,
    },
  ],
};
