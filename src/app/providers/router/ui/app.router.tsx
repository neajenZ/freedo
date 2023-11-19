import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "src/app/layout/layout";
import { routerConfig } from "../config/router.config";

const AppRouter = () => {
  const routes = () => (
    <Route element={<Layout />}>
      {Object.values(routerConfig).map((route) => (
        <Route path={route.path} element={route.element} />
      ))}
    </Route>
  );

  const router = createBrowserRouter(createRoutesFromElements(routes()));
  return <RouterProvider router={router} />;
};

export default AppRouter;
