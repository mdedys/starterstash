import { createBrowserRouter, RouterProvider } from "react-router-dom";

import AuthenticateView from "./authenticate/AuthenticateView";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthenticateView />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
