import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppController from "./AppController";
import AuthenticateView from "./authenticate/AuthenticateView";
import HomeView from "./home/HomeView";
import paths from "./paths";

const router = createBrowserRouter([
  {
    element: <AppController />,
    children: [
      {
        path: paths.Authenticate,
        element: <AuthenticateView />,
      },
      {
        path: paths.Home,
        element: <HomeView />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
