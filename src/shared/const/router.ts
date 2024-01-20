export enum AppRoutes {
  MAIN = "main",
  PROFILE = "profile",
  AUTH = "auth",
  AD = "ad",
  RECOVERPASS = 'recoverPass',
}

export const RoutePath: Record<AppRoutes, string> = {
  main: "/",
  profile: "/profile",
  auth: "/auth",
  ad: '/ad',
  recoverPass: '/recover-pass',
};
