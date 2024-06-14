import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AppController from "./AppController";
import AuthenticateView from "./authenticate/AuthenticateView";

const router = createBrowserRouter([
  {
    element: <AppController />,
    children: [
      {
        path: "/auth",
        element: <AuthenticateView />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
