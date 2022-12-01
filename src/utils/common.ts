import { OktaAuth } from "@okta/okta-auth-js";
export const authClient = new OktaAuth({
  issuer: "https://ulab-ciam-dev.okta.com/oauth2/aus6exjzwihWqpfxl5d7",
  clientId: "0oa6s60ztcLzLKNhT5d7",
  redirectUri: window.location.origin + "/login/callback",
  postLogoutRedirectUri: window.location.origin,
  scopes: ["openid", "profile", "email"],
  maxAge: 10,
  autoRemove: true,
  pkce: true,
  cookies: {
    secure: false,
  },
  tokenManager: {
    autoRenew: false,
    autoRemove: true,
  },
  transformAuthState: async (oktaAuth, authState) => {
    if (!authState.isAuthenticated) {
      return authState;
    }
    // extra requirement: user must have valid Okta SSO session
    const user = await oktaAuth.token.getUserInfo();
    localStorage.user = JSON.stringify(user);
    localStorage.token = JSON.stringify(authState.accessToken);
    localStorage.idToken = JSON.stringify(authState.idToken);

    authState.isAuthenticated = !!user; // convert to boolean
    authState.users = user; // also store user object on authState
    return authState;
  },
});
