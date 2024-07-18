import { styled } from "@linaria/react";
import { useState } from "react";
import { Navigate, Outlet, useLocation, useMatch } from "react-router-dom";

import paths from "./paths";
import { useAuth } from "../auth/AuthProvider";
import LoadingIndicator from "../components/loading/LoadingIndicator";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export default function AppController() {
  const auth = useAuth();
  const match = useMatch(paths.Authenticate);
  const location = useLocation();

  const [navigate, setNavigate] = useState(false);

  if (!auth.isReady || !navigate) {
    return (
      <Center>
        <LoadingIndicator
          onLoopComplete={() => {
            if (!navigate) setNavigate(true);
          }}
        />
      </Center>
    );
  }

  if (!auth.user && !match) {
    return (
      <Navigate to={paths.Authenticate} replace state={{ from: location }} />
    );
  }

  return <Outlet />;
}
