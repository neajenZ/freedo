import { RouteProps } from "react-router-dom";
import { MainPage } from "src/pages/main";
import { ProfilePage } from "src/pages/profile";
import { AuthPage } from "src/pages/auth";
import { AppRoutes, RoutePath } from "src/shared/const";

export const routerConfig: Record<AppRoutes, RouteProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.PROFILE]: {
    path: RoutePath.profile,
    element: <ProfilePage />,
  },
  [AppRoutes.AUTH]: {
    path: RoutePath.auth,
    element: <AuthPage />,
  },
};
