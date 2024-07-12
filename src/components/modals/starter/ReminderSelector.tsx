import { styled } from "@linaria/react";
import { DateTime } from "luxon";

import DatePicker from "../../../ui/datetime/DatePicker";
import TimePicker from "../../../ui/datetime/TimePicker";
import spacing from "../../../ui/styles/spacing";
import Typography from "../../../ui/typography/Typography";

const Row = styled.div`
  display: flex;
  align-items: center;
  gap: ${spacing.md.px};

  margin-bottom: ${spacing.lg.rem};
`;

interface ReminderSelectorProps {
  reminder: DateTime;
  onChange(d: DateTime): void;
}

export default function ReminderSelector(props: ReminderSelectorProps) {
  return (
    <Row>
      <TimePicker
        value={props.reminder}
        onChange={t => {
          const next = props.reminder.set({ hour: t.hour, minute: t.minute });
          props.onChange(next);
        }}
      />
      <Typography variant="text" size="sm" weight="600">
        ON
      </Typography>
      <DatePicker
        value={props.reminder}
        onChange={d => {
          const next = props.reminder.set({
            year: d.year,
            month: d.month,
            day: d.day,
          });
          props.onChange(next);
        }}
      />
    </Row>
  );
}
