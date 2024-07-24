import { styled } from "@linaria/react";
/* eslint-disable-next-line */
import { useRegisterSW } from "virtual:pwa-register/react";

import Button from "../../../ui/button/Button";
import Modal from "../../../ui/modal/Modal";
import spacing from "../../../ui/styles/spacing";
import { cssvar, vars } from "../../../ui/theme/vars";
import Typography from "../../../ui/typography/Typography";

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
