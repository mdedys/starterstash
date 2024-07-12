import { styled } from "@linaria/react";

import Modal from "../../../ui/modal/Modal";
import { cssvar, vars } from "../../../ui/theme/vars";
import spacing from "../../../ui/styles/spacing";
import Typography from "../../../ui/typography/Typography";
import Button from "../../../ui/button/Button";

const Header = styled.div`
  border-bottom: 1px solid ${cssvar(vars.colors.border.secondary)};

  padding: ${spacing["2xl"].rem} ${spacing.xl.px};
`;

const Content = styled.div`
  padding: ${spacing.xl.rem} ${spacing.xl.px};
  width: 100%;
`;

const Footer = styled.div`
  border-top: 1px solid ${cssvar(vars.colors.border.secondary)};

  padding: ${spacing["2xl"].rem} ${spacing.xl.px};
`;

const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing.lg.px};
`;

interface DeleteConfirmationModalProps {
  onDelete(): void;
  onCancel(): void;
}

export default function DeleteConfirmationModal(
  props: DeleteConfirmationModalProps,
) {
  return (
    <Modal>
      <Header>
        <Typography variant="text" size="lg" weight="600">
          Delete Starter Confirmation
        </Typography>
      </Header>
      <Content>
        <Typography variant="text" size="md">
          Are you sure you want to delete this starter? This action cannot be
          undone and you will permanently lose all data associated with this
          resource.
        </Typography>
      </Content>
      <Footer>
        <Group>
          <Button variant="primary" destructive onClick={props.onDelete}>
            Delete
          </Button>
          <Button variant="secondary" size="lg" onClick={props.onCancel}>
            Cancel
          </Button>
        </Group>
      </Footer>
    </Modal>
  );
}
