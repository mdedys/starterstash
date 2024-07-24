import { styled } from "@linaria/react";

import shadows from "../styles/shadows";
import spacing from "../styles/spacing";
import { cssvar, vars } from "../theme/vars";
import { ReactNode } from "react";

const Container = styled.div`
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
  padding-left: ${spacing["3xl"].px};
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing["3xl"].px};

  background-color: ${cssvar(vars.colors.background.primary.main)};
  box-shadow: ${shadows.xl};

  height: 100%;
  width: 100%;
`;

const Header = styled.div`
  height: 52px;
  padding: 0 ${spacing.xl.px};
  padding-top: ${spacing["3xl"].px};
`;

const Body = styled.div`
  flex: 1;
`;

const Footer = styled.div`
  border-top: 1px solid ${cssvar(vars.colors.border.secondary)};

  padding: ${spacing.xl.px};
`;

interface SlideOutMenuProps {
  children: {
    header: ReactNode | undefined;
    body: ReactNode | undefined;
    footer: ReactNode | undefined;
  };
}

export default function SlideOutMenu(props: SlideOutMenuProps) {
  return (
    <Container>
      <Content>
        <Header>{props.children.header}</Header>
        <Body>{props.children.body}</Body>
        <Footer>{props.children.footer}</Footer>
      </Content>
    </Container>
  );
}
