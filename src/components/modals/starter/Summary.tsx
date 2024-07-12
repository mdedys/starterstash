import { styled } from "@linaria/react";
import { DateTime } from "luxon";

import { cssvar, vars } from "../../../ui/theme/vars";
import Typography from "../../../ui/typography/Typography";

const List = styled.ul`
  padding-left: 20px;
`;

interface SummaryProps {
  reminder: DateTime;
  repeatInterval: boolean;
}

export default function Summary(props: SummaryProps) {
  return (
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
      {props.repeatInterval && (
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
  );
}
