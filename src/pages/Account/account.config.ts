import { accountUrlObj } from "./account.route";

export const navItems = [
  {
    id: "monthlystatement",
    path: accountUrlObj.monthlyStatement,
    translate: "monthlyStatementMenu",
  },
  {
    id: "manageusers",
    path: accountUrlObj.manageUsers,
    translate: "manageUsersMenu",
  },
  {
    id: "shippingsettings",
    path: accountUrlObj.shippingSettings,
    translate: "shippingSettingsMenu",
  },
];
