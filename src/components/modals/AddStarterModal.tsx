import { styled } from "@linaria/react";
import { DateTime } from "luxon";
import { useEffect, useState } from "react";

import { Starter } from "../../state/models/Users";
import Button from "../../ui/button/Button";
import Checkbox from "../../ui/checkbox/Checkbox";
import DatePicker from "../../ui/datetime/DatePicker";
import TimePicker from "../../ui/datetime/TimePicker";
import Divider from "../../ui/divider/Divider";
import Modal from "../../ui/modal/Modal";
import spacing from "../../ui/styles/spacing";
import Textfield from "../../ui/textfield/Textfield";
import { cssvar, vars } from "../../ui/theme/vars";
import Typography from "../../ui/typography/Typography";

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

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md.px};

  margin-bottom: ${spacing.lg.rem};
`;

const List = styled.ul`
  padding-left: 20px;
`;

const Footer = styled.div`
  border-top: 1px solid ${cssvar(vars.colors.border.secondary)};

  padding: ${spacing["2xl"].rem} ${spacing.xl.px};
`;

interface AddStarterModalProps {
  isOpen: boolean;
  onSave(starter: Starter): void;
  onCancel(): void;
}

export default function AddStarterModal(props: AddStarterModalProps) {
  /** STATE */

  const [name, setName] = useState("");

  const [time, setTime] = useState(
    DateTime.now().set({ hour: 8, minute: 0, second: 0, millisecond: 0 }),
  );
  const [date, setDate] = useState(
    DateTime.now().set({
      day: DateTime.now().day + 7,
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    }),
  );

  const [repeat, setRepeat] = useState(true);

  const [validation, setValidation] = useState({
    name: true,
    time: true,
    date: true,
  });

  /*** EFFECTS */

  useEffect(() => {
    if (props.isOpen) {
      setName("");
      setTime(
        DateTime.now().set({ hour: 8, minute: 0, second: 0, millisecond: 0 }),
      );
      setDate(
        DateTime.now().set({
          day: DateTime.now().day + 7,
          hour: 0,
          minute: 0,
          second: 0,
          millisecond: 0,
        }),
      );
      setRepeat(true);
    }
  }, [props.isOpen]);

  /** HELPERS */

  function isValid() {
    if (name.trim().length === 0) {
      setValidation({ ...validation, name: false });
      return false;
    }
    return true;
  }

  function onClickSave() {
    if (!isValid()) return;

    let reminder = DateTime.fromMillis(date.toMillis());
    reminder = reminder.set({
      hour: time.hour,
      minute: time.minute,
      second: 0,
      millisecond: 0,
    });
    props.onSave({
      name,
      reminder: reminder,
      repeatInterval: repeat,
    });
  }

  /** RENDER */

  if (!props.isOpen) return null;

  return (
    <Modal>
      <Header>
        <Typography variant="text" size="lg" weight="600">
          Add Sourdough Starter
        </Typography>
      </Header>
      <Content>
        <Textfield
          placeholder="Funny Name"
          error={!validation.name ? "This is a required field" : undefined}
          label="Name"
          value={name}
          onChange={evt => setName(evt.target.value)}
        />
        <Divider />
        <Label variant="text" size="sm" weight="500">
          Next Feeding Reminder
        </Label>
        <Row>
          <TimePicker value={time} onChange={time => setTime(time)} />
          <Typography variant="text" size="sm" weight="600">
            ON
          </Typography>
          <DatePicker value={date} onChange={date => setDate(date)} />
        </Row>

        <Checkbox
          checked={repeat}
          onChange={next => setRepeat(next)}
          label="Automatically repeat feeding interval"
        />

        <Divider />
        <Label variant="text" size="sm" weight="500">
          Summary
        </Label>

        <List>
          <li>
            <Typography
              variant="text"
              size="sm"
              style={{ color: cssvar(vars.colors.text.tertiary.main) }}
            >
              Feeding reminder will be sent in 7 days.
            </Typography>
          </li>

          {repeat && (
            <li>
              <Typography
                variant="text"
                size="sm"
                style={{ color: cssvar(vars.colors.text.tertiary.main) }}
              >
                Feeding interval will be repeated for future reminders
              </Typography>
            </li>
          )}
        </List>
      </Content>
      <Footer>
        <Group>
          <Button variant="primary" size="lg" onClick={onClickSave}>
            Save
          </Button>
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
