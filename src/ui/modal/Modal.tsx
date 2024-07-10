import { styled } from "@linaria/react";
import { PropsWithChildren } from "react";

import border from "../styles/border";
import shadows from "../styles/shadows";
import { cssvar, vars } from "../theme/vars";

const Container = styled.div`
  display: flex;
  align-items: center;
  z-index: 100;

  backdrop-filter: blur(8px);
  background-color: color-mix(
    in srgb,
    ${cssvar(vars.colors.background.overlay)} 70%,
    transparent
  );

  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  padding: 16px;
`;

const Content = styled.div`
  border-radius: ${border.xl};
  background-color: ${cssvar(vars.colors.background.primary.main)};
  box-shadow: ${shadows.xl};

  width: 100%;
`;

export default function Modal(props: PropsWithChildren) {
  return (
    <Container>
      <Content>{props.children}</Content>
    </Container>
  );
}
