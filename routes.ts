export default [
  { path: '/', component: '@/pages/Login/login' },
  { path: '/patients', component: '@/pages/patients/patients' },
  {
    name: 'forgotUsername',
    path: '/login/forgotUsername',
    component: '@/pages/Login/ForgotUsername/forgotUsername',
  },
  {
    name: 'forgotPassword',
    path: '/login/forgotPassword',
    component: '@/pages/Login/ForgotPassword/forgotPassword',
  },
  {
    name: 'recoverPassword',
    path: '/login/recoverPassword',
    component: '@/pages/Login/RecoverPassword/recoverPassword',
  },
];
