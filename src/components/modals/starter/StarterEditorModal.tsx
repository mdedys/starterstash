import { styled } from "@linaria/react";
import { v4 as uuid } from "uuid";

import ReminderSelector from "./ReminderSelector";
import Summary from "./Summary";
import useStarterForm from "./useStarterForm";
import { Starter } from "../../../state/models/Users";
import Button from "../../../ui/button/Button";
import Checkbox from "../../../ui/checkbox/Checkbox";
import Divider from "../../../ui/divider/Divider";
import Modal from "../../../ui/modal/Modal";
import spacing from "../../../ui/styles/spacing";
import Textfield from "../../../ui/textfield/Textfield";
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

const Label = styled(Typography)`
  display: block;
  color: ${cssvar(vars.colors.text.secondary.main)};

  margin-bottom: ${spacing.sm.px};
`;

const Footer = styled.div`
  border-top: 1px solid ${cssvar(vars.colors.border.secondary)};

  padding: ${spacing["2xl"].rem} ${spacing.xl.px};
`;

interface AddStarterModalProps {
  mode: "new" | "edit";
  starter?: Starter;
  onSave(starter: Starter): void;
  onCancel(): void;
  onDelete?(): void;
}

export default function StarterEditorModal(props: AddStarterModalProps) {
  /** STATE */

  const form = useStarterForm(props.starter);

  /** HELPERS */

  function onClickSave() {
    if (!form.validate()) return;
    props.onSave({
      id: props.starter?.id ?? uuid(),
      name: form.name,
      reminder: form.reminder,
      repeatInterval: form.repeatInterval,
    });
  }

  /** RENDER */

  return (
    <Modal>
      <Header>
        <Typography variant="text" size="lg" weight="600">
          {props.mode === "new" ? "Create" : "Edit"} Sourdough Starter
        </Typography>
      </Header>
      <Content>
        <Textfield
          placeholder="Funny Name"
          error={!form.validation.name ? "This is a required field" : undefined}
          label="Name"
          value={form.name}
          onChange={evt => form.onChangeName(evt.target.value)}
        />
        <Divider />

        <Label variant="text" size="sm" weight="500">
          Next Feeding Reminder
        </Label>

        <ReminderSelector
          reminder={form.reminder}
          onChange={form.onChangeReminder}
        />

        <Checkbox
          checked={form.repeatInterval}
          onChange={() => form.onChangeRepeatInterval(!form.repeatInterval)}
          label="Automatically repeat feeding interval"
        />

        <Divider />
        <Label variant="text" size="sm" weight="500">
          Summary
        </Label>

        <Summary
          reminder={form.reminder}
          repeatInterval={form.repeatInterval}
        />
      </Content>
      <Footer>
        <Group>
          <Button variant="primary" size="lg" onClick={onClickSave}>
            {props.mode === "new" ? "Create" : "Save"}
          </Button>
          {props.mode === "edit" && (
            <Button variant="secondary" destructive onClick={props.onDelete}>
              Delete
            </Button>
          )}
          <Button
            variant="secondary"
            size="lg"
            onClick={() => props.onCancel()}
          >
            Cancel
          </Button>
        </Group>
      </Footer>
    </Modal>
  );
}
