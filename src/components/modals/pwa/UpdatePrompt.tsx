import { Button } from "@dedees/ui-kit/button";
import { Modal } from "@dedees/ui-kit/modal";
import { spacing } from "@dedees/ui-kit/styles";
import { cssvar, vars } from "@dedees/ui-kit/theme";
import { Typography } from "@dedees/ui-kit/typography";
import { styled } from "styled-components";
/* eslint-disable-next-line */
import { useRegisterSW } from "virtual:pwa-register/react";

const Header = styled.div`
  border-bottom: 1px solid ${cssvar(vars.colors.border.secondary)};

  padding: ${spacing["2xl"].rem} ${spacing.xl.px};
`;

const Content = styled.div`
  padding: ${spacing.xl.rem} ${spacing.xl.px};
  width: 100%;
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg.px};
`;

const Footer = styled.div`
  border-top: 1px solid ${cssvar(vars.colors.border.secondary)};

  padding: ${spacing["2xl"].rem} ${spacing.xl.px};
`;

export default function UpdatePrompt() {
  const {
    needRefresh: [needRefresh, setNeedRefresh],
    updateServiceWorker,
  } = useRegisterSW();

  if (!needRefresh) return null;

  return (
    <Modal>
      <Header>
        <Typography variant="text" size="lg" weight="600">
          New Version Found
        </Typography>
      </Header>
      <Content>
        <Typography variant="text" size="md">
          There is a new version of the application available. Would you like to
          update now? This will cause unsaved changes to be lost.
        </Typography>
      </Content>
      <Footer>
        <Group>
          <Button variant="primary" onClick={() => updateServiceWorker(true)}>
            Update Now
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setNeedRefresh(false)}
          >
            Not Right Now
          </Button>
        </Group>
      </Footer>
    </Modal>
  );
}
