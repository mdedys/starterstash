import { styled } from "@linaria/react";
import { Outlet } from "react-router-dom";

import { useAuth } from "../auth/AuthProvider";
import LoadingIndicator from "../ui/loading/LoadingIndicator";

const Center = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 100%;
`;

export default function AppController() {
  const auth = useAuth();
  if (auth.isReady) return <Outlet />;
  return (
    <Center>
      <LoadingIndicator />
    </Center>
  );
}
