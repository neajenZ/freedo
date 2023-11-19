export enum AppRoutes {
  MAIN = "main",
  PROFILE = "profile",
  AUTH = "auth",
}

export const RoutePath: Record<AppRoutes, string> = {
  main: "/",
  profile: "/profile",
  auth: "/auth",
};
