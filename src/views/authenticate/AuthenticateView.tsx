import { styled } from "@linaria/react";
import { Navigate } from "react-router-dom";

import LoafAsset from "../../assets/loaf.png";
import { useAuth } from "../../auth/AuthProvider";
import Logo from "../../components/Logo";
import Button from "../../ui/button/Button";
import Grid from "../../ui/layout/Grid";
import Typography from "../../ui/typography/Typography";
import paths from "../paths";

const Centered = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;
  grid-row: 1 / -1;

  margin: auto;
`;

const Image = styled.img`
  margin-top: 2.625rem;
  margin-bottom: 2.625rem;
  height: 278px;
  width: 290px;
`;

export default function AuthenticateView() {
  const auth = useAuth();

  // Anonymous account
  if (auth.user && auth.user.isAnonymous) {
    return <Navigate replace to={paths.Anonymous} />;
  }

  // Authenticated user
  if (auth.user) {
    return <Navigate replace to={paths.Home} />;
  }

  return (
    <Grid style={{ height: "100%" }}>
      <Centered>
        <Logo />
        <Image alt="loaf of bread" src={LoafAsset} />
        <Typography
          variant="text"
          size="md"
          weight="700"
          style={{ textTransform: "uppercase", marginBottom: "1rem" }}
        >
          Track your sourdough starter
        </Typography>
        <Typography
          variant="text"
          size="sm"
          style={{ textAlign: "center", marginBottom: "2.625rem" }}
        >
          Add and track your feeding sourdough feeding schedule. Never miss a
          feeding and keep your starter fresh and ready to go for all your
          baking needs.
        </Typography>
        <Button
          leadingIcon="google-logo"
          size="lg"
          variant="secondary"
          style={{ marginBottom: "1rem" }}
          onClick={() => auth.signInWithGoogle()}
        >
          Sign in with Google
        </Button>
      </Centered>
    </Grid>
  );
}
