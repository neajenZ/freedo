import {
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { MainPage } from "src/pages/main";
import { ProfilePage } from "src/pages/profile";
import { routerConfig } from "../config/router.config";

const AppRouter = () => {
  const routes = () =>
    Object.values(routerConfig).map((route) => (
      <Route path={route.path} element={route.element} />
    ));

  const router = createBrowserRouter(createRoutesFromElements(routes()));
  return <RouterProvider router={router} />;
};

export default AppRouter;

// Можно упрощенно сделать
export const AppRouterSimplified = () => {
  return (
    <Routes>
      <Route index path="/" element={<MainPage />} />
      <Route path="/profile" element={<ProfilePage />} />
    </Routes>
  );
};
