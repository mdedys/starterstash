import { styled } from "@linaria/react";
import { useState } from "react";
import { Outlet } from "react-router-dom";

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

  const [navigate, setNavigate] = useState(false);

  if (navigate && auth.isReady) {
    return <Outlet />;
  }

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
