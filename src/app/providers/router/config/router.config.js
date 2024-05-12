import { MainPage } from "src/pages/main";
import { ProfilePage } from "src/pages/profile";
import { AuthPage } from "src/pages/auth";
import { AppRoutes, RoutePath } from "src/shared/const";
import { AdPage } from "src/pages/ad";
import { RecoverPassPage } from "src/pages/recover-pass";
export const routerConfig = {
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
    [AppRoutes.AD]: {
        path: RoutePath.ad,
        element: <AdPage />,
    },
    [AppRoutes.RECOVERPASS]: {
        path: RoutePath.recoverPass,
        element: <RecoverPassPage />,
    },
    // [AppRoutes.NOTFOUNDPAGE]: {
    //   path: RoutePath.notFoundPage,
    //   element: <NotFoundPage />,
    // },
};
