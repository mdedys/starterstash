import { cssvar, vars } from "@dedees/ui-kit/theme";
import { Typography } from "@dedees/ui-kit/typography";
import { DateTime } from "luxon";
import { styled } from "styled-components";

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
